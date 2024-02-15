import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FreeMode, Thumbs } from 'swiper/modules';
import SwiperPhoto from '../../assets/img/mm-turtlenec-green01alt.jpg'
import SwiperPhoto2 from '../../assets/img/mm-turtlenec-green02alt.jpg'


export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="col-12 pt-3 col-lg-6 col-md-6 product-lil-swiper bg-white">

      <div className="swiper mainSwiper">
        <div className="first-swiper swiper-wrapper">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={1}
            modules={[FreeMode, Thumbs]}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            className="mainSwiper"
          >
            <SwiperSlide>
              <div className="swiper-slide position-relative">
                <div className="search-icon-div position-absolute d-flex z-3 justify-content-center align-items-center">
                  <a><i className="fa-solid fa-magnifying-glass"></i></a>
                </div>
                <img src={SwiperPhoto} alt="Swiper Photo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide position-relative">
                <div className="search-icon-div position-absolute d-flex z-3 justify-content-center align-items-center">
                  <a><i className="fa-solid fa-magnifying-glass"></i></a>
                </div>
                <img className="img-fluid" src={SwiperPhoto2} alt="Swiper Photo 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide position-relative">
                <div className="search-icon-div position-absolute d-flex z-3 justify-content-center align-items-center">
                  <a><i className="fa-solid fa-magnifying-glass"></i></a>
                </div>
                <img className="img-fluid" src={SwiperPhoto} alt="Swiper Photo" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        spaceBetween={10}
        slidesPerView={3}
        modules={[FreeMode, Thumbs]}
        className="myPhotobox"
      >
        <SwiperSlide>
          <img className="img-fluid w-100 h-100" src={SwiperPhoto} alt="Swiper Photo" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img-fluid w-100 h-100" src={SwiperPhoto2} alt="Swiper Photo 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img-fluid w-100 h-100" src={SwiperPhoto} alt="Swiper Photo" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}