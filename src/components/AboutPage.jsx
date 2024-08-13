import React from 'react';
import Mentors from './Mentors'; // Adjust the import path as needed
import Footer from './Footer'; // Import the Footer component
import HowItWorks from './HowItWorks'; // Import the HowItWorks component

const AboutPage = () => {
  return (
    <div>
      {/* Vision Section */}
      <section className="bg-green-50 min-h-screen flex flex-col items-center justify-center">
        <div className="bg-teal-800 rounded-lg py-48 px-72 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-20 h-20 bg-[#B2DFDB] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#FFEB3B] rounded-full transform translate-x-1/2 translate-y-1/2"></div>
          <h4 className="text-sm text-white mb-4">OUR VISION</h4>
          <h2 className="text-2xl md:text-3xl text-white font-semibold mb-8">
            We aspire to create a global landscape<br/> where individuals everywhere possess the<br/> ability to reshape their destinies through the<br/> empowerment of education.
          </h2>
          <button className="bg-[#00796B] text-white py-2 px-6 rounded hover:bg-[#004D40] transition-all duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Mentors Section */}
      <Mentors />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AboutPage;
