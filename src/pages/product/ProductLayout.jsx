import React, { useEffect, useRef, useState } from 'react'
import Product from './Product'
import FullScreenSwiper from './FullScreenSwiper'

const ProductLayout = () => {
    const body = document.body;
    const [isActive, setIsActive] = useState(false)
    const fullScreenRef = useRef();
    const iconRef = useRef();

    useEffect(()=>{
        isActive ? fullScreenRef.current.classList.remove("d-none") : fullScreenRef.current.classList.add("d-none")
        isActive ? body.classList.add("overflow-hidden") : body.classList.remove("overflow-hidden")
    }, [isActive])

  return (
    <>
    <FullScreenSwiper refer={fullScreenRef} func={() => setIsActive(!isActive)}/>
    <Product refer={iconRef} func={() => setIsActive(!isActive)}/>
    </>
  )
}

export default ProductLayout