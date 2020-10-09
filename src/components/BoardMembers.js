import React, { useEffect } from "react";
import "./../assets/BoardMembers.css";

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
    window.scrollTo(0, 0);
    window.onpopstate = (e) => {
      var links = document.querySelectorAll(".nav-link");
      for (var i = 1; i < links.length; i++) {
        links[i].style.display = "block";
      }
      links[0].href = "/";
      document.querySelectorAll(".logo-name").href = "/";
    };
  });
  return (
    <div id="#directors" className="container mt-5 pt-3 mb-5">
      <h3 className="title text-center">Meet our leaders</h3>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mt-3">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                <strong>C J Vincent</strong>
              </h5>
              <h6 className="card-subtitle mt-4 text-muted">Director</h6>
              <p className="card-text mt-4">
                Chakkalakal H,
                <br />
                East Combara,
                <br />
                Irinjalakuda, Thrissur
              </p>
              {/* <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a> */}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mt-3">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                <strong>Vindeep M</strong>
              </h5>
              <h6 className="card-subtitle mt-4 text-muted">Director</h6>
              <p className="card-text mt-4">
                Pulari H,
                <br />
                Rappal,
                <br />
                Pudukkad, Thrissur
              </p>
              {/* <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a> */}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mt-3">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                <strong>Ullas Unnikrishnan</strong>
              </h5>
              <h6 className="card-subtitle mt-4 text-muted">Director</h6>
              <p className="card-text mt-4">
                Thenoly H,
                <br />
                Peace Valley, Azad Road,
                <br />
                Irinjalakuda, Thrissur
              </p>
              {/* <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardMembers;
