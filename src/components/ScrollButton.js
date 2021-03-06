import React, { useEffect } from "react";
import "./../assets/ScrollButton.css";

function ScrollButton() {
  function srollTop(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    document.addEventListener("scroll", () => {
      var button = document.getElementById("btnUp");
      if (button != null) {
        if (window.pageYOffset >= 400) {
          button.style.display = "block";
        } else {
          button.style.display = "none";
        }
      }
    });
  });
  return (
    <>
      <button onClick={srollTop} id="btnUp" type="button">
        <i className="fa fa-arrow-up"></i>
      </button>
    </>
  );
}

export default ScrollButton;
