import ProjectSection, { Projects3 } from '@/components/Projects/Projects3';

const motionProjects: Projects3[] = [
  {
    id: 1,
    showVideo: '/motion/bekaron.mp4',
  },
  {
    id: 2,
    showVideo: '/motion/Celebrate English final.mp4',
  },
  {
    id: 3,
    showVideo: '/motion/Eid 2025.mp4',
  },
  {
    id: 4,
    showVideo: '/motion/GYM PROJECT 1.mp4',
  },
  {
    id: 5,
    showVideo: '/motion/Main File.mp4',
  },
  {
    id: 6,
    showVideo: '/motion/Bookkeeping project final.mp4',
  },
];

export default function MotionProjects() {
  return (
    <ProjectSection
      sectionTitle1="Some works of our"
      sectionTitle2="Motion & Animation"
      sectionTitle3="sector"
      textColor="text-violet-600"
      bgColor="bg-violet-700"
      projects={motionProjects}
    />
  );
}
