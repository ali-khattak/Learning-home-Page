import React, { useState, useEffect, useRef } from 'react';
import heroImage from '/heroImage.png'; // Replace with the actual path to your image
import { FaChevronDown } from 'react-icons/fa';

const HeroSection = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setDropdownVisible((prevVisible) => !prevVisible);
  };

  const handleDropdownItemClick = () => {
    setDropdownVisible(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    if (dropdownVisible) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownVisible]);

  return (
    <section className="relative bg-teal-50 p-8">
      <div className="container mx-auto flex justify-center">
        <div className="bg-[#000C34] text-white rounded-lg p-16 md:flex md:items-center shadow-lg">
          <div className="md:w-1/2">
            <h1 className="text-lg font-medium tracking-widest">K N O W L E D G E P U L S E</h1>
            <h2 className="text-6xl font-bold mt-4">Knowledge Meets<br /> Innovation</h2>
            <p className="mt-4">
              This platform's simplicity belies its powerful capabilities, offering a seamless and enjoyable educational experience.
            </p>
            <div className="mt-6 flex relative">
              <div className="relative w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search Courses"
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none text-black pl-10"
                  style={{ height: '48px' }} // Ensure the height matches the button
                />
                <img
                  src="/search-icon.svg" // Adjust the path as needed
                  alt="Search"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8"
                />
              </div>
              <div className="relative" ref={dropdownRef}>
                <button
                  className="bg-teal-600 text-white px-4 py-2 rounded-r-full flex items-center"
                  onClick={handleToggleDropdown}
                  style={{ height: '48px' }} // Match the height of the input field
                >
                  Courses
                  <FaChevronDown className="ml-6 " />
                </button>

                {dropdownVisible && (
                  <div className="absolute right-0 mt-2 w-48 bg-green border border-gray-300 rounded-lg shadow-lg z-10">
                    <ul className="py-2">
                      <li
                        className="px-4 py-2 hover:bg-white-100 cursor-pointer"
                        onClick={handleDropdownItemClick}
                      >
                        Course 1
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-white-100 cursor-pointer"
                        onClick={handleDropdownItemClick}
                      >
                        Course 2
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <img src={heroImage} alt="Hero" className="w-full md:w-82 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
