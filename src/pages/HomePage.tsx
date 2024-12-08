// src/pages/HomePage.tsx

import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FAQsSection from '../components/FAQsSection';
import FinalCTASection from '../components/FinalCTASection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FAQsSection />
      <FinalCTASection />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
