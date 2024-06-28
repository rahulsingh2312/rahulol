import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Blog from './blog/page';
import { Preloader } from './Preloader/Preloader';
import { AnimatePresence } from 'framer-motion';
// import Practicals from './practicals/Practicals'
// import PracticalsDaa from './practicals/PracticalsDaa.js'
// import PracticalsD from './practicals/PracticalsD.js'
// import PracticalsCn from './practicals/PracticalsCn.js'
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.style.cursor = 'default';
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/p" element={<Practicals />} />
        <Route path="/d" element={<PracticalsD />} />
   <Route path="/os" element={<PracticalsD />} />
        <Route path="/daa" element={<PracticalsDaa />} />
        <Route path="/cn" element={<PracticalsCn />} /> */}
        <Route path="/" element={<Home />} /> 
      </Routes>
    </BrowserRouter>
  );
}
