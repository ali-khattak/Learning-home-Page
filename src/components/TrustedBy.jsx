import React from 'react';
import airbnbLogo from '/airbnbLogo.png';
import gettyImagesLogo from '/GettyImagesLogo.png';
import amazonLogo from '/amazonLogo.png';
import fiverrLogo from '/fiverrLogo.png';
import wishLogo from '/wishLogo.png';

const TrustedBy = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-xl font-semibold mb-6">
          Join the 2000+ companies we’re already learning with
        </h2>
        <div className="flex flex-wrap justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="w-1/2 md:w-auto px-2">
            <img src={airbnbLogo} alt="Airbnb" className="w-full max-w-[100px] mx-auto" />
          </div>
          <div className="w-1/2 md:w-auto px-2">
            <img src={gettyImagesLogo} alt="Getty Images" className="w-full max-w-[100px] mx-auto" />
          </div>
          <div className="w-1/2 md:w-auto px-2">
            <img src={amazonLogo} alt="Amazon" className="w-full max-w-[100px] mx-auto" />
          </div>
          <div className="w-1/2 md:w-auto px-2">
            <img src={fiverrLogo} alt="Fiverr" className="w-full max-w-[100px] mx-auto" />
          </div>
          <div className="w-1/2 md:w-auto px-2">
            <img src={wishLogo} alt="Wish" className="w-full max-w-[100px] mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
