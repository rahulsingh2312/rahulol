import React, { useState, useEffect } from "react";
// import Rahul from "../images/rahul.png";
// import { useState } from "react";
// import Crystal from '../images/crystal.svg';
import '../App.css';
import Sword from '../images/Sword.svg';

const Hero = () => {
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

  return (
    <div className="hero-container">
      <h1 className="text-7xl text-white p-5 font-bold">RAHUL</h1>
      <section className="absolute flex text-white justify-center items-center inset-0 ">
        <div
          className="image-container"
          // style={{ transform: `rotate(${rotationAngle}deg)` }}
        >
          <br/ >
          <br/ >
          <br/ > 
          {/* <img src={Rahul} alt="pfp" /> */}
          <div className="chat-bubble" style={bubbleStyleA}>
        {/* Content of the chat bubble */}
      </div>

      <h1 className="text-6xl chat-bubble text-pink-300 font-bold" style={bubbleStyleA}>
         developer*
      </h1>
      {/* <br /> */}
      {/* <br /> */}
      <h1 className="text-6xl mb-10 text-pink-300 font-bold" style={bubbleStyleB}>
        mumbai , india
      </h1>
        </div>
      </section>
      <div className="sword-container mt-40 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 w-40" style={{ transform: `translateY(${swordPosition}px)` }}>
        <img alt="sword" src={Sword} />
      </div>
    </div>
  );
};

export default Hero;
