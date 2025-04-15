import ProjectGallery, { Projects2 } from '@/components/Projects/Projects2';

const cardProjects: Projects2[] = [
  {
    id: '1',
    image: '/card/1/thumbnail.jpg',
    extraImages: [
      '/card/1/1.jpg',
      '/card/1/2.jpg',
      '/card/1/3.jpg',
      '/card/1/4.jpg',
      '/card/1/5.jpg',
      '/card/1/6.jpg',
      '/card/1/7.jpg',
      '/card/1/8.jpg',
    ],
  },
  {
    id: '2',
    image: '/card/2/thumbnail.jpg',
    extraImages: [
      '/card/2/1.jpg',
      '/card/2/2.jpg',
      '/card/2/3.jpg',
      '/card/2/4.jpg',
      '/card/2/5.jpg',
      '/card/2/6.jpg',
      '/card/2/7.jpg',
      '/card/2/8.jpg',
      '/card/2/9.jpg',
      '/card/2/10.jpg',
      '/card/2/11.jpg',
    ],
  },
  {
    id: '3',
    image: '/card/3/thumbnail.jpg',
    extraImages: [
      '/card/3/1.jpg',
      '/card/3/2.jpg',
      '/card/3/3.jpg',
      '/card/3/4.jpg',
      '/card/3/5.jpg',
      '/card/3/6.jpg',
      '/card/3/7.jpg',
      '/card/3/8.jpg',
      '/card/3/9.jpg',
    ],
  },
  {
    id: '4',
    image: '/card/4/thumbnail.jpg',
    extraImages: [
      '/card/4/1.jpg',
      '/card/4/2.jpg',
      '/card/4/3.jpg',
      '/card/4/4.jpg',
      '/card/4/5.jpg',
      '/card/4/6.jpg',
      '/card/4/7.jpg',
      '/card/4/8.jpg',
    ],
  },
];

export default function BusinessCard() {
  return (
    <ProjectGallery
      titlePrefix="Some works of our"
      highlightTitle="Business Card Design"
      titleSuffix="sector"
      textColor="text-green-600"
      bgColor="bg-green-600"
      projectCards={cardProjects}
    />
  );
}
