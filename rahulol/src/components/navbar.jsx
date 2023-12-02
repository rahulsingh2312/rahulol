import React, { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react'
function Navbar({toggleNav}) {
  const [isNavOpen, setIsNavOpen] = useState();
  // const [isOpen, setOpen] = useState(false)



  const scrollToSection = (sectionId) => {
    console.log(`Scrolling to section: ${sectionId}`);
    const section = document.getElementById(sectionId);
    console.log(`Section element: ${section}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      console.log(`Scrolled to section: ${sectionId}`);
    }
    // Close the mobile navigation menu if open
    // if (isNavOpen) {
    //   setIsNavOpen(false);
    // }
  };
  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
    toggleNav(); // Call the function received from props
  };

  return (
    <nav z-10 className="bg-white border-gray-200 md:text-2xl sm:text-xl dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="google.com">
          <h1 className="text-5xl p-3 text-white font-bold">RAHUL</h1>
        </a>

      
        <Hamburger
  toggled={isNavOpen}
  toggle={handleToggleNav}
  size={20}
  duration={5.2} // Set the size according to your design
  color={isNavOpen ? '#fff' : '#888'} // Set the color based on your design
/>
        <div
          className={`${
            isNavOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className=" font-medium helvetica flex flex-col p-6 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900  dark:border-gray-700">
            <li>


              
              <button
              // eslint-disable-next-line
              onClick={() => scrollToSection('skills')}
                className="block py-4 pl-3 pr-4 md:text-8px text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Skills
              </button>
            </li>
            <li>
              <button
              // eslint-disable-next-line
              onClick={() => scrollToSection('getintouch')}
                className="block py-4 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Get in Touch
              </button>
            </li>
            <li>
              <a
              target='_blank' rel="noreferrer"
              // eslint-disable-next-line
                href="https://drive.google.com/file/d/1DueqGPJejuIdH6ZJVHIjhiQLPbP-1We8/view?usp=sharing"
                className="block py-4 sm:border-zinc-100 sm:border-2  sm:mt-2 md:mt-0 pl-3 pr-4 md:mr-20 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Resume
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
