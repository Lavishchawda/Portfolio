import React from 'react';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-slate-900 text-white py-4 static">
      <div className="container mx-auto flex justify-between items-center">
        <div className="">
          <h3>Designed and Developed </h3>
            <h3>Lavish Chawda</h3>
             
        </div>
        <div >
          <h3>Copyright © {year} LC</h3>
        </div>
        <div >
          <p>Follow me on social media</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
