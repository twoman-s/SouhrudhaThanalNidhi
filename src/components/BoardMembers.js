import React from "react";
import "./../assets/BoardMembers.css";
import Tilt from "react-parallax-tilt";

function BoardMembers() {
  
  return (
    <div id="#directors" className="container mt-4 mb-4">
      <h3 className="title text-center">Meet our leaders</h3>
      <div className="row d-flex justify-content-center">
      <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mt-3">
      <Tilt
        className="parallax-effect-img"
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={700}
        transitionSpeed={1200}
        scale={1}
        gyroscope={true}
      >
        <div className="over">
        <h1 className="inner-element">Ullas</h1>
        <h1 className="inner-element">CEO/Founder</h1>
        </div>
      </Tilt>
      </div>
      <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mt-3">
      <Tilt
        className="parallax-effect-img"
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={700}
        transitionSpeed={1200}
        scale={1}
        gyroscope={true}
      >
        <div className="over">
        <h1 className="inner-element">Akshay</h1>
        <h1 className="inner-element">MD/Co-Founder</h1>
        </div>
      </Tilt>
      </div>
      <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mt-3">
      <Tilt
        className="parallax-effect-img"
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={700}
        transitionSpeed={1200}
        scale={1}
        gyroscope={true}
      >
        <div className="over">
        <h1 className="inner-element">hello</h1>
        <h1 className="inner-element">CEO</h1>
        </div>
      </Tilt>
      </div>
      </div>
    </div>
  );
}

export default BoardMembers;
