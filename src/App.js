// import React from 'react';
import './App.css';
import Achivements from './achivements';
import Navbar from './components/navbar';
import Aboutme from './components/aboutme'
import Contactme from './components/contactme';
import Experience from './components/Experience';
// import Moth from './images/moth.svg';
import React, { useState , useEffect } from "react";
import LoadingScreen from './loadingscreen';



 // Make sure the video path is correct
// import Crystal from './images/crystal.svg';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  useEffect(() => {
    // Simulate loading by setting a timeout
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 2000); // 3000 milliseconds (3 seconds) - adjust as needed

    return () => clearTimeout(timeout);
  }, []);

 

  return isLoaded ? (
    <div style={{  overflowX: 'hidden'}}> 
      
      <Navbar toggleNav={toggleNav} />
      <div><br/></div>
      
      {/* <Hero isNavOpen={isNavOpen} /> */}
      
      <div><br/></div>
       <Aboutme />   
       {/* <Hero /> */}
      {/* <Skills  />  */}
      <Achivements />
      <Experience />
      <Contactme />
    
   
      
      {/* <div className="mt-40 float-right"><img alt="moth" src={Moth} /></div> */}
    </div>
  ) : (
    <LoadingScreen />
  );
}

export default App;
