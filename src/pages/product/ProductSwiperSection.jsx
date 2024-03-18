import React from 'react'
import ProductSwiper from './ProductSwiper'
import AdditionalInfoSection from './AdditionalInfoSection'


const ProductSwiperSection = () => {
  return (
    <div className="container-lg container-fluid product-info-box">
      <div className="row pt-4 pb-5">
        <ProductSwiper />
        <div className="col-12 pt-3 col-lg-6 col-md-6 mt-lg-0 mt-md-0 mt-5 product-info bg-white">
          <div className="product-name">
            <div className="product-name-text d-flex justify-content-between">
              <span><a href="">Home</a> {">"} <a className="me-1" href="">Sweaters</a>{">"} <span>Turtleneck
                Sweater</span></span>
              <div className="product-next-button d-flex justify-content-center align-items-center mt-1">
                <a href="product1.html"><i className="fa-solid fa-chevron-right"></i></a>
              </div>
            </div>

            <h1 className="fw-medium mt-lg-0 mt-md-0 mb-5">Turtleneck Sweater</h1>

          </div>
          <div className="product-description">
            <div className="price-and-rating d-flex align-items-center">
              <span className="fw-normal">£300</span>
              <span className="rating ms-3"><i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i></span>
            </div>
            <div className="product-description-info">
              <p className="fw-normal">Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet
                lacusemper elit.
                Cras neque nulla, convallis non commodo et, euismod nonsese. At vero eos et
                accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
              <ul className="list-unstyled mt-lg-0 mt-md-0 mt-4">
                <li>–olive</li>
                <li>–wool / suede</li>
                <li>–made in italy</li>
                <li>–model is 186 cm and wears size m = 48</li>
              </ul>
              <div className="product-buttons d-flex">

                <div className="count d-flex align-items-center">1</div>
                <div className="plus-minus">
                  <div className="plus d-flex justify-content-center align-items-center px-1">
                    <span><i className="fa-solid fa-chevron-up"></i></span>
                  </div>
                  <div className="minus d-flex justify-content-center align-items-center  px-1">
                    <span><i className="fa-solid fa-chevron-down"></i></span>
                  </div>
                </div>
                <button className="d-flex align-items-center"><i className="fa-solid fa-cart-plus"></i><span
                  className="ms-2 fw-bold">ADD TO
                  CART</span></button>
                <a className=" wishlist-button d-flex justify-content-center align-items-center" href=""><i
                  className="fa-solid fa-newspaper"></i></a>
              </div>
              <ul className="list-unstyled add-info">
                <li>SKU: 612444</li>
                <li>Category: <a href="">Sweaters</a></li>
                <li>Tags: <a href="">Sweaters</a>, <a href=""> Turtleneck</a>, <a href="">Wool</a></li>
              </ul>
              <div className="product-social-media d-flex align-items-center">
                <span className=" me-4 fw-bold">Share</span>
                <div className="fb-tw-pin-icons">
                  <a href=""><i className="fa-brands fa-facebook"></i></a>
                  <a href=""><i className="fa-brands fa-twitter"></i></a>
                  <a href=""> <i className="fa-brands fa-pinterest"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* additional info section  */}
      <AdditionalInfoSection />

    </div>
  )
}

export default ProductSwiperSection