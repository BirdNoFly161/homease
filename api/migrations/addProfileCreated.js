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

    const result = await User.updateMany(
      { profileCreated: { $exists: false } },
      { $set: { profileCreated: false } } 
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