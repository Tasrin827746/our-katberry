'use client';
import React, { useState } from 'react';

export type Projects3 = {
  id: number;
  description?: string;
  showVideo: string; 
};

type ProjectSectionProps = {
  sectionTitle1: string;
  sectionTitle2: string;
  sectionTitle3: string;
  projects: Projects3[];
  textColor: string;
  bgColor: string;
};

const ProjectSection: React.FC<ProjectSectionProps> = ({
  sectionTitle1,
  sectionTitle2,
  sectionTitle3,
  projects,
  textColor,
  bgColor,
}) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="bg-gradient-to-r from-violet-300 to-sky-200 text-black py-16 px-4 text-center relative">
      <h2 className="text-3xl font-bold mb-8">
        {sectionTitle1}{' '}
        <span className={`text-blue-700 ${textColor}`}>{sectionTitle2}</span>{' '}
        <span>{sectionTitle3}</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-yellow-50 rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            {/* Display video directly in the card */}
            <div className="w-full h-48 bg-black">
              <video
                src={project.showVideo}
                className="w-full h-full object-cover"
                muted
                loop
                autoPlay
              />
            </div>

            <div className="p-4 flex flex-col flex-1">
              <div className="mt-auto pt-4">
                <button
                  onClick={() => setSelectedVideo(project.showVideo)}
                  className={`${bgColor} text-white px-6 py-2 rounded hover:bg-violet-800 inline-block`}
                >
                  Show Video
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="bg-slate-200 p-4 rounded-xl max-w-6xl w-full relative mx-4 sm:mx-6 md:mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold z-50"
              onClick={() => setSelectedVideo(null)}
            >
              &times;
            </button>
            <div className="w-full">
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full max-h-[80vh] rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
