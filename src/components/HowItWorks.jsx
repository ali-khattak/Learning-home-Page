import React from 'react';

const HowItWorks = () => {
  return (
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
  );
};

export default HowItWorks;
