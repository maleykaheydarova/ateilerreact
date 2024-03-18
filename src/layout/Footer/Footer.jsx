import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 onecol">
              <h3>About Atelier</h3>
              <p className="my-4">
                Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet
                lacusemper elit. Cras neque nulla, convallis non commodo et,
                euismod nonsese.
              </p>
              <p>
                ©2023 Atelier · Made with<i className="fa-solid fa-heart mx-1"></i>
                by Swift Ideas.
              </p>
            </div>
            <div className="col-sm-4 twocol">
              <h3 className="pb-1">Follow us</h3>
              <ul className="d-flex flex-wrap gap-2">
                <li className="twitter">
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li className="facebook">
                  <a href="#">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li className="dribble">
                  <a href="#">
                    <i className="fa-solid fa-basketball"></i>
                    <i className="fa-solid fa-basketball"></i>
                  </a>
                </li>
                <li className="youtube">
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li className="vimeo">
                  <a href="#">
                    <i className="fa-brands fa-vimeo"></i>
                    <i className="fa-brands fa-vimeo"></i>
                  </a>
                </li>
                <li className="tumblr">
                  <a href="#">
                    <i className="fa-brands fa-tumblr"></i>
                    <i className="fa-brands fa-tumblr"></i>
                  </a>
                </li>
                <li className="skype">
                  <a href="#">
                    <i className="fa-brands fa-skype"></i>
                    <i className="fa-brands fa-skype"></i>
                  </a>
                </li>
                <li className="linkedin">
                  <a href="#">
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li className="googleplus">
                  <a href="#">
                    <i className="fa-brands fa-google-plus"></i>
                    <i className="fa-brands fa-google-plus"></i>
                  </a>
                </li>
                <li className="flickr">
                  <a href="#">
                    <i className="fa-brands fa-flickr"></i>
                    <i className="fa-brands fa-flickr"></i>
                  </a>
                </li>
                <li className="pinterest">
                  <a href="#">
                    <i className="fa-brands fa-pinterest"></i>
                    <i className="fa-brands fa-pinterest"></i>
                  </a>
                </li>
                <li className="foursquare">
                  <a href="#">
                    <i className="fa-brands fa-foursquare"></i>
                    <i className="fa-brands fa-foursquare"></i>
                  </a>
                </li>
                <li className="instagram">
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li className="github">
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li className="xing">
                  <a href="#">
                    <i className="fa-brands fa-xing"></i>
                    <i className="fa-brands fa-xing"></i>
                  </a>
                </li>
                <li className="behance">
                  <a href="#">
                    <i className="fa-brands fa-behance"></i>
                    <i className="fa-brands fa-behance"></i>
                  </a>
                </li>
                <li className="soundcloud">
                  <a href="#">
                    <i className="fa-brands fa-soundcloud"></i>
                    <i className="fa-brands fa-soundcloud"></i>
                  </a>
                </li>
                <li className="rss">
                  <a href="#">
                    <i className="fa-solid fa-rss"></i>
                    <i className="fa-solid fa-rss"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 threecol">
              <h3 className="pb-4">Newsletter</h3>
              <p>
                <span>
                  <input
                    className="w-100"
                    type="text"
                    placeholder="Enter your email to subscribe*"
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer