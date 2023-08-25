import React from "react";


const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
     <div>
      <ul className='flex'>
        <li>About Me</li>
        <li>Contact</li>
        <li>Projects</li>
        <li>Resume</li>
      </ul>
     </div>
    
    </div>
  );
};

export default Navbar
