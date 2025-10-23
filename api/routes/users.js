import express from "express";
import jwt from "jsonwebtoken";

import { User } from "../database/models/userSchema.js";
import { secret, BLOB_READ_WRITE_TOKEN } from "../configs/environment.js";
import passport from "passport";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { put } from "@vercel/blob";
import { MULTER_UPLOAD } from "../configs/environment.js";
import { validateProfile } from "../middleware/validateProfile.js";
import { uploadAvatar } from "../middleware/multer.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const upload = multer({ dest: MULTER_UPLOAD });

var router = express.Router();

router.get("/", async function get_users(req, res) {
  try {
    let users = await User.find({});
    res.status(200).json({ users });
  } catch (err) {
    console.log("error querying database");
    res.status(500);
  }
});

router.get("/professionals", async function get_professionals(req, res) {
  try {
    let users = await User.find({ role: "professional" });
    res.status(200).json({ data: users, ok: true, msg: 'found users' });
  } catch (err) {
    console.log("error querying database");
    res.status(500);
  }
});

router.get("/professionals/:id", async function get_professionals(req, res) {
  try {
    let userID = req.params.id
    console.log('user id : ', userID)
    let user = await User.findOne({ _id: userID, role: "professional" });
    res.status(200).json({ user, ok: true, msg: 'found user' });
  } catch (err) {
    console.log("error querying database");
    console.log(err)
    res.status(500);
  }
});


// this route takes form data 
// are we sure the front end is sending the correct type of bod yfor each request ? 
router.post(
  "/register",
  upload.single("profile"),
  async function register_user(req, res) {
    try {
      if (Object.keys(req.body).length != 0) {
        const new_user = new User(req.body);
        console.log("sign up body : ", req.body);
        console.log("parsed file: ", req.file);

        if (req.file) {
          const { url } = await put(
            "user/image",
            fs.readFileSync(path.join("temp/", req.file.filename)),
            { access: "public", token: BLOB_READ_WRITE_TOKEN },
          );

          new_user.image = url;
        }

        await new_user.save();
        res.status(200).json({ msg: "user created successfully" });
      }
      else {
        res.status(400).json({ msg: "bad request - empty body" })
      }
    } catch (error) {
      console.log("couldnt register user, error: ", error);
      res.status(500);
    }
  },
);


// this route takes json body not form data
router.post("/login", async function login_user(req, res) {
  try {
    let user = await User.findOne({ username: req.body.username });
    console.log(req.body)
    console.log("get user query returned: ", req.body);
    console.log("found user: ", user)
    if (!user) {
      return res.status(404).json({ msg: "no such user" });
    }
    if (user.password != req.body.password) {
      return res.status(403).json({ msg: "password is incorrect" });
    }
    console.log("user authenticated correctly");
    let token = jwt.sign({ _id: user._id }, secret);
    res.cookie("token", token, { sameSite: "none", secure: true });
    res.status(200).json({ token, user, msg: "user logged in successfully" });
  } catch (error) {
    console.log("couldnt login user, error: ", error);
    res.status(500);
  }
});

router.patch("/", async function update_user(req, res) {
  try {
    let users = req.body.users;

    for (let i = 0; i < users.length; i++) {
      let user = await User.findOneAndUpdate({ _id: users[i]._id }, users[i]);
      console.log("updated user: ", user);
    }

    res.status(200);
  } catch (err) {
    console.log("error querying database");
    res.status(500);
  }
});

router.get(
  "/test",
  passport.authenticate("user", { session: false }),
  function (req, res) {
    console.log("got to test");
    console.log(req.user);
    res.status(200).json({ msg: "test success" });
  },
);

router.get(
  "/token",
  passport.authenticate("user", { session: false }),
  async function (req, res) {
    console.log(req.cookies)
    if (req.cookies.token) {
      res.status(200).json({ token: req.cookies.token, user: req.user });
    } else {
      res.status(401).json({ msg: "Invalid token" });
    }
  },
);

router.post(
  "/logout",
  passport.authenticate("user", { session: false }),
  async function (req, res) {
    res.clearCookie("token");
    res.status(200).json({ msg: "logged out" });
  },
);

router.post(
  "/search",
  passport.authenticate("user", { session: false }),
  async function (req, res) {
    let query = {};

    if (req.body.keyword) {
      query.username = { $regex: req.body.keyword, $options: "i" };
    }
    console.log("query: ", query);

    let users = await User.find(query);
    console.log("found users", users);
    res.status(200).json({ users });
  },
);

router.post(
  "/create-profile",
  passport.authenticate("user", { session: false }),
  uploadAvatar,       // Multer middleware for secure file upload
  validateProfile,    // Yup middleware for body validation
  async (req, res) => {
    try {
      const userId = req.user._id;
      const { category, about, education = [], workExperience = [] } = req.body;

      if (!req.file) return res.status(400).json({ error: "No file uploaded" });

      const user = await User.findById(userId);
      if (!user) return res.status(404).json({ msg: "User not found" });


      const filePath = path.join("temp/", req.file.filename);

      const { url } = await put("user/image", fs.readFileSync(filePath), {
        access: "public",
        token: BLOB_READ_WRITE_TOKEN,
      });

      // Remove temp file after upload
      fs.unlinkSync(filePath);

      user.category = category;
      user.description = about;
      user.avatar = url;
      user.profileCreated = true;
      user.experiences = workExperience.map(exp => ({
        role: exp.jobTitle,
        company: exp.company,
        startDate: new Date(exp.startDate),
        endDate: new Date(exp.endDate),
        description: exp.description,
      }));
      user.education = education.map((edu) => ({
        school: edu.school,
        degree: edu.degree,
        startDate: new Date(edu.startDate),
        endDate: new Date(edu.endDate),
      }));

      await user.save();

      res.status(200).json({ msg: "Profile updated successfully", user });
    } catch (error) {
      console.error("Error updating profile:", error);
      res.status(500).json({ msg: "Server error" });
    }
  }
);

router.put(
  "/:id",
  passport.authenticate("user", { session: false }),
  async function (req, res) {
    try {
      let user = await User.findOne({ _id: req.params.id });
      console.log("got user update body: ", req.body);
      if (req.body.reviews) {
        user.reviews = req.body.reviews;
      }
      if (req.body.status) {
        user.status = req.body.status
      }
      await user.save();
      res.status(200).json({ user: user, msg: "user updated successfully" });
    } catch (error) {
      console.log("error: ", error);
      res.status(500).json({ msg: "error trying to update user" });
    }
  },
);

export default router;
