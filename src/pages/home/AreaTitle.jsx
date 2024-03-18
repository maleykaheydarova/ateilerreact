import React from 'react'
import { Link } from 'react-router-dom'
import 'swiper/swiper-bundle.css';

const AreaTitle = ({ sectionTitle, className, icons, swiperRef }) => {
    return (
        <div className={className}>
            <span className="section-title">{sectionTitle}</span>
            {
                icons ?
                    <div className="news-icons">
                        <i
                            className="fa-solid fa-chevron-left"
                            id="news-move-left"
                            onClick={() => swiperRef.current?.swiper.slidePrev()}
                        ></i>
                        <i
                            className="fa-solid fa-chevron-right"
                            id="news-move-right"
                            onClick={() => swiperRef.current?.swiper.slideNext()}
                        ></i>
                    </div>
                    : <Link to={"/shop"} className='section-little d-sm-block'>VIEW ALL PRODUCTS</Link>
            }

        </div>
    )
}

export default AreaTitle