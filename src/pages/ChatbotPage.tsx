// src/pages/ChatbotPage.tsx

import React from 'react';
import Header from '../components/Header';
import Chatbot from '../components/Chatbot/Chatbot';

const ChatbotPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Chatbot />
    </div>
  );
};

export default ChatbotPage;
