import React, { useEffect } from "react";
import Parallax from "./Parallax";
import Contact from "./Contact";
import Services from "./Services";
import ScrollButton from "./ScrollButton";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ScrollButton />
      <Parallax />
      <Services />
      <Contact />
    </>
  );
}

export default App;
