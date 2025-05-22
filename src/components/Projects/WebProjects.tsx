import ProjectSection, { Project } from '@/components/Projects/Projects';

const webProjects: Project[] = [
  {
    title: 'Art & Craft Project',
    description: 'Arts and crafts encompass a wide range of creative activities',
    image: '/art.jpg',
    demoLink: 'https://your-demo-link.com/art-craft',
  },
  {
    title: 'Company website',
    description: 'A software company portfolio',
    image: '/projectbanner.avif',
    demoLink: 'https://katberrystudio-ehoi.vercel.app/',
  },
  {
    title: 'Book Shop',
    description: 'An online book shop',
    image: '/bookshop.jpg',
    demoLink: 'https://your-demo-link.com/book-shop',
  },
  {
    title: 'E-Commerce Website',
    description: 'An online shopping site',
    image: '/web.png',
    demoLink: 'https://e-commerce-7aeh.vercel.app/',
  },
  {
    title: 'Kitchen',
    description: 'An exclusive restaurant',
    image: '/kitchen.jpg',
    demoLink: 'https://your-demo-link.com/kitchen',
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
