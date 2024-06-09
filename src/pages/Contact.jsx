import React from 'react';
import data from '../assets/data.gif';
const Contact = () => {
    return (
        <div className='bg-black px-5 py-10 flex justify-center items-center'>
            <div className='container max-w-6xl mx-auto flex flex-col md:flex-row'>
                <div className='flex flex-1 justify-center md:justify-start items-center mb-10 md:mb-0'>
                    <img 
                      src={data}
                        alt="Contact Us" 
                        className='rounded-lg shadow-lg w-full '
                    />
                </div>
                <div className='flex-1'>
                    <form className='max-w-md mx-auto bg-white rounded-lg p-8'>
                        <label htmlFor="name" className='text-gray-600 font-semibold'>Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            className='mt-2 mb-4 p-2 bg-gray-50 border border-gray-300 rounded-md w-full'
                        />
                        
                        <label htmlFor="email" className='text-gray-600 font-semibold'>Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Your Email"
                            className='mt-2 mb-4 p-2 bg-gray-50 border border-gray-300 rounded-md w-full'
                        />
                        
                        <label htmlFor="message" className='text-gray-600 font-semibold'>Message</label>
                        <textarea
                            id="message"
                            placeholder="Your Message"
                            rows="4"
                            className='mt-2 mb-6 p-2 bg-gray-50 border border-gray-300 rounded-md w-full'
                        ></textarea>
                        
                        <button
                            type="submit"
                            className='bg-[#00df9a] hover:bg-[#479681] w-full rounded-md font-medium py-4 text-black duration-300 ease-in-out'
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
