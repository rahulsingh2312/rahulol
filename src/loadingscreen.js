import React from 'react';
import loadingVideo from './images/ezgif.com-gif-maker-2.webp';

const LoadingScreen = () => {
  return (
    <div relative h-screen>
      
        <img className='object-cover w-full h-full ' 
       style={{ objectPosition: 'center top' }} 
        src={loadingVideo} alt='loac' />
        {/* Your browser does not support the video tag. */}
        <img className='object-cover w-full h-full ' 
       style={{ objectPosition: 'center top' }} 
        src={loadingVideo} alt='loac'  />
 <img className='object-cover w-full h-full ' 
       style={{ objectPosition: 'center top' }} 
        src={loadingVideo} alt='loac' />
         <img className='object-cover w-full h-full ' 
       style={{ objectPosition: 'center top' }} 
        src={loadingVideo} alt='loac' />
         <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
