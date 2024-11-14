import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import { FaSquareGithub } from "react-icons/fa6";


const ConnectMe = () => {
  return (
    <div className=" text-white py-20">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12">Connect Me<hr className="mt-4"/></h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        <div className="flex-1">
          <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
          from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
          <p>I'm open to discussing web development projects or partnership opportunities.</p>
          <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
              <a href="mailto:youremail@example.com" className='hover:underline'>
                  webdev6190@gmail.com
              </a>
          </div>
          <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
              <span>+234 8133 6386 44</span>
          </div>

          <div className='mb-4'>
              <FaFacebook className='inline-block text-green-400 mr-2'></FaFacebook>
              <span>charlse sylvester</span>
          </div>

          <div className='mb-4'>
              <FaSquareGithub className='inline-block text-green-400 mr-2'></FaSquareGithub>
              <span>WebDev6190</span>
          </div>

          <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
              <span> Benin-City, Edo State, Nigeria.</span>
          </div>

          
        </div>
        <div className='flex-1 w-full'>
          <form className='space-y-4'>
              <div>
                  <label htmlFor="name" className='block mb-2'>Your Name</label>
                  <input type="text" 
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                  focus:border-green-400'
                  placeholder='Enter Your Name'/>
              </div>
              <div>
                  <label htmlFor="emial" className='block mb-2'>Email</label>
                  <input type="text" 
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                  focus:border-green-400'
                  placeholder='Enter Your Email'/>
              </div>
              <div>
                  <label htmlFor="message" className='block mb-2'>Message</label>
                  <textarea type="text" 
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                  focus:border-green-400'
                  rows="5"
                  placeholder='Enter Your Message'/>
              </div>
              <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
          transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
          </form>
        </div>
      </div>
    </div>
    <hr  className='mt-[10rem]'/>
    <div>
      <p className="py-4 text-center bg-primary text-white text-base h-[2rem] "> &copy; 2024 Devcelportfolio. All right reserved</p>
    </div>
  </div>
  )
}

export default ConnectMe