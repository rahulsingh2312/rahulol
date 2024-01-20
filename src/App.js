import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Achievements from './achivements';
import Navbar from './components/navbar';
import Aboutme from './components/aboutme';
import Contactme from './components/contactme';
import LivingTech from './components/LivingTech';
import LoadingScreen from './loadingscreen';
import audioFile from './audio/glitch1.mp3';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLoadingScreenClick = () => {
    console.log("Loading screen clicked");

    const audio = new Audio(audioFile);
    audio.play()
      .then(() => console.log("Audio played successfully"))
      .catch(error => console.error("Error playing audio:", error));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LoadingScreen onClick={handleLoadingScreenClick} />}
        />
        <Route
          path="/home"
          element={
            <div style={{ overflowX: 'hidden' }}>
              <Navbar toggleNav={toggleNav} />
              <div><br /></div>
              <Aboutme />
              <Achievements />
              <LivingTech />
              <Contactme />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
