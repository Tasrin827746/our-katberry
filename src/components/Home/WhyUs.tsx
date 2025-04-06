"use client";

import React from 'react';
import { motion } from 'framer-motion';

const WhyUs: React.FC = () => {
  return (
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto px-6 md:px-12 lg:flex lg:items-center gap-8">
        <motion.div
          className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 mb-6">
            At our company, we are driven by a commitment to excellence, a passion for innovation, and a deep understanding of our client needs. Our expert team brings decades of combined experience to the table, ensuring tailored solutions that deliver measurable results. We believe in collaboration, transparency, and building long-term partnerships with our clients. With a proven track record across diverse industries, we are dedicated to helping businesses grow, adapt, and thrive in an ever-evolving digital landscape.
          </p>
          {/* <motion.button
            className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-400 transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
          >
            Learn More
          </motion.button> */}
        </motion.div>

        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/why.jpg"
            alt="Why Choose Us"
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
