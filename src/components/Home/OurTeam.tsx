"use client";

import React from 'react';

const OurTeam: React.FC = () => {
  const teamMembers = [
    { name: 'Faruk Omar Raju', designation: 'Founder', image: '/ceo.jfif', role: 'Graphics Designer' },
    { name: 'Morsala Tasrin', designation: 'Founder', image: '/ceo.jfif', role: 'Web Developer' },
  ];

  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
        <p className="text-gray-00 mb-8">Our dedicated professionals who drive our success.</p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-r cursor-pointer from-violet-300 to-red-200 shadow-md p-6 rounded-lg w-80 mx-auto transition-transform duration-300 transform hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-16 h-16 mx-auto rounded-full mb-3 object-cover"
                />
                <div className='mb-2'>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className='text-sm'>{member.role}</p>
                </div>

                <div className='flex items-center justify-center'>
                <p className="text-white font-semibold bg-red-800 w-1/3 rounded-full">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
