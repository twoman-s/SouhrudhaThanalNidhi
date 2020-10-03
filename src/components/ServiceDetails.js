import React, { useEffect } from "react";

function ServiceDetailsCheck(props){
    if(props.service==="gold"){
        return(
          <div className="container mt-5">
          <h1>Gold</h1>
        </div>
        )
    }
    else if(props.service==="fixed"){
        return(
            <div className="container mt-5">
            <h1>Fixed</h1>
          </div>
          )
    }
  }

function App(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <ServiceDetailsCheck service={props.match.params.service}/>
  );
}

export default App;
