import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const SCROLL_OFFSET = 60; // Adjust as needed

  const scrollToSection = (sectionId) => () => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - SCROLL_OFFSET;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-slate-900 py-4 px-6 flex flex-row justify-between items-center sticky top-0 z-20">
      <div className="text-white cursor-pointer font-bold">
        LC.
      </div>

      <div className="relative">
        <div className='hidden md:flex text-white cursor-pointer'>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-accent-primary">About</a></li>
            <li><a href="#Project" className="hover:text-accent-primary">Project</a></li>
            <li><a href="#skills" className="hover:text-accent-primary">Skills</a></li>
            <li><a href="#contact" className="hover:text-accent-primary">Contact</a></li>
          </ul>
        </div>

        {/* Dropdown for small screens */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 bg-slate-800 text-white mt-2 rounded shadow-lg">
            <ul className="flex flex-col space-y-2 p-4">
              <li><a href="#about" onClick={scrollToSection('about')} className="hover:text-accent-primary">About</a></li>
              <li><a href="#Project" onClick={scrollToSection('Project')} className="hover:text-accent-primary">Project</a></li>
              <li><a href="#skills" onClick={scrollToSection('skills')} className="hover:text-accent-primary">Skills</a></li>
              <li><a href="#contact" onClick={scrollToSection('contact')} className="hover:text-accent-primary">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
