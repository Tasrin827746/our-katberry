import ProjectSection, { Project } from '@/components/Projects/Projects';

const motionProjects: Project[] = [
  {
    title: 'Art & Craft Project',
    description: 'Arts and crafts encompass a wide range of creative activities',
    image: '/images/art-craft.jpg',
    demoLink: 'https://your-demo-link.com/art-craft',
  },
  {
    title: 'Book Shop',
    description: 'Give a short description of your project here..',
    image: '/images/book-shop.jpg',
    demoLink: 'https://your-demo-link.com/book-shop',
  },
  {
    title: 'Kitchen',
    description: 'Food Web',
    image: '/images/kitchen.jpg',
    demoLink: 'https://your-demo-link.com/kitchen',
  },

];

export default function MotionProjects() {
  return (
    <ProjectSection
      sectionTitle1="Some works of our"
      sectionTitle2="Motion & Animation"
      sectionTitle3="sector"
      projects={motionProjects}
    />
  );
}
