import React, { useEffect } from "react";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import { Outlet, useNavigate } from "react-router-dom";
import { isTokenExpired } from '../../../Helpers/helper'

const Layout = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isTokenExpired()) {
  //     navigate('/login')
  //   }
  // }, [])


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
