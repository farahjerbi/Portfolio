import React from 'react';

import { ReactTyped } from "react-typed";

import { AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';
import { projects } from '../../data/data';



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
        <ReactTyped
          strings={['Discover even more innovative and impactful projects I have worked on, by visiting my GitHub!🚀']}
          typeSpeed={25}
          backSpeed={50}
          loop
          className="text-blue-100 text-lg mt-8 block"
        />
 
    </div>
    </div>
  
  )
}

export default Projects