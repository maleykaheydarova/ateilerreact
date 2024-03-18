import React from 'react'

const WavyArea = () => {
    return (
        <div className="wavy-area d-flex align-items-center justify-content-center">
            <div className="opac"></div>
            <div className="wavy-inner-area">
                <img src={require('../../assets/img/atelier-logo-stamp-small-light-fill.png')} className="img-fluid" />
                <p className="wavy-txt">
                    Welcome to the very best in globally sourced premium goods. We offer
                    free shipping, free returns and a secure shopping experience.
                </p>
                <button className="shop-btn rounded-pill">Start Shopping</button>
            </div>
        </div>
    )
}

export default WavyArea