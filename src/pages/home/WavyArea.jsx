import React from 'react'

const WavyArea = () => {
    return (
        <div class="wavy-area d-flex align-items-center justify-content-center">
            <div class="opac"></div>
            <div class="wavy-inner-area">
                <img src={require('../../assets/img/atelier-logo-stamp-small-light-fill.png')} class="img-fluid" />
                <p class="wavy-txt">
                    Welcome to the very best in globally sourced premium goods. We offer
                    free shipping, free returns and a secure shopping experience.
                </p>
                <button class="shop-btn rounded-pill">Start Shopping</button>
            </div>
        </div>
    )
}

export default WavyArea