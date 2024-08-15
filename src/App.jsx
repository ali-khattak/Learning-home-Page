// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CoursePage from "./pages/CoursePage";
import Navbar from "./components/Header";
import SubCourseDetails from "./pages/SubCourseDetails";
import MentorsPage from "./pages/MentorsPage";
import BlogAndArticlesPage from "./pages/BlogAndArticlesPage";
import ArticleDetailsPage from "./pages/ArticleDetailsPage";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/subcourse-details" element={<SubCourseDetails />} />
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/blog-articles" element={<BlogAndArticlesPage />} />
          <Route path="/articles/:id" element={<ArticleDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
