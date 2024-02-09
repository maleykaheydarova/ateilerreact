import React from 'react'
import ProductSwiperSection from './ProductSwiperSection'
import HeaderPhoto from '../../assets/img/Atelier-header-turtleneck-bkg.jpg'
const Product = () => {
  return (
    <div class="product-swiper-section">
     {/* product section  */}
      <section class="product-part">
        <img class="img-fluid bg-img w-100" src={HeaderPhoto} alt=""/>
        <ProductSwiperSection/>
         {/* reviews section  */}

        <div class="container-fluid reviews-box px-0">
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
                        <img class="img-fluid" src="sass/assets/img/f2336fbaff66dd1f1c449bd67ffcc5d8.png" alt=""/>
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
                        <img class="img-fluid" src="sass/assets/img/f2336fbaff66dd1f1c449bd67ffcc5d8.png" alt=""/>
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
                        <img class="img-fluid " src="sass/assets/img/f2336fbaff66dd1f1c449bd67ffcc5d8.png" alt=""/>
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

         {/* another cards section */}

        <div class="container-lg container-fluid cards-with-hover pt-5">
          <span class="fw-bold part-name">RELATED PRODUCTS</span>
          <div class="row cards-hover">
            <div class="col-lg-3 col-md-3 col-sm-4 card-hover">
              <div class="img-box position-relative">
                <a class="first-photo" href="#"> <img class="img-fluid" src="sass/assets/img/7_1_5alt.jpg" alt=""/></a>
                <a class="second-photo position-absolute" href="#"> <img class="img-fluid"
                    src="sass/assets/img/7_1_5alt.jpg" alt=""/></a>
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
                    src="sass/assets/img/apc-knitted-brown01alt-700x904.jpg" alt=""/></a>
                <a class="second-photo position-absolute" href="#"> <img class="img-fluid"
                    src="sass/assets/img/apc-knitted-brown02alt-700x904.jpg" alt=""/></a>
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
                    alt=""/></a>
                <a class="second-photo position-absolute" href="#"> <img class="img-fluid"
                    src="sass/assets/img/acne-scarf-leo02alt-700x904.jpg" alt=""/></a>
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
                    src="sass/assets/img/mm-sweat-knitted-grey01alt-700x904.jpg" alt=""/></a>
                <a class="second-photo position-absolute" href="#"> <img class="img-fluid"
                    src="sass/assets/img/mm-sweat-knitted-grey01alt-700x904 (1).jpg" alt=""/></a>
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