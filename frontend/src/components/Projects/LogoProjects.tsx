import ProjectSection, { Projects1 } from '@/components/Projects/Projects1';

const logoProjects: Projects1[] = [
  {
    id: '1',
    image: '/logo/Mockup-1 (1).jpg',
  },
  {
    id: '2',
    image: '/logo/Mockup-1 (2).jpg',
  },
  {
    id: '3',
    image: '/logo/Mockup-1.jpg',
  },
  {
    id: '4',
    image: '/logo/Mockup-2 (1).jpg',
  },
  {
    id: '5',
    image: '/logo/Mockup-2.jpg',
  },

];

export default function LogoDesign() {
  return (
    <ProjectSection
    titlePrefix="Some works of our"
    highlightTitle="Logo Design"
    titleSuffix="sector"
    textColor="text-blue-500"
    bgColor="bg-blue-600"
    projectList={logoProjects}
    />
  );
}
