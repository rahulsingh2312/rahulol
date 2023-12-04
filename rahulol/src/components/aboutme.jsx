import React, { useState, useEffect } from 'react';
import Noise from "../images/NoiseRectangle.png";
import Soundon from "../images/sound_on.png";

function AboutMe() {
  const importAll = (context) => context.keys().map(context);

  // Create a context for all files in the 'audio' folder
  const audioContext = require.context('../audio', false, /\.(mp4)$/);

  // Map all audio files into an array
  const audioFiles = importAll(audioContext);
  const [audio, setAudio] = useState(null);

  const playRandomAudio = () => {
    const selectedAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];
    const audioElement = new Audio(selectedAudio);
    audioElement.play();
    setAudio(audioElement);
  };

  const [gradientColors, setGradientColors] = useState([
    ['#FC5C7D', '#6A82FB'],   // Original
    ['#FF8C8C', '#3E5151'],   // Original
    ['#B57EDC', '#7D3C98'],   // Lavender
    ['#FFC3A0', '#FFAFBD'],   // Peach
    ['#FFD3A5', '#FD6585'],   // Coral
    ['#8A2387', '#E94057'],   // Magenta
    ['#11998e', '#38ef7d'],   // Jade
    ['#FF512F', '#DD2476'],   // Vibrant Pink
    ['#FF6A00', '#EE0979'],   // Tangerine
    ['#72EDF2', '#5151A6'],   // Sky Blue
    ['#7FFFD4', '#76B041'],   // Aquamarine
    ['#FFA500', '#FF6347'],   // Orange
    // Add more color combinations as needed
  ]);

  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleClick = () => {
    // Change gradient colors randomly
    playRandomAudio();
    const newColors = shuffleArray(gradientColors);
    setGradientColors(newColors);
  };

  useEffect(() => {
    return () => {
      // Cleanup audio when the component unmounts
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [audio]);

  return (
    <div onClick={handleClick} className='h-screen -mt-12   text-black-100' style={{ backgroundColor: "#F4EAE1" }}>
      <div className='absolute ' style={{ zIndex: -1 }}> <img src={Noise} style={{ width: '100vw', height: '100vh', animation: 'slideRight 8s linear infinite' }} alt='nos' /> </div>
      {/* <div style={{ width: '20%', height: '20%', position: 'absolute', left: '0', background: `linear-gradient(90deg, ${gradientColors[0][0]} 100%, ${gradientColors[0][1]} 100%)`, borderRadius: 400, filter: 'blur(40px)', animation: 'slideRight 4s linear infinite' }} /> */}
      {/* <div style={{ width: '20%', height: '20%', position: 'absolute', right: '50%', background: `linear-gradient(90deg, ${gradientColors[1][0]} 100%, ${gradientColors[1][1]} 100%)`, borderRadius: 400, filter: 'blur(40px)', animation: 'slideLeft 3s linear infinite' }} /> */}
     <div className=''>
      <div className='w-1/5 h-1/5 md:w-1/6 md:h-1/6' style={{ position: 'absolute',zIndex: 0, top: '0', left:'50%', background: `linear-gradient(90deg, ${gradientColors[0][0]} 100%, ${gradientColors[0][1]} 100%)`, borderRadius: 400, filter: 'blur(40px)', animation: 'slideRight 4s linear infinite' }} />
      <div className='w-1/5 h-1/5 md:w-1/6 md:h-1/6' style={{ position: 'absolute', zIndex: 0,bottom: '50%', background: `linear-gradient(90deg, ${gradientColors[1][0]} 100%, ${gradientColors[1][1]} 100%)`, borderRadius: 400, filter: 'blur(40px)', animation: 'slideLeft 3s linear infinite' }} />
      <div className='w-1/5 h-1/5 md:w-1/6 md:h-1/6' style={{ position: 'absolute', zIndex: 0,right: '30%' , bottom:'10%', background: `linear-gradient(90deg, ${gradientColors[0][0]} 100%, ${gradientColors[0][1]} 100%)`, borderRadius: 400, filter: 'blur(40px)', animation: 'slideRight 4s linear infinite' }} />
      <div className='w-1/5 h-1/5 md:w-1/6 md:h-1/6' style={{ position: 'absolute', zIndex: 0,left: '50%' , top:'50%', background: `linear-gradient(90deg, ${gradientColors[1][0]} 100%, ${gradientColors[2][1]} 100%)`, borderRadius: 400, filter: 'blur(40px)', animation: 'slideLeft 3s linear infinite' }} />
      <div className='w-1/5 h-1/5 md:w-1/6 md:h-1/6' style={{ position: 'absolute', right: '30%',top:'30%',zIndex: 0, background: `linear-gradient(90deg, ${gradientColors[2][0]} 100%, ${gradientColors[0][1]} 100%)`, borderRadius: 400, filter: 'blur(40px)', animation: 'slideRight 4s linear infinite' }} />
      <div className='w-1/5 h-1/5 md:w-1/6 md:h-1/6' style={{ position: 'absolute', left: '30%',zIndex: 0, background: `linear-gradient(90deg, ${gradientColors[2][0]} 100%, ${gradientColors[0][0]} 100%)`, borderRadius: 400, filter: 'blur(40px)', animation: 'slideLeft 3s linear infinite' }} />
      
      </div>
      <div className='flex justify-center pt-28 md:pt-40'  style={{ zIndex: 10, color: 'rgba(105, 111, 77, 0.80)', fontSize: 50, fontFamily: 'Inknut Antiqua', fontWeight: '100', lineHeight: 1.3, wordWrap: 'break-word' }}>RAHUL <br />SINGH<br />DEVELOPER<br />EDGY<br />ACHIEVER<br /></div>
      <div className='md:flex md:justify-center md:-ml-36 mt-10 ml-10' style={{ color: 'rgba(0, 0, 0, 0.47)', fontSize: 16, fontFamily: 'Inknut Antiqua', fontWeight: '300', lineHeight: 2, wordWrap: 'break-word' }}>Tap Anywhere For Sound <br />and More Colors .</div>
      <div className='image flex justify-end md:mt-36 mt-28 mr-5 ms:mr-10'> <img src={Soundon} alt="sndon" /></div>
    </div>
  );
}

export default AboutMe;
