import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import '../App.css';
import { useGlitch } from 'react-powerglitch';
import Cat from '../images/WLC-unscreen.gif';
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





let hi ="<3"

function Contact() {
  const form = useRef(null);
  const glitch = useGlitch({
    "pulse": {
      "scale": 2
    }
  });
  const sendEmail = (e) => {
    e.preventDefault();
    const currentForm = form.current;
    if (currentForm == null) return;
    emailjs.sendForm('service_8x11px8', 'contact_form', currentForm, '2LLYXIsnN7NoYlrrJ')
      .then((result) => {
          // console.log(result.text);
          alert("Email Sent");
          console.log(result.text);
          window.location.reload();
      }, (error) => {
        console.log("hi")
          console.log(error.text);
      });
  };

  return (

    <div className='w-full absolute z-50 overflow-hidden'>



<div className='slider-glitter'>
  <div className="z-50" style={{ filter: 'blur(1px)', backgroundColor: "#F4EAE1", overflow: 'hidden' }}>
    <div className='flex justify-center md:my-20 mt-40 mb-5 md:mb-10 pb-0 md:pt-40 md:text-5xl text-4xl' style={{ zIndex: 10, color: 'rgba(105, 111, 77, 0.80)', fontFamily: 'Inknut Antiqua' }}>Livin Tech :3</div>
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
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      autoplay={{ delay: 1500, disableOnInteraction: false }}
      loop={true}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-slide-content m-2 ">
            <img src={src} className='rounded-[1rem]' alt={`Slide ${index + 1}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>



    <div className=" " style={{filter: 'blur(0.5px)'}}>
    <div id='getintouch' className='pirateone' style={{ backgroundColor: "#F4EAE1" }}>
      <div className='md:flex sm:pt-20'>
        <div className='md:w-1/2'>
      <img ref={glitch.ref} src={Cat} alt="catglitch" className='md:w-full'  /></div>
        <div className='md:w-1/2 text-6xl md:pt-40 md:text-8xl p-10 text-pink-300 font-bold'>
          Get In Touch!
          <br />
          <div className='text-sm md:text-4xl mt-2'>
            Currently Searching for Internship & Job opportunities
          </div>
        </div>
        <div className='md:w-1/2 mt-6 md:mr-40   text-4xl sm:ml-10 sm:mr-10 sm:mt-0'>
          <form className='text-center md:pt-20'   ref={form} onSubmit={sendEmail}>
            <div className='mb-4'>
              <input
                type='text'
                label='name'
                id='name'
                style={{ backgroundColor: 'transparent' }}
                name='from_name'
                placeholder='Name'
                required
                className='w-full p-2 border-b border-pink-300 text-pink-300 focus:outline-none focus:border-pink-500'
              />
            </div>

            <div className='mb-4'>
              <input
                style={{ backgroundColor: 'transparent' }}
                type='email'
                id='email'
                name='from_email'
                placeholder='Email'
                required
                className='w-full p-2 border-b border-pink-300 text-pink-300 focus:outline-none focus:border-pink-500'
              />
            </div>

            <div className='mb-4'>
              <textarea
                id='howCanIHelp'
                style={{ backgroundColor: 'transparent' }}
                name='message'
                placeholder='How can I help?'
                required
                className='w-full p-2 border-b bg-gray-100 text-pink-300 border-pink-300 focus:outline-none focus:border-pink-500'
              ></textarea>
      </div>
<div className=''>
            <button
             style={{ backgroundColor: 'rgb(249 168 212)'  }}
              type='submit'
              className='w-full md:w-full z-10 border  md:mb-20 sm:mb-10  text-black font-bold py-2 px-4 hover:bg-pink-500 transition duration-300 ease-in-out'
            >
              Submit
            </button>      
</div>
          </form>

          <div className=' text-pink-300  pb-10 text-center text-2xl mt-2'> made with {hi} by rahul </div>
        </div>
      </div>

    </div>
    
    </div>
    </div>
  );
}

export default Contact;
