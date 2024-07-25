import React from 'react';

const Testimonial = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="relative mb-8">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-9xl text-green-100">
            &ldquo;
          </div>
        </div>
        <h2 className="text-3xl  font-bold mb-4">Testimonial</h2>
        <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
          “Since implementing KnowledgePulse, our organization has witnessed a remarkable transformation in how we approach learning. The platform’s simplicity belies its powerful capabilities, offering a seamless and enjoyable educational experience. The efficiency with which we can now manage courses, track progress, and foster collaboration among learners is truly impressive.”
        </p>
        <div className="flex justify-center items-center mb-4">
          <img
            src="/theresa-webb.png" // Use appropriate image path
            alt="Theresa Webb"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
        
            <p className="text-gray-600">Theresa Webb</p>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <img
            src="/P3.svg" // Use appropriate image path
            alt="Reviewer 1"
            className="w-10 h-10 rounded-full"
          />
          <img
            src="/P4.svg" // Use appropriate image path
            alt="Reviewer 2"
            className="w-10 h-10 rounded-full"
          />
          <img
            src="/P5.svg" // Use appropriate image path
            alt="Reviewer 3"
            className="w-10 h-10 rounded-full"
          />
          <img
            src="/P6.svg" // Use appropriate image path
            alt="Reviewer 4"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
