import React from 'react';
import Noise from "../images/NoiseRectangle.png"
import Soundon from "../images/sound_on.png"
import  { useState, useEffect } from 'react';


function Aboutme(){
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

    <div onClick={playRandomAudio} className='h-screen -mt-12   text-black-100' style={{backgroundColor:"#F4EAE1"}}>
   <div className='absolute ' > <img src={Noise} style={{ width: '100vw', height: '100vh', animation: 'slideRight 8s linear infinite' }} alt='nos' /> </div>
      <div style={{width: '20%', height: '20%', position: 'relative', background: 'linear-gradient(90deg, #FC5C7D 100%, #6A82FB 100%)', borderRadius: 400, filter: 'blur(40px)' , animation: 'slideRight 4s linear infinite'}} />
      <div className='flex justify-center' style={{ color: 'rgba(105, 111, 77, 0.80)', fontSize: 50, fontFamily: 'Inknut Antiqua', fontWeight: '100', lineHeight: 1.3, wordWrap: 'break-word'}}>RAHUL <br/>SINGH<br/>DEVELOPER<br/>DREAMER<br/>DELUSION<br/></div>
      <div style={{width: '20%', height: '20%', position: 'absolute', right:'0',background: 'linear-gradient(90deg, #FC5C7D 100%, #6A82FB 100%)', borderRadius: 400, filter: 'blur(40px)' , animation: 'slideRight 4s linear infinite'}} />
      <div style={{width: '20%', height: '20%', position: 'absolute', left:'50%', background: 'linear-gradient(90deg, #FC5C7D 100%, #6A82FB 100%)'  , borderRadius: 400, filter: 'blur(40px)' , animation: 'slideLeft 3s linear infinite'}} />
      <div className='md:flex md:justify-center md:-ml-36 mt-10 ml-10' style={{ color: 'rgba(0, 0, 0, 0.47)', fontSize: 16, fontFamily: 'Inknut Antiqua', fontWeight: '300', lineHeight: 2, wordWrap: 'break-word'}}>Tap Anywhere For Sound <br/>nd More Colors .</div>
    <div className=' image flex justify-end md:mt-36 mt-28 mr-5 ms:mr-10' > <img src={Soundon} alt="sndon" /></div>
    </div>
);

};
export default Aboutme;