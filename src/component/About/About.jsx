import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import pdfFile from '../../assets/Lavish_Chawda_Resume.pdf';
import backgroundImage from '/Users/lavishchawda/Desktop/Portfolio/src/assets/night-sky.jpg'; // Adjust the import path as needed

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const handleScroll = () => {
    const { top } = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (top < windowHeight * 0.8) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id='about' className="relative w-full pt-20 px-4 sm:px-8 md:px-16 lg:px-32"> {/* Adjust padding for responsiveness */}
      {/* Background Image with Blur Effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(0.5px)', // Adjust blur intensity
          zIndex: -1, // Place behind other content
        }}
      />

      <h3 className="text-white text-center mb-4 text-2xl font-poppins md:text-3xl">About</h3>

      {/* Adding Framer Motion for smooth animations */}
      <motion.p 
        ref={ref}
        className="text-white-light text-center relative z-10 font-poppins text-base md:text-lg lg:text-xl" // Responsive text size
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}  // Smooth entrance when visible
        transition={{ duration: 0.8 }}
      >
        I have done MCA with a strong foundation in software development, including experience with modern
        web technologies such as React, and demonstrated the ability to write clean, efficient code and
        collaborate effectively with cross-functional teams. Eager to contribute to innovative projects in a
        learning-oriented environment. Proficient in cloud platforms like GCP, with a keen interest in
        continuously learning emerging technologies, including AI.
      </motion.p>

      <div className="w-full flex justify-center py-6">
        <a 
          href={pdfFile} 
          download="Lavish_Chawda_Resume.pdf" 
          className="light-text w-fit m-auto flex gap-2 items-center font-poppins text-sm md:text-base" // Responsive text size
        >
          <div> Download Resume </div>
          <i className="ti ti-download"></i>
        </a>
      </div>
    </div>
  );
}

export default About;
