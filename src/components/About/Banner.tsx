'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const images = [
  { src: '/grid1.jpg', className: 'rounded-bl-full' },
  { src: '/grid2.jpg', className: 'rounded-br-full' },
  { src: '/grid3.jpeg', className: 'rounded-tl-full' },
  { src: '/grid4.jfif', className: 'rounded-tr-full' },
];

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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

const Banner = () => {
  const router = useRouter();

  return (
    <motion.section
      className="bg-gradient-to-l from-[#aae5e9] via-orange-100 to-[#d4a9f0] flex justify-center items-center py-20 px-8"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl flex flex-col md:flex-row mt-16 items-center gap-16 w-full">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 text-left md:pr-12"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-extrabold text-black leading-tight">
            Who We Are & <br />
            <span className="text-orange-600">What We Build</span>
          </h1>
          <p className="text-gray-800 mt-4 text-lg">
            Crafting seamless digital experiences with passion, precision, and innovation.
          </p>
          <button
            onClick={() => router.push('/projects')}
            className="mt-6 bg-gradient-to-l from-purple to-highlight text-[#fef8dd] font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:from-red-800 hover:to-red-800"
          >
            See Our Projects
          </button>
        </motion.div>

        {/* Right Image Grid */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 gap-4 w-[480px]">
            {images.map((img, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`relative w-full h-[150px] overflow-hidden shadow-md ${img.className}`}
              >
                <Image
                  src={img.src}
                  alt={`Grid Image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                  priority={index === 0} 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Banner;
