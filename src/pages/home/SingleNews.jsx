import React from 'react'

const SingleNews = ({ item }) => {

    return (
        <div className="news-wrap" >
            <div className="news">
                <div className="img-wrap">
                    <div className="news-opac">
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                    <img src={item.imagePath} className="img-fluid" />
                    <div className="date">
                        <p className="month">{item.month}</p>
                        <p className="day">{item.day}</p>
                    </div>
                </div>
                <div className="news-text-area">
                    <a href="#">{item.name}</a>
                    <p className="author">{item.author}</p>
                    <p className="news-text">
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingleNews