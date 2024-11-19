import React from 'react'


import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";


const projects = [
  {
    id: 1,
    name: "Login Form Validation",
    technologies: "Reactjs ",
    image: 'https://t4.ftcdn.net/jpg/04/08/91/77/360_F_408917733_WuJGcub0icxaQ7P266wMFK1oCWoB5fZR.jpg',
    github: "https://github.com/WebDev-47/Login-formtest",
    view: 'https://loginformvalidation.vercel.app/'
  },
  {
    id: 2,
    name: "e-Commerce Website",
    technologies: "React js",
    image: 'https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=612x612&w=0&k=20&c=ROAncmFL4lbSQdU4VOhyXu-43ngzfEqHE5ZZAw5FtYk=',
    github: "https://github.com/WebDev-47/Webzn",
    view: 'https://forevershoppingwebsite.vercel.app/'
  },
  {
    id: 3,
    name: "Portfolio",
    technologies: "Reactjs ",
    image: 'https://media.licdn.com/dms/image/D4D12AQEZths38-N2dg/article-cover_image-shrink_720_1280/0/1709734306401?e=2147483647&v=beta&t=9l7pK3lRN00IcbwvUvxg2j7JEr-jlup2SRWAGTgvLCk',
    github: "https://github.com/WebDev-47/DevCel-Portfolio",
    view: 'https://dev-cel-portfolio.vercel.app/'
  },
  {
    id: 4,
    name: "Portfolio II",
    technologies: "Reactjs,",
    image: "https://img.lovepik.com/photo/45015/7638.jpg_wh860.jpg",
    github: "https://github.com/WebDev-47/Portfolio-II",
    view: 'https://myportfolio-livid-alpha.vercel.app/'
  },
  
];

const Projects = () => {
  return (
    <div className=" text-white py-20">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
     
      <h2 className="text-4xl font-bold text-center mb-12">  My Projects <hr className="mt-4" /></h2>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((projects) => (
          <div
            key={projects.id}
            className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
        transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={projects.image}
              alt={projects.name}
              className="rounded-lg mb-4 
          w-full h-48 object-cover"
            />
            <h3 className="text-2xl font-bold mb-2">{projects.name}</h3>
            <p className="text-gray-400 mb-4">{projects.technologies}</p>
            <a
              href={projects.github}
              className="inline-block bg-gradient-to-r 
          from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:text-gray-300/90"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
            href={projects.view}
            className="inline-block bg-gradient-to-r 
            from-green-400 to-blue-500 text-white px-4 py-2 rounded-full absolute right-7 hover:text-gray-300/90"
                target="_blank"
                rel="noopener noreferrer"
            >Website</a>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Projects