import React from 'react'
import { Navbar, Footer, HeroImage, Work, Experience } from "../components";

const Home: React.FC = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroImage />
      <Work />
      <Experience />
      <Footer />
    </main>
  )
}

export default Home
