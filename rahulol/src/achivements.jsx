import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import left from './images/mirrordesign.png'
import right from './images/mirrrorlaptoponly.png'
const importAll = (context) => context.keys().map(context);
const images = importAll(require.context('./slideshow/', false, /\.(png|jpe?g|svg)$/));


export default function Profile() {
 
  const CustomNextArrow = (props) => (
    <div
      {...props}
      className="slick-arrow"
      style={{ zIndex: 1, transform: 'translateX(92%)' }}
   >
      <FaArrowRight size={30} color="rgb(249 168 212)" />
    </div>
  );

  const CustomPrevArrow = (props) => (
    <div

      {...props}
      className="slick-arrow absolute my-96"
      style={{}}
      >
      <FaArrowLeft size={30} color="rgb(249 168 212)" />
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
    autoplay: true,           // Enable autoplay
    autoplaySpeed: 1500, 
  };

 
    return (
      <div style={{ backgroundColor: "#F4EAE1" }}>
        <div className='md:block sm:hidden'>
          <img className='absolute  mt-80' src={left} width={550} alt="deg"></img>
          <img className=' float-right mt-40' src={right} width={550} alt="deg"></img>
          </div>
          <img className='md:hidden' src={left} width={550} alt="deg"></img>
        <div className='flex justify-center pb-10 md:pt-40'  style={{ zIndex: 10, color: 'rgba(105, 111, 77, 0.80)', fontSize: 50, fontFamily: 'Inknut Antiqua', }} >Projects</div>
       <div className='md:ml-96  md:pl-60 md:mr-40 md:pr-96'>
      
 <Slider  {...sliderSettings}>
 
 {images.map((image, index) => (
          <img key={index} className=" w-full max-h-96  md:max-w-2xl" src={image} alt={`slide-${index}`} />
        ))}
            
        </Slider>
     
        </div> 
      
      </div>
      
      
      
      
    )
  }