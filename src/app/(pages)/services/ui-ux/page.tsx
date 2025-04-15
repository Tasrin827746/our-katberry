import Hero from '@/components/Services/Hero'
import React from 'react'
import { LayoutGrid, Smartphone, Eye, Layers, Users, Brush } from "lucide-react";
import Services from '@/components/Services/Services';
import Technologies from '@/components/Services/Technology';
import ClientReviews from '@/components/Services/ClientReview';
import Pricing from '@/components/Services/Pricing';

// Services Data
const uiUxServices = [
  { title: "Wireframing & Prototyping", desc: "Create interactive wireframes and prototypes to visualize your ideas.", icon: <LayoutGrid size={32} className="text-blue-500" /> },
  { title: "Mobile & Web UI Design", desc: "Design seamless and responsive user interfaces for web and mobile apps.", icon: <Smartphone size={32} className="text-purple-500" /> },
  { title: "User Experience (UX) Research", desc: "Understand user behavior and optimize experiences for better engagement.", icon: <Eye size={32} className="text-green-500" /> },
  { title: "Design Systems & Components", desc: "Maintain consistency with reusable components and design systems.", icon: <Layers size={32} className="text-orange-500" /> },
  { title: "User Testing & Feedback", desc: "Enhance usability with real-user testing and actionable insights.", icon: <Users size={32} className="text-red-500" /> },
  { title: "Custom Illustrations & Icons", desc: "Craft unique illustrations and icons to enhance your brand identity.", icon: <Brush size={32} className="text-pink-500" /> },
];

// Technology Data
const uiUxTechnologies = [
    { name: "Figma", src: "/tech/figma.png" },
    { name: "Adobe XD", src: "/tech/adobe.png" },
    { name: "Sketch", src: "/tech/sketch.png" },
    { name: "InVision", src: "/tech/invision.png" },
    { name: "Canva", src: "/tech/canva.png" },
  ];

//   Testimonials Data
const uiUxTestimonials = [
    {
      name: "Sophia Wright",
      position: "Product Manager, FinTech",
      review: "The UI/UX design exceeded our expectations! Our app is now more intuitive and engaging.",
      image: "/sarah.jpg",
    },
    {
      name: "Daniel Foster",
      position: "Founder, StartupX",
      review: "From wireframes to final designs, everything was delivered flawlessly. Great attention to detail!",
      image: "/john.jpg",
    },
    {
      name: "Emily Carter",
      position: "Marketing Head, E-commerce",
      review: "User research and testing helped us improve our conversion rates significantly!",
      image: "/sarah.jpg",
    },
  ];

//   Plans Data
const uiUxPlans = [
    {
      name: "Basic",
      price: "$199",
      features: [
        "Wireframes & Prototypes",
        "Basic UI Design",
        "2 Revisions",
      ],
    },
    {
      name: "Standard",
      price: "$399",
      features: [
        "Complete UI/UX Design",
        "User Research & Testing",
        "4 Revisions",
      ],
    },
    {
      name: "Premium",
      price: "$599",
      features: [
        "Full UI/UX Package",
        "Custom Illustrations & Icons",
        "Unlimited Revisions",
      ],
    },
  ];

  
const UiUxpage = () => {
  return (
    <div>
        {/* Hero Section */}
       <Hero
        title="Creative & Engaging Web Design Solutions"
        description="We craft visually stunning and user-friendly web designs that align with your brand."
        buttonText="Get Consultation"
        buttonLink="#pricing"
        bgColor="bg-gradient-to-l from-gray-200 to-pink-200"
      />
       {/* Services Section */}
       <Services
        title="Our UI/UX Design Services"
        description="From research to design, we create experiences that enhance user satisfaction."
        services={uiUxServices}
        bgColor="bg-gradient-to-b from-gray-200 to-pink-200" 
        cardColor="bg-blue-100"
      />

      {/* Technology Section */}
      <Technologies
        title="Design Tools We Use"
        description="We leverage the best UI/UX design tools for creating high-quality experiences."
        technologies={uiUxTechnologies}
        bgColor="bg-gradient-to-t from-pink-100 to-pink-200"
      />

      {/* Review Section */}
      <ClientReviews
        title="What Our Clients Say"
        description="We take pride in designing intuitive and user-friendly interfaces for our clients."
        testimonials={uiUxTestimonials}
        bgColor="bg-gray-200"
        cardBg = "bg-green-600"
      />

      {/* Pricing Plans */}
      <Pricing
        title="Our UI/UX Design Packages"
        description="Choose a plan that suits your design needs."
        plans={uiUxPlans}
        bgColor="bg-slate-100"
        // buttonText="Start Your Project"
      />
    </div>
  )
}

export default UiUxpage