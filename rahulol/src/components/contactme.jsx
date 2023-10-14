import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import '../App.css';
let hi ="<3"

function Contact() {
  const form = useRef(null);

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
    <div id='getintouch' className='pirateone'>
      <div className='md:flex sm:mt-40'>
        <div className='md:w-1/2 md:ml-80 text-6xl md:text-8xl p-10 text-pink-300 font-bold'>
          Get In Touch!
          <br />
          <div className='text-sm md:text-4xl mt-2'>
            Currently Searching for Internship & Job opportunities
          </div>
        </div>
        <div className='md:w-1/2 mt-6 md:mr-40 text-4xl sm:ml-10 sm:mr-10 sm:mt-0'>
          <form className='text-center'  ref={form} onSubmit={sendEmail}>
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

            <button
              type='submit'
              className='w-full md:w-full md:mb-40 sm:mb-20 bg-pink-300 text-white font-bold py-2 px-4 hover:bg-pink-500 transition duration-300 ease-in-out'
            >
              Submit
            </button>
          </form>

          <div className=' text-pink-300 mb-10 text-center text-2xl mt-2'> made with {hi} by rahul </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;
