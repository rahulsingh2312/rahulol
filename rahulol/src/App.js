// import React from 'react';
import './App.css';
import Hero from './components/hero';
import Navbar from './components/navbar';

import Contactme from './components/contactme';

// import Moth from './images/moth.svg';
import React, { useState} from "react";

 // Make sure the video path is correct
// import Crystal from './images/crystal.svg';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div>
      
      <Navbar toggleNav={toggleNav} />
      <div><br/></div>
      
      <Hero isNavOpen={isNavOpen} />
      
      <div><br/></div>
      {/* <Aboutme />
      <Skills  /> */}
      <Contactme />
      {/* <Hero /> */}
      
      {/* <div className="mt-40 float-right"><img alt="moth" src={Moth} /></div> */}
    </div>
  );
}

export default App;
