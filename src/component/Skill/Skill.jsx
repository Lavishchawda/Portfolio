import React, { useEffect, useState } from 'react';
// Import SVGs as image URLs
import htmlLogo from '../../assets/html-logo.svg';
import cssLogo from '../../assets/tailwind-css.svg';
import jsLogo from '../../assets/js-logo.svg';
import pythonLogo from '../../assets/python-logo.svg';
import reactLogo from '../../assets/react-logo.svg';
import backgroundImage from '/Users/lavishchawda/Desktop/Portfolio/src/assets/night-sky.jpg'; // Adjust the import path as needed

const skills = [
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'JS', logo: jsLogo },
  { name: 'Python', logo: pythonLogo },
  { name: 'React', logo: reactLogo }
];

function Skill() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay for fade-in effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id='skills'
      className="w-full pt-20 px-4 md:px-16 lg:px-32 py-16" 
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-white text-center mb-8 text-4xl font-bold">Skills</h1>
      <div className="flex flex-wrap gap-8 items-center justify-center pt-5">
        {skills.map(skill => (
          <div 
            key={skill.name}
            className={`text-white bg-slate-800 rounded-full w-24 h-24 flex flex-col items-center justify-center text-xl font-bold shadow-lg transition-transform duration-500 ease-in-out hover:rotate-12 hover:scale-110 shadow-slate-600 ${isVisible ? 'opacity-100 animate-wave' : 'opacity-0'}`}
            style={{ transition: 'opacity 0.5s ease-in-out' }}
          >
            {/* Display the logo */}
            <img src={skill.logo} alt={`${skill.name} Logo`} className="w-12 h-12 mb-2" />
            {/* Skill name below the logo */}
            <p className="text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
