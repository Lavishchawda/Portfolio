import React, { useEffect, useState } from 'react';
import backgroundImage from '/Users/lavishchawda/Desktop/Portfolio/src/assets/night-sky.jpg'; // Adjust the import path as needed

function Skill() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay for fade-in effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="w-full bg-black pt-20 px-4 md:px-16 lg:px-32 pt-14 py-16" // Added responsive padding
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-white text-center mb-8 text-4xl font-bold">Skills</h1>
      <div className="flex flex-wrap gap-8 items-center justify-center pt-5">
        {['HTML', 'CSS', 'JS', 'Python', 'React'].map(skill => (
          <div 
            key={skill}
            className={`text-white bg-slate-800 rounded-full w-24 h-24 flex items-center justify-center text-xl font-bold shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 shadow-slate-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 0.5s ease-in-out' }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
