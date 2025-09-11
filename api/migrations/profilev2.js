import mongoose from "mongoose";
import User from "../database/models/userSchema.js";
import { uri } from "../database/config.js";

async function migrate() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to DB');

    // Update users that don't have the education field
    const result = await User.updateMany(
      { education: { $exists: false } }, // filter users missing the field
      {
        $set: {
          education: [], // new field as empty array
        }
      }
    );

    console.log(`Updated ${result.modifiedCount} users`);

    await mongoose.disconnect();
    console.log('Migration finished');
  } catch (err) {
    console.error('Migration failed', err);
    process.exit(1);
  }
}

migrate();