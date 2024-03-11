import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../../assets/img/atelier-logo-alt2-dark.png';

const Aside = () => {
  return (
    <div class="sidebar sidebar-dark sidebar-fixed" id="sidebar">
      <div class="sidebar-brand d-none d-md-flex">
        <img src={Logo} alt="" />
      </div>
      <ul class="sidebar-nav" data-coreui="navigation" data-simplebar="">
        <li class="nav-item">
          <Link class="nav-link" to="/admin">
            {" "}
            <i class="fa-solid fa-user me-3"></i> Admin
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/admin/product">
            {" "}
            <i class="fa-solid fa-shirt me-3"></i> Product
          </Link>

        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/admin/category">
            {" "}
            <i class="fa-solid fa-layer-group me-3"></i> Category
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/admin/characteristic">
            {" "}
            <i class="fa-solid fa-list me-3"></i>  Characteristic
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/admin/homebanner">
            {" "}
            <i class="fa-solid fa-house me-3"></i>  HomeBanner
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/admin/post">
            {" "}
            <i class="fa-solid fa-image-portrait me-3"></i> Post
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/admin/size">
            {" "}
            <i class="fa-solid fa-weight-hanging me-3"></i> Size
          </Link>
         
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/admin/color">
            {" "}
            <i class="fa-solid fa-palette me-3"></i> Color
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/admin/tag">
            {" "}
            <i class="fa-solid fa-tag me-3"></i> Tag
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
