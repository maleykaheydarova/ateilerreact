import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';


const HomeSwiper = () => {

    return (
        <>
            <div className="swiper-area">
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation={{ clickable: true }}
                    pagination={{ clickable: true }}
                    loop={true}
                >
                    <SwiperSlide>
                        <div className="slider slider-achil">
                            <div className="container d-flex flex-column gap-3">
                                <p className="slider-title">
                                    New Achilles Mid
                                    <br />
                                    is now available.
                                </p>
                                <button className="learn-btn">
                                    <span>Learn More</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>
                                <button className="add-to-cart-btn">
                                    <i className="fa-solid fa-cart-plus"></i>
                                    <span>Add To Cart</span>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider slider-ateiler">
                            <div className="slider-opac"></div>
                            <div className="container d-flex flex-column gap-3 justify-content-center align-items-center">
                                <div className="slider-text">
                                    <p>Inside Atelier: A Snea Reek</p>
                                    <p>Into Our Amazing Shop</p>
                                </div>
                                <p className="learn-more-btn">
                                    <a href="#">
                                        <span>LEARN MORE</span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider slider-workshop">
                            <img src={require('../../assets/img/swiper-img.png')} />
                        </div>
                    </SwiperSlide>
                </Swiper >
            </div>
        </>
    )
};

export default HomeSwiper