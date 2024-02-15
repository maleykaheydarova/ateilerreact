import React from "react";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="d-flex">
        <div className="col-2">
          <Aside />
        </div>
        <div className="ms-5 col-9">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
