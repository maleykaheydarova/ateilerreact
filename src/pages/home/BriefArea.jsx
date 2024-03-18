import React from 'react'
import SingleBrief from './SingleBrief'

const BriefArea = () => {
    const Briefs = [
        {
            icon: 'fa-regular fa-paper-plane',
            title: 'Fast Delivery',
            little: `Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet
            lacusemper elit. Cras neque nulla, convallis non commodo et.
            euismod nonsese.`
        },
        {
            icon: 'fa-solid fa-cart-shopping',
            title: 'Secure Checkout',
            little: `Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet
            lacusemper elit. Cras neque nulla, convallis non commodo et.
            euismod nonsese.`
        },
        {
            icon: 'fa-solid fa-box-open',
            title: 'Free Returns',
            little: `Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet
            lacusemper elit. Cras neque nulla, convallis non commodo et.
            euismod nonsese.`
        }
    ]

    return (
        <div className="brief-area">
            <div className="container">
                <div className="row">
                    {
                        Briefs.map((brief, index) => (
                            <SingleBrief item={brief} key={index}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BriefArea