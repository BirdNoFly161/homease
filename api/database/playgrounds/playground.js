
import mongoose from "mongoose";
//import Experience from "../models/experienceSchema.js";
//import Review from "../models/reviewSchema.js"
import User from "../models/userSchema.js";

import { uri } from "../config.js";



async function create_user(user) {
    const usr = new User({
        username: "oussama16",
        email: "oussama@gmail.com",
        password: "saltedpass123",
        role: "Consultant",
        experiences: [{role: "fullstack inter", company: "selego", startDate: new Date(2023, 9, 2)}, {role: "consultant", company: "KPMG", startDate: new Date(2024, 4, 29)}],
        reviews: [{rating:5, comment: "great guy"}, {rating: 3, comment: "meh"}]
    })
    await usr.save()
}

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("connected to database");
        create_user()
        return
    })
    .catch((error) => console.log(`${error} did not connect to database from playground`));
