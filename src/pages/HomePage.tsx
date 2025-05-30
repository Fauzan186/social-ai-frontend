import React, { useRef } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import FAQsSection from '../components/FAQsSection';
import FinalCTASection from '../components/FinalCTASection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ZetaAIFeatures from '../components/ZetaAIFeatures';


const HomePage: React.FC = () => {
  // References for each section
  const featuresRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (section: string) => {
    const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
      features: featuresRef,
      howItWorks: howItWorksRef,
      faqs: faqsRef,
      contact: contactRef,
    };

    // Scroll to the relevant section
    const selectedRef = sectionRefs[section];
    selectedRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header onNavigate={handleNavigation} />
      <HeroSection onNavigate={handleNavigation} />
      <ZetaAIFeatures />
      <div ref={featuresRef}>
        <FeaturesSection />
      </div>
      <div ref={howItWorksRef}>
        <HowItWorksSection />
      </div>
      <div ref={faqsRef}>
        <FAQsSection />
      </div>
      <div ref={contactRef}>
        <FinalCTASection />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
