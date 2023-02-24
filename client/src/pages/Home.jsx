import { Box } from '@chakra-ui/react'
import React from 'react'
import Banner from '../components/Banner'
import OurCourses from '../components/OurCourses'

export default function Home() {
  return (
    <>
    <Banner
    link="http://paarshinfotech.com/assets/img/about1.jpg"
    head="Best Software Development Company In Nashik"
    />
    <OurCourses/>
    </>
  )
}
