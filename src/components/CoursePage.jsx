import React from 'react';
import HeroSecForCp from './HeroSecForCp'; // Import the new hero section
import CoursesSection from './CoursesSection';
import Mentors from './Mentors';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
import Footer from './Footer';

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
