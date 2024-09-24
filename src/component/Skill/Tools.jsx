import React, { useEffect, useState } from 'react';
// Import SVGs as image URLs for tools
import vscodeLogo from '../../assets/vscode-logo.svg';
import gitLogo from '../../assets/git.svg';
import chatgptLogo from '../../assets/chatgpt-logo.svg';
import figmaLogo from '../../assets/figma-logo.svg';
import slackLogo from '../../assets/slack-logo.svg';
import backgroundImage from '/Users/lavishchawda/Desktop/Portfolio/src/assets/night-sky.jpg'; // Adjust the import path as needed

const tools = [
  { name: 'VSCode', logo: vscodeLogo },
  { name: 'Git', logo: gitLogo },
  { name: 'ChatGPT', logo: chatgptLogo },
  { name: 'Figma', logo: figmaLogo },
  { name: 'Slack', logo: slackLogo }
];

function Tools() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay for fade-in effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="w-full bg-black pt-20 px-4 md:px-16 lg:px-32 pt-14 py-16" // Added responsive padding
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-white text-center mb-8 text-4xl font-bold">Tools</h1>
      <div className="flex flex-wrap gap-8 items-center justify-center pt-5">
        {tools.map(tool => (
          <div 
            key={tool.name}
            className={`text-white bg-slate-800 rounded-full w-24 h-24 flex flex-col items-center justify-center text-xl font-bold shadow-lg animate-wave shadow-slate-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 0.5s ease-in-out' }}
          >
            {/* Use img tag to display SVG logos */}
            <img src={tool.logo} alt={`${tool.name} Logo`} className="w-12 h-12 mb-2" />
            <p className="text-sm ">{tool.name}</p> {/* Tool name below the logo */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tools;
