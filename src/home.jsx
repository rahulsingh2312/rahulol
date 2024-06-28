import React, { useState} from "react";
import Project from './project/project'
// import Achievements from './achivements';
import Navbar from './components/navbar';
import Aboutme from './components/aboutme';
import Contactme from './components/contactme';
import LivingTech from './components/LivingTech';


const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  

  return (
    <>
    <div style={{ overflowX: 'hidden' ,overflowY: 'hidden' , backgroundColor: "#F4EAE1"  }}>

    <Navbar toggleNav={toggleNav} />
    
    <div><br /></div>
    <Aboutme />
    <Project />
    </div>
 
   

   <div style={{ backgroundColor: "#F4EAE1" }} className=" md:pt-20"></div>  
    <iframe
  width="100%"
  style={{ backgroundColor: "#F4EAE1" }}
  className="h-[900px]  md:h-[550px]"
  src="https://bento.me/rahulol"
  title="description"
  scrolling="no"
/>

    <LivingTech />
  
    <Contactme />

   
    {/* <Achievements /> */}
   
   
   
</>
  );
}

export default  Home;
