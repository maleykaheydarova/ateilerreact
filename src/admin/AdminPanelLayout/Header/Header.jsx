import React from 'react'

const Header = () => {

  return (
    <div class="wrapper d-flex flex-column bg-light">
      <header class="header header-sticky">
        <div class="container-fluid">
          {/* <button class="header-toggler px-md-0 me-md-3" type="button"
          onclick="coreui.Sidebar.getInstance(document.querySelector('#sidebar')).toggle()">
          <svg class="icon icon-lg">
            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-menu"></use>
          </svg>
        </button><a class="header-brand d-md-none" href="#">
          <svg width="118" height="46" alt="CoreUI Logo">
            <use xlink:href="assets/brand/coreui.svg#full"></use>
          </svg></a> */}
          <ul class="header-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="#">
              <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</a></li>
          </ul>

        </div>
      </header>
    </div>
  )
}

export default Header