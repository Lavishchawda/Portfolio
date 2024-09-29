import React from 'react';
import backgroundImage from '/Users/lavishchawda/Desktop/Portfolio/src/assets/night-sky.jpg'; // Adjust the import path as needed
import Type from "../../component/Hero/type";
import dp from "../../assets/dp.jpg";

function Hero() {
  const SCROLL_OFFSET = 30; // Adjust as needed

  const scrollToSection = (sectionId) => () => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - SCROLL_OFFSET;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div id='hero'
      className="w-full relative bg-black pt-20"
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
        <h1 className="text-4xl md:text-5xl font-bold">Hi 👋</h1>
          <h1 className="text-4xl md:text-5xl font-bold">I'm Lavish Chawda</h1>
          <div className="p-5 md:p-0 font-bold text-lg">
            <Type />
          </div>
        </div>
        <div className="max-w-xs md:max-w-sm rounded-full overflow-hidden relative z-10">
          <img
            src={dp}
            alt="Profile"
            className="w-full h-full object-cover" // Responsive image
          />
        </div>
      </div>

      {/* Custom Bouncing Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
        <div className="bounce-arrow text-white text-4xl cursor-pointer" onClick={scrollToSection('about')}>
          ↓
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .bounce-arrow {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-30px);
          }
          60% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;
