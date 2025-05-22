import Image from "next/image";

interface Technology {
  name: string;
  src: string;
}

interface TechnologiesProps {
  title: string;
  description: string;
  technologies: Technology[];
  bgColor?: string;
}

const Technologies: React.FC<TechnologiesProps> = ({ title, description, technologies, bgColor = "bg-gray-100" }) => {
  return (
    <section className={`py-20 ${bgColor} text-gray-900`}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="mt-4 text-lg text-gray-600">{description}</p>

        {/* Technologies Grid */}
        <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 place-items-center">
  {technologies.map((tech, index) => (
    <div key={index} className="flex flex-col justify-center items-center text-center h-full">
      <Image src={tech.src} alt={tech.name} width={60} height={60} />
      <p className="mt-2 text-sm font-medium">{tech.name}</p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Technologies;
