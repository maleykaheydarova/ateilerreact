import React from 'react'
import AreaTitle from './AreaTitle'
import SingleTrend from './SingleTrend'

const TrendingArea = () => {
    const Trends = [
        {
            img: require('../../assets/img/trending11.jpg'),
            name: 'Achilles Low',
            price: '$265',
            category: 'Footwear',
            starCount: 3
        },
        {
            img: require('../../assets/img/trending21.jpg'),
            name: 'Plain Backpack',
            price: '$360',
            category: 'Backpacks',
            starCount: 4
        },
        {
            img: require('../../assets/img/trending31.jpg'),
            name: 'Knitted Hat',
            price: '$60',
            category: 'Hats',
            starCount: 2
        }
    ]

    return (
        <div className="trending-area">
            <div className="container">
                <AreaTitle sectionTitle={"TRENDING THIS WEEK"} className={"area-title d-flex align-items-center justify-content-center justify-content-sm-between"} />
                <div className="row">
                    {Trends.map((trend, index) => (
                        <SingleTrend item={trend} index={index} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrendingArea