import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='container-fluid p-0 m-0 position-relative'>
    <Header />
    <Outlet />
    <Footer />
    </div>
  )
}

export default Layout;