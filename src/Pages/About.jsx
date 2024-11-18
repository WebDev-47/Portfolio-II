import React from 'react'
import DevCelo from '../assets/DevCelo.png'

const About = () => {

  return (

    
    <div className=" text-white py-20">
      <div className=" container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me<hr className="mt-4"/></h2>
        <div className=" flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={DevCelo}
            alt=""
            className=" w-[18rem] h-[18rem]  rounded-full object-cover 
            mb-8 md:mb-0 bg-gray-300  "
          />
          <div className="flex-1">
            <p className=" text-lg mb-8">
              I am a passionate Frontend developer with a focus on building
              modern and responsive web applications. with a strong foundation
              in Frontend technologies, I strive to create seamless and
              efficient user experiences.
            </p>
             
            <div className="space-y-4 ">
              <div className=" flex items-center mt-[6rem]">
                <label htmlFor="htmlandcss" className=" w-2/12">
                  HTML & CSS
                </label>

                <div className=" grow bg-gray-400 rounded-full h-2.5">
                  <div
                    className=" bg-gradient-to-r from-green-400 to-blue-500 h-2.5
          rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>

              <div className=" flex items-center">
                <label htmlFor="reactjs" className=" w-2/12">
                  React JS
                </label>
                <div className=" grow bg-gray-400 rounded-full h-2.5">
                  <div
                    className=" bg-gradient-to-r from-green-400 to-blue-500 h-2.5
          rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>

              <div className=" flex items-center">
                <label htmlFor="Nodejs" className=" w-2/12">
                  Node JS
                </label>
                <div className=" grow bg-gray-400 rounded-full h-2.5">
                  <div
                    className=" bg-gradient-to-r from-green-400 to-blue-500 h-2.5
          rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>

              <div className=" flex items-center">
                <label htmlFor="Tailwindcss" className=" w-2/12">
                  Tailwindcss
                </label>
                <div className=" grow bg-gray-400 rounded-full h-2.5">
                  <div
                    className=" bg-gradient-to-r from-green-400 to-blue-500 h-2.5
          rounded-full transform transition-transform duration-300 hover:scale-105 w-11.2/12"
                  ></div>
                </div>
              </div>
            </div>

            <div className=" mt-[12rem] flex justify-between text-center">
              <div>
                <h3 className=" text-base font-bold hidden md:inline 
        cursor-pointer text-transparent bg-clip-text 
        bg-gradient-to-r from-green-400 to-blue-500">
                  2+
                </h3>
                <p>Years Experience</p>
              </div>

              <div>
                <h3 className=" text-base font-bold hidden md:inline 
        cursor-pointer text-transparent bg-clip-text 
        bg-gradient-to-r from-green-400 to-blue-500">
                  10+
                </h3>
                <p>Projects Completed</p>
              </div>

              <div>
                <h3 className=" text-base font-bold hidden md:inline 
        cursor-pointer text-transparent bg-clip-text 
        bg-gradient-to-r from-green-400 to-blue-500">
                  7+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  
  )
}

export default About