import React from "react";
import "./../assets/Navbar.css";
import logo from "./../assets/images/logo/logo.png";
import { Link } from "react-router-dom";

function Navigation() {
  function handleNavClick() {
    document.querySelector(".navbar-toggler").classList.add("collapsed");
    document.querySelector("#navbarNavAltMarkup").classList.remove("show");
  }
  function handleDirectorNavClick() {
    document.querySelector(".navbar-toggler").classList.add("collapsed");
    document.querySelector("#navbarNavAltMarkup").classList.remove("show");
    var links = document.querySelectorAll(".nav-link");
    for (var i = 1; i < links.length; i++) {
      links[i].style.display = "none";
    }
    links[0].href = "/";
    document.querySelectorAll(".logo-name").href = "/";
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img className="logo" src={logo} alt="Souhrudha"></img>
      <a className="logo-name" href="#home">
        Souhrudha Thanal
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <a
            onClick={handleNavClick}
            className="nav-item nav-link active"
            href="#home"
          >
            Home
          </a>
          <a
            onClick={handleNavClick}
            className="nav-item nav-link"
            href="#services"
          >
            Services
          </a>
          <a
            onClick={handleNavClick}
            className="nav-item nav-link"
            href="#aboutus"
          >
            About Us
          </a>
          <a
            onClick={handleNavClick}
            className="nav-item nav-link"
            href="#contact"
          >
            Contact Us
          </a>
          <Link
            onClick={handleDirectorNavClick}
            className="nav-item nav-link"
            to="/directors"
          >
            Our Directors
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
