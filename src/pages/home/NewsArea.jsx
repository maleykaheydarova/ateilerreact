import React, { useRef } from 'react'
import AreaTitle from './AreaTitle'
import SingleNews from './SingleNews'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';



const NewsArea = () => {
    const swiperRef = useRef(null);
    
    const News = [
        {
            img: require('../../assets/img/news1.jpg'),
            month: 'SEP',
            day: '01',
            title: 'Sharp Loks for 2015',
            author: 'By Atelier / 3 Comments',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            viverra euismod odio, gravida pellentesque urna varius
            vitae. Sed dui lorem, adipiscing in adipiscing et, interdum
            nec metus. Mauris ultricies,justo eu convallis placerat,
            felis enim ornare nisi, vitae mattis nulla ante id dui. Ut
            lectus purus, commodo et tincidunt vel, interdum sed lectus.
            Vestibulum adipiscing tempor nisi id elementu sadips ipsums
            dolores uns fugi s gravida nam elit vols nulla dolores a
            met.`
        },
        {
            img: require('../../assets/img/news2.jpg'),
            month: 'SEP',
            day: '01',
            title: 'Hot items for the New Year',
            author: 'By Atelier / 3 Comments',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            viverra euismod odio, gravida pellentesque urna varius
            vitae. Sed dui lorem, adipiscing in adipiscing et, interdum
            nec metus. Mauris ultricies,justo eu convallis placerat,
            felis enim ornare nisi, vitae mattis nulla ante id dui. Ut
            lectus purus, commodo et tincidunt vel, interdum sed lectus.
            Vestibulum adipiscing tempor nisi id elementu sadips ipsums
            dolores uns fugi s gravida nam elit vols nulla dolores a
            met.`
        },
        {
            img: require('../../assets/img/news3.jpg'),
            month: 'SEP',
            day: '01',
            title: 'Gallery Post',
            author: 'By Atelier / 3 Comments',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            viverra euismod odio, gravida pellentesque urna varius
            vitae. Sed dui lorem, adipiscing in adipiscing et, interdum
            nec metus. Mauris ultricies,justo eu convallis placerat,
            felis enim ornare nisi, vitae mattis nulla ante id dui. Ut
            lectus purus, commodo et tincidunt vel, interdum sed lectus.
            Vestibulum adipiscing tempor nisi id elementu sadips ipsums
            dolores uns fugi s gravida nam elit vols nulla dolores a
            met.`
        },
        {
            img: require('../../assets/img/news4.jpg'),
            month: 'SEP',
            day: '01',
            title: 'Page Builder Post',
            author: 'By Atelier / 3 Comments',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            viverra euismod odio, gravida pellentesque urna varius
            vitae. Sed dui lorem, adipiscing in adipiscing et, interdum
            nec metus. Mauris ultricies,justo eu convallis placerat,
            felis enim ornare nisi, vitae mattis nulla ante id dui. Ut
            lectus purus, commodo et tincidunt vel, interdum sed lectus.
            Vestibulum adipiscing tempor nisi id elementu sadips ipsums
            dolores uns fugi s gravida nam elit vols nulla dolores a
            met.`
        },
    ]

    return (
        <div className="news-area">
            <div className="container">
                <AreaTitle
                    sectionTitle={"FEATURED ITEMS"}
                    className={"area-title d-flex align-items-center justify-content-between"}
                    icons={true}
                    swiperRef={swiperRef}
                />
                <Swiper
                    ref={swiperRef}
                    className='row flex-nowrap'
                    breakpoints={{768: {slidesPerView: 3}}}
                    spaceBetween={10}
                    modules={[Navigation, Pagination]}
                    loop={true}
                >
                    {News.map((news, index) => (
                        <SwiperSlide>
                            <SingleNews key={index} item={news} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default NewsArea