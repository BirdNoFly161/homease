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
  telephone: String,
  password: String,
  avatar: {
    type: String,
    default: function () {
      this.gender === 'male' ? "https://lh3.googleusercontent.com/aida-public/AB6AXuA7WQZoAoDqI9nDLQDi0S_cmhJ4LcMKDrHx_2T5RY5KJzvzjHcYX5h4-_sjNkWRf9j8DXYTHj4ZaCWxIMdoKuerC-_nrY5NpbAaLpaNGorwac0Jy0zSLNG_hGreThMPfu5RzRhPOKPMa-cTX1R0-7aAysoUVkMKx9o8M_WYbRNswqbfw6wCAq5k4SF6hQjeKWnlZTxuFFBuTESmbWPpaO6FFZ-M3hmBWqhhNvO0ZH5jRGZY96JzoEz8r9i9BAyM0lb-oV_LkbCb15hH" :
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBnVILutpPZt2L_hPavAZubeb6OYolx26h6_UUQ-vURQu-E-GlanPtvk_5JkKyiD_agPLDiigXYKy3kiCHUuvL_5OWbjhwXgSGH0n28OQWd0ZNgKQkkj1IQQIsSXyPxvIgi_G3_puCo-609iXFz_oNh2Zb-8sLWRakvla6JQcLk1rp9MBbpFpbI4Tfd2bZ55m9N1ZJFFD9Svsnlh6qjMfXsFpPnKnum5JNxayKU9vPxvUBJfSguXWPvTtAkIibP5tjARdUUxBdacb9h"
    }
  },
  role: String,
  category: String,
  description: String,
  reviews: [ReviewSchema],
  experiences: [ExperienceSchema],
  rate: Number,
  rateType: String,
  gender: {
    type: String,
    default: 'male'
  },
  profileCreated: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
