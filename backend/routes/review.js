const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Review = require("../models/Reviews");

const router = express.Router();

const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Set up Multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

// Get all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 }); 
    res.json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Delete review
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
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


// Submit a new review
router.post("/", upload.array("files"), async (req, res) => {
  try {
    const { name, text } = req.body;
    const rating = Number(req.body.rating); 
    console.log("Parsed rating:", rating, typeof rating);

    if (!text.trim()) {
      return res.status(400).json({ message: "Review text is required." });
    }

    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ message: "A valid rating is required." });
    }

    const fileUrls = req.files.map((file) => `/uploads/${file.filename}`);

    const newReview = new Review({
      name: name?.trim() || "Anonymous",
      text: text.trim(),
      rating, 
      files: fileUrls,
    });

    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    console.error("Error submitting review:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


module.exports = router;
