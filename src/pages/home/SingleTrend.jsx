import React from 'react'
import { Link } from 'react-router-dom';

const SingleTrend = ({ item, index }) => {

    const renderStars = () => {
        const stars = [];

        for (let i = 0; i < item.starCount; i++) {
            stars.push(<i className="fa-solid fa-star checked"></i>);
        }

        for (let i = item.starCount; i < 5; i++) {
            stars.push(<i className="fa-regular fa-star checked"></i>);
        }

        return stars;
    };

    return (
        <div className="col-12 col-sm-6 col-lg-4 mb-4">
            <div className="trending" key={index}>
                <div className="trending-img">
                    <img src={item.img} className="img-fluid" />
                </div>

                <div className="trending-details">
                    <div className="row">
                        <div className="col-12">
                            <Link to={'/'} className='details-name'>{item.name}</Link>
                            <span className="price">{item.price}</span>
                        </div>
                        <div className="col-12">
                            <span className="details-info">{item.category}</span>
                            <div className="details-stars">
                                {
                                    renderStars()
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleTrend