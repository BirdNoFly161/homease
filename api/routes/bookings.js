import express from "express";
import jwt from "jsonwebtoken";
import { Booking } from "../database/models/bookingSchema.js";
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

router.get("/", async function get_bookings(req, res) {
  try {
    let bookings = await Booking.find({}).populate("client").populate("assigned_professional");
    res.status(200).json({ bookings });
  } catch (err) {
    console.log("error querying database");
    res.status(500);
  }
});

router.get("/bookings", async function get_bookings(req, res) {
  try {
    let bookings = await Booking.find({});
    res.status(200).json({ data: bookings, ok: true, msg: 'found bookings' });
  } catch (err) {
    console.log("error querying database");
    res.status(500);
  }
});

router.get("/bookings/professional/:id", async function get_bookings_by_professional(req, res) {
  try {
    let professionalID = req.params.id
    console.log('professional id : ', professionalID)
    let bookings = await Booking.find({ assigned_professional: professionalID });
    res.status(200).json({ bookings, ok: true, msg: 'found booking for professional: ', professionalID });
  } catch (err) {
    console.log("error querying database");
    console.log(err)
    res.status(500);
  }
});

router.get("/bookings/client/:id", async function get_bookings_by_professional(req, res) {
  try {
    let professionalID = req.params.id
    console.log('professional id : ', professionalID)
    let bookings = await Booking.find({ _id: professionalID });
    res.status(200).json({ bookings, ok: true, msg: 'found booking for client: ', professionalID });
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
  async function register_booking(req, res) {
    try {
      if (Object.keys(req.body).length != 0) {
        const new_booking = new Booking(req.body);
        console.log("booking body : ", req.body);

        await new_booking.save();
        res.status(200).json({ msg: "booking created successfully" });
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


router.put(
  "/:id",
  async function (req, res) {
    try {
      let booking = await Booking.findOne({ _id: req.params.id });
      console.log("foumd booking", booking)
      console.log("got booking update body: ", req.body);
      if(req.body){
        booking.assigned_professional = req.body.assigned_professional
      }
      await booking.save();
      res.status(200).json({ booking: booking, msg: "booking updated successfully" });
    } catch (error) {
      console.log("error: ", error);
      res.status(500).json({ msg: "error trying to update user" });
    }
  },
);

router.delete(
  "/",
  async function (req, res) {
    try {
      let booking = await Booking.deleteMany({});

      res.status(200).json({ booking: booking, msg: "booking deleted successfully" });
    } catch (error) {
      console.log("error: ", error);
      res.status(500).json({ msg: "error trying to update user" });
    }
  },
);

export default router;
