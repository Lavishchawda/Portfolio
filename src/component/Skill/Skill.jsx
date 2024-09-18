import React from 'react'

function Skill() {
  return (
    <div className='bg-black py-16'>
      <h1 className="text-white text-center mb-4 text-2xl">Skill</h1>
      <div className="flex gap-8 items-center w-full justify-center pt-5">
      <div className="text-black rounded-full p-12 w-24 h-24 bg-white 
           flex items-center justify-center font-bold text-xl">HTML</div>
      <div className="text-black rounded-full p-12 w-24 h-24 bg-white 
           flex items-center justify-center font-bold text-xl">CSS</div>
      <div className="text-black rounded-full p-12 w-24 h-24 bg-white 
           flex items-center justify-center font-bold text-xl">JS</div>
      <div className="text-black rounded-full p-12 w-24 h-24 bg-white 
           flex items-center justify-center font-bold text-xl">Python</div>
      <div className="text-black rounded-full p-12 w-24 h-24 bg-white 
           flex items-center justify-center font-bold text-xl">React</div>
      </div>
    </div>
  )
}

export default Skill