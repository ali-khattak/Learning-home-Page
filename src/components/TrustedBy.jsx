import React from 'react';
import airbnbLogo from '/public/airbnbLogo.png';
import gettyImagesLogo from '/public/GettyImagesLogo.png';
import amazonLogo from '/public/amazonLogo.png';
import fiverrLogo from '/public/fiverrLogo.png';
import wishLogo from '/public/wishLogo.png';

const TrustedBy = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold mb-6">
          Join the 2000+ companies we’re already learning with
        </h2>
        <div className="flex justify-center items-center space-x-8">
          <img src={airbnbLogo} alt="Airbnb" className="logo" />
          <img src={gettyImagesLogo} alt="Getty Images" className="logo" />
          <img src={amazonLogo} alt="Amazon" className="logo" />
          <img src={fiverrLogo} alt="Fiverr" className="logo" />
          <img src={wishLogo} alt="Wish" className="logo" />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
