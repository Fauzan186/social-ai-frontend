// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatbotPage from './pages/ChatbotPage';
import Practice from './pages/Practice';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </Router>
  );
};

export default App;
