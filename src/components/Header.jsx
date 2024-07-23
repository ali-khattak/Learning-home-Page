import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import searchIcon from '/public/search-icon.svg'; // Adjust the path as needed

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuItems = ["Courses", "Pages", "About", "Sign in"];

  const handleToggleMenu = () => {
    setMenuVisible((prevVisible) => !prevVisible);
  };
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import searchIcon from '/public/search-icon.svg'; // Adjust this path as necessary

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuItems = ["Courses", "Pages", "About", "Sign in"];

  const handleToggleMenu = () => {
    setMenuVisible((prevVisible) => !prevVisible);
  };

  const handleSearchKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Handle search functionality here
      console.log('Search:', event.target.value);
    }
  };

  return (
    <header className="w-full p-8 bg-[#F4FDFB]">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h1 className="text-teal-700 text-2xl font-bold">KnowledgePulse</h1>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses"
              className="px-4 py-2 border rounded-lg bg-white pl-10"
              onKeyPress={handleSearchKeyPress}
            />
            <img
              src={searchIcon}
              alt="Search"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
            />
          </div>
        </div>
        <button className="lg:hidden text-black text-2xl" onClick={handleToggleMenu}>
          {menuVisible ? <FaTimes /> : <FaBars />}
        </button>
        <nav className="hidden lg:flex justify-center items-center">
          <ul className="flex space-x-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href="#" className="block lg:inline hover:underline">
                  {item.includes("Pages") ? (
                    <select className="bg-transparent">
                      <option>{item}</option>
                    </select>
                  ) : (
                    item
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:flex items-center">
          <button className="ml-4 px-5 py-2 bg-green-600 text-white rounded-full">
            Sign Up
          </button>
        </div>
      </div>
      {menuVisible && (
        <div className="lg:hidden mt-4">
          <nav className="flex flex-col items-center">
            <ul className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href="#" className="block text-center hover:underline">
                    {item.includes("Pages") ? (
                      <select className="bg-transparent">
                        <option>{item}</option>
                      </select>
                    ) : (
                      item
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center mt-4">
              <button className="px-5 py-2 bg-green-600 text-white rounded-full">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

  const handleSearchKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Handle search functionality here
      console.log('Search:', event.target.value);
    }
  };

  return (
    <header className="w-full p-8 bg-[#F4FDFB]">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h1 className="text-teal-700 text-2xl font-bold">KnowledgePulse</h1>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses"
              className="px-4 py-2 border rounded-lg bg-white pl-10"
              onKeyPress={handleSearchKeyPress}
            />
            <img
              src={searchIcon}
              alt="Search"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
            />
          </div>
        </div>
        <button className="lg:hidden text-black text-2xl" onClick={handleToggleMenu}>
          {menuVisible ? <FaTimes /> : <FaBars />}
        </button>
        <nav className="hidden lg:flex justify-center items-center">
          <ul className="flex space-x-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href="#" className="block lg:inline hover:underline">
                  {item.includes("Pages") ? (
                    <select className="bg-transparent">
                      <option>{item}</option>
                    </select>
                  ) : (
                    item
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:flex items-center">
          <button className="ml-4 px-5 py-2 bg-green-600 text-white rounded-full">
            Sign Up
          </button>
        </div>
      </div>
      {menuVisible && (
        <div className="lg:hidden mt-4">
          <nav className="flex flex-col items-center">
            <ul className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href="#" className="block text-center hover:underline">
                    {item.includes("Pages") ? (
                      <select className="bg-transparent">
                        <option>{item}</option>
                      </select>
                    ) : (
                      item
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center mt-4">
              <button className="px-5 py-2 bg-green-600 text-white rounded-full">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
