import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout/Layout'
import Home from '../pages/home/Home'
import Shop from '../pages/shop/Shop'
import Half from '../pages/half/Half'
import Lookbook from '../pages/lookbook/Lookbook'
import Product from '../pages/product/Product'
import Cart from '../pages/cart/Cart'

const LinkRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index path='/' element={<Home/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path='half' element={<Half/>}/>
            <Route path='lookbook' element={<Lookbook/>}/>
            <Route path='product' element={<Product/>}/>
            <Route path='cart' element={<Cart/>}/>
        </Route>
    </Routes>
  )
}

export default LinkRouter