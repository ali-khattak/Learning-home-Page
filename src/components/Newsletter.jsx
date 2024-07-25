import React from 'react';

const Newsletter = () => {
  return (
    <div className="py-16 bg-green-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">
          <span className="relative inline-block">
            Subscribe
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-200 transform rotate-2"></span>
          </span>
          Our Newsletter
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Join now to receive personalized recommendations from <br></br> the full Coursera catalog.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your mail"
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-l-lg w-64 focus:outline-none"
          />
          <button className="bg-teal-800 text-white px-6 py-2 rounded-r-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
