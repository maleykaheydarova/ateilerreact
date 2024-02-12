// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import { FreeMode, Thumbs } from 'swiper/modules';
// import SwiperPhoto from '../../assets/img/mm-turtlenec-green01alt.jpg'
// import SwiperPhoto2 from '../../assets/img/mm-turtlenec-green02alt.jpg'


// function ProductSwiper() {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <div className="col-12 pt-3 col-lg-6 col-md-6 product-lil-swiper bg-white">

//       <div className="swiper mainSwiper" >
//         <div className="first-swiper swiper-wrapper">
//         <Swiper
//       onSwiper={setThumbsSwiper}
//       spaceBetween={10}
//       slidesPerView={4}
//       freeMode={true}
//       watchSlidesProgress={true}
//       modules={[FreeMode, Thumbs]}
//       className="mainSwiper"
//     >
//       <SwiperSlide>
//         <div className="swiper-slide position-relative">
//             <div className="search-icon-div position-absolute d-flex z-3 justify-content-center align-items-center">
//               <a><i className="fa-solid fa-magnifying-glass"></i></a>
//             </div>
//             <img src={SwiperPhoto} alt="Swiper Photo" />
//           </div>
//           </SwiperSlide>
//       <SwiperSlide>
//           <div className="swiper-slide position-relative">
//             <div className="search-icon-div position-absolute d-flex z-3 justify-content-center align-items-center">
//               <a><i className="fa-solid fa-magnifying-glass"></i></a>
//             </div>
//             <img className="img-fluid" src={SwiperPhoto2} alt="Swiper Photo 2" />
//           </div>
//       </SwiperSlide>
//       <SwiperSlide>
//       <div className="swiper-slide position-relative">
//             <div className="search-icon-div position-absolute d-flex z-3 justify-content-center align-items-center">
//               <a><i className="fa-solid fa-magnifying-glass"></i></a>
//             </div>
//             <img className="img-fluid" src={SwiperPhoto} alt="Swiper Photo" />
//           </div>
//       </SwiperSlide>
//     </Swiper>
//         </div>
//       </div>

//       <Swiper
//       spaceBetween={10}
//       navigation={true}
//       thumbs={{ swiper: thumbsSwiper }}
//       modules={[FreeMode, Thumbs]}
//       className="myPhotobox"
//         >
//           <SwiperSlide>
//             <img className="img-fluid w-100 h-100" src={SwiperPhoto} alt="Swiper Photo" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img className="img-fluid w-100 h-100" src={SwiperPhoto2} alt="Swiper Photo 2" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img className="img-fluid w-100 h-100" src={SwiperPhoto} alt="Swiper Photo" />
//           </SwiperSlide>
//         </Swiper>
//     </div>
//   );
// }




// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

// function ProductSwiper() {
//   return (
//     <Swiper
//     spaceBetween={50}
//     slidesPerView={3}
//     onSlideChange={() => console.log('slide change')}
//     onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };

// export default ProductSwiper;


// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/thumbs';
// import 'swiper/css/bundle';

// // import './styles.css';

// // import required modules
// import { FreeMode, Thumbs } from 'swiper/modules';

// export default function App() {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <>
//       <Swiper

//         spaceBetween={10}
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Thumbs]}
//         className="mySwiper2"
//       >
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//       </Swiper>
//       <Swiper
//         modules={[FreeMode, Thumbs]}
//         onSwiper={setThumbsSwiper}
//         spaceBetween={10}
//         slidesPerView={3}
//         freeMode={true}
//         watchSlidesProgress={true}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

// import React, { useRef, useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/bundle';
// import 'swiper/css/thumbs';

// // import required modules
// import { Thumbs } from 'swiper/modules';

// const ProductSwiper = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);
//   let isActive = thumbsSwiper?.__swiper__;
//   let counter = 0;

//   useEffect(() => {

//     console.log(counter);
//     counter += 1;
//     console.log(thumbsSwiper?.__swiper__);

//   }, [thumbsSwiper]);


//   return (
//     <>
//       {
//         isActive == true &&
//         (<Swiper
//           spaceBetween={10}
//           modules={[Thumbs]}
//           thumbs={thumbsSwiper}
//           className="mySwiper2"
//         >
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" />
//           </SwiperSlide>
//         </Swiper >)
//       }

//       <Swiper
//         spaceBetween={10}
//         slidesPerView={3}
//         watchSlidesProgress={true}
//         className="mySwiper"
//         onSwiper={(swiper) => setThumbsSwiper(swiper)}
//       >
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" />
//         </SwiperSlide>
//       </Swiper>

//     </>


//   )
// }
// export default ProductSwiper


import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Thumbs } from 'swiper/modules';

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    console.log(thumbsSwiper);
  }, [thumbsSwiper])
  return (
    <>
      <Swiper
        
        spaceBetween={10}
        thumbs={{ thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
