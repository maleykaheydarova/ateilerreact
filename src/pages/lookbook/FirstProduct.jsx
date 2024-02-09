import React from 'react'
import Banner from './Banner'
import Card from '../../components/card/Card';
import BannerImg from '../../assets/img/marni-down-jacket-grey01alt.jpg';
import BannerImg2 from '../../assets/img/marni-down-jacket-grey02alt.jpg';
import CardImg from '../../assets/img/marni-down-jacket-grey01alt.jpg';
import CardImg2 from '../../assets/img/acne-suit-pants-black01_2alt-792x1024.jpg'
import CardImg3 from '../../assets/img/acne-suit-pants-black02_2alt-792x1024.jpg';
import CardImg4 from '../../assets/img/1_11_10alt-792x1024.jpg';

const FirstProduct = () => {
  const products = [
    {
      imgsource: CardImg,
      name: "Padded Jacket",
      category: "Outerwear",
      price: "715",
      OneImg: true,
      ArrayI: 3
    },
    {
      imgsource: CardImg2,
      imgsource2: CardImg3,
      name: "Sam Trousers",
      category: "Trousers",
      price: "300 – £320",
      twoImg: true,
      ArrayI: 4
    },
    {
      imgsource: CardImg4,
      name: "1940’s Shirt",
      category: "Shirting",
      price: "130",
      OneImg: true,
      ArrayI: 4
    },



  ];
  return (
    <>
      <Banner heading={"One."}
        imgsource={BannerImg}
        imgsource2={BannerImg2} />
      <section class="twoproduct">
        <div class="container cards-with-hover">
          <div class="textheader my-3">
            <h5>
              <span>GET THIS LOOK</span>
            </h5>
          </div>
          <div className="row cards-hover">
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

              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default FirstProduct