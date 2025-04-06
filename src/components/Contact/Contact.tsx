"use client";

import { useState} from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage: React.FC = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate email format
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Trim inputs to prevent empty values
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });

        // Auto-hide success message after 3 seconds
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center mt-14">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Have a question? Get in touch with us!
        </p>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-violet-100 p-8 rounded-md shadow-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-400 bg-transparent rounded-md focus:outline-violet-600 focus:ring-1 focus:ring-gray-600"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-400 rounded-md bg-transparent focus:outline-violet-600 focus:ring-1 focus:ring-gray-600"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 border border-gray-400 bg-transparent rounded-md h-32 focus:outline-violet-600 focus:ring-1 focus:ring-gray-600"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-purple text-white font-semibold rounded-lg hover:bg-mocha transition"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Success & Error Messages */}
          {status === "success" && (
            <p className="mt-4 text-green-600 font-semibold">✅ Message sent successfully!</p>
          )}
          {errorMessage && (
            <p className="mt-4 text-red-600 font-semibold">❌ {errorMessage}</p>
          )}
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-gray-700">
          <div className="flex items-center justify-center space-x-4">
            <FaMapMarkerAlt className="text-gray-900 text-2xl" />
            <p>123 Katberry St, Cityville, CA</p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <FaPhone className="text-gray-900 text-2xl" />
            <p>+880 199-741-2505</p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <FaEnvelope className="text-gray-900 text-2xl" />
            <p>katberryorg@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;