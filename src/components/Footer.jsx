import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#000C34] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between space-y-8 md:space-y-0">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">KnowledgePulse</h3>
            <p className="mb-4 text-sm">
              Join now to receive personalized <br />
              recommendations <br />
              from the full Coursera catalog.
            </p>

            <div className="flex space-x-4">
              <FaInstagram className="text-xl" />
              <FaFacebook className="text-xl" />
              <FaTwitter className="text-xl" />
              <FaYoutube className="text-xl" />
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Company</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#about">About us</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact us</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Support</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#help">Help center</a></li>
              <li><a href="#terms">Terms of service</a></li>
              <li><a href="#legal">Legal</a></li>
              <li><a href="#privacy">Privacy policy</a></li>
              <li><a href="#status">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-left-1 text-sm">
          <p>Designed by &copy; Ali Shan Khattak, 2023, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
