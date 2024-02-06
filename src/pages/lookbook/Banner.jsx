import React from 'react'
const Banner = ({heading, imgsource, imgsource2}) => {
  return (
  <>
   <section class="twoimage pt-5">
        <div class="container">
          <div class="texth4">
            <h3>{heading}</h3>
          </div>
          <div class="row mx-0">
            <div class="col-12 col-md-6">
              <div class="imageone">
                <img
                  src={imgsource}
                  alt=""
                />
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="imageone">
                <img
                  src={imgsource2}
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