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
    <nav style={{backgroundColor:"#F4EAE1"}} className="bg-white border-gray-200 md:text-2xl sm:text-xl dark:bg-white-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/">
          <h1 className="text-5xl p-3 text-black font-bold">RAHUL</h1>
        </a>

      <div className='md:hidden'>
        <Hamburger 
  toggled={isNavOpen}
  toggle={handleToggleNav}
  size={20}
  duration={5.2} // Set the size according to your design
  color={isNavOpen ? '#000' : '#888'} // Set the color based on your design
/></div>
        <div
          className={`${
            isNavOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className=" font-medium helvetica flex flex-col p-6 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-white-800 md:dark:bg-white-900  dark:border-gray-700">
            <li>


              
              <button
              // eslint-disable-next-line
              onClick={() => scrollToSection('skills')}
               className="block py-4 pl-3 pr-4 md:text-8px sm:pr-80   text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-grey md:dark:hover:bg-transparent"
              >
                Skills
              </button>
            </li>
            <li>
              <button
              // eslint-disable-next-line
              onClick={() => scrollToSection('getintouch')}
                className="block py-4 pl-3 pr-4  sm:pr-20 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-grey md:dark:hover:bg-transparent"
              >
                Get in Touch
              </button>
            </li>
            <li>
              <a
              target='_blank' rel="noreferrer"
              // eslint-disable-next-line
                href="https://drive.google.com/file/d/1OB1duZkZ1UoS-9Fu5OqJnb2HnRqQr6Y5/view?usp=drivesdk"
                className="block py-4 sm:border-zinc-100 sm:border-2  sm:mt-2 md:mt-0 pl-3 pr-4 md:mr-20 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 dark:text-black dark:hover:bg-gray-700 dark:hover:text-grey md:dark:hover:bg-transparent"
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
