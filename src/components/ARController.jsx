import React from 'react';
import Crystalstone from '../assets/crystalcontroller.gif';
// import Crystalcode from '../assets/crystalcode.png';
import Bgsection from '../assets/section2.gif';

const ControlCrytal = () => {
  return (
    <div className='w-full bg-[#00000] py-20 mx-auto px-4'>
      <div className='max-w-[150%] ml-20  grid grid-cols-1 md:grid-cols-2 '>
        <div className='flex flex-col mt-20 py-20 px-10 md:ml-20 justify-start'
          style={{ 
            backgroundImage: `url(${Bgsection})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'left', 
            opacity: '1' }}>
          <h1 className='md:text-6xl sm:text-3xl text-2xl py-2  text-white'>AR Crystal</h1>
          <h1 className='md:text-6xl sm:text-3xl text-2xl py-2  text-white'>Controller</h1>
          {/* <p className='text-white'>Scan QR code to experience</p> */}
          {/* <img className="w-[120px] h-[120px] mt-10" src={Crystalcode} alt="QR Code" /> */}
          <a href="https://lens.snap.com/experience/d3b927bc-0ab2-4d4b-b8fe-929b439e6fa6" target="_blank" rel="noopener noreferrer">
          <button class='bg-gradient-to-r from-[#af46e0] to-[#8d6eff] hover:bg-[#9558d1] w-[200px] rounded-md my-8 font-medium  py-4 text-white duration-300 ease-in-out'>Try AR Lens</button>
          </a>
        </div>
        <div className='flex justify-center'>
        {/* <video className='w-[1920] h-[1920] mx-auto my-4' controls>
            <source src={Crystalstone} type='video/mp4' />
            Your browser does not support the video tag.
          </video> */}
           <img className='w-[800] h-[800] mx-auto my-4' src={Crystalstone} alt='Crystal Stone' />
      </div>
    </div>
    </div>
  );
};

export default ControlCrytal;
