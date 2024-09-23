import React from 'react';
import backgroundImage from '/Users/lavishchawda/Desktop/Portfolio/src/assets/night-sky.jpg'; // Adjust the import path as needed
import Type from "../../component/Hero/type";

function Hero() {
  return (
    <div
      className="w-full bg-black pt-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '93vh',
      }}
    >
      <div className="absolute inset-0 bg-hero-gradient" /> {/* Gradient Overlay */}
      <div className="flex flex-col md:flex-row items-center justify-between m-auto text-white gap-5 md:gap-16 p-16 relative z-10 h-full">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl transition duration-300 font-bold">I'm Lavish Chawda</h1>
          <div className="p-5 md:p-0 font-bold text-lg">
            <Type />
          </div>
        </div>
        <div className="max-w-xs md:max-w-sm rounded-full overflow-hidden relative z-10 transform transition-transform duration-300 hover:rotate-3 hover:scale-105">
          <img
            src="https://imgs.search.brave.com/xFkz2rHVRFxHB3pOHKPh-9VUyP9DKszbVpTUzIP9HvM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1wcm9m/aWxlLXBpY3R1cmUt/ODdoNDZnY29iamw1/ZTR4dS5qcGc"
            alt="Profile"
            className="transition-transform duration-300 transform hover:rotate-3 hover:scale-105 w-full h-auto" // Responsive image
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
