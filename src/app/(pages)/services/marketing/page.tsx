import ClientReviews from "@/components/Services/ClientReview";
import Hero from "@/components/Services/Hero";
import Pricing from "@/components/Services/Pricing";
import Services from "@/components/Services/Services";
import Technologies from "@/components/Services/Technology";
import { Brush, Megaphone, PenTool, Printer } from "lucide-react";
import { FaInstagram, FaPallet } from "react-icons/fa";


// Services Data
const marketingServices = [
  { title: "Logo Design", desc: "Craft memorable logos that reflect your brand's identity.", icon: <Brush size={32} className="text-red-500" /> },
  { title: "Social Media Graphics", desc: "Create engaging graphics for social media platforms to boost your presence.", icon: <FaInstagram size={32} className="text-pink-500" /> },
  { title: "Brand Identity", desc: "Develop cohesive brand guidelines to maintain consistency.", icon: <FaPallet size={32} className="text-purple-500" /> },
  { title: "Print Design", desc: "Design business cards, brochures, and other marketing materials.", icon: <Printer size={32} className="text-green-500" /> },
  { title: "Ad Campaign Design", desc: "Create effective visuals for online and offline ad campaigns.", icon: <Megaphone size={32} className="text-blue-500" /> },
  { title: "Illustrations", desc: "Custom illustrations that add a unique touch to your brand.", icon: <PenTool size={32} className="text-yellow-500" /> },
];


// Technology Data
const marketingTechnologies = [
  { name: "Adobe Photoshop", src: "/tech/photoshop.png" },
  { name: "Adobe Illustrator", src: "/tech/illustrator.png" },
  {name: "Adobe InDesign", src: "/tech/id.png"},
  { name: "Adobe Photoshop", src: "/tech/photoshop.png" },
  { name: "Adobe Illustrator", src: "/tech/illustrator.png" },
  ];
  
//   Testimonials Data
const marketingTestimonials = [
  {
    name: "Emily Richards",
    position: "Creative Director, DesignCo",
    review: "The graphics and branding designs were stunning! Our brand identity has never been stronger.",
    image: "/john.jpg",
  },
  {
    name: "David Williams",
    position: "Founder, ArtWorks Studio",
    review: "The team truly understood our vision. The branding materials are unique and perfectly represent our values.",
    image: "/sarah.jpg",
  },
  {
    name: "Olivia Brown",
    position: "Marketing Manager, PixelPerfect",
    review: "Fantastic work on our logo and graphics! They brought our marketing campaign to life in a way we never expected.",
    image: "/michel.jpg",
  },
];


  // Plans Data

  const marketingPlans = [
    {
      name: "Basic",
      price: "BDT 20K",
      features: [
        "Logo Design",
        "Brand Identity",
        "Basic Graphics Package",
      ],
    },
    {
      name: "Standard",
      price: "BDT 40K",
      features: [
        "Custom Branding",
        "Marketing Collaterals",
        "Social Media Graphics",
      ],
    },
    {
      name: "Premium",
      price: "BDT 70K",
      features: [
        "Complete Brand Strategy",
        "Advanced Graphic Design",
        "Custom Illustrations & Animations",
      ],
    },
  ];
  
const marketingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
  title="Transform Your Brand with Creative Design"
  description="We specialize in creating unique and visually impactful branding solutions that elevate your business identity."
  buttonText="Start Your Branding Journey"
  buttonLink="#pricing"
  bgColor="bg-gradient-to-l from-blue-100 to-violet-300"
/>

      {/* Services Section */}
      <Services
  title="Our Graphic Design Services"
  description="We provide exceptional branding, logo design, and marketing collateral to help businesses stand out."
  services={marketingServices}
  bgColor="bg-gradient-to-t from-blue-200 to-teal-50"
  cardColor="bg-white"
/>


      {/* Technology Section  */}
      <Technologies
  title="Design Tools We Use"
  description="We use cutting-edge design software and tools to craft unique branding and graphic design solutions."
  technologies={marketingTechnologies}
  bgColor="bg-gradient-to-t from-blue-200 to-gray-100"
/>


    {/* Review Section */}
    <ClientReviews
  title="What Our Clients Say"
  description="Our clients love the creative branding and design solutions we provide, helping them elevate their brands."
  testimonials={marketingTestimonials}
  bgColor="bg-gradient-to-b from-blue-200 to-gray-100"
  cardBg="bg-pink-500"
/>


    {/* Plans Section */}
    <Pricing
      title="Our Pricing Plans"
      description="Choose a plan that suits your business needs."
      plans={marketingPlans}
      bgColor="bg-gradient-to-b from-slate-300 to-gray-100"
      buttonText="Start Now"
    />
    </div>
  );
};

export default marketingPage;
