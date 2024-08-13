import React, { useState } from 'react';
import heroImage from '/heroImage.png'; // Replace with the actual path to your image
import { FaChevronDown } from 'react-icons/fa';

const HeroSection = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownVisible((prevVisible) => !prevVisible);
  };

  return (
    <section className="relative bg-teal-50 p-16">
      <div className="container mx-auto flex justify-center">
        <div className="bg-[#000C34] text-white rounded-lg p-8 md:flex md:items-center shadow-lg">
          <div className="md:w-1/2">
            <h1 className="text-lg font-medium tracking-widest">K N O W L E D G E P U L S E</h1>

            <h2 className="text-4xl font-bold mt-4">Knowledge Meets<br></br> Innovation</h2>
            <p className="mt-4">
              This platform's simplicity belies its powerful capabilities, offering a seamless and enjoyable educational experience.
            </p>
            <div className="mt-6 flex space-x-2 relative">
              <div className="relative w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search Courses"
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none text-black pl-10"
                />
                <img
                  src="/search-icon.svg" // Adjust the path as needed
                  alt="Search"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8"
                />
              </div>
              <div className="relative">
                <button
                  className="bg-teal-600 text-white px-4 py-2 rounded-r-full flex items-center"
                  onClick={handleToggleDropdown}
                >
                  Courses
                  <FaChevronDown className="ml-2" />
                </button>
                {dropdownVisible && (
                  <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-300 rounded-lg shadow-lg z-10">
                    <ul className="py-2">
                      <li className="px-4 py-2 hover:bg-white-100 cursor-pointer">Course 1</li>
                      <li className="px-4 py-2 hover:bg-white-100 cursor-pointer">Course 2</li>

                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <img src={heroImage} alt="Hero" className="w-full md:w-2/3 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
