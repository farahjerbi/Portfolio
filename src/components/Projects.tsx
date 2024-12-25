import React from 'react';
import pfe from "/public/pfe.png"
import accueil from "/public/accueil.png"
import giveback from "/public/giveback.png"

import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: pfe,
      title: "Notification Platform",
      description: "A scalable notification platform based on the microservices architecture to automate and manage notifications across email, SMS, and web push channels.",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: giveback,
      title: "GiveBack",
      description: "A social media platform that serves as a bridge between non-profit organizations and donors",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: accueil,
      title: "Legal Docs",
      description: "A fullstack application built with Node.js and MongoDB.",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: pfe,
      title: "UberMe",
      description: "An application that  replicates Uber's core functionalities with modern tools and features.",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: pfe,
      title: "IntelliPath",
      description: "An online learning platform designed to revolutionize our,approach to education.",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: pfe,
      title: "Kaddem",
      description: "A data visualization project using D3.js and other libraries.",
      links: {
        site: "#",
        github: "#",
      },
    },
   
  ]

const Projects = () => {
  return (
    <div id="projects">
        <div className='max-w-[1000px] mx-auto p-6 md:my-20' >
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Intenships & Academic Projects</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 '
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                   
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
    </div>
  
  )
}

export default Projects