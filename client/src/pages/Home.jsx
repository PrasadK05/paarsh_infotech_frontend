import { Box } from '@chakra-ui/react'
import React from 'react'
import Banner from '../components/Banner'
import OurCourses from '../components/OurCourses'

export default function Home() {
  return (
    <>
    <Banner
    link="/assets/banner3.jpg"
    head="Best Software Development Company In Nashik"
    />
    <OurCourses/>
    </>
  )
}
