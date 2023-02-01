const { Schema, model } = require("mongoose");

const User = new Schema(
  {
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    date: { type: Date, default: Date.now },
    role: { type: String, ref: "Role" }
  },
  { versionKey: false }
);

module.exports = model("User", User);
