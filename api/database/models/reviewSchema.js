import mongoose from "mongoose";

const { Schema } = mongoose;

const ReviewSchema = new Schema({
    rating: Number,
    comment: String,
});

const Review = mongoose.model("Review", ReviewSchema);
export  {Review, ReviewSchema};
