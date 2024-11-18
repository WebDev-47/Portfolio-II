import React from 'react'


import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";


const projects = [
  {
    id: 1,
    name: "Login Form",
    technologies: "Reactjs Tailwindcss",
    image: employeeMSImage,
    github: "https://github.com/WebDev-47/Login-formtest",
  },
  {
    id: 2,
    name: "E-commerce website",
    technologies: "React js",
    image: employeeMSImage,
    github: "https://github.com/WebDev-47/Webzn",
  },
  {
    id: 3,
    name: "Portfolio",
    technologies: "Reactjs Tailwindcss",
    image: employeeMSImage,
    github: "https://github.com/WebDev-47/DevCel-Portfolio",
  },

  {
    id: 4,
    name: "Portfolio II",
    technologies: "Reactjs, Tailwindcss",
    image: portfolioImg.jpg,
    github:
  }
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
          from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Projects