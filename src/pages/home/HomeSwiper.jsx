import React from 'react'

const HomeSwiper = () => {
  return (
    <>
    <div class="swiper-area item">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="slider slider-achil">
            <div class="container d-flex flex-column gap-3">
              <p class="slider-title">
                New Achilles Mid
                <br />
                is now available.
              </p>
              <p class="learn-btn">
                <a href="#">
                  <span>Learn More</span>
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </p>
              <p class="add-to-cart-btn">
                <a href="#">
                  <i class="fa-solid fa-cart-plus"></i>
                  <span>Add To Cart</span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider slider-ateiler">
            <div class="slider-opac"></div>
            <div
              class="container d-flex flex-column gap-3 justify-content-center align-items-center"
            >
              <div class="slider-text">
                <p>Inside Atelier: A Snea Reek</p>
                <p>Into Our Amazing Shop</p>
              </div>
              <p class="learn-more-btn">
                <a href="#">
                  <span>LEARN MORE</span>
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider slider-workshop">
            <img src={require("../../assets/img/swiper-img.png")}/>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>

      <div class="swiper-button-prev text-dark d-none d-md-block"></div>
      <div class="swiper-button-next text-dark d-none d-md-block"></div>
    </div>
  </div>
    </>
  )
}

export default HomeSwiper