import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import FeaturesSection from '../components/FeatureSection'

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection></FeaturesSection>
      <Pricing />
      <Footer />
    </div>
  )
}

export default HomePage;