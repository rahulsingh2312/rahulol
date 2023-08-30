// import React from 'react';
import './App.css';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Moth from './images/moth.svg';
import React, { useState} from "react";

import Star from './images/star.mp4'; // Make sure the video path is correct
// import Crystal from './images/crystal.svg';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div>
      <div className="background-video">
        <video autoPlay muted loop id="bg-video">
          <source src={Star} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
      </div>
      <Navbar toggleNav={toggleNav} />
      <div><br/></div>
      <Hero isNavOpen={isNavOpen} />
      <div><br/></div>
      
      {/* <Hero /> */}
      
      <div className="mt-40 float-right"><img alt="moth" src={Moth} /></div>
    </div>
  );
}

export default App;
