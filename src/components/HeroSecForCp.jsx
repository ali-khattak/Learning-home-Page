import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const HeroSecForCp = () => {
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
    <section className="relative bg-teal-50 p-8 min-h-screen flex items-center justify-center">
      <div className="bg-[#000C34] text-white rounded-lg p-48 shadow-lg w-full max-w-8xl flex flex-col items-center">
        <h1 className="text-lg font-medium tracking-widest">KNOWLEDGEPULSE</h1>
        <h2 className="text-4xl font-bold mt-4">Our Courses</h2>
        <p className="mt-4 text-center">
          This platform's simplicity belies its powerful capabilities,offering <br></br>  a seamless and enjoyable educational experience.
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
              <div className="absolute bg-[#000C34] right-0 mt-2 w-48 bg-black border border-gray-300 rounded-lg shadow-lg z-10">
                <ul className="py-2">
                  <li
                    className="px-4 py-2 hover: cursor-pointer"
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
    </section>
  );
};

export default HeroSecForCp;





