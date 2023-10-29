import mongoose from "mongoose";
export const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDb");
  } catch (err) {
    console.log("Your database is not connected properly", err);
  }
};
