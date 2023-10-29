import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
    },
    bloodGroup: {
      type: String,
    },
    age: {
      type: Number,
    },
    allergy: {
      type: String,
    },
    adahar: {
      type: String, // Assuming it's a string like Aadhaar card number
    },
    description: {
      type: String, // You can adjust the data type as needed
    },
    gender: {
      type: String, // Assuming gender is a string (e.g., "male," "female," "other")
    },
    prescription: {
      type: String, // You can adjust the data type as needed
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
