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

    const resultProfile = await User.updateMany(
      { profileCreated: { $exists: false } },
      { $set: { profileCreated: false } }
    );
    console.log(`Updated profileCreated for ${resultProfile.modifiedCount} users`);

    const resultEducation = await User.updateMany(
      { education: { $exists: false } },
      { $set: { education: [] } }
    );
    console.log(`Updated education field for ${resultEducation.modifiedCount} users`);

    await mongoose.disconnect();
    console.log('Migration finished');
  } catch (err) {
    console.error('Migration failed', err);
    process.exit(1);
  }
}

migrate();
