import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import FeaturesSection from '../components/FeatureSection'
import About from '../components/About'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage;