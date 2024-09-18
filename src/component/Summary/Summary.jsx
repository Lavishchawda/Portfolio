import React from 'react'
import pdfFile from '../../assets/Lavish_Chawda_Resume.pdf'
 
function Summary() {
  return (
    <div className="bg-black px-64 pt-14">
      <h3 className="text-white text-center mb-4 text-2xl">Summary</h3>
      <p className="text-white-light text-center">I have done MCA with a strong foundation in software development, including experience with modern
web technologies such as React, and demonstrated the ability to write clean, efficient code and
collaborate effectively with cross-functional teams. Eager to contribute to innovative projects, in a
learning-oriented environment. Proficient in cloud platforms like GCP, with a keen interest in
continuously learning emerging technologies, including AI.</p>


     <div className="w-full flex justify-center py-6">
     <a href={pdfFile} 
     download="Lavish_Chawda_Resume.pdf" 
     className="light-text w-fit m-auto flex gap-2 items-center">
        <div> Download Resume </div>
        <i className="ti ti-download"></i>
    </a>
     </div>
    </div>
    
  )
}

export default Summary