import React from 'react'
import DevCelo from '../assets/DevCelo.png'

const Hero = () => {
  return (
    <div>
       <div className=" text-white py-20">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-6 animate-bounce">My Portfolio<hr className="mt-4"/></h2>
      
      <div className=' flex justify-center items-center '>
      <img className=' h-[16rem] w-[16rem] rounded-full object-cover 
      transform transition-transform duration-300 hover:scale-105 bg-gray-300
      mt-[4rem] ' src={DevCelo} alt="" />
      </div>

      <div className=' text-center'>
      <h1 className='mt-[2rem] text-center cursor-pointer text-transparent bg-clip-text bg-gradient-to-r
       from-green-500 to-blue-500 text-3xl font-bold'>Dev. Celestine E.O  </h1> 
      <span className=' cursor-pointer text-white to-blue-500 text-sm'>A Frontend Developer.</span>
      <p className=' text-sm text-gray-400'>(HTML, CSS, Javascript, Reactjs & Tailwindcss)</p>
      <p className=' text-sm text-gray-300'> Specialize in buiding modern and responsive web application.</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Hero