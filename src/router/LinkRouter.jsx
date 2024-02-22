import React from "react";
import { Route, Routes } from "react-router-dom";
//Pages
import Layout from "../layout/Layout/Layout";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import Half from "../pages/half/Half";
import Lookbook from "../pages/lookbook/Lookbook";
import Product from "../pages/product/Product";
import Cart from "../pages/cart/Cart";
import AdminPanelLayout from "../admin/AdminPanelLayout/Layout/Layout";
//Admin
import Admin from "../admin/AdminPanel/Admin/Admin";
//Category
import CategoryIndex from "../admin/AdminPanel/Category/Category";
import CategoryAdd from "../admin/AdminPanel/Category/Add";
import CategoryEdit from "../admin/AdminPanel/Category/Edit";
//Product
import ProductIndex from "../admin/AdminPanel/Product/Product";
import ProductAdd from "../admin/AdminPanel/Product/Add";
import ProductEdit from "../admin/AdminPanel/Product/Edit";
//Characterictic
import CharacteristicIndex from "../admin/AdminPanel/Characteristic/Characteristic";
import CharacteristicAdd from "../admin/AdminPanel/Characteristic/Add";
import CHaracteristicEdit from '../admin/AdminPanel/Characteristic/Edit'

//HomeBanner
import HomeBannerIndex from "../admin/AdminPanel/HomeBanner/HomeBanner"
import HomeBannerAdd from "../admin/AdminPanel/HomeBanner/Add"
import HomeBannerEdit from "../admin/AdminPanel/HomeBanner/Edit"




const LinkRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index path="/" element={<Home/>} />
        <Route path="shop" element={<Shop />}/>
        <Route path="half" element={<Half />}/>
        <Route path="lookbook" element={<Lookbook/>} />
        <Route path="product" element={<Product/>} />
        <Route path="cart" element={<Cart />}/>
      </Route>

      <Route path="/admin" element={<AdminPanelLayout />}>
        <Route index path="/admin" element={<Admin />}/>
        <Route path="/admin/category" element={<CategoryIndex />}/>
        <Route path="/admin/category/add" element={<CategoryAdd />}/>
        <Route path="/admin/category/edit" element={<CategoryEdit />}/>
        <Route path="/admin/product" element={<ProductIndex />}/>
        <Route path="/admin/product/add" element={<ProductAdd />}/>
        <Route path="/admin/product/edit" element={< ProductEdit />}/>
        <Route path="/admin/characteristic" element={< CharacteristicIndex />}/>
        <Route path="/admin/characteristic/add" element={< CharacteristicAdd />}/>
        <Route path="/admin/characteristic/edit" element={<CHaracteristicEdit/>}/>
        <Route path="/admin/homebanner" element={< HomeBannerIndex />}/>
        <Route path="/admin/homebanner/add" element={< HomeBannerAdd/>}/>
        <Route path="/admin/homebanner/edit/:id" element={< HomeBannerEdit/>}/>

      </Route>
    </Routes>
  );
};

export default LinkRouter;
