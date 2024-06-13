import React, { useState } from 'react'; // Import useState here
import Crystal from '../assets/crystal.png';
import HoverImg from '../assets/crystal-hover2.gif';
import Crystalcode from '../assets/crystalcode.png';
// import Bgsection from '../assets/section2.gif';
import Bgsection2 from '../assets/lastsebg.jpg';

const ARCrystal = () => {
  // State to track whether the image is hovered
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='w-full bg-[#000000] py-10 '>
      <div className='max-w-[100%] mx-auto grid md:grid-cols-2' style={{ 
          backgroundImage: `url(${Bgsection2})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'right', 
          opacity:'1' }}
          >
        
        {/* Image container with hover events */}
        <div
          className='w-[500px] mx-auto my-4'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src={isHovered ? HoverImg : Crystal} 
            alt='Interactive Crystal' 
            className='w-full transition-opacity duration-300 ease-in-out'
          />
        </div>

        <div className='flex flex-col px-10 ml-20 justify-center' > 
          <p className='text-[#8d6eff] font-bold'>Host by SnapAR</p>
          <h1 className='md:text-6xl sm:text-4xl text-2xl py-2 text-white'>AR Crystal</h1>
          <h1 className='md:text-6xl sm:text-4xl text-2xl py-2 text-white'>Fortune Teller</h1>
          <p className='text-white'>
            Scan QR code to experience
          </p>
          <img className=" w-[80px] h-[80px] mt-100 " src={Crystalcode} alt="QR Code" />
        </div>
      </div>
    </div>
  );
};

export default ARCrystal;
