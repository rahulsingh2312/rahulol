import React, { useState, useEffect } from "react";
// import Navbar from "./navbar";
// import { useState } from "react";
// import Crystal from '../images/crystal.svg';
import '../App.css';
import Sword from '../images/Sword.svg';

const Hero = ({ isNavOpen }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const translateXA = 40 + scrollY;
  const translateXB = 100 - scrollY;
  const translateY = -74.3436 - scrollY * 0.5;
  const rotateZ = 0 + scrollY * 0.1;

  // const bubbleStyle = {
  //   willChange: "transform",
  //   transform: `translate3d(${translateX}px, ${translateY}px, 0px) rotateZ(${rotateZ}deg)`,
  //   transformStyle: "preserve-3d",
  // };
  const bubbleStyleA = {
    willChange: "transform",
    transform: `translate3d(${translateXA}px, ${translateY}px, 0px) rotateZ(${rotateZ}deg)`,
    transformStyle: "preserve-3d",
  };
  const bubbleStyleB = {
    willChange: "transform",
    transform: `translate3d(${translateXB}px, ${translateY}px, 0px) rotateZ(${rotateZ}deg)`,
    transformStyle: "preserve-3d",
  };

  // const locationStyle = {
  //   transform: `translateY(${scrollY}px)`,
  // };
  const swordPosition = scrollY * 1.2;
  const initialSwordTop = 174; // Initial top position of the sword
  const swordTop = isNavOpen ? initialSwordTop + 170 : initialSwordTop; // Adjust as needed

  
  return (
    <div className="hero-container">
      {/* <Navbar /> */}
      <div className="sword-container w-1/3 md:w-40 absolute top-44 left-2 md:right-16 z-10" style={{ transform: `translateY(${swordPosition}px)`,  top: swordTop,
          transition: 'top 0.3s ease-out', }}>
        <img alt="sword" src={Sword} />
      </div>
      <section className=" flex text-white justify-center items-center ">
        <div
          
        >
          
          <br/ >
          <br/ >
          <br/ > 
        

          <h1 className={`text-4xl md:text-6xl md:mt-40 chat-bubble text-pink-300 font-bold`} style={bubbleStyleA}>
      developer*
    </h1>
    <br/>
    <h1 className={`text-4xl md:text-6xl text-pink-300 font-bold`} style={bubbleStyleB}>
      mumbai ,  &nbsp;india
    </h1>
        </div>
</section>

      {/* <div className="sword-container w-40" style={{ transform: `translateY(${swordPosition}px)` }}>
        <img alt="sword" src={Sword} />
      </div> */}
    </div>
  );
};

export default Hero;
