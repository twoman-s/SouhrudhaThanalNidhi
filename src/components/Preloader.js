import React from "react";
import "./../assets/Preloader.css";
import logo from "./../assets/images/logo/logo.png";
function Preloader() {
  return (
    <div className="pre">
    <div className="square">
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
                <img className="preloader" src={logo} alt="SouhrudhaThanal"/>
            </div>
        </div>
        </div>
  );
}

export default Preloader;
