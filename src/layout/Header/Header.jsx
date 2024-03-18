import React from 'react'
import { useState, useEffect } from 'react';
import {logOut} from '../../Helpers/helper'
import Logo from '../../assets/img/atelier-logo-alt2-dark.png';
import Post from '../../assets/img/alvar-demo.jpg';
import Post1 from '../../assets/img/rebel-demo.jpg';
import Post2 from '../../assets/img/vario-demo.jpg';
import Post3 from '../../assets/img/porter-demo.jpg';
import Post4 from '../../assets/img/flock-demo.jpg';
import { Link } from 'react-router-dom';
import List from '../../components/list/List';
import MobileMenu from '../../components/mobile-menu/MobileMenu';


const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const jwt = localStorage.getItem('token');

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!openerRef.current.contains(e.target) && !mobileMenuRef.current.contains(e.target)) {
        closeMobileMenu();
      }
    };

    if (isMobileOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMobileOpen]);

  const openerRef = React.createRef();
  const mobileMenuRef = React.createRef();
  const opacRef = React.createRef();

  const openMobileMenu = () => {
    setIsMobileOpen(true);

    mobileMenuRef.current.classList.add("opened");
    document.body.classList.add('overflow-hidden');
    opacRef.current.style.display = "block";

  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    mobileMenuRef.current.classList.remove('opened');
    document.body.classList.remove('overflow-hidden');
    opacRef.current.style.display = "none";
  };

  return (
    <>


      <MobileMenu refer={mobileMenuRef} opacrefer={opacRef} />

      <header>
        <div className="containers row mx-0 w-100">
          <div className="col-2 d-flex">
            <div className="baricon me-4" onClick={openMobileMenu} ref={openerRef}>
              <Link><i className="fa-solid fa-bars fa-lg"></i></Link>
            </div>

            <div className="d-none d-lg-flex magnifyingicon">
              <Link to={'/'}><i className="fa-solid fa-magnifying-glass fa-lg"></i></Link>
            </div>
          </div>
          <div
            className="navimg col-8 d-flex justify-content-center align-items-center gap-4"
          >
            <ul
              className="d-none d-lg-flex d-flex justify-content-between align-items-center gap-4"
            >
              <li className="homehover">
                <Link to="/" className="hover-link">Home</Link>

                <ul className="homehoverin d-flex gap-5">
                  <li>
                    <List classname={"d-flex flex-column gap-3 pt-3"} items={["Landing", "Animated Header", "Tiles Tiles Tiles", "Multi-Masonry", "Modern Classic"]} />
                  </li>
                  <li>
                    <List classname={"d-flex flex-column gap-3 pt-3"} items={["Poster", "Product Focus", "Half / Half Split", "Naked Header + Tiles", "Fullscreen + Masonry"]} />
                  </li>
                </ul>

              </li>
              <li className="shopStylesHover">
                <Link to="/shop" className="hover-link">Shop Styles</Link>
                <ul className="shopStylesHoverin">
                  <li className="d-flex justify-content-evenly">
                    <List classname={"d-flex flex-column gap-3 pt-3"} heading={"Shop Styles"} items={[
                      "Standard Full-width",
                      "Standard w/ sidebar",
                      "Standard w/ right sidebar",
                      "Multi-Masonry Full-width",
                      "Multi-Masonry Boxed",
                      "Multiple Mixed Rows",
                      "Product Category Page",
                      "All Categories",
                    ]} />
                    <List classname={"d-flex flex-column gap-3 pt-3"} heading={"Shop Styles Cont."} items={[
                      "Standard 2 Columns",
                      "Standard 4 Columns",
                      "Gallery 4 Columns",
                      "Gallery 3 Columns",
                      "Gallery 4 Columns Alt",
                      "Standard 5 Column Full-width",
                      "Standard 6 Col Full-width",
                      "Gallery Bordered Full-width",
                    ]} />
                    <List classname={"d-flex flex-column gap-3 pt-3"} heading={"Product Pages"} items={[
                      "Standard Product",
                      "Extended Product",
                      "Full-Screen Product",
                      "Variable Product",
                      "Grouped Product",
                      "Out of Stock Product",
                      "Sale Product",
                    ]} />
                    <List classname={"d-flex flex-column gap-3 pt-3"} heading={"Misc. Shop Pages"} items={[
                      "Shopping Cart",
                      "Wishlist",
                      "Track Your Order",
                      "My Account",
                      "Checkout",
                      { label: "Lookbook", anchor: "/lookbook" },
                      "Catalog Mode",
                    ]} />
                  </li>
                </ul>
              </li>

              <li className="featuresHover">
                <Link href="features.html" className="hover-link">Features</Link>
                <ul className="featuresHoverin">
                  <li className="d-flex justify-content-evenly">
                    <List classname={"d-flex flex-column gap-3 pt-3"} items={[
                      "Stunning Modern Design",
                      "Custom Shop Icon Font",
                      "3 Cart Icon Styles",
                      "5 CSS3 Cart Animations",
                      "Shop View Switcher",
                      "3 Product Page Options",
                      "Total Product Control",
                      "Global Banner",
                    ]} />
                    <List classname={"d-flex flex-column gap-3 pt-3"} items={[
                      "Slick Add to Cart Process",
                      "Newsletter / Subscribe Bar",
                      "4 Incredible Shop Styles",
                      "Multi-Size Masonry Shop",
                      "Tailored Mobile Experience",
                      "10 Header Options",
                      "14 High-Quality Demos",
                      "3 Page Styles",
                    ]} />
                    <List classname={"d-flex flex-column gap-3 pt-3"} items={[
                      "5 Page Header Styles",
                      "Animated Page Headers",
                      "Swift or VC Page Builder",
                      "519 Font Awesome Icons",
                      "197 IconMind Icons",
                      "Unlimited Custom Colors",
                      "Demo Content Importer",
                      "Retina-Ready",
                    ]} />
                    <List classname={"d-flex flex-column gap-3 pt-3"} items={[
                      "Free Support & Updates",
                      "Amazing Premium Sliders",
                      "100% Translatable",
                      "Extensive Theme Options",
                      "Loaded with Shortcodes",
                      "671+ Free Google Fonts",
                      "Epic Performance & SEO",
                      "RTL Support",
                    ]} />
                    <List classname={"d-flex flex-column gap-3 pt-3"} items={[
                      "Custom Font Integration",
                      "2 One-Page Nav Styles",
                      "41 CSS3 Animations",
                      "Flexible Mega-Menu",
                      "Multi-function Rows",
                      "Portfolio Options",
                      "Blog Options",
                      "Promo Bar",
                    ]} />
                  </li>
                </ul>
              </li>
            </ul>
            <div>
              <Link to={'/'}
              ><img
                  src={Logo}
                  alt=""
                />
              </Link>
            </div>

            <ul className="d-none d-lg-flex d-flex align-items-center gap-4">
              <li className="pagesHover">
                <Link to={'/'} className='hover-link'>Pages</Link>
                <ul className="pagesHoverin">
                  <li className="d-flex justify-content-evenly">
                    <List classname={"d-flex flex-column gap-3 pt-3"} heading={"General"} items={[
                      "About Me",
                      "About Us",
                      "About Us Alt",
                      "Contact",
                      "Contact Alt",
                      "Contact Alt 2",
                      "Coming Soon",
                    ]} />
                    <List classname={"d-flex flex-column gap-3 pt-3"} heading={"General cont."} items={[
                      "F.A.Q.’s",
                      "Meet the Team",
                      "Size and Fit",
                      "Pricing",
                      "Left Sidebar",
                      "Right Sidebar",
                      "Maintenance Mode",
                    ]} />
                    <List classname={"d-flex flex-column gap-3 pt-3"} heading={"Blog"} items={[
                      { label: "Half/Half Split", anchor: "/half" },
                      { label: "Half / Half Split Alt", anchor: "/" },
                      { label: "Standard with sideba", anchor: "/" },
                      { label: "Standard Alt with side", anchor: "/" },
                      { label: "Bold Text Only Style", anchor: "/" },
                      { label: "Mini with sidebar", anchor: "/" },
                    ]} />
                    <List classname={"d-flex flex-column gap-3 pt-3"} heading={"Blog Cont."} items={[
                      { label: "Masonry Style", anchor: "/" },
                      { label: "Masonry Full-width", anchor: "/" },
                      { label: "Masonry Wrapped", anchor: "/" },
                      { label: "Standard Blog Post", anchor: "/" },
                      { label: "Detailed Blog Post", anchor: "/" },
                      { label: "Half / Half Split Post", anchor: "/half" },
                    ]} />
                    <List classname={"d-flex flex-column gap-3 pt-3"} heading={"Portfolio"} items={[
                      "3 Column Standard",
                      "3 Column Gallery Alt",
                      "Multi-Size Masonry Boxe",
                      "4 Column Gallery",
                      "4 Column Gallery Alt",
                    ]} />
                    <List classname={"d-flex flex-column gap-3 pt-3"} heading={"Portfolio cont."} items={[
                      "4 Column Masonry",
                      "Multi-Size Masonry",
                      "Multi-Size Masonry Alt",
                      "Detailed Post",
                      "Standard Post",
                    ]} />
                  </li>
                </ul>
              </li>
              <li className="elementsHover">
                <Link to={'/'} className='hover-link'>Elements</Link>
                <ul className="elementsHoverin">
                  <li className="d-flex justify-content-evenly">
                    <List classname={"d-flex flex-column gap-3 pt-3"} items={[
                      "Animation",
                      "Accordion & Toggles",
                      "Blog",
                      "Boxed Content",
                      "Buttons & Social Icons",
                      "Clients",
                      "Code Snippet",
                      "Columns",
                      "Countdown",
                    ]} />
                    <List classname={"d-flex flex-column gap-3 pt-3"} items={[
                      "Counters, Charts & Progress",
                      "Directory Map",
                      "Divider",
                      "Fullscreen Videos",
                      "Galleries",
                      "Gallery",
                      "Google Maps",
                      "Icon Box",
                      "Image",
                    ]} />
                    <List classname={"d-flex flex-column gap-3 pt-3"} items={[
                      "Image Banners",
                      "Lists",
                      "Modals",
                      "Portfolio Carousel",
                      "Pricing Table",
                      "Products",
                      "Products (Mini)",
                      "Promo Bar",
                      "Quotes",
                    ]} />
                    <List classname={"d-flex flex-column gap-3 pt-3"} items={[
                      "Recent Posts",
                      "Responsive Visibility",
                      "Revolution Slider",
                      "Rows & Expanding Rows",
                      "Social Grid",
                      "Super Search",
                      "Swift Slider v3",
                      "Tables",
                      "Tabs",
                    ]} />
                    <List classname={"d-flex flex-column gap-3 pt-3"} items={[
                      "Team",
                      "Testimonials",
                      "Testimonials Slider",
                      "Tour",
                      "Tweets Slider",
                      "Typography",
                      "Video Player",
                    ]} />
                  </li>
                </ul>
              </li>
              <li className="demosHover">
                <Link to={'/'} className='hover-link'>Demos</Link>
                <ul className="demosHoverin">
                  <li className="d-flex justify-content-evenly align-items-center">
                    <ul className="d-flex flex-column align-items-center gap-3">
                      <li>
                        <img src={Post} alt="" />
                      </li>
                      <li><Link to={'/'}>Alvar EDD</Link></li>
                    </ul>
                    <ul className="d-flex flex-column align-items-center gap-3">
                      <li>
                        <img src={Post1} alt="" />
                      </li>
                      <li><Link to={'/'}>Rebel T-shirts</Link></li>
                    </ul>
                    <ul className="d-flex flex-column align-items-center gap-3">
                      <li>
                        <img src={Post2} alt="" />
                      </li>
                      <li><Link to={'/'}>Vario Preview Slider</Link></li>
                    </ul>
                    <ul className="d-flex flex-column align-items-center gap-3">
                      <li>
                        <img src={Post3} alt="" />
                      </li>
                      <li><Link to={'/'}>Porter Furniture</Link></li>
                    </ul>
                    <ul className="d-flex flex-column align-items-center gap-3">
                      <li>
                        <img src={Post4} alt="" />
                      </li>
                      <li><Link to={'/'}>Flock Furniture</Link></li>
                    </ul>
                    <div className="btnhov">
                      <Link to={'/'}>
                        <span>VIEW ALL </span>
                        <i className="fa-solid fa-right-long"></i>
                      </Link>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-2 d-flex justify-content-evenly">
            <div className="shopicon d-flex gap-2 align-items-center">
              <Link to="/cart" className="position-relative">
                <i className="fa-solid fa-cart-shopping fa-xl"></i>
                <p className="cart-count">0</p>
                <span>Your cart is empty</span>
              </Link>
              <Link to={'/'} className="position-relative d-none d-sm-block">
                <i className="fa-regular fa-newspaper fa-xl"></i>
                <span>Your wishlist is empty</span>
              </Link>
            </div>
            <div className="usericon d-none d-lg-flex position-relative">
              <div className='log-reg-wrapper'>
                <i className="fa-regular fa-user fa-xl"></i>
                {
                  !jwt ? (
                    <div className="d-flex flex-column">
                      <Link to={'/login'}>Login</Link>
                      <Link to={'/register'}>Sign up</Link>
                    </div>
                  ) : (
                    <div className="d-flex flex-column">
                      <Link to={'/'}>Account Settings</Link>
                      <Link to={'/'} onClick={logOut}>Log Out</Link>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>

      </header>
      <div className="infohead row w-100 m-0 justify-content-evenly">
        <div className="col-12 col-md-3">
          <i className="fa-solid fa-truck"></i>
          <span><strong>Free Shipping</strong> on all orders over $100.</span>
        </div>
        <div className="col-12 col-md-3">
          <i className="fa-solid fa-check"></i>
          <span
          ><strong> Worldwide Delivery</strong> and same day dispatch.
          </span>
        </div>
        <div className="col-12 col-md-3">
          <span><strong>Receive Gifts</strong> when you subscribe.</span>
        </div>
      </div>
    </>
  )
}
export default Header