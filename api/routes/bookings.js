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
    let bookings = await Booking.find({}).populate("assigned_professional");
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

router.get("/client",
  passport.authenticate("user", { session: false }),
  async function get_bookings_by_client(req, res) {
  try {
    let clientID = req.user._id
    console.log('Client id : ', clientID)
    let bookings = await Booking.find({ client: clientID });
    res.status(200).json({ bookings, ok: true, msg: 'found booking for client: ', clientID });
  } catch (err) {
    console.log("error querying database");
    console.log(err)
    res.status(500);
  }
});

router.delete("/booking/:id",
  passport.authenticate("user", { session: false }),
  async function delete_booking(req, res) {
    try {
      const bookingID = req.params.id;
      const userID = req.user._id; // authenticated user's ID
      console.log('Booking id to delete:', bookingID);
      console.log('Requesting user id:', userID);

      // Find the booking first
      const booking = await Booking.findById(bookingID);
      if (!booking) {
        return res.status(404).json({ ok: false, msg: 'Booking not found' });
      }

      // Check if the authenticated user is the owner
      if (booking.client.toString() !== userID.toString()) {
        return res.status(403).json({ ok: false, msg: 'Not authorized to delete this booking' });
      }

      // Delete the booking
      await Booking.findByIdAndDelete(bookingID);

      res.status(200).json({ ok: true, msg: 'Booking deleted', bookingID });
    } catch (err) {
      console.log("Error deleting booking:");
      console.log(err);
      res.status(500).json({ ok: false, msg: 'Server error' });
    }
  }
);


// this route takes form data 
// are we sure the front end is sending the correct type of bod yfor each request ?
//You can use YUP on the backend to verify it is you know
router.post(
  "/register",
  async function register_booking(req, res) {
    try {
      if (Object.keys(req.body).length === 0) {
        return res.status(400).json({ msg: "bad request - empty body" });
      }

      const new_booking = new Booking({
        ...req.body,
        date: new Date()
      });

      await new_booking.save();

      res.status(200).json({
        msg: "booking created successfully",
        booking: new_booking
      });
    } catch (error) {
      console.error("couldn't register booking, error: ", error);
      res.status(500).json({ msg: "server error" });
    }
  }
);

router.put(
  "/update/:id",
  passport.authenticate("user", { session: false }),
  async function update_booking(req, res) {
    try {
      if (Object.keys(req.body).length === 0) {
        return res.status(400).json({ msg: "bad request - empty body" });
      }

      const updated_booking = await Booking.findOneAndUpdate(
        { _id: req.params.id, client: req.user._id }, // only allow owner to update
        { 
          ...req.body,
          date: new Date() // refresh date on update
        },
        { new: true, runValidators: true }
      );

      if (!updated_booking) {
        return res.status(404).json({ msg: "booking not found or unauthorized" });
      }

      res.status(200).json({
        msg: "booking updated successfully",
        booking: updated_booking
      });
    } catch (error) {
      console.error("couldn't update booking, error: ", error);
      res.status(500).json({ msg: "server error" });
    }
  }
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
