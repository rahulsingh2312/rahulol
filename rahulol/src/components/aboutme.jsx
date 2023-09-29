import React from 'react';
import Pfp from '../images/rahul.png';


function aboutme(){
return (
    <div>

    <div className='text-4xl ml-40  bg-black md:ml-40  md:p-40 md:text-6xl text-pink-300 '>
    <img src={Pfp} alt="pfp" className='md:ml-80' />
       <div className='md:ml-96 text-3xl md:text-6xl'> Who is Rahul?</div>
       <div className='text-white sm:hidden  md:block md:mt-5 md:text-4xl text-2xl md:p-4 md:mr-2 md:box-border  md:border-4'> 
       Hiiii I'm A Tech Enthusiast and a learner 🧑‍💻, <br /> i usually talk in methaphors and javascript,<br />who is really optimistic and overconfident (ya i use that as a strength idk) , I'm Nocturnal🦉 and a bit delusional and sometimes I'm a Social Animal And a developer .
       </div>
     
    </div>
    <div className='text-white  z-1 text-sm helvetica bg-black md:opacity-0  ml-20 z-50 text-4xl sm:absolute'> 
       Hiiii I'm A Tech Enthusiast and a learner 🧑‍💻, <br /> i usually talk in methaphors and javascript,<br />who is really optimistic and overconfident (ya i use that as a strength idk) , I'm Nocturnal🦉 and a bit delusional and sometimes I'm a Social Animal And a developer .
       </div>
    </div>
);

};
export default aboutme;