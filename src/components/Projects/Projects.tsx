import React from 'react';
import Image from 'next/image';

export type Project = {
  title: string;
  description: string;
  image: string;
  demoLink: string;
};

type ProjectSectionProps = {
  sectionTitle1: string;
  sectionTitle2: string;
  sectionTitle3: string;
  projects: Project[];
  textColor: string;
  bgColor: string;
};

const Project: React.FC<ProjectSectionProps> = ({
  sectionTitle1,
  sectionTitle2,
  sectionTitle3,
  projects,
  textColor,
  bgColor,
}) => {
  return (
    <section className="bg-gradient-to-r from-violet-300 to-sky-200 text-black py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">{sectionTitle1} <span className={`${textColor}`}>{sectionTitle2}</span> <span>{sectionTitle3}</span></h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
         <div
         key={index}
         className="bg-yellow-50 rounded-lg shadow-lg overflow-hidden flex flex-col"
       >
         <div className="h-48 relative">
           <Image
             src={project.image}
             alt={project.title}
             layout="fill"
             objectFit="cover"
           />
         </div>
         <div className="p-4 flex flex-col flex-1">
           <h3 className="text-lg font-semibold">{project.title}</h3>
           <p className="text-sm text-gray-600 mt-2">{project.description}</p>
           
           <div className="mt-auto pt-4">
             <a
               href={project.demoLink}
               target="_blank"
               rel="noopener noreferrer"
               className={`${bgColor} text-white px-6 py-2 rounded hover:bg-blue-700 inline-block`}
             >
               🔗 Click Here
             </a>
           </div>
         </div>
       </div>
       
        ))}
      </div>
    </section>
  );
};

export default Project;
