import React, { useEffect, useState } from 'react'
const Card = ({ imgsource, name, category, price, imgsource2, twoImg, OneImg, ArrayI }) => {
    const [ArrayIForOne, setArrayIForOne] = useState([]);
    const [ArrayIForTwo, setArrayIForTwo] = useState([]);
    useEffect(() => {

        setArrayIForOne(Array.from({ length: ArrayI }, () => 1))
        setArrayIForTwo(Array.from({ length: 5 - ArrayI }, () => 1))

    }, []);
    return (
        <>
            <div class="col-lg-3 col-md-3 col-sm-4 card-hover">
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

                    <div class="icons-hover position-absolute d-flex">
                        <div class="iconn d-flex align-items-center">
                            <a href=""> <i class="fa-solid fa-cart-plus"></i></a>
                        </div>
                        <div class="iconn  d-flex align-items-center">
                            <a href=""> <i class="fa-solid fa-newspaper"></i></a>
                        </div>
                        <div class="iconn  d-flex align-items-center">
                            <a href=""> <i class="fa-solid fa-eye"></i></a>
                        </div>

                    </div>
                </div>
                <div class="img-info-box d-flex flex-column mt-4">
                    <span class="main-name"><a class=" fw-bold" href="#">{name}</a></span>
                    <span class="category-name"><a href="#">{category}</a></span>
                    <span class="fw-bold">£{price}</span>
                    <div class="rating-part">
                        {ArrayIForOne && (
                            <>
                                {
                                    ArrayIForOne.map((x, index) => (
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
            {/* <div class="cartshop col-12 col-md-3 col-sm-6 mt-3">
                <ul class="d-flex flex-column gap-1">
                    <li>
                        <div class="productimg position-relative">
                            {OneImg && (
                                <div>
                                    <img
                                        src={imgsource}
                                        alt=""
                                    />
                                </div>
                            )}
                            {twoImg && (
                                <>
                                    <div class="one-img">
                                        <img
                                            src={imgsource}
                                            alt=""
                                        />
                                    </div>
                                    <div class="second-img position-absolute">
                                        <img
                                            src={imgsource2}
                                            alt=""
                                        />
                                    </div>
                                </>

                            )}

                            <div class="icons-hover position-absolute d-flex">
                                <div class="iconn d-flex align-items-center">
                                    <a href=""> <i class="fa-solid fa-cart-plus"></i></a>
                                </div>
                                <div class="iconn  d-flex align-items-center">
                                    <a href=""> <i class="fa-solid fa-newspaper"></i></a>
                                </div>
                                <div class="iconn  d-flex align-items-center">
                                    <a href=""> <i class="fa-solid fa-eye"></i></a>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li class="mt-4">
                        <a href="#"><h5>{name}</h5></a>
                    </li>
                    <li>
                        <a href="#"><span>{category}</span> </a>
                    </li>
                    <li><span>£{price}</span></li>
                    <li>
                        <span>
                            {ArrayIForOne && (
                                <>
                                    {
                                        ArrayIForOne.map((x, index) => (
                                            <i key={index} className="fa-solid fa-star"></i>
                                        ))}
                                    {ArrayIForTwo.map((x, index) => (
                                        <i key={index} className="fa-regular fa-star"></i>
                                    ))
                                    }
                                </>

                            )}
                        </span>
                    </li>
                </ul>
            </div> */}
        </>
    )
}

export default Card