
import Banner from '@/components/Projects/Banner'
import GraphicsProjects from '@/components/Projects/GraphicsProjects'
import MotionProjects from '@/components/Projects/Motion&Animation'
import WebProjects from '@/components/Projects/WebProjects'
import React from 'react'

const page = () => {
  return (
   <>
   <Banner />
   <WebProjects />
   <GraphicsProjects />
   <MotionProjects />
   </>
  )
}

export default page