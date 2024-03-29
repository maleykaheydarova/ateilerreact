import React from 'react'


const Header = () => {

  return (
    <>
    <header>
        <div class="containers row mx-0 w-100">
          <div class="col-2 d-flex">
            <div class="baricon me-4">
              <a><i class="fa-solid fa-bars fa-lg"></i></a>
            </div>

            <div class="d-none d-lg-flex magnifyingicon">
              <a href="#"><i class="fa-solid fa-magnifying-glass fa-lg"></i></a>
            </div>
          </div>
          <div
            class="navimg col-8 d-flex justify-content-center align-items-center gap-4"
          >
            <ul
              class="d-none d-lg-flex d-flex justify-content-between align-items-center gap-4"
            >
              <li class="homehover">
                <a href="index.html" class="hover-link">Home</a>

                <ul class="homehoverin">
                  <li class="d-flex gap-5">
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">Landing</a></li>
                      <li><a href="#">Animated Header</a></li>
                      <li><a href="#">Tiles Tiles Tiles</a></li>
                      <li><a href="#">Multi-Masonry</a></li>
                      <li><a href="#">Modern Classic</a></li>
                    </ul>
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">Poster</a></li>
                      <li><a href="#">Product Focus</a></li>
                      <li><a href="#">Half / Half Split</a></li>
                      <li><a href="#">Naked Header + Tiles</a></li>
                      <li><a href="#">Fullscreen + Masonry</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="shopStylesHover">
                <a href="shop.html" class="hover-link">Shop Styles</a>
                <ul class="shopStylesHoverin">
                  <li class="d-flex justify-content-evenly">
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">Shop Styles</a></li>
                      <li><a href="#">Standard Full-width</a></li>
                      <li><a href="#">Standard w/ sidebar</a></li>
                      <li><a href="#">Standard w/ right sidebar</a></li>
                      <li><a href="#">Multi-Masonry Full-width</a></li>
                      <li><a href="#">Multi-Masonry Boxed</a></li>
                      <li><a href="#">Multiple Mixed Rows</a></li>
                      <li><a href="#">Product Category Page</a></li>
                      <li><a href="#">All Categories</a></li>
                    </ul>
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">Shop Styles Cont.</a></li>
                      <li><a href="#">Standard 2 Columns</a></li>
                      <li><a href="#">Standard 4 Columns</a></li>
                      <li><a href="#">Gallery 4 Columns</a></li>
                      <li><a href="#">Gallery 3 Columns</a></li>
                      <li><a href="#">Gallery 4 Columns Alt</a></li>
                      <li><a href="#">Standard 5 Column Full-width</a></li>
                      <li><a href="#">Standard 6 Col Full-width</a></li>
                      <li><a href="#">Gallery Bordered Full-width</a></li>
                    </ul>
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">Product Pages</a></li>
                      <li><a href="product.html">Standard Product</a></li>
                      <li><a href="#">Extended Product</a></li>
                      <li><a href="#">Full-Screen Product</a></li>
                      <li><a href="#">Variable Product</a></li>
                      <li><a href="#">Grouped Product</a></li>
                      <li><a href="#">Out of Stock Product</a></li>
                      <li><a href="#">Sale Product</a></li>
                    </ul>
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">Misc. Shop Pages</a></li>
                      <li>
                        <a href="#">
                          <i class="fa-solid fa-cart-shopping"></i>
                          Shopping Cart
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-solid fa-star"></i>
                          Wishlist
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-solid fa-truck"></i>
                          Track Your Order
                        </a>
                      </li>
                      <li><a href="#">My Account</a></li>
                      <li><a href="#">Checkout</a></li>
                      <li><a href="lookbook.html">Lookbook</a></li>
                      <li><a href="#">Catalog Mode</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="featuresHover">
                <a href="features.html" class="hover-link">Features</a>
                <ul class="featuresHoverin">
                  <li class="d-flex justify-content-evenly">
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">Stunning Modern Design</a></li>
                      <li><a href="#">Custom Shop Icon Font</a></li>
                      <li><a href="#">3 Cart Icon Styles</a></li>
                      <li><a href="#">5 CSS3 Cart Animations</a></li>
                      <li><a href="#">Shop View Switcher</a></li>
                      <li><a href="#">3 Product Page Options</a></li>
                      <li><a href="#">Total Product Control</a></li>
                      <li><a href="#">Global Banner</a></li>
                    </ul>
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">Slick Add to cart process</a></li>
                      <li><a href="#">Newsletter / Subscribe Bar</a></li>
                      <li><a href="#">4 Incredible Shop Styles</a></li>
                      <li><a href="#">Multi-Size Masonry Shop</a></li>
                      <li><a href="#">Tailored Mobile Experience</a></li>
                      <li><a href="#">10 Header Options</a></li>
                      <li><a href="#">14 High-Quality Demos</a></li>
                      <li><a href="#">3 Page Styles</a></li>
                    </ul>
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">5 Page Header Styles</a></li>
                      <li><a href="#">Animated Page Headers</a></li>
                      <li><a href="#">Swift or VC Page Builder</a></li>
                      <li><a href="#">519 Font Awesome Icons</a></li>
                      <li><a href="#">197 IconMind Icons</a></li>
                      <li><a href="#">Unlimited Custom Colours</a></li>
                      <li><a href="#">Demo Content Importer</a></li>
                      <li><a href="#">Retina-Ready</a></li>
                    </ul>
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">Free Support & Updates</a></li>
                      <li><a href="#">Amazing Premium Sliders</a></li>
                      <li><a href="#">100% Translatable</a></li>
                      <li><a href="#">Extensive Theme Options</a></li>
                      <li><a href="#">Loaded with Shortcodes</a></li>
                      <li><a href="#">671+ Free Google Fonts</a></li>
                      <li><a href="#">Epic Performance & SEO</a></li>
                      <li><a href="#">RTL Support</a></li>
                    </ul>
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">Custom Font Integration</a></li>
                      <li><a href="#">2 One-Page Nav Styles</a></li>
                      <li><a href="#">41 CSS3 Animations</a></li>
                      <li><a href="#">Flexible Mega-Menu</a></li>
                      <li><a href="#">Multi-function Rows</a></li>
                      <li><a href="#">Portfolio Options</a></li>
                      <li><a href="#">Blog Options</a></li>
                      <li><a href="#">Promo Bar</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <div>
              <a href="#"
                ><img
                  src={require("../../assets/img/atelier-logo-alt2-dark.png")}
                  alt=""
                />
              </a>
            </div>

            <ul class="d-none d-lg-flex d-flex align-items-center gap-4">
              <li class="pagesHover">
                <a href="#">Pages</a>
                <ul class="pagesHoverin">
                  <li class="d-flex justify-content-evenly">
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">General</a></li>
                      <li><a href="#">About Me</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">About Us Alt</a></li>
                      <li><a href="#">Contact</a></li>
                      <li><a href="#">Contact Alt</a></li>
                      <li><a href="#">Contact Alt 2</a></li>
                      <li><a href="#">Coming Soon</a></li>
                    </ul>
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">General cont.</a></li>
                      <li><a href="#">F.A.Q.’s</a></li>
                      <li><a href="#">Meet the Team</a></li>
                      <li><a href="#">Size and Fit</a></li>
                      <li><a href="#">Pricing</a></li>
                      <li><a href="#">Left Sidebar</a></li>
                      <li><a href="#">Right Sidebar</a></li>
                      <li><a href="#">Maintenance Mode</a></li>
                    </ul>
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">Blog</a></li>
                      <li><a href="half.html">Half/Half Split</a></li>
                      <li><a href="#">Half / Half Split Alt</a></li>
                      <li><a href="#">Standard with sideba</a></li>
                      <li><a href="#">Standard Alt with side</a></li>
                      <li><a href="#">Bold Text Only Style</a></li>
                      <li><a href="#">Mini with sidebar</a></li>
                    </ul>
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">Blog cont.</a></li>
                      <li><a href="#">Masonry Style</a></li>
                      <li><a href="#">Masonry Full-width</a></li>
                      <li><a href="#">Masonry Wrapped</a></li>
                      <li><a href="#">Standard Blog Post</a></li>
                      <li><a href="#">Detailed Blog Post</a></li>
                      <li><a href="half.html">Half / Half Split Post</a></li>
                    </ul>
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">Portfolio</a></li>
                      <li><a href="#">3 Column Standard</a></li>
                      <li><a href="#">3 Column Gallery Alt</a></li>
                      <li><a href="#">Multi-Size Masonry Boxe</a></li>
                      <li><a href="#">4 Column Gallery</a></li>
                      <li><a href="#">4 Column Gallery Alt</a></li>
                    </ul>
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">Portfolio cont.</a></li>
                      <li><a href="#">4 Column Masonry</a></li>
                      <li><a href="#">Multi-Size Masonry</a></li>
                      <li><a href="#">Multi-Size Masonry Alt</a></li>
                      <li><a href="#">Detailed Post</a></li>
                      <li><a href="#">Standard Post</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="elementsHover">
                <a href="#">Elements</a>
                <ul class="elementsHoverin">
                  <li class="d-flex justify-content-evenly">
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">Animation</a></li>
                      <li><a href="#">Accordion & Toggles</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Boxed Content</a></li>
                      <li><a href="#">Buttons & Social Icons</a></li>
                      <li><a href="#">Clients</a></li>
                      <li><a href="#">Code Snippet</a></li>
                      <li><a href="#">Columns</a></li>
                      <li><a href="#">Countdown</a></li>
                    </ul>
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">Counters, Charts & Progres</a></li>
                      <li><a href="#">Directory Map</a></li>
                      <li><a href="#">Divider</a></li>
                      <li><a href="#">Fullscreen Videos</a></li>
                      <li><a href="#">Galleries</a></li>
                      <li><a href="#">Gallery</a></li>
                      <li><a href="#">Google Maps</a></li>
                      <li><a href="#">Icon Box</a></li>
                      <li><a href="#">Image</a></li>
                    </ul>
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">Image Banners</a></li>
                      <li><a href="#">Lists</a></li>
                      <li><a href="#">Modals</a></li>
                      <li><a href="#">Portfolio Carousel</a></li>
                      <li><a href="#">Pricing Table</a></li>
                      <li><a href="#">Products</a></li>
                      <li><a href="#">Products (Mini)</a></li>
                      <li><a href="#">Promo Bar</a></li>
                      <li><a href="#">Quotes</a></li>
                    </ul>
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">Recent Posts</a></li>
                      <li><a href="#">Responsive Visibility</a></li>
                      <li><a href="#">Revolution Slider</a></li>
                      <li><a href="#">Rows & Expanding Rows</a></li>
                      <li><a href="#">Social Grid</a></li>
                      <li><a href="#">Super Search</a></li>
                      <li><a href="#">Swift Slider v3</a></li>
                      <li><a href="#">Tables</a></li>
                      <li><a href="#">Tabs</a></li>
                    </ul>
                    <ul class="d-flex flex-column gap-3 pt-3">
                      <li><a href="#">Team</a></li>
                      <li><a href="#">Testimonials</a></li>
                      <li><a href="#">Testimonials Slider</a></li>
                      <li><a href="#">Tour</a></li>
                      <li><a href="#">Tweets Slider</a></li>
                      <li><a href="#">Typography</a></li>
                      <li><a href="#">Video Player</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="demosHover">
                <a href="#">Demos</a>
                <ul class="demosHoverin">
                  <li class="d-flex justify-content-evenly align-items-center">
                    <ul class="d-flex flex-column align-items-center gap-3">
                      <li>
                        <img src="./src/assets/img/alvar-demo.jpg" alt="" />
                      </li>
                      <li><a href="#">Alvar EDD</a></li>
                    </ul>
                    <ul class="d-flex flex-column align-items-center gap-3">
                      <li>
                        <img src="./sass/assets/img/rebel-demo.jpg" alt="" />
                      </li>
                      <li><a href="#">Rebel T-shirts</a></li>
                    </ul>
                    <ul class="d-flex flex-column align-items-center gap-3">
                      <li>
                        <img src="./sass/assets/img/vario-demo.jpg" alt="" />
                      </li>
                      <li><a href="#">Vario Preview Slider</a></li>
                    </ul>
                    <ul class="d-flex flex-column align-items-center gap-3">
                      <li>
                        <img src="./sass/assets/img/porter-demo.jpg" alt="" />
                      </li>
                      <li><a href="#">Porter Furniture</a></li>
                    </ul>
                    <ul class="d-flex flex-column align-items-center gap-3">
                      <li>
                        <img src="./sass/assets/img/flock-demo.jpg" alt="" />
                      </li>
                      <li><a href="#">Flock Furniture</a></li>
                    </ul>
                    <div class="btnhov">
                      <a href="#">
                        <span>VIEW ALL </span>
                        <i class="fa-solid fa-right-long"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="col-2 d-flex justify-content-evenly">
            <div class="shopicon d-flex gap-2 align-items-center">
              <a href="cart.html" class="position-relative">
                <i class="fa-solid fa-cart-shopping fa-xl"></i>
                <p class="cart-count">0</p>
                <span>Your cart is empty</span>
              </a>
              <a href="#" class="position-relative d-none d-sm-block">
                <i class="fa-regular fa-newspaper fa-xl"></i>
                <span>Your wishlist is empty</span>
              </a>
            </div>
            <div class="usericon d-none d-lg-flex position-relative">
              <a href="#">
                <i class="fa-regular fa-user fa-xl"></i>
                <div class="d-flex flex-column">
                  <span>Login</span>
                  <span>Sign up</span>
                </div>
              </a>
            </div>
          </div>
        </div>

      </header>
      <div class="infohead row w-100 m-0 justify-content-evenly">
        <div class="col-12 col-md-3">
          <i class="fa-solid fa-truck"></i>
          <span><strong>Free Shipping</strong> on all orders over $100.</span>
        </div>
        <div class="col-12 col-md-3">
          <i class="fa-solid fa-check"></i>
          <span
            ><strong> Worldwide Delivery</strong> and same day dispatch.
          </span>
        </div>
        <div class="col-12 col-md-3">
          <span><strong>Receive Gifts</strong> when you subscribe.</span>
        </div>
      </div>
      <div class="mobile-menu-wrap position-fixed">
        <div class="mobile-menu-inner">
          <div class="mob-menu-search">
            <input type="text" placeholder="Search" />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <ul class="mob-menu-pages">
            <li>
              <a href="index.html"><span>Home</span></a>
            </li>
            <li>
              <a class="d-flex align-items-center justify-content-between accardion-open">
                <span>Shop</span>
                <i class="fa-solid fa-chevron-down"></i>
              </a>
              <ul class="sub-menu">
                <li><a href="shop.html">Shop All Products</a></li>
                <li><a>Shop with Sidebar</a></li>
                <li><a>Shop: 2 Columns</a></li>
                <li><a>Shop: 4 Columns</a></li>
                <li><a>Shop: Multi-Masonry</a></li>
                <li><a>Shop: Category Page</a></li>
                <li><a>Standard Product Page</a></li>
                <li><a>Extended Product Page</a></li>
              </ul>
            </li>
            <li>
              <a href="features.html">
                <span>Features</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a class="d-flex align-items-center justify-content-between accardion-open">
                <span>Blog</span>
                <i class="fa-solid fa-chevron-down"></i>
              </a>
              <ul class="sub-menu">
                <li><a>Standard Alt</a></li>
                <li><a>Masonry Style</a></li>
                <li><a>Mini + sidebar</a></li>
                <li><a>Text Only Style</a></li>
              </ul>
            </li>
            <li>
              <a class="d-flex align-items-center justify-content-between accardion-open">
                <span>Pages</span>
                <i class="fa-solid fa-chevron-down"></i>
              </a>
              <ul class="sub-menu">
                <li><a>About Us</a></li>
                <li><a>Contact</a></li>
                <li><a>F.A.Q.’s</a></li>
                <li><a>Meet the Team</a></li>
                <li><a>Size and Fit</a></li>
              </ul>
            </li>
            <li>
              <a class="d-flex align-items-center justify-content-between accardion-open">
                <span>Demos</span>
                <i class="fa-solid fa-chevron-down"></i>
              </a>
              <ul class="sub-menu">
                <li><a>Form: Coffee</a></li>
                <li><a>Union: Cosmetics</a></li>
                <li><a>Convoy: Accessories</a></li>
                <li><a>Lab: Wine Shop</a></li>
                <li><a>Tilt: Art Prints</a></li>
              </ul>
            </li>
          </ul>
          <ul class="mob-menu-pages">
            <li>
              <a
                href="#"
                class="d-flex align-items-center justify-content-between"
              >
                <span>Cart</span>
                <i class="fa-solid fa-shopping-cart"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="d-flex align-items-center justify-content-between"
              >
                <span>Wishlist</span>
                <i class="fa-solid fa-clipboard-list"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Login / Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default Header