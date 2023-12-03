import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import arctic from "./images/rahul.png"

import taylor from "./images/rahul.png"

export default function Profile() {
 
  const CustomNextArrow = (props) => (
    <div
      {...props}
      className="slick-arrow"
      style={{ right: '10px', zIndex: 1  , display:'flex', float:'right',  }}
    >
      <FaArrowRight size={30} color="##F4EAE1" />
    </div>
  );

  const CustomPrevArrow = (props) => (
    <div
      {...props}
      className="slick-arrow"
      style={{ left: '10px', zIndex: 1 }}
    >
      <FaArrowLeft size={30} color="#F4EAE1" />
    </div>
  ); 
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

 
    return (
      <div>
 <Slider {...sliderSettings}>
 {/* <img className="w-1/8 h-auto max-h-60" src={arctic} alt="arctic" /> */}
 {/* <img className="w-1/8 h-auto max-h-60" src={taylor} alt="taylor" /> */}
    {/* <img className="w-1/4 h-auto max-h-60 " src={justin} alt="justin" /> */}
          {/* <img className="w-1/8 h-auto max-h-60" src={olivia} alt="olivia" /> */}
          
          
          
        </Slider>
      </div>
      
      
      
      
    )
  }