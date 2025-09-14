import mongoose from "mongoose";
import { UserSchema } from "./userSchema.js";
const { Schema } = mongoose;


const BookingSchema = new Schema({
    client: { type: Schema.Types.ObjectId, ref: 'User' },
    category: String,
    description: String,
    status: String,
    assigned_professional: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Booking = mongoose.model("Booking", BookingSchema);
export { Booking, BookingSchema };