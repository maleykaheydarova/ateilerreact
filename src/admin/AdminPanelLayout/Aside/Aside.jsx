import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div class="sidebar sidebar-dark sidebar-fixed" id="sidebar">
      <div class="sidebar-brand d-none d-md-flex">
        <h2>Ateiler</h2>
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
          <a class="nav-link" href="/admin/category">
            <i class="fa-solid fa-layer-group me-3"></i> Category
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="typography.html">
            <i class="fa-solid fa-list me-3"></i> Characteristic
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="typography.html">
          <i class="fa-solid fa-house me-3"></i> HomeBanner
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="typography.html">
          <i class="fa-solid fa-image-portrait me-3"></i>Post
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="typography.html">
          <i class="fa-solid fa-weight-hanging me-3"></i>Size
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="typography.html">
          <i class="fa-solid fa-palette me-3"></i> Color
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="typography.html">
          <i class="fa-solid fa-tag me-3"></i> Tag
          </a>
        </li>
      </ul>
      <button
        class="sidebar-toggler"
        type="button"
        data-coreui-toggle="unfoldable"
      ></button>
    </div>
  );
};

export default Aside;
