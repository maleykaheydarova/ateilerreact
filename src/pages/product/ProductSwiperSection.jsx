import React from 'react'
import ProductSwiper from './ProductSwiper'
import AdditionalInfoSection from './AdditionalInfoSection'


const ProductSwiperSection = () => {
  return (
    <div class="container-lg container-fluid product-info-box">
      <div class="row pt-4 pb-5">
        <ProductSwiper />
        <div class="col-12 pt-3 col-lg-6 col-md-6 mt-lg-0 mt-md-0 mt-5 product-info bg-white">
          <div class="product-name">
            <div class="product-name-text d-flex justify-content-between">
              <span><a href="">Home</a> {">"} <a class="me-1" href="">Sweaters</a>{">"} <span>Turtleneck
                Sweater</span></span>
              <div class="product-next-button d-flex justify-content-center align-items-center mt-1">
                <a href="product1.html"><i class="fa-solid fa-chevron-right"></i></a>
              </div>
            </div>

            <h1 class="fw-medium mt-lg-0 mt-md-0 mb-5">Turtleneck Sweater</h1>

          </div>
          <div class="product-description">
            <div class="price-and-rating d-flex align-items-center">
              <span class="fw-normal">£300</span>
              <span class="rating ms-3"><i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i></span>
            </div>
            <div class="product-description-info">
              <p class="fw-normal">Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet
                lacusemper elit.
                Cras neque nulla, convallis non commodo et, euismod nonsese. At vero eos et
                accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
              <ul class="list-unstyled mt-lg-0 mt-md-0 mt-4">
                <li>–olive</li>
                <li>–wool / suede</li>
                <li>–made in italy</li>
                <li>–model is 186 cm and wears size m = 48</li>
              </ul>
              <div class="product-buttons d-flex">

                <div class="count d-flex align-items-center">1</div>
                <div class="plus-minus">
                  <div class="plus d-flex justify-content-center align-items-center px-1">
                    <span><i class="fa-solid fa-chevron-up"></i></span>
                  </div>
                  <div class="minus d-flex justify-content-center align-items-center  px-1">
                    <span><i class="fa-solid fa-chevron-down"></i></span>
                  </div>
                </div>
                <button class="d-flex align-items-center"><i class="fa-solid fa-cart-plus"></i><span
                  class="ms-2 fw-bold">ADD TO
                  CART</span></button>
                <a class=" wishlist-button d-flex justify-content-center align-items-center" href=""><i
                  class="fa-solid fa-newspaper"></i></a>
              </div>
              <ul class="list-unstyled add-info">
                <li>SKU: 612444</li>
                <li>Category: <a href="">Sweaters</a></li>
                <li>Tags: <a href="">Sweaters</a>, <a href=""> Turtleneck</a>, <a href="">Wool</a></li>
              </ul>
              <div class="product-social-media d-flex align-items-center">
                <span class=" me-4 fw-bold">Share</span>
                <div class="fb-tw-pin-icons">
                  <a href=""><i class="fa-brands fa-facebook"></i></a>
                  <a href=""><i class="fa-brands fa-twitter"></i></a>
                  <a href=""> <i class="fa-brands fa-pinterest"></i></a>
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