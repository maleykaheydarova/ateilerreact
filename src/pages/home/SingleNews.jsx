import React from 'react'

const SingleNews = ({ item }) => {

    return (
        <div class="news-wrap" >
            <div class="news">
                <div class="img-wrap">
                    <div class="news-opac">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                    <img src={item.img} class="img-fluid" />
                    <div class="date">
                        <p class="month">{item.month}</p>
                        <p class="day">{item.day}</p>
                    </div>
                </div>
                <div class="news-text-area">
                    <a href="#">{item.title}</a>
                    <p class="author">{item.author}</p>
                    <p class="news-text">
                        {item.text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingleNews