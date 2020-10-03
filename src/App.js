import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Preloader from "./components/Preloader";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
function App() {
  const [state, setState] = useState({ loaded: false });
  const loaded = state.loaded;
  function load() {
    setState((prevState) => {
      return { loaded: true };
    });
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("load", () => {
      load();
    });
  }, []);

  return (
    <>
      {loaded ? <>
          <Navigation />
            <Home />
          <Footer /> 
          </>
          : (
        <Preloader />
      )}
    </>
  );
}

export default App;
