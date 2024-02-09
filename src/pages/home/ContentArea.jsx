import React from 'react'
import SingleContent from './SingleContent'

const ContentArea = () => {

    const contents = [
        {
            img: require('../../assets/img/shopcontentbg1.jpg'),
            contentName: 'OUTERWEAR'
        },
        {
            img: require('../../assets/img/shopcontentbg2.jpg'),
            contentName: 'ACCESSORIES'
        },
        {
            img: require('../../assets/img/shopcontentbg3.jpg'),
            contentName: 'SHIRTING'
        },
        {
            img: require('../../assets/img/shopcontentbg4.jpg'),
            contentName: 'FOOTWEAR'
        },
    ];

    return (
        <>
            <div className="shop-content-area">
                <div className="container">
                    <div className="row">
                        {contents.map(content => (
                            <SingleContent img={content.img} contentName={content.contentName} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentArea