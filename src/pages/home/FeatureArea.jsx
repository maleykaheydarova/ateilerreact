import React from 'react'
import AreaTitle from './AreaTitle'
import SingleFeature from './SingleFeature'

const FeatureArea = () => {
    const Features = [
        {
            img: require('../../assets/img/feature1.jpg'),
            price: '$100',
            name: 'Gift Card',
            category: 'Accessories'
        },
        {
            img: require('../../assets/img/feature2.jpg'),
            price: '$140',
            name: 'Canada Terrazzo Scarf',
            category: 'Accessories'
        },
        {
            img: require('../../assets/img/feature3.jpg'),
            price: '$265',
            name: 'Slip Ons',
            category: 'Footwear'
        },
        {
            img: require('../../assets/img/feature4.jpg'),
            price: '$80',
            name: 'Biblio Sunglasses',
            category: 'Accessories'
        },
        {
            img: require('../../assets/img/feature5.jpg'),
            price: '$280',
            name: 'Achilles Mid',
            category: 'Footwear'
        },
        {
            img: require('../../assets/img/feature6.jpg'),
            price: '$240',
            name: 'Achilles Low',
            category: 'Footwear'
        },
        {
            img: require('../../assets/img/feature7.jpg'),
            price: '$60',
            name: 'Knitted Hat',
            category: 'Hats'
        },
        {
            img: require('../../assets/img/feature8.jpg'),
            price: '$150',
            name: 'Reptile Card Case',
            category: 'Accessories'
        },
        {
            img: require('../../assets/img/feature9.jpg'),
            price: '$425',
            name: 'Duckboot',
            category: 'Footwear'
        },
        {
            img: require('../../assets/img/feature10.jpg'),
            price: '$85',
            name: 'Camo Hat',
            category: 'Hats'
        },
    ]
    return (
        <div className="feature-area">
            <div className="container">
                <AreaTitle sectionTitle={'FEATURED ITEMS'} className={"area-title d-flex align-items-center justify-content-center justify-content-sm-between"} />
                <div className="row">
                    {
                        Features.map((feature, index) => (
                            <SingleFeature item={feature} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FeatureArea