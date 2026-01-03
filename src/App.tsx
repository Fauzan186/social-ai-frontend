// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import DashboardPage from "./pages/DashboardPage";
import PrivateRoute from "./routes/PrivateRoute";
import ChatbotPage from "./pages/ChatbotPage";
import BlogListPage from "./pages/BlogListPage";
import BlogDetails from "./pages/BlogDetails";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog-list" element={<BlogListPage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <ChatbotPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
