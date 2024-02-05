import React from 'react'
import BannerImg from '../../assets/img/marni-down-jacket-grey01alt.jpg';
import BannerImg2 from '../../assets/img/marni-down-jacket-grey02alt.jpg';
const Banner = () => {
  return (
  <>
   <section class="twoimage pt-5 item">
        <div class="container">
          <div class="texth4">
            <h3>One.</h3>
          </div>
          <div class="row mx-0">
            <div class="col-12 col-md-6">
              <div class="imageone">
                <img
                  src={BannerImg}
                  alt=""
                />
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="imageone">
                <img
                  src={BannerImg2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default Banner