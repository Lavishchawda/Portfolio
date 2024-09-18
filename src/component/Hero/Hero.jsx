import React from 'react'

function Hero() {
  return (
   <div className="w-full bg-black">
      <div className="flex items-center justify-between m-auto text-white w-fit gap-32 p-9">
         <div className="flex flex-col gap-5">
             <h1 className="text-5xl">
          I'M Lavish Chawada
        </h1>
        <h3 className='text-2xl'>
        Web Developer
        </h3>
      </div>
      <div className="max-w-80 rounded-full overflow-hidden"> 
        <img src="https://imgs.search.brave.com/xFkz2rHVRFxHB3pOHKPh-9VUyP9DKszbVpTUzIP9HvM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1wcm9m/aWxlLXBpY3R1cmUt/ODdoNDZnY29iamw1/ZTR4dS5qcGc" alt="" srcset="" />
      </div>
    </div>
   </div>
  )
}

export default Hero