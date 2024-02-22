import React from 'react'
import { Link } from 'react-router-dom'

const SingleFeature = ({ item }) => {
    return (
        <div class="col-12 col-md-4 col-sm-6">
            <div class="feature">
                <img src={item.img} class="img-fluid" />
                <div class="feature-actions">
                    <span>{item.price}</span>
                    <Link to={'/'}><i class="fa-solid fa-cart-shopping"></i></Link>
                </div>
                <Link to={'/product'} className='opac-caption'>
                    <span class="caption-title">{item.name}</span>
                    <span class="caption-little">{item.category}</span>
                </Link>
            </div>
        </div>
    )
}

export default SingleFeature