import { Schema, model } from "mongoose";
import pasportLocalMongose from "passport-local-mongoose";
import findOrCreate from "mongoose-findorcreate";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    phone: { type: Number, required: true },
    role: { type: String, default: "User" },
    password: { type: String },
    hash: { type: String },
    salt: { type: String },
    resetPasswordToken: String,
    resetPasswordExpress: String,
  },
  { timestamps: true }
);

userSchema.plugin(pasportLocalMongose);
userSchema.plugin(findOrCreate);

export default model("user", userSchema);
