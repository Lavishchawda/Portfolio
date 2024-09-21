import React from 'react';
import backgroundImage from '/Users/lavishchawda/Desktop/Portfolio/src/assets/home-bg.jpg'; // Adjust the import path as needed

function Hero() {
  return (
    <div
      className="w-full bg-black pt-20" // Added padding-top to create space for the navbar
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
      }}
    >
      <div className="absolute inset-0 bg-hero-gradient" /> {/* Gradient Overlay */}
      <div className="flex items-center justify-between m-auto text-white w-fit gap-32 p-9 relative z-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl  transition duration-300">I'M Lavish Chawda</h1>
          <h3 className="text-2xl font-bold  text-yellow-500 ">"Web Developer"</h3>
        </div>
        <div className="max-w-80 rounded-full overflow-hidden relative z-10 transform transition-transform duration-300 hover:rotate-3 hover:scale-105">
          <img
            src="https://imgs.search.brave.com/xFkz2rHVRFxHB3pOHKPh-9VUyP9DKszbVpTUzIP9HvM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1wcm9m/aWxlLXBpY3R1cmUt/ODdoNDZnY29iamw1/ZTR4dS5qcGc"
            alt="Profile"
            className="transition-transform duration-300 transform hover:rotate-3 hover:scale-105" // Apply tilt effect here
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
