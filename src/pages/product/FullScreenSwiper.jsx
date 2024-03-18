import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import SliderPhoto from "../../assets/img/mm-turtlenec-green01alt.jpg"
import SliderPhoto1 from "../../assets/img/mm-turtlenec-green02alt.jpg"
const FullScreenSwiper = ({ refer, func }) => {
  return (
    <div
      class="swiper fullscreenSwiper d-none"
      ref={refer}
      
    >
    
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          loop={true}
          className="swiper-wrapper position-relative"
        >
          <SwiperSlide>
            <div class="swiper-slide">
              <img
                class="img-fluid z-3"
                src={SliderPhoto}
              />
              <div class="div-cancel-button position-absolute" onClick={() => func()}>
                <i class="fa-solid fa-xmark"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-slide">
              <img
                class="img-fluid z-3"
                src={SliderPhoto1}
              />
              <div class="div-cancel-button position-absolute" onClick={() => func()}>
                <i class="fa-solid fa-xmark"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-slide">
              <img
                class="img-fluid z-3"
                src={ SliderPhoto}
              />
              <div class="div-cancel-button position-absolute" onClick={() => func()}>
                <i class="fa-solid fa-xmark"></i>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default FullScreenSwiper;
