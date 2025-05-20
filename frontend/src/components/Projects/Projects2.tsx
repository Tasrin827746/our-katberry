'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export type Projects2 = {
  id: string;
  image: string;
  extraImages?: string[];
};

type ProjectGalleryProps = {
  titlePrefix: string;
  highlightTitle: string;
  titleSuffix: string;
  projectCards: Projects2[];
  textColor: string;
  bgColor: string;
};

const Projects2: React.FC<ProjectGalleryProps> = ({
  titlePrefix,
  highlightTitle,
  titleSuffix,
  projectCards,
  textColor,
  bgColor,
}) => {
  const [selectedCard, setSelectedCard] = useState<Projects2 | null>(null);

  return (
    <section className="bg-gradient-to-r from-violet-300 to-sky-200 text-black py-16 px-4 text-center relative">
      <h2 className="text-3xl font-bold mb-8">
        {titlePrefix}{' '}
        <span className={`text-blue-700 ${textColor}`}>{highlightTitle}</span>{' '}
        <span>{titleSuffix}</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectCards.map((card) => (
          <div
            key={card.id}
            className="bg-yellow-50 rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <div className="relative h-48 w-full">
              <Image
                src={card.image}
                alt={card.id || 'Project Image'}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="p-4 flex flex-col flex-1">
              <div className="pt-4 mt-auto">
                <button
                  onClick={() => setSelectedCard(card)}
                  className={`${bgColor} text-white px-6 py-2 rounded hover:bg-blue-700`}
                >
                  Show Card
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCard && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-slate-200 p-4 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={() => setSelectedCard(null)}
            >
              &times;
            </button>

            {/* Main Image */}
            <div className="relative w-full h-[60vh] mb-4">
              <Image
                src={selectedCard.image}
                alt="Main Project"
                fill
                sizes="100vw"
                className="object-contain rounded"
              />
            </div>

            {/* Extra Images */}
           {Array.isArray(selectedCard.extraImages) && selectedCard.extraImages.length > 0 && (
  <div className="grid gap-6 mt-6">
    {selectedCard.extraImages.map((img, idx) => (
      <div key={idx} className="relative w-full h-[50vh]">
        <Image
          src={img}
          alt={`Extra ${idx + 1}`}
          fill
          sizes="100vw"
          className="object-contain rounded-lg"
        />
      </div>
    ))}
  </div>
)}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects2;
