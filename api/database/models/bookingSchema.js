import mongoose from "mongoose";
const { Schema } = mongoose;

const BookingSchema = new Schema({
  client: { type: Schema.Types.ObjectId, ref: "User", required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  assigned_professional: { type: Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now } // auto-captures submission date
});

const Booking = mongoose.model("Booking", BookingSchema);
export { Booking, BookingSchema };
