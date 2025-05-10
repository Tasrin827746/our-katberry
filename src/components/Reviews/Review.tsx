"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface Review {
  _id: string;
  name: string;
  text: string;
  files: string[];
  rating: number;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState<string>("");
  const [review, setReview] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);
  const [rating, setRating] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/reviews");
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!review.trim()) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name || "Anonymous");
      formData.append("text", review);
      formData.append("rating", rating.toString());
      files.forEach((file) => formData.append("files", file));

      const response = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to submit review");

      const newReview: Review = await response.json();
      setReviews([newReview, ...reviews]);
      setName("");
      setReview("");
      setRating(0);
      setFiles([]);
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (id: string) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (!selectedId) return;

    try {
      const res = await fetch(`http://localhost:5000/api/reviews/${selectedId}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete review");

      setReviews((prev) => prev.filter((rev) => rev._id !== selectedId));
    } catch (error) {
      console.error("Error deleting review:", error);
    } finally {
      setShowModal(false);
      setSelectedId(null);
    }
  };

  const renderStars = (rating: number | string) => {
    const numericRating = parseInt(rating as string);
    return (
      <div className="flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar
            key={index}
            className={`text-xl ${index < numericRating ? "text-yellow-500" : "text-yellow-500"}`}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="max-w-6xl mx-auto p-6 mt-10 mb-6 grid md:grid-cols-2 gap-8">
        {/* Review Form */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg h-fit">
          <h3 className="text-xl font-semibold mb-4">Submit a Review</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 bg-transparent border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-violet-600"
            />

            <textarea
              placeholder="Write your review..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full p-2 rounded bg-transparent border border-gray-300 focus:outline-none focus:ring-1 focus:ring-violet-600"
              required
            ></textarea>

            {/* Interactive Star Selector */}
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  onClick={() => setRating(index + 1)}
                  className={`text-2xl cursor-pointer transition-colors duration-200 ${
                    index < rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  <FaStar />
                </span>
              ))}
            </div>

            <input
              type="file"
              multiple
              accept="image/*,video/*,.pdf"
              onChange={handleFileChange}
              className="w-full cursor-pointer"
            />

            <button
              type="submit"
              className="w-full bg-violet-600 text-white px-4 py-2 rounded hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        </div>

        {/* Display Reviews */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">All Reviews</h3>
          {reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet. Be the first to submit one!</p>
          ) : (
            <div className="space-y-4 overflow-y-auto max-h-[500px] pr-4">
              {reviews.map((rev) => (
                <div key={rev._id} className="p-4 bg-blue-300 rounded shadow">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-lg text-gray-800">{rev.name}</h4>
                    <button
                      onClick={() => handleDeleteClick(rev._id)}
                      className="text-sm font-semibold text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>

                  <div className="flex items-center gap-2 mt-1">{renderStars(rev.rating)}</div>
                  <p className="text-gray-800 mt-2">{rev.text}</p>

                  <div className="mt-2 flex gap-2 flex-wrap">
                    {rev.files.map((file, index) => {
                      const fileUrl = `http://localhost:5000${file}`;
                      return (
                        <div key={index}>
                          {file.match(/\.(jpeg|jpg|png|gif)$/i) ? (
                            <Image src={fileUrl} alt="Uploaded" width={100} height={100} className="rounded" />
                          ) : file.match(/\.(mp4|mov|avi)$/i) ? (
                            <video src={fileUrl} controls width="150" className="rounded" />
                          ) : file.endsWith(".pdf") ? (
                            <a
                              href={fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 underline"
                            >
                              View PDF
                            </a>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Are you sure you want to delete this review?</h2>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Reviews;
