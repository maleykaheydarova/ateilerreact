import React from 'react'

const BannerArea = () => {
    return (
        <div className="banner-area">
            <div className="row w-100 p-0 m-0">
                <div className="col-12 col-md-6 p-0 m-0">
                    <div className="banner">
                        <div className="banner-opac"></div>
                        <img src={require('../../assets/img/banner1.jpg')} className="w-100 h-auto d-block" />
                        <h2>
                            <p className="banner-title">POST CHRISTMAS SALE</p>
                            <p className="banner-little">bargains to be had!</p>
                        </h2>
                    </div>
                </div>
                <div className="col-12 col-md-6 p-0 m-0">
                    <div className="banner">
                        <div className="banner-opac"></div>
                        <img src={require('../../assets/img/banner2.jpg')} className="w-100 h-auto d-block" />
                        <h2>
                            <p className="banner-title">S/S 15 LOOKBOOK</p>
                            <p className="banner-little">ee what we're up to</p>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerArea