import React from 'react'
import { Link } from 'react-router-dom';

const SingleTrend = ({ item }) => {

    const renderStars = () => {
        const stars = [];

        for (let i = 0; i < item.starCount; i++) {
            stars.push(<i class="fa-solid fa-star checked"></i>);
        }

        for (let i = item.starCount; i < 5; i++) {
            stars.push(<i class="fa-regular fa-star checked"></i>);
        }

        return stars;
    };

    return (
        <div class="col-12 col-sm-6 col-lg-4 mb-4">
            <div class="trending">
                <div className="trending-img">
                    <img src={item.img} className="img-fluid" />
                </div>

                <div class="trending-details">
                    <div class="row">
                        <div class="col-12">
                            <Link to={'/'} className='details-name'>{item.name}</Link>
                            <span class="price">{item.price}</span>
                        </div>
                        <div class="col-12">
                            <span class="details-info">{item.category}</span>
                            <div class="details-stars">
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