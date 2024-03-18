import React from 'react'
import { Link } from 'react-router-dom'

const SingleFeature = ({ item }) => {
    return (
        <div className="col-12 col-md-4 col-sm-6">
            <div className="feature">
                <img src={item.img} className="img-fluid" />
                <div className="feature-actions">
                    <span>{item.price}</span>
                    <Link to={'/'}><i className="fa-solid fa-cart-shopping"></i></Link>
                </div>
                <Link to={'/product'} className='opac-caption'>
                    <span className="caption-title">{item.name}</span>
                    <span className="caption-little">{item.category}</span>
                </Link>
            </div>
        </div>
    )
}

export default SingleFeature