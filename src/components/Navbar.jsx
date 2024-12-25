import React, { useState } from 'react'
import {BsGithub, BsLinkedin  } from "react-icons/bs"
import { BiMenu } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

import "./Navbar.css"
const Navbar = () => {
    const[isOpen,setIsOpen]=useState(false);

    const menuOpen=()=>{
        setIsOpen(!isOpen)
    }

  return (
    <nav className='fixed top-0 z-10 flex w-full items-center justify-between border-b-gray-700 bg-black/70 p-16 
    py-6 text-white backdrop-blur-md md:justify-evenly' >
        <a href="#home" className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent
        opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100
        '>Farah Jerbi</a>
        {/* LINKS */}

        <ul className='hidden md:flex gap-10' >
        <a href="#home" className="relative cursor-pointer opacity-70 transition-opacity duration-300 hover:opacity-100 group">
        <li className="inline-block">Home</li>
        <span className="absolute left-0 bottom-[-3.5px] w-0 h-[3.5px] bg-gradient-to-r from-blue-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
        </a>
            <a href="#tech" className='relative group cursor pointer opacity-70 transition-all duration-300 hover:opacity-100' >
                <li className="inline-block">Tech</li>
                <span className="absolute left-0 bottom-[-3.5px] w-0 h-[3.5px] bg-gradient-to-r from-blue-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>     
            <a href="#projects" className='relative group cursor pointer opacity-70 transition-all duration-300 hover:opacity-100' >
                <li className="inline-block">Projects</li>
                <span className="absolute left-0 bottom-[-3.5px] w-0 h-[3.5px] bg-gradient-to-r from-blue-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className='relative group cursor pointer opacity-70 transition-all duration-300 hover:opacity-100' >
                <li className="inline-block">Contact</li>
                <span className="absolute left-0 bottom-[-3.5px] w-0 h-[3.5px] bg-gradient-to-r from-blue-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
        </ul>

        {/* ICONS */}

        <ul className='hidden md:flex gap-5' >
            <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-300 hover:opacity-100' >
            <a href="https://www.linkedin.com/in/farahjerbi/" target="_blank" rel="noopener noreferrer">
               <BsLinkedin />
               </a>
            </li>
            <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-purple-500 hover:opacity-100' >
            <a href="https://github.com/farahjerbi" target="_blank" rel="noopener noreferrer">
                <BsGithub />
            </a>
            </li>

        </ul>


        {isOpen ? (
            <>
                <IoIosClose className="block md:hidden text-4xl "  onClick={menuOpen} />
            </>
        ):(
            <>
                <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
            </>
        )}

        {isOpen && (
            <>
                <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start
                 justify-start gap-10 border-l border-gray-800 bg-blak/90 p-12 ${isOpen ? "block":"hidden" } `} >
                    <ul className='flex flex-col gap-8' >
                        <a href="#home" className="relative cursor-pointer opacity-70 transition-opacity duration-300 hover:opacity-100 group">
                        <li className="inline-block">Home</li>
                        <span className="absolute left-0 bottom-[-3.5px] w-0 h-[3.5px] bg-gradient-to-r from-blue-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                        </a>
                            <a href="#tech" className='relative group cursor pointer opacity-70 transition-all duration-300 hover:opacity-100' >
                                <li className="inline-block">Tech</li>
                                <span className="absolute left-0 bottom-[-3.5px] w-0 h-[3.5px] bg-gradient-to-r from-blue-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                            </a>     
                            <a href="#projects" className='relative group cursor pointer opacity-70 transition-all duration-300 hover:opacity-100' >
                                <li className="inline-block">Projects</li>
                                <span className="absolute left-0 bottom-[-3.5px] w-0 h-[3.5px] bg-gradient-to-r from-blue-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <a href="#contact" className='relative group cursor pointer opacity-70 transition-all duration-300 hover:opacity-100' >
                                <li className="inline-block">Contact</li>
                                <span className="absolute left-0 bottom-[-3.5px] w-0 h-[3.5px] bg-gradient-to-r from-blue-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </ul>

                        <ul className='flex flex-wrap gap-5' >
                        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-300 hover:opacity-100' >
                            <BsLinkedin />
                        </li>
                        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-purple-500 hover:opacity-100' >
                            <BsGithub />
                        </li>

                    </ul>

                </div>
            </>
        )}


    </nav>
  )
}

export default Navbar