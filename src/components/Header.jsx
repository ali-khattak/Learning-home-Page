import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import searchIcon from '/public/search-icon.svg'; // Adjust the path as needed

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuItems = ["Home", "Courses", "Pages", "About"];

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
          <h1 className="hidden lg:block text-teal-700 text-2xl font-bold tracking-wide">
            KnowledgePulse
          </h1>
        </div>
        <div className="flex-grow flex items-center justify-center">
          <div className="relative w-48 sm:w-64 md:w-72 lg:w-96">
            <input
              type="text"
              placeholder="Search courses"
              className="w-full px-4 py-2 border rounded-lg bg-white pl-10"
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
          <ul className="flex space-x-5">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item === "Pages" ? (
                  <select
                    className="bg-transparent"
                    onChange={(e) => window.location.href = e.target.value}
                  >
                    <option value="#">Pages</option>
                    <option value="/mentors">Mentors</option>
                    <option value="/FAQ">FAQ's</option>
                   
                    <option value="/blog-articles">Blog and<br></br> Articles</option>
                    
                  </select>
                ) : (
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="block lg:inline hover:underline"
                  >
                    {item}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:flex items-center">
          <button className="ml-4 px-5 py-2 bg-green-600 text-white rounded">
            Sign in
          </button>
        </div>
      </div>
      {menuVisible && (
        <div className="lg:hidden mt-4">
          <nav className="flex flex-col items-center">
            <ul className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item === "Pages" ? (
                    <select
                      className="bg-transparent"
                      onChange={(e) => window.location.href = e.target.value}
                    >
                      <option value="#">Pages</option>
                      <option value="/mentors">Mentors</option>
                      <option value="/FAQ">FAQ's</option>
                      <option value="/blog-articles">Blog and  Articles</option>
                      
                      
                    </select>
                  ) : (
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase().replace(' ', '-')}`}
                      className="block text-center hover:underline"
                    >
                      {item}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center mt-4">
              <button className="px-5 py-2 bg-green-600 text-white rounded">
                Sign in
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
