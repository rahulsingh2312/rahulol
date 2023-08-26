import React, { useState, useEffect } from "react";
import Rahul from "../images/rahul.png";
// import { useState } from "react";
import Crystal from '../images/crystal.svg';
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

  const rotationAngle = scrollY;
  const swordPosition = scrollY * 1.2;

  return (
    <div className="hero-container">
      <h1 className="text-7xl text-white p-5 font-bold">RAHUL</h1>
      <section className="absolute flex text-white justify-center items-center inset-0 ">
        <div
          className="image-container"
          style={{ transform: `rotate(${rotationAngle}deg)` }}
        >
          {/* <img src={Rahul} alt="pfp" /> */}
          <div className="hover-text">
          <h1 className="text-6xl text-pink-300 font-bold"> &nbsp; &nbsp; &nbsp; &nbsp; developer*</h1>
          <br/>
          {/* <br/>
          <br/>
          <br/>
          <br/> */}
          <br/>
          <h1 className="text-6xl text-pink-300 font-bold">mumbai , india</h1>
        
          </div>
        </div>
      </section>
      <div className="sword-container w-40" style={{ transform: `translateY(${swordPosition}px)` }}>
        <img alt="sword" src={Sword} />
      </div>
    </div>
  );
};

export default Hero;
