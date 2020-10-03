import React, {useEffect} from "react";
import Parallax from "./Parallax";
import Contact from "./Contact";
import Services from "./Services";
import ScrollButton from "./ScrollButton";
// import BoardMembers from "./BoardMembers";

function App() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[]);
  return (
    <>
      <ScrollButton />
      <Parallax />
      <Services />
      {/* <BoardMembers/> */}
      <Contact />
    </>
  );
}

export default App;
