import React, { useState, useEffect } from 'react';
import { useGlitch } from 'react-powerglitch';
import Noise from "../images/NoiseRectangle.webp";
import Soundon from "../images/sound_on.webp";

function AboutMe() {
  const importAll = (context) => context.keys().map(context);
  const glitch = useGlitch();
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
    <div onClick={handleClick} className='h-screen -mt-12   text-black-100' style={{ backgroundColor: "#F4EAE1" ,filter: 'blur(1px)' }}>
      <div className='absolute ' style={{ zIndex: -1 }}> <img src={Noise} style={{ width: '100vw', height: '100vh', animation: 'slideRight 8s linear infinite' }} alt='nos' /> </div>
      {/* <div style={{ width: '20%', height: '20%', position: 'absolute', left: '0', background: `linear-gradient(90deg, ${gradientColors[0][0]} 100%, ${gradientColors[0][1]} 100%)`, borderRadius: 400, filter: 'blur(40px)', animation: 'slideRight 4s linear infinite' }} /> */}
      {/* <div style={{ width: '20%', height: '20%', position: 'absolute', right: '50%', background: `linear-gradient(90deg, ${gradientColors[1][0]} 100%, ${gradientColors[1][1]} 100%)`, borderRadius: 400, filter: 'blur(40px)', animation: 'slideLeft 3s linear infinite' }} /> */}
     <div className=''>
     <div className='absolute w-1/5 h-1/5 md:w-1/6 md:h-1/6 z-0 md:z-10' style={{ top: '0', left:'70%', background: `linear-gradient(90deg, ${gradientColors[0][0]} 100%, ${gradientColors[0][1]} 100%)`, borderRadius: '100%', filter: 'blur(70px)', animation: 'slideRight 4s linear infinite' }} />
<div className='absolute w-1/5 h-1/5 md:w-1/6 md:h-1/6 z-0 md:z-10' style={{ bottom: '50%', left:'20%', background: `linear-gradient(90deg, ${gradientColors[1][0]} 100%, ${gradientColors[1][1]} 100%)`, borderRadius: '100%',  filter: 'blur(70px)', animation: 'slideLeft 3s linear infinite' }} />
<div className='absolute w-1/5 h-1/5 md:w-1/6 md:h-1/6 z-0 md:z-10' style={{ right: '50%' , bottom:'10%', background: `linear-gradient(90deg, ${gradientColors[0][0]} 100%, ${gradientColors[0][1]} 100%)`, borderRadius: '100%',  filter: 'blur(70px)', animation: 'slideRight 4s linear infinite' }} />
<div className='absolute w-1/5 h-1/5 md:w-1/6 md:h-1/6 z-0 md:z-10' style={{ left: '0%' , top:'50%', background: `linear-gradient(90deg, ${gradientColors[1][0]} 100%, ${gradientColors[2][1]} 100%)`, borderRadius: '100%',filter: 'blur(70px)', animation: 'slideLeft 3s linear infinite' }} />
<div className='absolute w-1/5 h-1/5 md:w-1/6 md:h-1/6 z-0 md:z-10' style={{ right: '40%',top:'40%', background: `linear-gradient(90deg, ${gradientColors[2][0]} 100%, ${gradientColors[0][1]} 100%)`, borderRadius: '100%',  filter: 'blur(70px)', animation: 'slideRight 4s linear infinite' }} />
<div className='absolute w-1/5 h-1/5 md:w-1/6 md:h-1/6 z-0 md:z-10' style={{ left: '30%', background: `linear-gradient(90deg, ${gradientColors[2][0]} 100%, ${gradientColors[0][0]} 100%)`, borderRadius: '100%',  filter: 'blur(70px)', animation: 'slideLeft 3s linear infinite' }} />


      </div>
      <div style={{fontFamily:'Inknut Antiqua'}} className='flex text-gray-500 justify-center text-6xl leading-relaxed pt-28 md:pt-40 z-10 text-opacity-80  md:text-12xl  font-thin  break-words'>
    <div>RAHUL <br />SINGH<br /> "मतिहीनता" <br />"l'art du <br />CODE" </div>
</div>
<div style={{fontFamily:'Inknut Antiqua'}}  className='md:flex md:justify-center   md:ml-0 mt-10 ml-10 text-opacity-50 text-xl md:text-2xl  font-light leading-loose break-words'>
    <div>Tap Anywhere For Sound <br />and More Colors .</div>

</div>
     <div  ref={glitch.ref}  className='image mb-20 flex justify-end md:mt-36 mt-28 mr-5 sm:mr-10'> <img src={Soundon} alt="sndon" /></div>
    </div>
  );
}

export default AboutMe;