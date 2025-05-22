import ProjectSection, { Project } from '@/components/Projects/Projects';

const webProjects: Project[] = [
  {
  title: 'Art & Craft Project',
  description: 'A vibrant and creative platform showcasing a variety of arts and crafts, designed to inspire creativity through project galleries, tutorials, and hands-on activities.',
  image: '/art.jpg',
  demoLink: 'https://assignment10artandcrafts.web.app/',
},
  {
  title: 'Company Website',
  description: 'A sleek and modern portfolio site for a software company, showcasing services, projects, and contact details with a responsive and user-friendly design.',
  image: '/projectbanner.avif',
  demoLink: 'https://katberrystudio-ehoi.vercel.app/',
},
 {
  title: 'Restaurant Website',
  description: 'A stylish and responsive website for a restaurant, featuring a digital menu, online reservations, and a smooth user experience for browsing dishes and placing orders.',
  image: '/restaurant.jpg',
  demoLink: 'https://my-restaurant-eosin.vercel.app/',
},
 {
  title: 'Coffee Shop',
  description: 'A cozy and modern coffee shop website showcasing featured brews, a stylish menu, and an inviting atmosphere for coffee lovers to explore and enjoy.',
  image: '/coffee.jpg',
  demoLink: 'https://coffee-shop-six-xi.vercel.app/',
},
 {
  title: 'E-Commerce Website',
  description: 'A modern and responsive online shopping platform featuring product listings, detailed item pages, a shopping cart, and a smooth checkout experience.',
  image: '/web.png',
  demoLink: 'https://e-commerce-7aeh.vercel.app/',
},
 {
  title: 'Online Bus Ticketing System',
  description: 'A web-based platform for booking bus tickets, allowing users to search routes, view schedules, select seats, and confirm reservations with ease.',
  image: '/bus.jpg',
  demoLink: 'https://tasrin827746.github.io/Assignment5/?fbclid=IwY2xjawF84U1leHRuA2FlbQIxMAABHYGprZAkw7-5u0Hbbbf8CvwuC4gexiVl_939zXLIR5qkvIU8QNbYZXhaCQ_aem_srN7TUu_v5DpUj6-aBYfFQ',
},
 {
  title: 'Kitchen',
  description: 'An elegant restaurant website featuring a curated menu, rich visuals, and a smooth user experience for browsing dishes, making reservations, and exploring culinary offerings.',
  image: '/kitchen.jpg',
  demoLink: 'https://dreamy-sprite-534856.netlify.app/?fbclid=IwY2xjawF838lleHRuA2FlbQIxMAABHWyoh-gtC9rVufKAgvrPLm1DMh0c-ujnjGvFgWbwgllCQJg40HcLiVXeTA_aem_gk_0KK-PSbK6H_eW8u7S-Q',
},

 {
  title: 'Online Book Shop',
  description: 'A clean and user-friendly online bookstore where users can browse, explore, and purchase a wide range of books across various genres.',
  image: '/bookshop.jpg',
  demoLink: 'https://melodious-caramel-9b6e5f.netlify.app/',
},
];

export default function WebDevProjects() {
  return (
    <ProjectSection
      sectionTitle1="Some works of our"
      sectionTitle2="Web Development"
      sectionTitle3="sector"
      textColor="text-amber-600"
      bgColor="bg-amber-600"
      projects={webProjects}
    />
  );
}
