import React, {useState, useEffect} from "react";
import Home from "./components/Home";
import Preloader from "./components/Preloader";
function App() {
  const [state, setState] = useState({loaded:false})
  const loaded = state.loaded
  function load(){
    
    setState(prevState => {
      return{...prevState, loaded:!prevState.loaded}
    })
  
  }
    useEffect(() => {
      window.addEventListener("load", ()=>{
        load()
      })
    },[]);
  
  return (
    <>
      {loaded?<Home />:<Preloader/>}
    </>
  );
}

export default App;
