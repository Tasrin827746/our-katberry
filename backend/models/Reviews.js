const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, default: "Anonymous" },
    text: { type: String, required: true, trim: true },
    files: { type: [String], default: [] },
    rating: { type: Number, required: true, min: 1, max: 5 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
