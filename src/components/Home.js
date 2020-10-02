import React from "react";
import Navigation from "./Navigation";
import Parallax from "./Parallax";
import Contact from "./Contact";
import Services from "./Services";
import ScrollButton from "./ScrollButton";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navigation />
      <ScrollButton />
      <Parallax />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
