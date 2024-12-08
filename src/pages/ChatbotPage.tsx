// src/pages/ChatbotPage.tsx

import React, { useRef } from 'react';
import Header from '../components/Header';
import Chatbot from '../components/Chatbot/Chatbot';

const ChatbotPage: React.FC = () => {
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
      <Chatbot />
    </div>
  );
};

export default ChatbotPage;
