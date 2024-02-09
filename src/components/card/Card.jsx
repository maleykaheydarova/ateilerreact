import React, { useEffect, useState } from 'react'
import IconsHover from './IconsHover';
const Card = ({ imgsource, name, category, price, imgsource2, twoImg, OneImg, ArrayI, ResponsiveClasses, ResponsiveClasses2, ResponsiveClasses3}) => {
    const [ArrayIForOne, setArrayIForOne] = useState([]);
    const [ArrayIForTwo, setArrayIForTwo] = useState([]);
    useEffect(() => {

        setArrayIForOne(Array.from({ length: ArrayI }, () => 1))
        setArrayIForTwo(Array.from({ length: 5 - ArrayI }, () => 1))

    }, []);
    return (
        <>
            <div className={`col-md-3 card-hover ${ResponsiveClasses} ${ResponsiveClasses2} ${ResponsiveClasses3}`}>
                <div class="img-box position-relative">
                    {OneImg && (
                        <div>
                            <a href="#" class="first-photo"><img class="img-fluid"
                                src={imgsource}
                                alt=""
                            /></a>
                        </div>
                    )}
                    {twoImg && (
                        <>
                            <a class="first-photo" href="#"> <img class="img-fluid" src={imgsource} alt="" /></a>
                            <a class="second-photo position-absolute" href="#"> <img class="img-fluid"
                                src={imgsource2} alt="" /></a>
                        </>

                    )}

                    <IconsHover/>
                </div>
                <div class="img-info-box d-flex flex-column mt-4">
                    <span class="main-name"><a class=" fw-bold" href="#">{name}</a></span>
                    <span class="category-name"><a href="#">{category}</a></span>
                    <span class="fw-bold">£{price}</span>
                    <div class="rating-part">
                        {ArrayIForOne && (
                            <>
                                {ArrayIForOne.map((x, index) => (
                                        <i key={index} className="fa-solid fa-star"></i>
                                    ))}
                                {ArrayIForTwo.map((x, index) => (
                                    <i key={index} className="fa-regular fa-star"></i>
                                ))
                                }
                            </>

                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card