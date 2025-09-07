import mongoose from "mongoose";
import bcrypt from "bcrypt";

import { ExperienceSchema } from "./experienceSchema.js";
import { ReviewSchema } from "./reviewSchema.js";

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
  avatar: String,
  role: String,
  description: String,
  reviews: [ReviewSchema],
  experiences: [ExperienceSchema],
  rate: Number,
  rateType: String
});

const User = mongoose.model("User", UserSchema);
export default User;
