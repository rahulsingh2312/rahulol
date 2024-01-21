import { useRouteError } from "react-router-dom";
import { useGlitch } from 'react-powerglitch';
// import { useRef } from "react";
import Cat from './images/WLC-unscreen.gif';

export default function ErrorPage() {
  const error = useRouteError();

  // const form = useRef(null);
  const glitch = useGlitch({
    "pulse": {
      "scale": 2
    }
  });
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
     <div> <img ref={glitch.ref} src={Cat} alt="catglitch" className='md:w-full'  /></div>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}