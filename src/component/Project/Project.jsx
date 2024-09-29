import React from 'react';
import img1 from '../../assets/netflix.jpg'; 
import img2 from '../../assets/netflix.jpg'; 
import img3 from '../../assets/netflix.jpg'; 
import backgroundImage from '/Users/lavishchawda/Desktop/Portfolio/src/assets/night-sky.jpg'; // Adjust the import path as needed

// ProjectCard Component with URL and Image Source
const ProjectCard = ({ title, url, imgSrc }) => (
  <div className="square-card p-4 rounded-lg text-center flex flex-col justify-between backdrop-blur-lg bg-white/10 border border-white/20 max-w-xs w-full mx-auto" style={{ height: '300px' }}>
    <div className="w-full h-36 overflow-hidden rounded-md">
      <img 
        src={imgSrc} 
        alt="Project" 
        className="w-full h-full object-cover" 
      />
    </div>
    <div className="mt-2 text-cyan-300 font-semibold text-lg">{title}</div>
    
    {/* Button with URL */}
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button className="bg-cyan-500 text-black text-sm font-sans py-1 px-3 mt-2 border-solid rounded-md hover:bg-cyan-700 transition-all duration-300">
        View Project
      </button>
    </a>
  </div>
);

function Project() {
  return (
    <div id='project' className="w-full bg-black pt-20 pb-20" // Added padding-bottom to create space below the section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'auto', // Set height to auto for better flexibility
      }}>
      
      <h1 className="text-white text-center mb-8 text-4xl font-bold">Projects</h1>

      {/* Flexbox Container for Cards */}
      <div className="flex flex-wrap gap-6 items-start justify-center pt-5 px-4">
        <ProjectCard title="One Scroll" url="https://github.com/Lavishchawda/One-Scroll.git" imgSrc={img1} />
        <ProjectCard title="Surbhi Documentation" url="https://example.com/surbhi-documentation" imgSrc={img2} />
        <ProjectCard title="JS" url="https://example.com/js-project" imgSrc={img3} />
      </div>
    </div>
  );
}

export default Project;
