import React from 'react'
import ProductSwiperSection from './ProductSwiperSection'

const Product = () => {
  return (
    <div class="product-swiper-section">
     {/* product section  */}
      <section class="product-part">
        <img class="img-fluid bg-img w-100" src="sass/assets/img/Atelier-header-turtleneck-bkg.jpg" alt=""/>
        <div class="container-lg container-fluid product-info-box item">
          <div class="row pt-4 pb-5">
            <div class="col-12 pt-3 col-lg-6 col-md-6 product-lil-swiper bg-white">
              <div class="swiper mainSwiper">
                <div class="first-swiper swiper-wrapper">
                  <div class="swiper-slide position-relative">
                    <div class="search-icon-div position-absolute d-flex z-3 justify-content-center align-items-center">
                      <a><i class="fa-solid fa-magnifying-glass"></i></a>
                    </div>
                    <img src="sass/assets/img/mm-turtlenec-green01alt.jpg" />
                  </div>
                  <div class="swiper-slide position-relative">
                    <div class="search-icon-div position-absolute d-flex z-3 justify-content-center align-items-center">
                      <a><i class="fa-solid fa-magnifying-glass"></i></a>
                    </div>
                    <img class="img-fluid" src="sass/assets/img/mm-turtlenec-green02alt.jpg" />
                  </div>
                  <div class="swiper-slide position-relative">
                    <div class="search-icon-div position-absolute d-flex z-3 justify-content-center align-items-center">
                      <a><i class="fa-solid fa-magnifying-glass"></i></a>
                    </div>
                    <img class="img-fluid" src="sass/assets/img/mm-turtlenec-green01alt.jpg" />
                  </div>
                </div>
              </div>
              <div thumbsSlider="" class="swiper myPhotobox ">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img class="img-fluid w-100 h-100" src="sass/assets/img/mm-turtlenec-green01alt.jpg" />
                  </div>
                  <div class="swiper-slide">
                    <img class="img-fluid w-100 h-100" src="sass/assets/img/mm-turtlenec-green02alt.jpg" />
                  </div>
                  <div class="swiper-slide">
                    <img class="img-fluid w-100 h-100" src="sass/assets/img/mm-turtlenec-green01alt.jpg" />
                  </div>


                </div>
              </div>
            </div>
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

          <!-- additional info section -->
          <div class="container-lg w-100 container-fluid add-info-box">
            <div class="row py-4">
              <div class="col-lg-3 col-md-3 col-4 info-link-part">
                <a class="fw-medium" href="">Additional information</a>
              </div>
              <div class="col-lg-9 col-md-9 col-8 slices-part">
                <div class="slice d-flex justify-content-between">
                  <p>Weight</p>
                  <p>0.5 kg</p>
                </div>
                <div class="slice d-flex justify-content-between">
                  <p>Colour</p>
                  <p><a href="">Green</a></p>
                </div>
                <div class="slice d-flex justify-content-between">
                  <p>Size</p>
                  <p><a href="">Large</a>, <a href="">Medium</a>, <a href="">Small</a></p>
                </div>
                <div class="slice d-flex justify-content-between">
                  <p>Fabric</p>
                  <p><a href="">Suede</a></p>
                </div>

              </div>
            </div>
          </div>


        </div>
        <!-- reviews section -->

        <div class="container-fluid reviews-box px-0 item">
          <div class="review-box1">
            <div class="container-lg w-100 container-fluid">
              <div class="row py-4">
                <div class="col-lg-8 col-md-8 col-12 review">
                  <span class="fw-bold part-name">REVIEWS <span class="fw-normal ms-2">(3)</span></span>
                  <div class="review-content row">


                    <div class="review-info col-lg-3 col-md-3 col-4 py-5 d-flex flex-column">

                      <div class="rating-part">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                      <div class="img-part">
                        <img class="img-fluid" src="sass/assets/img/f2336fbaff66dd1f1c449bd67ffcc5d8.png" alt="">
                      </div>
                      <span>atelierwp</span>
                      <span>February 17, 2015</span>
                    </div>
                    <div class="review-text col-lg-9 col-md-9 col-8 pe-0 py-5">
                      <p>Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet
                        lacusemper
                        elit. Cras neque nulla, convallis non commodo et, euismod nonsese.
                        At
                        vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas
                        molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>
                  </div>
                  <div class="review-content row">
                    <div class="review-info col-lg-3 col-md-3 col-4  py-5 d-flex flex-column">

                      <div class="rating-part">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                      <div class="img-part">
                        <img class="img-fluid" src="sass/assets/img/f2336fbaff66dd1f1c449bd67ffcc5d8.png" alt="">
                      </div>
                      <span>atelierwp</span>
                      <span>February 17, 2015</span>
                    </div>
                    <div class="review-text col-lg-9 col-md-9 col-8 pe-0 py-5">
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas
                        molestias</p>
                    </div>
                  </div>
                  <div class="review-content row">
                    <div class="review-info col-lg-3 col-md-3 col-4 py-5 d-flex flex-column">

                      <div class="rating-part">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                      </div>
                      <div class="img-part">
                        <img class="img-fluid " src="sass/assets/img/f2336fbaff66dd1f1c449bd67ffcc5d8.png" alt="">
                      </div>
                      <span>atelierwp</span>
                      <span>February 17, 2015</span>
                    </div>
                    <div class="review-text col-lg-9 col-md-9 col-8 pe-0 py-5">
                      <p>Cras neque nulla, convallis non commodo et, euismod nonsese. At vero
                        eos
                        et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas
                        molestias excepturi sint occaecati cupiditate non provident,
                        similique
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12 review ps-4">
                  <span class="fw-bold part-name">ADD A REVIEW</span>
                  <div class="review-text py-5">
                    <p class="ms-0">You must be logged in to post a comment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- another cards section -->

        <div class="container-lg container-fluid cards-with-hover pt-5 item">
          <span class="fw-bold part-name">RELATED PRODUCTS</span>
          <div class="row cards-hover">
            <div class="col-lg-3 col-md-3 col-sm-4 card-hover">
              <div class="img-box position-relative">
                <a class="first-photo" href="#"> <img class="img-fluid" src="sass/assets/img/7_1_5alt.jpg" alt=""></a>
                <a class="second-photo position-absolute" href="#"> <img class="img-fluid"
                    src="sass/assets/img/7_1_5alt.jpg" alt=""></a>
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
                <span class="main-name"><a class=" fw-bold" href="#">Moto Sweat</a></span>
                <span class="category-name"><a href="#">Sweaters</a></span>
                <span class="fw-bold">£65</span>
                <div class="rating-part">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-4 d-lg-block d-md-block d-sm-block d-none card-hover">
              <div class="img-box position-relative">
                <a class="first-photo" href="#"> <img class="img-fluid"
                    src="sass/assets/img/apc-knitted-brown01alt-700x904.jpg" alt=""></a>
                <a class="second-photo position-absolute" href="#"> <img class="img-fluid"
                    src="sass/assets/img/apc-knitted-brown02alt-700x904.jpg" alt=""></a>
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
                <span class="main-name"><a class=" fw-bold" href="#">Roundneck Sweater</a></span>
                <span class="category-name"><a href="#">Sweaters</a></span>
                <span class="fw-bold">£150</span>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-4 d-lg-block d-md-block d-sm-block d-none  card-hover">
              <div class="img-box position-relative">
                <a class="first-photo" href="#"> <img class="img-fluid" src="sass/assets/img/acne-scarf-leo01alt.jpg"
                    alt=""></a>
                <a class="second-photo position-absolute" href="#"> <img class="img-fluid"
                    src="sass/assets/img/acne-scarf-leo02alt-700x904.jpg" alt=""></a>
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
                <span class="main-name"><a class=" fw-bold" href="#">Canada Terrazzo Scarf</a></span>
                <span class="category-name"><a href="#">Accessories</a></span>
                <span class="fw-bold">£140</span>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 d-lg-block d-md-block d-none card-hover">
              <div class="img-box position-relative">
                <a class="first-photo" href="#"> <img class="img-fluid"
                    src="sass/assets/img/mm-sweat-knitted-grey01alt-700x904.jpg" alt=""></a>
                <a class="second-photo position-absolute" href="#"> <img class="img-fluid"
                    src="sass/assets/img/mm-sweat-knitted-grey01alt-700x904 (1).jpg" alt=""></a>
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
                <span class="main-name"><a class=" fw-bold" href="#">Elbow Sweater</a></span>
                <span class="category-name"><a href="#">Sweaters</a></span>
                <span class="fw-bold">£300</span>
              </div>
            </div>
          </div>
        </div>

      </section>


    </div>
  )
}

export default Product