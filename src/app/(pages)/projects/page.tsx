
import Banner from '@/components/Projects/Banner'
import BusinessCard from '@/components/Projects/BusinessCard'
import LogoDesign from '@/components/Projects/LogoProjects'
import MotionProjects from '@/components/Projects/Motion&Animation'
import WebProjects from '@/components/Projects/WebProjects'
import React from 'react'

const page = () => {
  return (
   <>
   <Banner />
   <WebProjects />
   <MotionProjects />
   <BusinessCard />
   <LogoDesign />
   
   
   </>
  )
}

export default page