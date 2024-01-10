import React from 'react';
import loadingVideo from './images/ezgif.com-gif-maker-2.webp';
import Mobileimage from './images/mobilematrix.webp'
const LoadingScreen = () => {
  return (
<div className="relative h-screen">
  {/* Image for Laptop/Desktop screens */}
  <img
    className="hidden md:block object-cover w-full h-screen bg-no-repeat"
    style={{ objectPosition: 'center top' }}
    src={loadingVideo}
    alt="Loading :3"
  />

  {/* Image for Mobile screens */}
  <img
    className="block md:hidden object-cover w-full h-screen bg-no-repeat"
    style={{ objectPosition: 'center top' }}
    src={Mobileimage}
    alt="Loading :3"
  />

  {/* Fallback content in case the images are not loaded */}
  {/* Your browser does not support the image tag. */}
</div>

  );
};

export default LoadingScreen;
