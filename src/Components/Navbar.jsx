import React, { useState, CloseisOpen } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const [isopen, setIsopen] = useState(null);

   const CloseisOpen= () =>{
    setIsopen(!isopen);
   }
    
  return (
    <div>
        <div className=' bg-gray-900 flex justify-between items-center h-[7rem] 
              md:px-[2rem] px-[3rem] rounded-b-xl py-[4rem] '>
            <Link to={'/'}><div className=' cursor-pointer text-transparent bg-clip-text bg-gradient-to-tr
             from-green-400 to-blue-500 font-bold text-3xl '>DevCel</div></Link>

    <nav className=' flex  gap-[3rem] text-md justify-between items-center px-4 '>

        <ul className='bg-gray-700 rounded-full py-3 px-[4rem] gap-[3rem] hidden sm:flex items-center'>
        <NavLink to="/" className="flex-col items-center gap-1">
          <p className='text-gray-100 hover:text-gray-400/90'>HOME</p>
          <hr className=" w-4/4 bg-gray-700 h-[1.5px] hidden " />
        </NavLink>

        <NavLink to="/about" className="flex-col items-center gap-1">
          <p className='text-gray-100 hover:text-gray-400/90'>ABOUT</p>
          <hr className=" w-4/4 bg-gray-700 h-[1.5px] hidden " />
        </NavLink>

        <NavLink to="/services" className="flex-col items-center gap-1">
          <p className='text-gray-100 hover:text-gray-400/90'>SERVICES</p>
          <hr className=" w-4/4 bg-gray-700 h-[1.5px] hidden " />
        </NavLink>

        <NavLink to="/projects" className="flex-col items-center gap-1">
          <p className='text-gray-100 hover:text-gray-400/90'>PROJECTS</p>
          <hr className=" w-4/4 bg-gray-700 h-[1.5px] hidden " />
        </NavLink>

        <NavLink to="/contact" className="flex-col items-center gap-1">
          <p className='text-gray-100 hover:text-gray-400/90'>CONTACT</p>
          <hr className=" w-4/4 bg-gray-700 h-[1.5px] hidden " />
        </NavLink>
        </ul>

        <Link to={'/connectMe'}><button className=' md:flex hidden cursor-pointer bg-gradient-to-r
         from-green-400 to-blue-500 rounded-full py-3 px-4 text-md text-white 
         transition-transform duration-300 hover:scale-105'>
          Connect Me</button></Link>
        </nav>
       
        
        <div className=' md:hidden text-2xl text-gray-100 '>
            <button onClick={()=>setIsopen(!isopen)}>
                {!isopen ? <FaTimes/> : <FaBars/>}
            </button>
        </div>
        </div>
        {!isopen && (
             <nav className='flex-col gap-5 text-sm px-[3rem] bg-black  
              h-[16rem] md:hidden '>
             <NavLink to="/" className="flex-col items-center gap-1">
               <p onClick={CloseisOpen} className='text-white hover:text-purple-800/90 '>HOME</p>
             </NavLink>
             <NavLink  to="/about" className="flex-col items-center gap-1">
               <p onClick={CloseisOpen} className='text-white hover:text-purple-800/90 my-4'>ABOUT</p>
             </NavLink>
     
             <NavLink  to="/services" className="flex-col items-center gap-1">
               <p onClick={CloseisOpen} className='text-white hover:text-purple-800/90 my-4'>SERVICES</p>
             </NavLink>
     
             <NavLink  to="/projects" className="flex-col items-center gap-1">
               <p onClick={CloseisOpen} className='text-white hover:text-purple-800/90 my-4'>PROJECTS</p>
             </NavLink>
     
             <NavLink  to="/contact" className="flex-col items-center gap-1">
               <p onClick={CloseisOpen} className='text-white hover:text-purple-800/90 my-4'>CONTACT ME</p>
             </NavLink>

             <Link to={'/connectMe'}><button className=' cursor-pointer bg-gradient-to-r
         from-green-400 to-blue-500 rounded-full py-2 px-4 my-4 
         text-md text-white hover:text-gray-200/80 transition-transform duration-300 
         hover:scale-105'>Connect Me</button></Link>
                 </nav>
        )}
    
    </div>
  )
}

export default Navbar