import React from 'react';
// import footerbg from '../assets/footerbg.jpg';
import Logo from '../assets/LOGO.svg'; 
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[100%] mx-auto py-16 px-4 grid lg:grid-cols-2  gap-8 text-gray-300'
    style={{ 
    backgroundSize: 'cover', 
    backgroundPosition: 'center' }}>
      <div>
      <h1 className='w-full pl-20 text-3xl font-bold text-[#ffffff]'>
          
            <img src={Logo} alt="Logo" className="h-8" /> 
          
        </h1>
        <p style={{  fontSize: '12px' }} className='pl-20 py-6'>©2024 Copyright by <a href="https://www.evelync.com/">Evelyn &</a> <a href="https://www.linkedin.com/in/ronglin-chen-61b6531b9/">Ronglin</a></p>
        {/* <p> DESIGNED BY EVELYN CHEN</p> */}
        
      </div>
      <div className='flex justify-center gap-10 my-12 md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
    </div>
  );
};

export default Footer;
