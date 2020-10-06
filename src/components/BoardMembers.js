import React, { useEffect } from "react";
import "./../assets/BoardMembers.css";
import Tilt from "react-parallax-tilt";

function BoardMembers() {
  function handleDirectorNavClick() {
    document.querySelector(".navbar-toggler").classList.add("collapsed");
    document.querySelector("#navbarNavAltMarkup").classList.remove("show");
    var links = document.querySelectorAll(".nav-link");
    for (var i = 1; i < links.length; i++) {
      links[i].style.display = "none";
    }
    links[0].href = "/";
    document.querySelector(".logo-name").href = "/";
  }
  useEffect(() => {
    handleDirectorNavClick();
  });
  return (
    <div id="#directors" className="container mt-5 pt-3 mb-5">
      <h3 className="title text-center">Meet our leaders</h3>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center mt-3">
          <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={0}
            tiltMaxAngleY={0}
            perspective={700}
            transitionSpeed={1200}
            scale={1.05}
            gyroscope={false}
          >
            <div className="over">
              <h6 className="inner-element">Board Director</h6>
            </div>
          </Tilt>
          <h4 style={{ textAlign: "center", marginTop: "20px" }}>
            Vincent Chakkalakal
          </h4>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center mt-3">
          <Tilt
            className="parallax-effect-img2"
            tiltMaxAngleX={0}
            tiltMaxAngleY={0}
            perspective={700}
            transitionSpeed={1200}
            scale={1.05}
            gyroscope={false}
          >
            <div className="over">
              <h1 className="inner-element">Board Director</h1>
            </div>
          </Tilt>
          <h4 style={{ textAlign: "center", marginTop: "20px" }}>
            Vindeep Mukappuzha
          </h4>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center mt-3">
          <Tilt
            className="parallax-effect-img3"
            tiltMaxAngleX={0}
            tiltMaxAngleY={0}
            perspective={700}
            transitionSpeed={1200}
            scale={1.05}
            gyroscope={false}
          >
            <div className="over">
              <h1 className="inner-element">Board Director</h1>
            </div>
          </Tilt>
          <h4 style={{ textAlign: "center", marginTop: "20px" }}>
            Ullas Unnikrishnan
          </h4>
        </div>
      </div>
    </div>
  );
}

export default BoardMembers;
