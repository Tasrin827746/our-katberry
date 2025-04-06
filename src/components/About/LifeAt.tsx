// components/About/LifeAtCompany.tsx

import Image from "next/image";
import { FC } from "react";

const photos = [
  { src: "/images/life1.jpg", caption: "Team brainstorming session" },
  { src: "/images/life2.jpg", caption: "Celebrating success together" },
  { src: "/images/life3.jpg", caption: "Remote collaboration in action" },
  { src: "/images/life4.jpg", caption: "Chill moments at the lounge" },
  { src: "/images/life5.jpg", caption: "Hackathon weekend vibes" },
  { src: "/images/life6.jpg", caption: "Volunteering for good causes" },
];

const LifeAtCompany: FC = () => {
  return (
    <section className="bg-slate-50 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">Life at [Your Company Name]</h2>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          Our culture is built on creativity, connection, and fun. Here&apos;s a peek into what it&apos;s like to be part of our team.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {photos.map((photo, index) => (
          <div key={index} className="relative overflow-hidden rounded-xl shadow-sm group">
            <Image
              src={photo.src}
              alt={photo.caption}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform group-hover:scale-105 duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-3">
              {photo.caption}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LifeAtCompany;
