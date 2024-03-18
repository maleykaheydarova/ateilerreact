import React from 'react'
import { Link } from 'react-router-dom'

const SingleContent = ({img, contentName}) => {
    return (
        <div className="col-12 col-md-3">
            <div className="shop-content">
                <img src={img} className="img-fluid" />
                <Link to={'/shop'}>
                    <span>SHOP {contentName}</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </Link>
            </div>
        </div>
    )
}

export default SingleContent