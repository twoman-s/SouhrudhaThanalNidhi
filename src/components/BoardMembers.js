import React, {useEffect} from "react";
import "./../assets/BoardMembers.css";
import logo from "./../assets/images/carousel/img3.jpg";

function BoardMembers() {
    useEffect(() => {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
      }, []);
  return (
    <section id="team">
      <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>

      <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    {/* <!-- Add Pagination --> */}
    <div class="swiper-pagination"></div>
  </div>



      <script src="https://unpkg.com/swiper/swiper-bundle.min.js"/>
      
    </section>
  );
}

export default BoardMembers;
