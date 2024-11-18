import React from 'react'
import DevCelo from '../assets/DevCelo.png'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
       <div className=" text-white py-20">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-300">My Portfolio<hr className="mt-3 animate-pulse"/></h2>
      
      <div className=' flex justify-center items-center '>
      <img className=' h-[16rem] w-[16rem] rounded-full object-cover 
      transform transition-transform duration-300 hover:scale-105 bg-gray-300
      mt-[4rem] ' src={DevCelo} alt="" />
      </div>

      <div className=' text-center'>
      <h1 className='mt-[2rem] text-center cursor-pointer text-transparent bg-clip-text bg-gradient-to-r
       from-green-500 to-blue-500 text-4xl font-bold mb-4'>Dev. Celestine E.O  </h1> 
      <span className=' cursor-pointer text-white to-blue-500 text-md'>A Frontend Developer with vast experience in;</span>
      <p className=' text-md text-gray-400'>(HTML, CSS, Javascript, Reactjs & Tailwindcss)</p>
      <p className=' text-lg text-gray-300'> Specialize in buiding modern and responsive web application.</p>
      </div>
    </div>
    </div>

<div className=' md:flex md:justify-center md:items-center md:space-x-16 justify-items-center'>
      <div className='  w-[20rem] p-2 rounded-lg items-center flex mb-5  bg-gray-600 my-2'>
       <p className='hover:text-gray-400/90 ml-3 text-gray-200'>Resume</p>
       <button className=' cursor-pointer text-gray-100 bg-gradient-to-r
       from-green-500 to-blue-500 text-sm ml-[9rem] py-1 px-1.5 rounded-lg
        transition-transform duration-300 hover:scale-105 '><a href="/src/Documents/Resume.pdf"download>Download</a></button>
      </div>

      <div className='  w-[20rem] p-2 rounded-lg items-center flex mb-5  bg-gray-600 my-2'>
       <p className='hover:text-gray-400/90 ml-3 text-gray-200'>I.T Cert</p>
       <button className=' cursor-pointer text-gray-100 bg-gradient-to-r
       from-green-500 to-blue-500 text-sm ml-[9rem] py-1 px-1.5 rounded-lg
        transition-transform duration-300 hover:scale-105 '><a href="/src/assets/IT.png"download>Download</a></button>
      </div>

      <div className='  w-[20rem] p-2 rounded-lg items-center flex mb-5  bg-gray-600 my-2'>
       <p className='hover:text-gray-400/90 ml-3 text-gray-200'>Degree</p>
       <button className=' cursor-pointer text-gray-100 bg-gradient-to-r
       from-green-500 to-blue-500 text-sm ml-[9rem] py-1 px-1.5 rounded-lg
        transition-transform duration-300 hover:scale-105 '><a href="/src/assets/portfolioImg.JPG"download>Download</a></button>
      </div>
</div>
    
    </div>
  )
}

export default Hero