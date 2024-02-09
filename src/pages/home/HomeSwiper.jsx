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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="slider slider-ateiler">
                            <div class="slider-opac"></div>
                            <div class="container d-flex flex-column gap-3 justify-content-center align-items-center">
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="slider slider-workshop">
                            <img src={require('../../assets/img/swiper-img.png')} />
                        </div>
                    </SwiperSlide>
                </Swiper >
            </div>
        </>
    )
};

export default HomeSwiper