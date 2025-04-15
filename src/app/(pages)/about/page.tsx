import Banner from '@/components/About/Banner'
import CoreValues from '@/components/About/CoreValues'
import JoinUsCTA from '@/components/About/JoinUs'
// import LifeAtCompany from '@/components/About/LifeAt'
import MissionVision from '@/components/About/Mission'
import React from 'react'

const page = () => {
  return (
   <>
   <Banner />
   <MissionVision />
   <CoreValues />
   {/* <LifeAtCompany /> */}
   <JoinUsCTA />
   </>
  )
}

export default page