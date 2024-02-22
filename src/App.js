import { useState,useEffect } from 'react';
import Home from './home';
import { Preloader } from './Preloader/Preloader'
import { AnimatePresence } from 'framer-motion';

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() =>{ 
      setLoading(false)
      document.body.style.cursor = "default";
    }, 2000);
    
  })

  return (
   <>
   <AnimatePresence>
   {loading && <Preloader/>}
   </AnimatePresence>
    <Home />
   </>
  )
}
