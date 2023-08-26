import React from 'react';
import './App.css';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Moth from './images/moth.svg';

import Star from './images/star.mp4'; // Make sure the video path is correct
import Crystal from './images/crystal.svg';

function App() {
  return (
    <div>
      <div className="background-video">
        <video autoPlay muted loop id="bg-video">
          <source src={Star} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
      </div>
      
      <Hero />
     
      <div className="float-right"><img alt="moth" src={Moth} /></div>
    </div>
  );
}

export default App;
