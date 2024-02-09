import React from 'react'
import { Link } from 'react-router-dom'

const SingleContent = ({img, contentName}) => {
    return (
        <div class="col-12 col-md-3">
            <div class="shop-content">
                <img src={img} class="img-fluid" />
                <Link to={'/shop'}>
                    <span>SHOP {contentName}</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </Link>
            </div>
        </div>
    )
}

export default SingleContent