import React from 'react'
import { Video, Film, MousePointer, Zap, Eye, Play } from "lucide-react";
import Pricing from '@/components/Services/Pricing';
import ClientReviews from '@/components/Services/ClientReview';
import Technologies from '@/components/Services/Technology';
import Services from '@/components/Services/Services';
import Hero from '@/components/Services/Hero';

// Services Data
const motionAnimationServices = [
  { title: "Explainer Videos", desc: "Engaging motion graphics videos to explain your business or product.", icon: <Video size={32} className="text-blue-500" /> },
  { title: "UI/UX Micro-Interactions", desc: "Smooth and interactive animations to enhance user experience.", icon: <MousePointer size={32} className="text-purple-500" /> },
  { title: "2D & 3D Animation", desc: "Professional 2D and 3D animations for various digital platforms.", icon: <Film size={32} className="text-green-500" /> },
  { title: "Logo Animation", desc: "Give your brand identity a dynamic touch with custom logo animations.", icon: <Zap size={32} className="text-orange-500" /> },
  { title: "Animated Ads & Social Media", desc: "Eye-catching animated ads to boost engagement on digital platforms.", icon: <Play size={32} className="text-red-500" /> },
  { title: "Motion Graphics & Visual Effects", desc: "Create cinematic effects and motion graphics for videos & branding.", icon: <Eye size={32} className="text-yellow-500" /> },
];

// Technology Data
const motionAnimationTechnologies = [
    { name: "Adobe After Effects", src: "/after-effect.png" },
    { name: "Adobe Animate", src: "/adobe-animate.png" },
    { name: "Premier Pro", src: "/premier-pro.webp" },
    { name: "Adobe InDesign", src: "/tech/id.png" },
    { name: "CapCut", src: "/tech/capcut.png" },
    
  ];

//   Testimonials Data
const motionAnimationTestimonials = [
    {
      name: "Jake Williams",
      position: "Marketing Manager, Brandify",
      review: "The animated video perfectly captured our brand’s story! It significantly boosted our engagement.",
      image: "/michel.jpg",
    },
    {
      name: "Emma Thompson",
      position: "Creative Director, MotionX",
      review: "Top-notch animation quality! Their team brought our ideas to life with smooth transitions and effects.",
      image: "/sarah.jpg",
    },
    {
      name: "Liam Anderson",
      position: "Founder, VisionTech",
      review: "The UI micro-interactions they designed enhanced our app’s usability and made it feel much smoother.",
      image: "/john.jpg",
    },
  ];

//   Plans Data
const motionAnimationPlans = [
    {
      name: "Basic",
      price: "$299",
      features: [
        "30-Second Animated Video",
        "Simple Motion Graphics",
        "2 Revisions",
      ],
    },
    {
      name: "Standard",
      price: "$499",
      features: [
        "1-Minute Animated Video",
        "Custom Illustrations & Motion",
        "4 Revisions",
      ],
    },
    {
      name: "Premium",
      price: "$799",
      features: [
        "Full HD Animated Video",
        "3D Animation & VFX",
        "Unlimited Revisions",
      ],
    },
  ];

  
const page = () => {
  return (
    <div>
        {/* Hero Section */}
      <Hero
        title="Bring Your Ideas to Life with Motion & Animation"
        description="We create high-quality motion graphics, UI animations, and explainer videos to make your brand stand out."
        buttonText="Get Consultation"
        buttonLink="#pricing"
        bgColor="bg-gradient-to-r from-green-100 to-red-200"
      />

      {/* Services Section */}
      <Services
        title="Our Motion & Animation Services"
        description="We offer a wide range of animation and motion design services to help brands tell their stories."
        services={motionAnimationServices}
        bgColor="bg-gradient-to-t from-green-100 to-red-100"
        cardColor="bg-cyan-50"
      />

      {/* Technology Section */}
      <Technologies
        title="Animation & Motion Tools We Use"
        description="We utilize the latest tools and software to create professional animations."
        technologies={motionAnimationTechnologies}
        bgColor="bg-gradient-to-b from-green-100 to-green-50"
      />

      {/* Review Section */}
      <ClientReviews
        title="What Our Clients Say"
        description="We take pride in delivering high-quality animation and motion graphics for our clients."
        testimonials={motionAnimationTestimonials}
        bgColor="bg-zinc-100"
        cardBg = "bg-sky-600"
      />

      {/* Pricing Plans */}
      <Pricing
        title="Our Motion & Animation Packages"
        description="Choose a package that suits your animation needs."
        plans={motionAnimationPlans}
        bgColor="bg-neutral-200"
        buttonText="Start Your Project"
      />
    </div>
  )
}

export default page