import Image from "next/image";
import { FC } from "react";

const MissionVision: FC = () => {
  return (
    <section className="bg-gradient-to-b from-violet-200 to-violet-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-950">Our Mission & Vision</h2>
        <p className="text-gray-700 text-lg mt-4 max-w-2xl mx-auto">
          We believe in building meaningful solutions that create impact, inspire change, and shape a better future.
        </p>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        {/* Text */}
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-2xl font-semibold text-blue-700">Our Mission</h3>
          <p className="text-gray-800 text-lg">
            Our mission is to create powerful and intuitive digital products that help people solve real problems. 
            We focus on quality, usability, and innovation to deliver lasting value for our clients and their users.
          </p>
        </div>
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/mission.jpg"
            alt="Mission Illustration"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        {/* Text */}
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-2xl font-semibold text-green-700">Our Vision</h3>
          <p className="text-gray-800 text-lg">
            We envision a world where technology bridges gaps, empowers communities, and drives sustainable progress. 
            Our goal is to be a global leader in software innovation with a human-centered approach.
          </p>
        </div>
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/vision.jpg"
            alt="Vision Illustration"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
