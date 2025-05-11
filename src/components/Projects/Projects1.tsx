'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export type Projects1 = {
  id: string;
  image: string;
};

type ProjectModalGalleryProps = {
  titlePrefix: string;
  highlightTitle: string;
  titleSuffix: string;
  projectList: Projects1[];
  textColor: string;
  bgColor: string;
};

const Projects1: React.FC<ProjectModalGalleryProps> = ({
  titlePrefix,
  highlightTitle,
  titleSuffix,
  projectList,
  textColor,
  bgColor,
}) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="bg-gradient-to-r from-violet-300 to-sky-200 text-black py-16 px-4 text-center relative">
      <h2 className="text-3xl font-bold mb-8">
        {titlePrefix}{' '}
        <span className={`text-blue-700 ${textColor}`}>{highlightTitle}</span>{' '}
        <span>{titleSuffix}</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectList.map((item) => (
          <div
            key={item.id}
            className="bg-yellow-50 rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <div className="h-48 relative">
              <Image
                src={item.image}
                alt={`Project ${item.id}`}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="pt-4 mt-auto">
                <button
                  onClick={() => setActiveImage(item.image)}
                  className={`${bgColor} text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors`}
                  aria-label={`Show image for project ${item.id}`}
                >
                  Show Logo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="bg-gray-200 p-4 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-3xl font-bold"
              onClick={() => setActiveImage(null)}
              aria-label="Close image modal"
            >
              &times;
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={activeImage}
                alt="Selected project"
                fill
                sizes="100vw"
                className="object-contain rounded"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects1;
