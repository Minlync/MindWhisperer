import React from 'react';
import { ReactTyped } from "react-typed";
import '../background.css';

const Hero2 = () => {
  return (
    <div>
        <div className='relative'>
      <div  className='text-white mt-[20px] flex flex-col h-screen'>
      <div  className="background flex flex-col h-screen ">
             {Array.from({ length: 10 }).map((_, idx) => <span key={idx}></span>)}
            </div>
        <div className='max-w-[800px]  w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold p-2'>Growing with Data Analytics</p>
          
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with Data</h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl py-4 font-bold'>Fast Flexible Financing for</p>
            <ReactTyped
              className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
              strings={['BTB', 'BTC', 'SASS']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className='md:text-2xl text-xl my-8 text-gray-500'>Helps Your Company Thrive: Unlocking Insights</p>
          <button className='bg-[#00df9a] hover:bg-[#479681] w-[200px] rounded-md font-medium my-8 mx-auto py-4 text-black duration-300 ease-in-out'>Get Started</button>
        </div>
        
      </div>
    </div>
    
    </div>
  );
};

export default Hero2;
