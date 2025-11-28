import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/HeroSection'
import Features from './Component/Features'
import AboutGym from './Component/About'
import Services from './Component/Service'
import Testimonials from './Component/Testimonials'
import Trainers from './Component/Trainers'
import Pricing from './Component/Pricing'
import CTA from './Component/CTA'
import Footer from './Component/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <AboutGym />
      <Services />
      <Testimonials />
      <Trainers />
      <Pricing />
      <CTA />
      <Footer />
    </>
  )
}

export default App
