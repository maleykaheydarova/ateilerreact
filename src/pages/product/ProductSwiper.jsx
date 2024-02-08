import React, {useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Thumbs } from 'swiper/modules';
import SwiperCore from 'swiper';
import SwiperPhoto from '../../assets/img/mm-turtlenec-green01alt.jpg'
import SwiperPhoto2 from '../../assets/img/mm-turtlenec-green02alt.jpg'

SwiperCore.use([Thumbs]);


function ProductSwiper() {
 
  const [mainSwiperIndex, setMainSwiperIndex] = useState(0);
    const mainSwiperRef = useRef(null);
  
    const handleThumbsSlideChange = (swiper) => {
      if (mainSwiperRef.current && swiper) {
        mainSwiperRef.current.slideTo(swiper.activeIndex);
        setMainSwiperIndex(swiper.activeIndex);
      }
    };


  return (
    <div className="col-12 pt-3 col-lg-6 col-md-6 product-lil-swiper bg-white">
       
      <div className="swiper mainSwiper" >
        <div className="first-swiper swiper-wrapper">
        <Swiper
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={(swiper) => setMainSwiperIndex(swiper.activeIndex)}
      ref={mainSwiperRef}
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
          spaceBetween={10}
          slidesPerView={3}
          className="myPhotobox"
          onSlideChange={(swiper) => handleThumbsSlideChange(swiper)}
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

export default ProductSwiper;
