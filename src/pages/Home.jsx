import React from "react";
//import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import TrustedBy from "../components/TrustedBy";
import CoursesSection from "../components/CoursesSection";
import HowItWorks from "../components/HowItWorks";
import Mentors from "../components/Mentors";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const Page = () => {
  return (
    <div>
      <HeroSection />
      <TrustedBy />
      <CoursesSection />
      <HowItWorks />
      <Mentors />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Page;
