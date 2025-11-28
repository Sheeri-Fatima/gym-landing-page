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
import AboutUs from './Component/AboutUs'
import ContactUs from './Component/ContactUs'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Features />
      {/* <AboutGym /> */}
      <Services />
      <Testimonials />
      {/* <Trainers /> */}
      <Pricing />
      <CTA />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
