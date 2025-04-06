"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section 
      className="bg-gradient-to-r from-lightMaroon to-lightPurple flex justify-center items-center py-20 px-8"
    >
      <div className="max-w-6xl flex flex-col md:flex-row items-center gap-16">
        {/* Left Content */}
        <motion.div 
          className="md:w-1/2 text-left md:pr-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold text-pink-800 leading-tight">
            Design That Speaks <br /> <span className="text-black">Code That Works</span>
          </h1>
          <p className="text-gray-700 mt-4 text-lg">
            We blend creativity with technology to build brands that shine online.
          </p>
          <button className="mt-6 bg-gradient-to-l from-purple to-highlight text-[#fef8dd] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-red-800 hover:to-red-800 transition">
            Let&apos;s Discuss Your Project
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-[450px] h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/banner.png"
              alt="Team Collaboration"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
