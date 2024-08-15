import React from 'react';
import HeroSecForCp from '../components/HeroSecForCp'; // Import the new hero section
import CoursesSection from '../components/CoursesSection';
import Mentors from '../components/Mentors';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const CoursePage = () => {
  return (
    <div>
      <HeroSecForCp /> {/* Use the new hero section */}
      <CoursesSection />
      <Mentors />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CoursePage;
