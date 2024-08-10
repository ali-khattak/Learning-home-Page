// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CoursePage from './components/CoursePage';
import Navbar from './components/Header';
import SubCourseDetails from './components/SubCourseDetails';
import MentorsPage from './components/MentorsPage';
import BlogAndArticlesPage from "./components/BlogAndArticlesPage";
import ArticleDetailsPage from './components/ArticleDetailsPage';
import AboutPage from './components/AboutPage';
import FAQPage from './components/FAQPage';


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
          <Route path="/blog-articles" element={<BlogAndArticlesPage/>} />
          <Route path="/articles/:id" element={<ArticleDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />

      </Routes>
      </div>
    </Router>
  );
}

export default App;
