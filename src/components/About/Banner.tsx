"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Banner = () => {
  return (
    <section className="bg-gradient-to-l from-[#aae5e9] via-orange-100 to-[#d4a9f0] flex justify-center items-center py-20 px-8">
      <div className="max-w-6xl flex flex-col md:flex-row mt-16 items-center gap-16">
        {/* Left Content */}
        <motion.div 
          className="md:w-1/2 text-left md:pr-12"  
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}>
          <h1 className="text-5xl font-extrabold text-black leading-tight">
            Who We Are & <br /> <span className="text-orange-600">What We Build</span>
          </h1>
          <p className="text-gray-700 mt-4 text-lg">
            Crafting seamless digital experiences with passion, precision, and innovation.
          </p>
          <button className="mt-6 bg-gradient-to-l from-purple to-highlight text-[#fef8dd] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-red-800 hover:to-red-800 transition">
            Learn More About Us
          </button>
        </motion.div>

        {/* Right Image Grid with Motion */}
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 gap-4 w-[480px]">
            {["/grid1.jpg", "/grid2.jpg", "/grid3.jpeg", "/grid4.jfif"].map((src, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`relative w-full h-[150px] 
                  ${i === 0 ? "rounded-bl-full" : ""}  
                  ${i === 1 ? "rounded-br-full" : ""}  
                  ${i === 2 ? "rounded-tl-full" : ""}  
                  ${i === 3 ? "rounded-tr-full" : ""}  
                  overflow-hidden shadow-md`}
              >
                <Image
                  src={src}
                  alt={`Grid Image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
