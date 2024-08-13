import React, { useState } from "react";
import Select from "react-select";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import searchIcon from '/public/search-icon.svg'; // Adjust the path as needed

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(true); // State for search bar visibility
  const location = useLocation();
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

  const handlePageChange = (selectedOption) => {
    // Hide search bar when "Pages" is selected
    setSearchVisible(selectedOption.value !== "Pages");
    if (selectedOption.value !== "#") {
      window.location.href = selectedOption.value;
    }
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      border: 'none', // Remove the border
      boxShadow: 'none', // Remove the box shadow
      padding: 0,
      margin: 0,
      cursor: 'pointer',
      minHeight: 'auto',
      display: 'flex',
      alignItems: 'center',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#000', // Black color for the "Pages" text
      fontWeight: 'normal',
      marginTop: '-2px', // Move the text further up
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#000', // Black color for the placeholder text
      fontWeight: 'normal',
      marginTop: '-2px', // Move the text further up
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#000', // Black color for the dropdown arrow
      padding: '0px',
    }),
    indicatorSeparator: () => ({
      display: 'none', // Hide the indicator separator
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#f4fdfb',
      border: 'none', // Remove border around the menu
      boxShadow: 'none', // Remove box shadow
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#e5f7f1' : '#f4fdfb',
      color: '#000',
      cursor: 'pointer',
    }),
  };

  const linkClass = (item) => {
    const isActive = location.pathname === `/${item.toLowerCase()}` ||
      (location.pathname === '/' && item === 'Home');
    return `block lg:inline hover:bg-green-800 rounded ${isActive ? 'bg-green-800 text-white' : ''}`;
  };

  return (
    <header className="w-full p-6 bg-[#F4FDFB]">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h1 className="hidden lg:block text-[#000C34] text-2xl font-bold tracking-wide">
            KnowledgePulse
          </h1>
        </div>
        <div className="flex-grow flex items-center justify-center">
          {searchVisible && (
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
          )}
        </div>
        <button className="lg:hidden text-black text-2xl" onClick={handleToggleMenu}>
          {menuVisible ? <FaTimes /> : <FaBars />}
        </button>
        <nav className="hidden lg:flex items-center justify-center">
          <ul className="flex space-x-8 items-center">
            {menuItems.map((item, index) => (
              <li key={index} className="flex items-center">
                {item === "Pages" ? (
                  <div className="flex items-center">
                    <Select
                      options={[
                        { value: "#", label: "Pages" },
                        { value: "/mentors", label: "Mentors" },
                        { value: "/FAQ", label: "FAQ's" },
                        { value: "/blog-articles", label: "Blog and Articles" },
                      ]}
                      styles={customStyles}
                      onChange={handlePageChange}
                      placeholder="Pages"
                      className="bg-transparent border-none focus:ring-0"
                    />

                  </div>
                ) : (
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(' ', '-')}`}
                    className={linkClass(item)}
                  >
                    {item}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <button className="px-5 py-2 bg-[#000C34] text-white rounded">
                Sign in
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {menuVisible && (
        <div className="lg:hidden mt-4">
          <nav className="flex flex-col items-center">
            <ul className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  {item === "Pages" ? (
                    <div className="flex items-center">
                      <Select
                        options={[
                          { value: "#", label: "Pages" },
                          { value: "/mentors", label: "Mentors" },
                          { value: "/FAQ", label: "FAQ's" },
                          { value: "/blog-articles", label: "Blog and Articles" },
                        ]}
                        styles={customStyles}
                        onChange={handlePageChange}
                        placeholder="Pages"
                        className="bg-transparent border-none focus:ring-0"
                      />

                    </div>
                  ) : (
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase().replace(' ', '-')}`}
                      className={linkClass(item)}
                    >
                      {item}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <button className="px-5 py-2 bg-[#000C34] text-white rounded">
                  Sign in
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
