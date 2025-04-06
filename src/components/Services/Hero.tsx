"use client";

import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgColor: string; 
}

const Hero: React.FC<HeroProps> = ({ title, description, buttonText, buttonLink, bgColor }) => {
  return (
    <section className={`relative flex items-center justify-center h-screen text-black ${bgColor}`}>
      <div className="relative z-10 text-center max-w-3xl px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="mt-4 text-lg text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <a
            href={buttonLink}
            className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-purple to-highlight text-[#fef8dd]hover:bg-gradient-to-r hover:from-red-800 hover:to-red-800 rounded-full shadow-lg transition-all"
          >
            {buttonText}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
