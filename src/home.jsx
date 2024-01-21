import React, { useState} from "react";

import Achievements from './achivements';
import Navbar from './components/navbar';
import Aboutme from './components/aboutme';
import Contactme from './components/contactme';
import LivingTech from './components/LivingTech';


const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  

  return (
    <div style={{ overflowX: 'hidden' }}>
    <Navbar toggleNav={toggleNav} />
    <div><br /></div>
    <Aboutme />
    <Achievements />
    <LivingTech />
    <Contactme />
  </div>
  );
}

export default  Home;
