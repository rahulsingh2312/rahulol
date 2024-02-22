import React, { useState, useRef, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { Sling as Hamburger } from 'hamburger-react';
import '../App.css'

function Navbar({ toggleNav }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
    toggleNav();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isPopupOpen]);

  return (
    <div className="nav-container" style={{ borderBottom: '2px solid gray', backgroundColor: "#F4EAE1", filter: 'blur(0.0px)' }}>
      <nav style={{ backgroundColor: "#F4EAE1", filter: 'blur(0.0px)' }} className="bg-white border-gray-200 md:text-2xl sm:text-xl dark:bg-white-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className='flex md:ml-5 ml-0 justify-center items-center'>
            <div style={{ backgroundColor: "#F4EAE1", filter: 'blur(0.0px)' }}  className='md:w-12 w-10' onClick={togglePopup}>
              <img className='rounded-[50%]' src="/pfp.webp" alt='pfp' />
              </div>
            <h1 onClick={togglePopup} style={{ backgroundColor: "#F4EAE1", filter: 'blur(0.7px)' }} className="text-4xl p-3 text-gray-700 font-bold">rahulol</h1> 
          </div>

          <div  className='md:hidden'>
           
            <Hamburger
           
              toggled={isNavOpen}
              toggle={handleToggleNav}
              size={20}
              duration={5.2}
              color={isNavOpen ? '#000' : '#888'}
            />
          </div>
          <div style={{ backgroundColor: "#F4EAE1", filter: 'blur(0.7px)' }} 
            className={`${isNavOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="PP flex flex-col p-6 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-white-800 md:dark:bg-white-900  dark:border-gray-700">
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="block py-4 pl-3 pr-4 md:text-8px sm:pr-80 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-grey md:dark:hover:bg-transparent"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('getintouch')}
                  className="block py-4 pl-3 pr-4 sm:pr-20 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-grey md:dark:hover:bg-transparent"
                >
                  Get in Touch
                </button>
              </li>
              <li>
                <a
                  target='_blank' rel="noreferrer"
                  href="https://drive.google.com/file/d/1uMvYg2TJ1g2BhhrdyWyHnJ4fD6EmYpOi/view?usp=sharing"
                  className="block py-4 sm:border-zinc-100 sm:border-2 sm:mt-2 md:mt-0 pl-3 pr-4 md:mr-20 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 dark:text-black dark:hover:bg-gray-700 dark:hover:text-grey md:dark:hover:bg-transparent"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />

      {isPopupOpen && (
        <div style={{ backgroundColor: "#F4EAE1", filter: 'blur(0.6px)' }} ref={popupRef} className="pfp-dropdown md:ml-20  -mt-1">
          <ul>
           
            <li>
              <a href="https://github.com/rahulsingh2312" target="_blank" rel="noopener noreferrer">
                <div className='flex justify-start ml-5 items-center'>
                    <FaGithub /> &nbsp; @rahulsingh2312
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/rahulsinghhh2312/" target="_blank" rel="noopener noreferrer">
                <div className='flex justify-start ml-5 items-center'>
                <SiLinkedin /> &nbsp; @rahulsinghhh2312
                </div>
              </a>
            </li>
            <li>
              <a href="mailto:rahulsinghhh2312@gmail.com" target="_blank" rel="noopener noreferrer">
                <div className='flex justify-start ml-5 items-center'>
                <CgMail />   &nbsp; rahulsingh2312@gmail.com
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/rrahulol/" target="_blank" rel="noopener noreferrer">
                <div className='flex justify-start ml-5 items-center'>
                  <GrInstagram /> &nbsp; @rrahulol
                </div>
              </a>
            </li>
            <li>
              <a href="https://wa.link/bnpth1" target="_blank" rel="noopener noreferrer">
                <div className='flex justify-start ml-5 items-center'>
                <FaWhatsapp />  &nbsp; +91 9321441951
                </div>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Rahulsinghh23" target="_blank" rel="noopener noreferrer">
                <div className='flex justify-start ml-5 items-center'>
                <BsTwitterX />  &nbsp; @Rahulsinghh23
                </div>
              </a>
            </li>
           
            <li>
              <a href="Your_WhatsApp_Link" target="_blank" rel="noopener noreferrer">
                <div className='flex justify-start ml-5 items-center'>
                &nbsp; Twitter
                </div>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
