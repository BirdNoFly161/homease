import mongoose from "mongoose";
const { Schema } = mongoose;

const BookingSchema = new Schema({

    client: { type: Schema.Types.ObjectId, ref: 'User' },
    category: String,
    description: String,
    status: { type: String, default: "Open" },
    assigned_professional: { type: Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, default: Date.now } // auto-captures submission date
});

const Booking = mongoose.model("Booking", BookingSchema);
export { Booking, BookingSchema };
