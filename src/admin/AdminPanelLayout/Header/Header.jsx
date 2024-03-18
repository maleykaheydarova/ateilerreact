import React from 'react'
import { logOut } from '../../../Helpers/helper'
import { Link } from 'react-router-dom'
const Header = () => {



  return (
    <div className="wrapper d-flex flex-column bg-light">
      <header className="header header-sticky">
        <div className="container-fluid">
          {/* <button className="header-toggler px-md-0 me-md-3" type="button"
          onclick="coreui.Sidebar.getInstance(document.querySelector('#sidebar')).toggle()">
          <svg className="icon icon-lg">
            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-menu"></use>
          </svg>
        </button><a className="header-brand d-md-none" href="#">
          <svg width="118" height="46" alt="CoreUI Logo">
            <use xlink:href="assets/brand/coreui.svg#full"></use>
          </svg></a> */}
          <ul className="header-nav ms-auto">
            <li className="nav-item">
              <button className="nav-link" onClick={logOut}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
              </button>
            </li>
            <li className="nav-item">
              <Link to={`/`} className="btn btn-primary">
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Main Page
              </Link>
            </li>
          </ul>

        </div>
      </header>
    </div>
  )
}

export default Header