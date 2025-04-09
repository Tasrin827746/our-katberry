import { FC } from "react";
import { JSX } from "react/jsx-runtime";

interface ServiceItem {
  title: string;
  desc: string;
  icon: JSX.Element;
}

interface ServicesProps {
  title: string;
  description: string;
  services: ServiceItem[];
  bgColor?: string;
  cardColor?: string; 
}

const Services: FC<ServicesProps> = ({ title, description, services, bgColor = "bg-white", cardColor = "bg-gray-100" }) => {
  return (
    <section className={`py-20 ${bgColor} text-gray-900`}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="mt-3 text-lg text-gray-700">{description}</p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 ${cardColor} rounded-lg cursor-pointer shadow-md flex flex-col items-center transition-transform duration-300 transform hover:scale-105`}
            >
              {service.icon}
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
