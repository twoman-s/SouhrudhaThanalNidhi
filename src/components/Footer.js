import React from "react";
import "./../assets/Footer.css";
import logo from "./../assets/images/logo/logo.png";

function Navigation() {
  return (
    <footer>
      <div className="main-content">
        <div className="left box">
          <h2>Office Hours</h2>
          <div className="content">
            <ul>
              <li>Mon-Sat : 9:00 AM - 6:30 PM</li>
              <li>Sun : Closed</li>
              <li>Lunch Break : 1:30 PM</li>
              <li>
                <img src={logo} alt="" />
              </li>
              <li>CIN : U65929KL2020PLN063501</li>
            </ul>
          </div>
        </div>
        <div className="center box">
          <h2>Address</h2>
          <div className="content">
            <div className="place">
              <span className="fa fa-map-marker"></span>
              <span className="text">
                Souhrudha Thanal Nidhi Ltd <br />
                Joysland Tower, Opposite Nandikkara Bus stop Mapranam <br />{" "}
                Irinjalakuda, Thrissur Kerala 680712
              </span>
            </div>
            <div className="phone">
              <span className="fa fa-phone-alt"></span>
              <span className="text">
                <a href="tel:+918547830203">+918547830203</a>
              </span>
            </div>
            <div className="mail">
              <span className="fa fa-envelope"></span>
              <span className="text">
                <a href="mailto:souhrudhanidhi@gmail.com">
                  souhrudhanidhi@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="right box">
          <h2>Location</h2>
          <div className="content">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825.0505525598696!2d76.22252109782028!3d10.371922678404307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f7f08ec7ed09%3A0x54e39a497b158219!2sSouhrudha%20Thanal%20Nidhi%20Ltd.!5e0!3m2!1sen!2sin!4v1601978855828!5m2!1sen!2sin"
                width="300"
                height="300"
                frameBorder="0"
                style={{ border: "0" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="SouhrudhaThanal Nidhi Limited"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <center>
          <span className="credit">
            Created By <a href="alex">Alex Antony </a>|{" "}
          </span>
          <span className="fa fa-copyright"></span>
          <span> 2020 All rights reserved</span>
        </center>
      </div>
    </footer>
  );
}

export default Navigation;
