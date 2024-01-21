// Content.js
import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useGlitch } from 'react-powerglitch';
import './Content.css'; // Import your CSS file

const Content = ({ onClick }) => {
  const glitch = useGlitch();
  const glitch2 = useGlitch({
    "timing": {
      "duration": 150,
      "iterations": 20
    },
    "glitchTimeSpan": {
      "start": 0,
      "end": 1
    },
    
    "pulse": {
      "scale": 1
    }
  });
  const glitch3 = useGlitch({
    "timing": {
      "duration": 150
    },
    "glitchTimeSpan": {
      "start": 0,
      "end": 1
    },
    "shake": {
      "velocity": 5,
      "amplitudeX": 0.08,
      "amplitudeY": 0.02
    },
    "slice": {
      "count": 1,
      "velocity": 1,
      "minHeight": 0.01,
      "maxHeight": 0.1
    },
    "pulse": {
      "scale": 1
    }
  });

  const glitch4 = useGlitch({
    "timing": {
      "duration": 150
    },
    "glitchTimeSpan": {
      "start": 0,
      "end": 1
    },
    "shake": {
      "velocity": 4,
      "amplitudeX": 0.08,
      "amplitudeY": 0.12
    },
    "slice": {
      "count": 60,
      "velocity": 8,
      "minHeight": 0.01,
      "maxHeight": 0.1
    },
    "pulse": {
      "scale": 3
    }
  });
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1000); // Update every second (1000 milliseconds)
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  // const [clickEffectVisible, setClickEffectVisible] = useState(false);
  return (
    <>
    <Link to="home">
    <div ref={glitch2.ref} className='loading-screen' onClick={onClick}>
      
      <div ref={glitch.ref} className='dvd-container'></div>
      <div ref={glitch.ref} className="fontpress dvd-container1">
        <div className="dvd-controls">
          <div ref={glitch3.ref} className="fontpress dvd-play-button">Play &gt;</div>
        </div>
         
        <div className="dvd-overlay">
     
            <div  ref={glitch3.ref} className="click-to-begin">Click to Begin !!!</div>
       
          <div  ref={glitch3.ref} className="dvd-timer">{formatTimer(timer)}</div>
          <div ref={glitch4.ref} className="dvd-design">--::-</div>
          <div ref={glitch4.ref} className="dvd-standby"> 69</div>
         
        </div>
      </div>
    </div>
    </Link>
    <Outlet />
    </>
  );
};

const formatTimer = (milliseconds) => {
  const hours = Math.floor(milliseconds / 3600000); // 1 hour = 3600000 milliseconds
  const minutes = Math.floor((milliseconds % 3600000) / 60000); // 1 minute = 60000 milliseconds
  const seconds = Math.floor((milliseconds % 60000) / 1000); // 1 second = 1000 milliseconds

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

export default Content;
