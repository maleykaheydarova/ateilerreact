import React from "react";
import Card from "../../components/card/Card";
import CardImg from "../../assets/img/7_1_5alt.jpg";
import CardImg2 from "../../assets/img/apc-knitted-brown01alt-700x904.jpg";
import CardImg3 from "../../assets/img/apc-knitted-brown02alt-700x904.jpg";
import CardImg4 from "../../assets/img/acne-scarf-leo01alt.jpg";
import CardImg5 from "../../assets/img/acne-scarf-leo02alt-700x904.jpg";
import CardImg6 from "../../assets/img/mm-sweat-knitted-grey01alt-700x904.jpg";

const RelatedProducts = () => {
  const products = [
    {
      imgsource: CardImg,
      name: "Moto Sweat",
      category: "Sweaters",
      price: "65",
      OneImg: true,
      ArrayI: 1,
      ResponsiveClasses2: "col-lg-3 col-sm-4",
    },
    {
      imgsource: CardImg2,
      imgsource2: CardImg3,
      name: "Roundneck Sweater",
      category: "Sweaters",
      price: "150",
      twoImg: true,
      ArrayI: 2,
      ResponsiveClasses2: "col-lg-3 col-sm-4",
      ResponsiveClasses3: "d-lg-block d-md-block d-sm-block d-none",
    },
    {
      imgsource: CardImg4,
      imgsource2: CardImg5,
      name: "Canada Terrazzo Scarf",
      category: "Accessories",
      price: "140",
      twoImg: true,
      ArrayI: 4,
      ResponsiveClasses2: "col-lg-3 col-sm-4",
      ResponsiveClasses3: "d-lg-block d-md-block d-sm-block d-none",
    },
    {
      imgsource: CardImg6,
      name: "Elbow Sweater",
      category: "Sweaters",
      price: "300",
      OneImg: true,
      ArrayI: 0,
      ResponsiveClasses2: "col-lg-3",
      ResponsiveClasses3: "d-lg-block d-md-block d-none",
    },
  ];
  return (
    <>
      <div class="container-lg container-fluid cards-with-hover pt-5">
        <span class="fw-bold part-name">RELATED PRODUCTS</span>
        <div class="row cards-hover">
          {products.map((product, index) => (
            <Card
              key={index}
              imgsource={product.imgsource}
              imgsource2={product.imgsource2}
              name={product.name}
              twoImg={product.twoImg}
              category={product.category}
              price={product.price}
              OneImg={product.OneImg}
              ArrayI={product.ArrayI}
              ResponsiveClasses2={product.ResponsiveClasses2}
              ResponsiveClasses3={product.ResponsiveClasses3}
            />
          ))}
          {/* <div class="col-lg-3 col-md-3 col-sm-4 card-hover">
            <div class="img-box position-relative">
              <a class="first-photo" href="#">
                {" "}
                <img
                  class="img-fluid"
                  src={CardImg}
                  alt=""
                />
              </a>
              <a class="second-photo position-absolute" href="#">
                {" "}
                <img
                  class="img-fluid"
                  src={CardImg}
                  alt=""
                />
              </a>
              <div class="icons-hover position-absolute d-flex">
                <div class="iconn d-flex align-items-center">
                  <a href="">
                    {" "}
                    <i class="fa-solid fa-cart-plus"></i>
                  </a>
                </div>
                <div class="iconn  d-flex align-items-center">
                  <a href="">
                    {" "}
                    <i class="fa-solid fa-newspaper"></i>
                  </a>
                </div>
                <div class="iconn  d-flex align-items-center">
                  <a href="">
                    {" "}
                    <i class="fa-solid fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="img-info-box d-flex flex-column mt-4">
              <span class="main-name">
                <a class=" fw-bold" href="#">
                  Moto Sweat
                </a>
              </span>
              <span class="category-name">
                <a href="#">Sweaters</a>
              </span>
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
              <a class="first-photo" href="#">
                {" "}
                <img
                  class="img-fluid"
                  src={CardImg2}
                  alt=""
                />
              </a>
              <a class="second-photo position-absolute" href="#">
                {" "}
                <img
                  class="img-fluid"
                  src={CardImg3}
                  alt=""
                />
              </a>
              <div class="icons-hover position-absolute d-flex">
                <div class="iconn d-flex align-items-center">
                  <a href="">
                    {" "}
                    <i class="fa-solid fa-cart-plus"></i>
                  </a>
                </div>
                <div class="iconn  d-flex align-items-center">
                  <a href="">
                    {" "}
                    <i class="fa-solid fa-newspaper"></i>
                  </a>
                </div>
                <div class="iconn  d-flex align-items-center">
                  <a href="">
                    {" "}
                    <i class="fa-solid fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="img-info-box d-flex flex-column mt-4">
              <span class="main-name">
                <a class=" fw-bold" href="#">
                  Roundneck Sweater
                </a>
              </span>
              <span class="category-name">
                <a href="#">Sweaters</a>
              </span>
              <span class="fw-bold">£150</span>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-4 d-lg-block d-md-block d-sm-block d-none  card-hover">
            <div class="img-box position-relative">
              <a class="first-photo" href="#">
                {" "}
                <img
                  class="img-fluid"
                  src={CardImg4}
                  alt=""
                />
              </a>
              <a class="second-photo position-absolute" href="#">
                {" "}
                <img
                  class="img-fluid"
                  src={CardImg5}
                  alt=""
                />
              </a>
              <div class="icons-hover position-absolute d-flex">
                <div class="iconn d-flex align-items-center">
                  <a href="">
                    {" "}
                    <i class="fa-solid fa-cart-plus"></i>
                  </a>
                </div>
                <div class="iconn  d-flex align-items-center">
                  <a href="">
                    {" "}
                    <i class="fa-solid fa-newspaper"></i>
                  </a>
                </div>
                <div class="iconn  d-flex align-items-center">
                  <a href="">
                    {" "}
                    <i class="fa-solid fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="img-info-box d-flex flex-column mt-4">
              <span class="main-name">
                <a class=" fw-bold" href="#">
                  Canada Terrazzo Scarf
                </a>
              </span>
              <span class="category-name">
                <a href="#">Accessories</a>
              </span>
              <span class="fw-bold">£140</span>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 d-lg-block d-md-block d-none card-hover">
            <div class="img-box position-relative">
              <a class="first-photo" href="#">
                {" "}
                <img
                  class="img-fluid"
                  src={CardImg6}
                  alt=""
                />
              </a>
              <a class="second-photo position-absolute" href="#">
                {" "}
                <img
                  class="img-fluid"
                  src={CardImg6}
                  alt=""
                />
              </a>
              <div class="icons-hover position-absolute d-flex">
                <div class="iconn d-flex align-items-center">
                  <a href="">
                    {" "}
                    <i class="fa-solid fa-cart-plus"></i>
                  </a>
                </div>
                <div class="iconn  d-flex align-items-center">
                  <a href="">
                    {" "}
                    <i class="fa-solid fa-newspaper"></i>
                  </a>
                </div>
                <div class="iconn  d-flex align-items-center">
                  <a href="">
                    {" "}
                    <i class="fa-solid fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="img-info-box d-flex flex-column mt-4">
              <span class="main-name">
                <a class=" fw-bold" href="#">
                  Elbow Sweater
                </a>
              </span>
              <span class="category-name">
                <a href="#">Sweaters</a>
              </span>
              <span class="fw-bold">£300</span>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;