'use client';

import { useState } from 'react';

const categories: string[] = [
    'Languages',
    'Frontend',
    'Backend',
    'UI/UX',
    'Motion Graphics & Animation',
    'Advertising and Marketing Design',
    'Branding and Identity Design',
  ];
  
const technologies = {
  'Languages': [
    { name: 'Javascript', image: '/js.png' },
    { name: 'Python', image: '/python.png' },
    { name: 'PHP', image: '/php.png' },
  ],
  'Frontend': [
    { name: 'HTML 5', image: '/html5.png' },
    { name: 'CSS 3', image: '/css3.png' },
    { name: 'Laravel', image: '/laravel.png' },
    { name: 'Bootstrap 5', image: '/bootstrap.png' },
    { name: 'Tailwind', image: '/tailwind.png' },
    { name: 'Typescript', image: '/typescript.png' },
    { name: 'React JS', image: '/react.png' },
    { name: 'Next JS', image: '/nextjs.png' },
  ],
  'Backend': [
    { name: 'Express JS', image: '/express.png' },
    { name: 'Nest JS', image: '/nest.png' },
    { name: 'Laravel', image: '/laravel.png' },
  ],
  'UI/UX': [
    { name: 'Figma', image: '/figma.png' },
    { name: 'Adobe XD', image: '/adobe.png' },
  ],
  'Motion Graphics & Animation': [
    { name: 'Adobe Animate', image: '/adobe-animate.png' },
    { name: 'Premiere Pro', image: '/premier-pro.webp' },
    { name: 'After Effect', image: '/after-effect.png' },
  ],
  'Advertising and Marketing Design': [
    { name: 'Adobe Illustrator', image: '/adobe-illustrator.png' },
    { name: 'Adobe Photoshop', image: '/adobe-photoshop.png' },
  ],
  'Branding and Identity Design': [
    { name: 'Adobe Illustrator', image: '/adobe-illustrator.png' },
  ],
};

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState('Languages');

  return (
    <section className="text-center py-20 bg-gradient-to-b from-[#e6ccecee] to-gray-200">
      <h2 className="text-3xl font-bold">Technologies We Use</h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
        We combine expert resources with the latest technologies to deliver high-quality software solutions for your business.
      </p>
      
      {/* Categories */}
      <div className="mt-6 flex flex-wrap justify-center gap-4 text-gray-800">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-1 border-b-2 ${
              activeCategory === category ? 'text-red-600 border-red-600' : 'border-transparent'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Technologies */}
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {technologies[activeCategory as keyof typeof technologies]?.map((tech) => (
          <div
            key={tech.name}
            className="cursor-pointer bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img src={tech.image} alt={tech.name} className="w-20 h-16 mx-auto" />
            <p className="mt-2 text-sm font-semibold">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
