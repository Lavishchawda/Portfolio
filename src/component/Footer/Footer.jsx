import React from 'react';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-slate-900 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-center md:text-left mb-2 md:mb-0">
          <h3 className="text-lg md:text-sm">Designed and Developed </h3>
          <h3 className="text-lg md:text-sm">by <span className='font-bold'>Lavish Chawda</span></h3>
        </div>
        <div className="text-center mb-2 md:mb-0 md:text-right">
        <h3 className="text-sm md:text-sm">Copyright © {year} LC</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
