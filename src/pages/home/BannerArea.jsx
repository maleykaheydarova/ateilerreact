import React from 'react'

const BannerArea = () => {
    return (
        <div class="banner-area">
            <div class="row w-100 p-0 m-0">
                <div class="col-12 col-md-6 p-0 m-0">
                    <div class="banner">
                        <div class="banner-opac"></div>
                        <img src={require('../../assets/img/banner1.jpg')} class="w-100 h-auto d-block" />
                        <h2>
                            <p class="banner-title">POST CHRISTMAS SALE</p>
                            <p class="banner-little">bargains to be had!</p>
                        </h2>
                    </div>
                </div>
                <div class="col-12 col-md-6 p-0 m-0">
                    <div class="banner">
                        <div class="banner-opac"></div>
                        <img src={require('../../assets/img/banner2.jpg')} class="w-100 h-auto d-block" />
                        <h2>
                            <p class="banner-title">S/S 15 LOOKBOOK</p>
                            <p class="banner-little">ee what we're up to</p>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerArea