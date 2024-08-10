import React from 'react';
import Mentors from './Mentors'; // Adjust the import path as needed

const AboutPage = () => {
  return (
    <div className="container mx-auto px-8">
      

      {/* Vision Section */}
      <section className="bg-[#E0F2F1] min-h-screen flex flex-col items-center justify-center">
        <div className="bg-[#004D40] rounded-lg py-16 px-56 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-20 h-20 bg-[#B2DFDB] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#FFEB3B] rounded-full transform translate-x-1/2 translate-y-1/2"></div>
          <h4 className="text-sm text-[#B2DFDB] mb-4">OUR VISION</h4>
          <h2 className="text-2xl md:text-3xl text-white font-semibold mb-8">
            We aspire to create a global landscape<br/> where individuals everywhere possess the<br/> ability to reshape their destinies through the<br/> empowerment of education.
          </h2>
          <button className="bg-[#00796B] text-white py-2 px-6 rounded hover:bg-[#004D40] transition-all duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How KnowledgePulse <span className="text-green-600">works</span>
          </h2>
          <div className="flex flex-wrap justify-center -mx-4">
            {/* Card 1 */}
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <div className="border rounded-lg p-6 text-center shadow-lg relative">
                <img src="/signin-icon.svg" alt="Signin Icon" className="w-full h-40 object-contain mb-4" />
                <div className="absolute top-4 right-4">
                  <button className="bg-white border border-gray-300 text-gray-700 px-1 py-1 rounded-full flex items-center space-x-2">
                    <img src="/google-icon.png" alt="Google Icon" className="inline-block h-6" />
                    <span>Continue with Google</span>
                  </button>
                </div>
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <button className="bg-white border border-gray-300 text-gray-700 px-1 py-1 rounded-full flex items-center space-x-2">
                    <img src="/facebook-icon.svg" alt="Facebook Icon" className="inline-block h-6" />
                    <span>Continue with Facebook</span>
                  </button>
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-4">Create your profile</h3>
                <p className="text-gray-600 mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <button className="bg-teal-800 text-white px-4 py-2 rounded">Get Started</button>
              </div>
            </div>
            {/* Card 2 */}
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <div className="border rounded-lg p-6 text-center shadow-lg relative">
                <img src="/search-card.svg" alt="Search Icon" className="w-full h-40 object-contain mb-4" />
                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-white border border-gray-300 text-gray-700 px-1 py-1 rounded">
                    <img src="/search-icon.svg" alt="Search Icon" className="h-5 w-5 mr-2" />
                    <input
                      type="text"
                      placeholder="search courses"
                      className="bg-transparent outline-none w-full"
                    />
                  </div>
                </div>
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <div className="flex items-center bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded">
                    <img src="/search-icon.svg" alt="Search Icon" className="h-5 w-5 mr-2" />
                    <input
                      type="text"
                      placeholder="ui/ux design"
                      className="bg-transparent outline-none w-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-4">Search Courses</h3>
                <p className="text-gray-600 mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <button className="bg-teal-800 text-white px-4 py-2 rounded">Get Started</button>
              </div>
            </div>
            {/* Card 3 */}
            <div className="w-full md:w-1/3 px-4">
              <div className="border rounded-lg p-6 text-center shadow-lg relative">
                <img src="/connection-icon.png" alt="Connection Icon" className="w-full h-40 object-contain mb-4" />
                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded">
                    <img src="/search-icon.svg" alt="Search Icon" className="h-5 w-5 mr-2" />
                    <input
                      type="text"
                      placeholder="search courses"
                      className="bg-transparent outline-none w-full"
                    />
                  </div>
                </div>
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <div className="flex items-center bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded">
                    <img src="/search-icon.svg" alt="Search Icon" className="h-5 w-5 mr-2" />
                    <input
                      type="text"
                      placeholder="ui/ux design"
                      className="bg-transparent outline-none w-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-4">Make a Connection</h3>
                <p className="text-gray-600 mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <button className="bg-teal-800 text-white px-4 py-2 rounded">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <Mentors />


      {/* Footer Section */}
      <footer className="bg-[#134e4a] text-white py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KnowledgePulse</h3>
            <p className="text-sm mb-8">
              Join now to receive personalized<br/> recommendations from the<br/> full Coursera catalog.
            </p>
            <div className="flex space-x-8">
              <img src="/insta.svg" alt="Instagram" className="w-6 h-6 cursor-pointer" />
              <img src="/twitter.svg" alt="Twitter" className="w-6 h-6 cursor-pointer" />
              <img src="/facebook.svg" alt="Facebook" className="w-6 h-6 cursor-pointer" />
              <img src="/youtube.svg" alt="YouTube" className="w-6 h-6 cursor-pointer" />
            </div>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="text-sm space-y-2">
              <li>About Us</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="text-sm space-y-2">
              <li>Help centre</li>
              <li>Term Of Service</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Status</li>

            </ul>
          </div>
        </div>
        <div className="text-center text-sm mt-8">
          Designed by Rubel 2023 | All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
