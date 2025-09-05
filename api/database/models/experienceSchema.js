import mongoose from "mongoose";

const { Schema } = mongoose;

const ExperienceSchema = new Schema({
    role: String,
    company: String,
    startDate: Date,
    endDate: Date,
});

const Experience = mongoose.model("Experience", ExperienceSchema);
export {Experience, ExperienceSchema};
