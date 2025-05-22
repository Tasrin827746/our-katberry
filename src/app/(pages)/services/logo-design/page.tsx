import Hero from '@/components/Services/Hero'
import React from 'react'
import { PenTool, Image, Layers, Star, Briefcase, PaintBucket } from "lucide-react";
import Pricing from '@/components/Services/Pricing';
import ClientReviews from '@/components/Services/ClientReview';
import Technologies from '@/components/Services/Technology';
import Services from '@/components/Services/Services';

// Services Data
const logoCardDesignServices = [
  { title: "Custom Logo Design", desc: "Craft unique and memorable brand logos with stunning visuals.", icon: <PenTool size={32} className="text-yellow-500" /> },
  { title: "Business Card Design", desc: "Professional business cards that leave a lasting impression.", icon: <Briefcase size={32} className="text-blue-500" /> },
  { title: "Brand Identity", desc: "Create a cohesive brand identity with colors, typography, and style guides.", icon: <Layers size={32} className="text-green-500" /> },
  { title: "Illustration & Vector Design", desc: "High-quality vector illustrations for branding and marketing.", icon: <Image size={32} className="text-purple-500" /> },
  { title: "Premium Effects & Styles", desc: "Add shadows, gradients, and advanced effects for a premium look.", icon: <Star size={32} className="text-orange-500" /> },
  { title: "Color & Font Selection", desc: "Professional selection of fonts and colors to match your brand.", icon: <PaintBucket size={32} className="text-pink-500" /> },
];

// Technology Data
const logoCardDesignTechnologies = [
  { name: "Adobe Photoshop", src: "/tech/photoshop.png" },
  { name: "Adobe Illustrator", src: "/tech/illustrator.png" },
  {name: "Adobe InDesign", src: "/tech/id.png"},
  { name: "Adobe Photoshop", src: "/tech/photoshop.png" },
  { name: "Adobe Illustrator", src: "/tech/illustrator.png" },
];

// Testimonials Data
const logoCardDesignTestimonials = [
  {
    name: "Alex Morgan",
    review: "The logo design was exactly what we needed—modern, sleek, and instantly recognizable.",
    image: "/john.jpg",
  },
  {
    name: "Lisa Rodriguez",
    review: "Our business cards now stand out in a crowded market! Highly professional design service.",
    image: "/sarah.jpg",
  },
  {
    name: "James Carter",
    review: "Creative, timely, and visually stunning! The brand identity package transformed our business.",
    image: "/michel.jpg",
  },
];

// Plans Data
const logoCardDesignPlans = [
  {
    name: "Basic",
    price: "$99",
    features: [
      "Simple Logo Design",
      "1 Concept, 2 Revisions",
      "High-Resolution PNG & JPG",
    ],
  },
  {
    name: "Standard",
    price: "$199",
    features: [
      "Custom Logo & Business Card",
      "3 Concepts, 5 Revisions",
      "Vector Files (AI, EPS, PDF)",
    ],
  },
  {
    name: "Premium",
    price: "$299",
    features: [
      "Full Brand Identity Package",
      "Unlimited Revisions",
      "Social Media Kit & Guidelines",
    ],
  },
];


const LogoDesignPage = () => {
  return (
    <>
    {/* Hero Section */}
     <Hero
        title="Crafting Your Brand Identity"
        description="We design high-performance, scalable, and visually stunning logos and business cards to elevate your brand."
        buttonText="Get Consultation"
        buttonLink="#pricing"
        bgColor="bg-gradient-to-r from-orange-100 to-indigo-200"
      />
      {/* Services Section */}
       <Services
        title="Our Logo & Card Design Services"
        description="We provide high-quality logo and business card design services tailored to your brand."
        services={logoCardDesignServices}
        bgColor="bg-gradient-to-b from-orange-100 to-indigo-200" 
        cardColor="bg-white"
      />

      {/* Technology Section */}
      <Technologies
        title="Design Tools We Use"
        description="We use the latest design tools to create visually stunning and professional graphics."
        technologies={logoCardDesignTechnologies}
        bgColor="bg-gradient-to-b from-indigo-200 to-indigo-100"
      />

      {/* Review Section */}
      <ClientReviews
        title="What Our Clients Say"
        description="We take pride in crafting high-quality logo and branding designs for our clients."
        testimonials={logoCardDesignTestimonials}
        bgColor="bg-slate-200"
         cardBg = "bg-teal-500"
      />

      {/* Pricing Plans */}
      <Pricing
        title="Our Design Packages"
        description="Choose a plan that suits your logo and branding needs."
        plans={logoCardDesignPlans}
        bgColor="bg-gray-200"
        // buttonText="Get Started"
      />
    </>
  )
}

export default LogoDesignPage