import React from 'react'
const Banner = ({heading, imgsource, imgsource2}) => {
  return (
  <>
   <section className="twoimage pt-5">
        <div className="container">
          <div className="texth4">
            <h3>{heading}</h3>
          </div>
          <div className="row mx-0">
            <div className="col-12 col-md-6">
              <div className="imageone">
                <img
                  src={imgsource}
                  alt=""
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="imageone">
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