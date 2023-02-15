const { Schema, model } = require("mongoose");

const Tie = new Schema(
  {
    userId: { type: String, require: true },
    name: { type: String, require: true },
    price: { type: Number, required: true },
    image: { type: String },
  },
  { versionKey: false }
);

module.exports = model("Tie", Tie);
