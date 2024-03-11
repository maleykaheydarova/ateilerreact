import React from "react";
import { Route, Routes } from "react-router-dom";
//Pages
import Layout from "../layout/Layout/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/loginandregister/login/Login";
import Register from "../pages/loginandregister/register/Register";
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

//Color
import ColorIndex from "../admin/AdminPanel/Color/Color"
import ColorAdd from "../admin/AdminPanel/Color/Add"
import ColorEdit from "../admin/AdminPanel/Color/Edit"

//Post
import PostIndex from "../admin/AdminPanel/Post/Post"
import PostAdd from "../admin/AdminPanel/Post/Add"
import PostEdit from "../admin/AdminPanel/Post/Edit"

//Size
import SizeIndex from "../admin/AdminPanel/Size/Size"
import SizeAdd from "../admin/AdminPanel/Size/Add"
import SizeEdit from "../admin/AdminPanel/Size/Edit"

//Tag
import TagIndex from "../admin/AdminPanel/Tag/Tag"
import TagAdd from "../admin/AdminPanel/Tag/Add"
import TagEdit from "../admin/AdminPanel/Tag/Edit"




const LinkRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="half" element={<Half />} />
        <Route path="lookbook" element={<Lookbook />} />
        <Route path="product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/admin" element={<AdminPanelLayout />}>
        <Route index path="/admin" element={<Admin />} />
        <Route path="/admin/category" element={<CategoryIndex />} />
        <Route path="/admin/category/add" element={<CategoryAdd />} />
        <Route path="/admin/category/edit/:id" element={<CategoryEdit />} />
        <Route path="/admin/product" element={<ProductIndex />} />
        <Route path="/admin/product/add" element={<ProductAdd />} />
        <Route path="/admin/product/edit/:id" element={< ProductEdit />} />
        <Route path="/admin/post" element={<PostIndex />} />
        <Route path="/admin/post/add" element={<PostAdd />} />
        <Route path="/admin/post/edit/:id" element={< PostEdit />} />
        <Route path="/admin/color" element={<ColorIndex />} />
        <Route path="/admin/color/add" element={<ColorAdd />} />
        <Route path="/admin/color/edit/:id" element={< ColorEdit />} />
        <Route path="/admin/size" element={<SizeIndex />} />
        <Route path="/admin/size/add" element={<SizeAdd />} />
        <Route path="/admin/size/edit/:id" element={< SizeEdit />} />
        <Route path="/admin/tag" element={<TagIndex />} />
        <Route path="/admin/tag/add" element={<TagAdd />} />
        <Route path="/admin/tag/edit/:id" element={< TagEdit />} />
        <Route path="/admin/characteristic" element={< CharacteristicIndex />} />
        <Route path="/admin/characteristic/add" element={< CharacteristicAdd />} />
        <Route path="/admin/characteristic/edit" element={<CHaracteristicEdit />} />
        <Route path="/admin/homebanner" element={< HomeBannerIndex />} />
        <Route path="/admin/homebanner/add" element={< HomeBannerAdd />} />
        <Route path="/admin/homebanner/edit/:id" element={< HomeBannerEdit />} />

      </Route>
    </Routes>
  );
};

export default LinkRouter;
