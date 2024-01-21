import React from 'react';
import {Swiper,SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Project.css'
import { Pagination, Autoplay   } from 'swiper/modules';
import data from './data.json'
import left from './images/mirrordesign.webp'
import right from './images/mirrrorlaptoponly.webp'
// const importAll = (context) => context.keys().map(context);
// const images = importAll(require.context('./slideshow/', false, /\.(png|jpe?g|svg)$/));


const swiperContainerStyle = {
 
  height: '450px', // Adjust this to set the height of the Swiper container
};

export default function Profile() {
 
 
    return (
      
      <div  id="skills" style={{ backgroundColor: "#F4EAE1", fontFamily:"Inknut Antiqua" }}>
       <div className="" style={{filter: 'blur(0.7px)'}}>
          <div className='md:block sm:hidden'>
            <img className='absolute  -mt-40' src={left} width={550} alt="deg"></img>
            <img className=' float-right -mt-40' src={right} width={550} alt="deg"></img>
          
          <img className='md:hidden' src={left} width={550} alt="deg"></img>
          </div>
          </div>
          <section className=" wrapper-projects">
        <div className="paddings  innerWidth p-conainer ">
        <div className="" style={{filter: 'blur(0.7px)'}}>
        <div className='flex justify-center pb-20 md:pt-40'  style={{ zIndex: 10, color: 'rgba(105, 111, 77, 0.80)', fontSize: 50, fontFamily: 'Inknut Antiqua', }} >Projects</div></div>
       <div className='md:ml-40 ml-20 '>
       <div style={swiperContainerStyle}>
      {/* <style>{swiperStyles}</style> */}
       <Swiper 
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  // slidesPerView={'auto'}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={true}
  modules={[Pagination ,Autoplay]}
  className="mySwiper"
  autoplay={{ delay: 2500, disableOnInteraction: true }}
  breakpoints={{0:{slidesPerView:1, spaceBetween:40},480:{slidesPerView:1, spaceBetween:40},720:{slidesPerView:2, spaceBetween:40},1280:{slidesPerView:3,spaceBetween:50}}}
>
  <SlideButtons  />
  {data.map((card, i) => (
    <SwiperSlide key={i}>
      <div style={{ background: 'linear-gradient(to right, #d9a7c7, #fffcdc)' }} className="flexCenter flexColStart p-card mt-10">
        <img src={card.image} alt="Thumb" />
        <span className="p-cardtext">
          <br />
          <span className="primaryText name z-10">{card.name}</span>
          <br />
          <span className="secondaryText mb-10">{card.detail}</span>
          <br />
          <a style={{ color: "blue" }} href={card.link1}>
            <button className="button2 mt-5 mb-5">{card['button-name']}</button>
          </a>

          {card['button-name2'] && (
            <a href={card.link2}>
              <button className="button12">{card['button-name2']}</button>
            </a>
          )}
        </span>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

</div>
        </div> 
        </div>
      </section>
      
      </div>
      
      
   
      
    )
  }

  const SlideButtons =()=>{
  const swiper = useSwiper();
  return (
    <div className="swipe">
      <button onClick={()=>swiper.slidePrev()}>&lt;</button>
      <button onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  )
}