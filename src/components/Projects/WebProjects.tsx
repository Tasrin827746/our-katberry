import ProjectSection, { Project } from '@/components/Projects/Projects';

const webProjects: Project[] = [
  {
    title: 'Art & Craft Project',
    description: 'Arts and crafts encompass a wide range of creative activities',
    image: '/art.jpg',
    demoLink: 'https://your-demo-link.com/art-craft',
  },
  {
    title: 'Book Shop',
    description: 'Give a short description of your project here..',
    image: '/bookshop.jpg',
    demoLink: 'https://your-demo-link.com/book-shop',
  },
  {
    title: 'Kitchen',
    description: 'Food Web',
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
      projects={webProjects}
    />
  );
}
