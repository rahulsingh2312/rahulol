import React from "react";
import { HashRouter ,Routes, Route   } from "react-router-dom";
import './App.css';
import Home from './home';
// import ErrorPage from "./error-page";
import LoadingScreen from './loadingscreen';
import audioFile from './audio/glitch1.mp3';

const App = () => {
  function logLocationOnReload() {
    console.log("Page reloaded. Current location:", window.location.href);
  }

  // Attach the function to the 'beforeunload' event
  window.addEventListener('beforeunload', logLocationOnReload);
  const handleLoadingScreenClick = () => {
  

    const audio = new Audio(audioFile);
    audio.play()
      .then(() => console.log("Audio played successfully"))
      .catch(error => console.error("Error playing audio:", error));
  };

  // {
  //   path: "/",
  //   element: <LoadingScreen onClick={handleLoadingScreenClick} />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/home",
  //   element: <Home />,
  // },

  // const router = createBrowserRouter(createRoutesFromElements(
  //   <Route>
     
  //     <Route path="home" element={<Home />} />

  //     {/* <Route path="*" element={<ErrorPage />} /> */}
      
  //   </Route>
  // ));
  
  

  return (
    <HashRouter>
    <Routes>
    <Route index element={<LoadingScreen onClick={handleLoadingScreenClick} /> } />
    <Route path="home" element={<Home />} />
      </Routes>
  </HashRouter>
  );
}

export default App;
