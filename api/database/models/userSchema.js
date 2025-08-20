import mongoose from "mongoose";
import bcrypt from "bcrypt";

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
});

const User = mongoose.model("User", UserSchema);
export default User;
