import React from 'react'

import Hero from '../componets/Hero/Hero'
import FindCar from '../componets/Hero/Findcar'
import FeaturedCars from '../componets/FeaturedCars/FeaturedCars'
import Choose from '../componets/Choose/Choose'
import Footer from '../componets/Footer'


const Dashboard = () => {
  return (
 <section className="min-h-screen">
      <Hero />
      <FindCar />
      <FeaturedCars />
      <Choose />
      <Footer/>
    </section>
  
  )
}

export default Dashboard