import React from 'react'
import Banner from './Banner'
import Card from '../../components/card/Card';
import BannerImg from '../../assets/img/59alt.jpg';
import BannerImg2 from '../../assets/img/60alt.jpg';
import CardImg from '../../assets/img/cp-high-suade-yellowish0001_1alt-792x1024.jpg';
import CardImg2 from '../../assets/img/cp-high-suade-yellowish0003_1alt-792x1024.jpg';
import CardImg3 from '../../assets/img/acne-suit-pants-black01_2alt-792x1024.jpg';
import CardImg4 from '../../assets/img/acne-suit-pants-black02_2alt-792x1024.jpg';
import CardImg5 from '../../assets/img/59alt.jpg';
import CardImg6 from '../../assets/img/60alt.jpg';
import CardImg7 from '../../assets/img/7_1_5alt-792x1024.jpg';

const SecondProduct = () => {
    const products=[
        {
            imgsource: CardImg,
            imgsource2: CardImg2,
            name: "Achilles Mid",
            category: "Footwear",
            price: "280",
            twoImg:true,
            ArrayI:1,
            ResponsiveClasses:"col-12 col-sm-6 mt-3"
          },
        {
            imgsource: CardImg3,
            imgsource2: CardImg4,
            name: "Sam Trousers",
            category: "Trousers",
            price: "300 – £320",
            twoImg:true,
            ArrayI:2,
            ResponsiveClasses:"col-12 col-sm-6 mt-3"
          },
          {
            imgsource: CardImg5,
            imgsource2: CardImg6,
            name: "Control Blazer",
            category: "Outerwear",
            price: "300",
            twoImg:true,
            ArrayI:5,
            ResponsiveClasses:"col-12 col-sm-6 mt-3"
          },
          {
            imgsource: CardImg7,
            name: "Moto Sweat",
            category: "Sweaters",
            price: "65 ",
            OneImg:true,
            ArrayI:3,
            ResponsiveClasses:"col-12 col-sm-6 mt-3"
          },
        


    ];
  return (
   <>
   <Banner heading={"Three."}
    imgsource={BannerImg}
    imgsource2={BannerImg2}/>
    <section className="twoproduct">
        <div className="container cards-with-hover">
          <div className="textheader my-3">
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
          ResponsiveClasses={product.ResponsiveClasses}

        />
      ))}
    </div>
        </div>
    </section>
   </>
  )
}

export default SecondProduct