import React from "react";
import banner from "./../assets/images/parallax/banner.png";
import "./../assets/Parallax.css";
import logo from "./../assets/images/logo/logo.png";
import Carousel from "./Carousel";
function Parallax() {
  return (
    <>
      <header id="home" className="container">
        <div className="carousel slide container">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="banner" src={banner} alt="banner" />
              <div className="carousel-caption c-banner">
                <h3>Welcome to</h3>
                <h1>
                  <span className="main">Souhrudha</span> Thanal
                </h1>
                <h2>Nidhi Limited</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="aboutus">
        <div className="container">
          <div className="content opacity">
            <h3 className="title">About Us</h3>
            <p className="text">
              Souhrudha Thanal Nidhi Limited is a company in the Indian
              non-banking finance sector, recognized under section 406 of the
              Companies Act, 2013. We performs the functions of lending and
              borrowing of money within our members.We promotes the art of
              saving and utilization of funds within our member community.
              <br />
              <br />
            </p>
            <span style={{ fontWeight: "bold", textAlign: "left" }}>
              CIN : U65929KL2020PLN063501
            </span>
          </div>

          <div className="imgContainer opacity">
            <img className="parallax-logo" src={logo} alt="" />
          </div>
        </div>
      </section>
      ` <Carousel />`
    </>
  );
}

export default Parallax;
