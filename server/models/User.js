import { Schema, model } from "mongoose";
import pasportLocalMongose from "passport-local-mongoose";
import findOrCreate from "mongoose-findorcreate";

const userSchema = new Schema(
  {
    name: { type: String, require: true },
    username: { type: String, require: true },
    phone: { type: Number, require: true },
    role: { type: String, default: "User" },
    password: { type: String },
    hash: { type: String },
    salt: { type: String },
    resetPasswordToken: String,
    resetPasswordExpress: String,
  },
  { Timestamps: true }
);

userSchema.plugin(pasportLocalMongose);
userSchema.plugin(findOrCreate);

export default model("user", userSchema);
