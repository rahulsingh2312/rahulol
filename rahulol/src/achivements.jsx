import React from 'react';
import {Swiper,SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Project.css'
import data from './data.json'
import left from './images/mirrordesign.png'
import right from './images/mirrrorlaptoponly.png'
// const importAll = (context) => context.keys().map(context);
// const images = importAll(require.context('./slideshow/', false, /\.(png|jpe?g|svg)$/));


export default function Profile() {
 
 
    return (
      <div style={{ backgroundColor: "#F4EAE1", fontFamily:"Inknut Antiqua" }}>
          <div className='md:block sm:hidden'>
            <img className='absolute  -mt-40' src={left} width={550} alt="deg"></img>
            <img className=' float-right -mt-40' src={right} width={550} alt="deg"></img>
            </div>
          <img className='md:hidden' src={left} width={550} alt="deg"></img>
        <div className='flex justify-center pb-10 md:pt-40'  style={{ zIndex: 10, color: 'rgba(105, 111, 77, 0.80)', fontSize: 50, fontFamily: 'Inknut Antiqua', }} >Projects</div>
       <div className=''>
      
 <Swiper breakpoints={{0:{slidesPerView:1, spaceBetween:40},480:{slidesPerView:1, spaceBetween:40},720:{slidesPerView:2, spaceBetween:40},1280:{slidesPerView:3,spaceBetween:50}}}>
          <SlideButtons/>
            {
                data.map((card, i) => (
                  <SwiperSlide key={i}>
                    <div  style={{    /* fallback for old browsers */
  background: 'linear-gradient(to right, #d9a7c7, #fffcdc)',}}  className="flexCenter flexColStart p-card">
                      <img src={card.image} alt="Thumb"/>
                      <span className="p-cardtext"><br/>
                        <span className="primaryText name">{card.name}</span><br/>
                        <span className="secondaryText detail">{card.detail}</span><br/>
                        <a className="" style={{color:"blue"}} href={card.link1}>
                        <button className="button2">{card['button-name']}</button></a>
                        
                        {card['button-name2'] && (
                        <a href={card.link2}>
                          <button className="button12">{card['button-name2']}</button>
                        </a>
                      )}
                        
                    </span>
 
                    </div>
                  </SwiperSlide>

                ))
            }
        </Swiper>
     
        </div> 
      
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