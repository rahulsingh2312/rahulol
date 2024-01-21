import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home from './home';
import ErrorPage from "./error-page";
import LoadingScreen from './loadingscreen';
import audioFile from './audio/glitch1.mp3';

const App = () => {

  const handleLoadingScreenClick = () => {
  

    const audio = new Audio(audioFile);
    audio.play()
      .then(() => console.log("Audio played successfully"))
      .catch(error => console.error("Error playing audio:", error));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoadingScreen onClick={handleLoadingScreenClick} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  
  

  return (
    <RouterProvider router={router} />
  );
}

export default App;
