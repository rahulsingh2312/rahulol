import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Function to import all images from the "slideshow" folder
const importAll = (context) => context.keys().map(context);
const images = importAll(require.context('../slideshow', false, /\.(png|webp|jpe?g|svg)$/));

const swiperContainerStyle = {
  display: 'flex',
  backgroundColor: '#F4EAE1',
  alignItems: 'center',
  overflow: 'hidden',
  justifyContent: 'center',
  height: '400px', // Adjust this to set the height of the Swiper container
};

const swiperStyles = `
  .swiper {
    overflow: 'hidden',
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-size: cover;
    width: 400px;
    height: 250px;
  }

  .swiper-slide img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
  .ball {
    display: block;
    width: 350px;
    position:absolute;
    height: 450px;
    filter: blur(100px);
   z-index:-1;
    border-radius: 50%;
  }

  .b2 {
    
    background:  linear-gradient(90deg, rgba(233,144,222,1) 9%, rgba(89,152,166,1) 49%, rgba(251,53,175,1) 98%);
  }
`;

export default function App() {
  return (
   <div className='w-full absolute z-50 overflow-hidden'>
    <div className=" z-50 " style={{filter: 'blur(1px)' , backgroundColor: "#F4EAE1", overflow: 'hidden'}}>
      <div className='flex justify-center md:my-20   mt-40 mb-10 md:mb-0 pb-0 md:pt-40 md:text-5xl text-4xl' style={{   zIndex: 10, color: 'rgba(105, 111, 77, 0.80)', fontFamily: 'Inknut Antiqua' }}>Livin Tech :3</div>
      </div>
      <div style={swiperContainerStyle}>
      <style>{swiperStyles}</style>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[ Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 1500, disableOnInteraction: false }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide-content m-2 border-[20px]">
              <img src={src} className='rounded-[1rem]' alt={`Slide ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   
    </div>

  );
}
