import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import PricingCard from '../components/PricingCard'

const Home = () => {

  return (
    <div>
      <Navbar/>
      <HeroImage/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Home