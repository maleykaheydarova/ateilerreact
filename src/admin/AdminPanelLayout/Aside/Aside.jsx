import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../../assets/img/atelier-logo-alt2-dark.png';

const Aside = () => {
  return (
    <div className="sidebar sidebar-dark sidebar-fixed" id="sidebar">
      <div className="sidebar-brand d-none d-md-flex">
        <img src={Logo} alt="" />
      </div>
      <ul className="sidebar-nav" data-coreui="navigation" data-simplebar="">
        <li className="nav-item">
          <Link className="nav-link" to="/admin">
            {" "}
            <i className="fa-solid fa-user me-3"></i> Admin
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/product">
            {" "}
            <i className="fa-solid fa-shirt me-3"></i> Product
          </Link>

        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/admin/category">
            {" "}
            <i className="fa-solid fa-layer-group me-3"></i> Category
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/characteristic">
            {" "}
            <i className="fa-solid fa-list me-3"></i>  Characteristic
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/homebanner">
            {" "}
            <i className="fa-solid fa-house me-3"></i>  HomeBanner
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/post">
            {" "}
            <i className="fa-solid fa-image-portrait me-3"></i> Post
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/size">
            {" "}
            <i className="fa-solid fa-weight-hanging me-3"></i> Size
          </Link>
         
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/color">
            {" "}
            <i className="fa-solid fa-palette me-3"></i> Color
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/tag">
            {" "}
            <i className="fa-solid fa-tag me-3"></i> Tag
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
