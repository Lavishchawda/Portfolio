import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  // Define menu items once
  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'project', label: 'Project' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="bg-slate-900 py-4 px-6 flex flex-row justify-between items-center sticky top-0 z-20">
      <div className="text-white cursor-pointer font-bold"
      onClick={scrollToSection('hero')}>LC.</div>

      <div className="relative">
        {/* Desktop menu */}
        <div className="hidden md:flex text-white cursor-pointer">
          <ul className="flex space-x-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button onClick={scrollToSection(item.id)} className="hover:text-primary">
                  {item.label}
                </button>
              </li>
            ))}
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
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button onClick={scrollToSection(item.id)} className="hover:text-primary">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
