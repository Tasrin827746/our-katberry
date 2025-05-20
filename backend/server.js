require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); 

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Define Schema & Model
const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  files: [{ type: String }], 
});

const Review = mongoose.model("Review", reviewSchema);

// Multer Setup (For File Uploads)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "uploads/";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// API Routes

// Submit a Review
app.post("/api/reviews", upload.array("files"), async (req, res) => {
  try {
    const { name, text } = req.body;
    const fileUrls = req.files.map(file => `/uploads/${file.filename}`);

    const review = new Review({ name, text, files: fileUrls });
    await review.save();

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: "Error submitting review" });
  }
});

// Delete a Review
app.delete("/api/reviews/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReview = await Review.findByIdAndDelete(id);

    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json({ message: "Review deleted" });
  } catch (error) {
    console.error("Error deleting review:", error);
    res.status(500).json({ error: "Error deleting review" });
  }
});

// Get All Reviews
app.get("/api/reviews", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ _id: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Error fetching reviews" });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
