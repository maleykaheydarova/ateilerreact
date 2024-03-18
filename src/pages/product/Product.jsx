import React from 'react'
import ProductSwiperSection from './ProductSwiperSection'
import HeaderPhoto from '../../assets/img/Atelier-header-turtleneck-bkg.jpg'
import RelatedProducts from './RelatedProducts'
const Product = ({refer, func}) => {
  return (
    <div className="product-swiper-section">
     {/* product section  */}
      <section className="product-part">
        <img className="img-fluid bg-img w-100" src={HeaderPhoto} alt=""/>
        <ProductSwiperSection/>
         {/* reviews section  */}

        <div className="container-fluid reviews-box px-0">
          <div className="review-box1">
            <div className="container-lg w-100 container-fluid">
              <div className="row py-4">
                <div className="col-lg-8 col-md-8 col-12 review">
                  <span className="fw-bold part-name">REVIEWS <span className="fw-normal ms-2">(3)</span></span>
                  <div className="review-content row">


                    <div className="review-info col-lg-3 col-md-3 col-4 py-5 d-flex flex-column">

                      <div className="rating-part">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <div className="img-part">
                        <img className="img-fluid" src="sass/assets/img/f2336fbaff66dd1f1c449bd67ffcc5d8.png" alt=""/>
                      </div>
                      <span>atelierwp</span>
                      <span>February 17, 2015</span>
                    </div>
                    <div className="review-text col-lg-9 col-md-9 col-8 pe-0 py-5">
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
                  <div className="review-content row">
                    <div className="review-info col-lg-3 col-md-3 col-4  py-5 d-flex flex-column">

                      <div className="rating-part">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <div className="img-part">
                        <img className="img-fluid" src="sass/assets/img/f2336fbaff66dd1f1c449bd67ffcc5d8.png" alt=""/>
                      </div>
                      <span>atelierwp</span>
                      <span>February 17, 2015</span>
                    </div>
                    <div className="review-text col-lg-9 col-md-9 col-8 pe-0 py-5">
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas
                        molestias</p>
                    </div>
                  </div>
                  <div className="review-content row">
                    <div className="review-info col-lg-3 col-md-3 col-4 py-5 d-flex flex-column">

                      <div className="rating-part">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </div>
                      <div className="img-part">
                        <img className="img-fluid " src="sass/assets/img/f2336fbaff66dd1f1c449bd67ffcc5d8.png" alt=""/>
                      </div>
                      <span>atelierwp</span>
                      <span>February 17, 2015</span>
                    </div>
                    <div className="review-text col-lg-9 col-md-9 col-8 pe-0 py-5">
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
                <div className="col-lg-4 col-md-4 col-12 review ps-4">
                  <span className="fw-bold part-name">ADD A REVIEW</span>
                  <div className="review-text py-5">
                    <p className="ms-0">You must be logged in to post a comment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* another cards section */}

        <RelatedProducts/>

      </section>
    </div>
  )
}

export default Product