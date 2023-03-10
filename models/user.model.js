import mongoose from "mongoose";

const UserSchema = mongoose.model(
  "users",
  new mongoose.Schema(
    {
      username: { type: String, require: true, unique: true },
      email: { type: String, require: true, unique: true },
      password: { type: String, require: true },
      isAdmin: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
  )
);

export default UserSchema;
