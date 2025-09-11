import mongoose from "mongoose";

const { Schema } = mongoose;

const EducationSchema = new Schema({
  school: { type: String, required: true },
  degree: { type: String },          // optional
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

const Education = mongoose.model("Education", EducationSchema);
export {Education, EducationSchema};