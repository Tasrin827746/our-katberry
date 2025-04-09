import ClientReviews from "@/components/Services/ClientReview";
import Hero from "@/components/Services/Hero";
import Pricing from "@/components/Services/Pricing";
import Services from "@/components/Services/Services";
import Technologies from "@/components/Services/Technology";
import { Code, Server, ShoppingCart, Globe, Layers, Wrench } from "lucide-react";

// Services Data
const webDevServices = [
  { title: "Frontend Development", desc: "Build modern, interactive, and responsive UI with Next.js & React.", icon: <Code size={32} className="text-blue-500" /> },
  { title: "Backend Development", desc: "Robust and scalable backend solutions using Node.js, Express, and more.", icon: <Server size={32} className="text-green-500" /> },
  { title: "E-commerce Solutions", desc: "Custom online stores with secure payment integrations and inventory management.", icon: <ShoppingCart size={32} className="text-orange-500" /> },
  { title: "CMS Development", desc: "Flexible and easy-to-manage websites using WordPress, Strapi, or Sanity CMS.", icon: <Globe size={32} className="text-purple-500" /> },
  { title: "Custom Web Apps", desc: "Tailored web applications to meet your unique business needs.", icon: <Layers size={32} className="text-red-500" /> },
  { title: "Maintenance & Support", desc: "Ongoing website maintenance, security updates, and performance optimizations.", icon: <Wrench size={32} className="text-gray-500" /> },
];

// Technology Data
const webDevTechnologies = [
    { name: "HTML", src: "/tech/html5.png" },
    { name: "CSS", src: "/tech/css3.png" },
    { name: "JavaScript", src: "/tech/js.png" },
    { name: "Typescript", src: "/tech/typescript.png" },
    { name: "React", src: "/tech/react.png" },
    { name: "Next.js", src: "/tech/nextjs.png" },
    { name: "Tailwind CSS", src: "/tech/tailwind.png" },
    { name: "Node.js", src: "/tech/nodejs.png" },
    { name: "Express.js", src: "/tech/express.png" },
    { name: "MongoDB", src: "/tech/mongo.png" },
  ];
  
//   Testimonials Data
  const webDevTestimonials = [
    {
      name: "John Doe",
      position: "CEO, TechCorp",
      review: "The team did an amazing job! Our website is fast, responsive, and exactly what we envisioned.",
      image: "/john.jpg",
    },
    {
      name: "Sarah Johnson",
      position: "Founder, StartupX",
      review: "Professional and efficient. The project was delivered on time and exceeded expectations.",
      image: "/sarah.jpg",
    },
    {
      name: "Michael Lee",
      position: "Manager, EcomStore",
      review: "Great experience! The e-commerce site they built helped increase our sales significantly.",
      image: "/michel.jpg",
    },
  ];

  // Plans Data

  const webDevPlans = [
    {
      name: "Basic",
      price: "BDT 30K",
      features: [
        "Responsive Website",
        "SEO Optimization",
        "Basic Support",
      ],
    },
    {
      name: "Standard",
      price: "BDT 60K",
      features: [
        "Custom Design",
        "Performance Optimization",
        "Priority Support",
      ],
    },
    {
      name: "Premium",
      price: "BDT 90K",
      features: [
        "Full-Stack Development",
        "Advanced SEO & Security",
        "Dedicated Support",
      ],
    },
  ];

const WebDevPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Build Stunning Websites with Best Technology"
        description="We craft high-performance, scalable, and visually stunning web solutions using the latest technologies."
        buttonText="Get Consultation"
        buttonLink="#pricing"
        bgColor="bg-gradient-to-l from-gray-200 to-blue-200"
      />

      {/* Services Section */}
      <Services
        title="Our Web Development Services"
        description="We offer comprehensive web development solutions to help businesses grow online."
        services={webDevServices}
        bgColor="bg-gradient-to-b from-blue-300 to-blue-100"
        cardColor="bg-gray-100" 
      />

      {/* Technology Section  */}
       <Technologies
      title="Technologies We Use"
      description="We work with the latest technologies to build high-quality web solutions."
      technologies={webDevTechnologies}
      bgColor="bg-gradient-to-t from-gray-100 to-blue-100"
    />

    {/* Review Section */}
    <ClientReviews
      title="What Our Clients Say"
      description="We take pride in delivering top-quality web solutions for our clients."
      testimonials={webDevTestimonials}
      bgColor="bg-gray-200"
      cardBg = "bg-cyan-500"
    />

    {/* Plans Section */}
    <Pricing
      title="Our Pricing Plans"
      description="Choose a plan that suits your business needs."
      plans={webDevPlans}
      bgColor="bg-gradient-to-b from-slate-300 to-gray-100"
      buttonText="Start Now"
    />
    </div>
  );
};

export default WebDevPage;
