import React from 'react';
import '../gradient.css'; 
import productstore from '../assets/store.mp4';


const Product = () => {


  return (
    <div>
        {/* <div className='text-white bg-gradient-to-t from-black to-purple-950  h-screen flex justify-center items-center' style={{ backgroundVideo: `url(${productstore})`, backgroundSize: 'cover', backgroundPosition: 'center'  }}> */}
        <div className='relative h-screen'>
      
      <video 
        className='absolute top-0 left-0 w-full h-full object-cover '
        src={productstore}
        autoPlay
        loop
        muted
      />
        <div className='absolute top-10 left-0 w-full flex justify-center'>
        <h1 className='text-4xl py-20 md:text-[104px] font-bold text-white'>Coming Soon</h1>
      </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
         <h1 className='text-container md:text-7xl py-6 sm:text-6xl text-4xl z md:py-6 ml-0:8 md:pl-50 text-center'>Coming Soon</h1>
         <div className='flex justify-center items-center'>
          </div>
          
          {/* <button class='bg-gradient-to-r from-[#af46e0] to-[#8d6eff] hover:bg-[#9558d1] w-[200px] rounded-md font-medium my-8 mx-auto py-4 text-white duration-300 ease-in-out'>Start Reading</button> */}

        </div>
      </div>

    </div>
  );
};

export default Product;
