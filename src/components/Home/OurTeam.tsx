"use client";

import React from 'react';

const OurTeam: React.FC = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'CEO', image: '/ceo.jfif' },
    { name: 'Jane Smith', role: 'CTO', image: '/ceo.jfif' },
    { name: 'Sam Wilson', role: 'HR', image: '/ceo.jfif' },
  ];

  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
        <p className="text-gray-00 mb-8">Our dedicated professionals who drive our success.</p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-r cursor-pointer from-violet-300 to-red-200 shadow-md p-6 rounded-lg w-80 mx-auto transition-transform duration-300 transform hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-3 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <div className='flex items-center justify-center'>
                <p className="text-white font-bold bg-red-800 w-1/4 rounded-bl-2xl">{member.role}</p>
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
