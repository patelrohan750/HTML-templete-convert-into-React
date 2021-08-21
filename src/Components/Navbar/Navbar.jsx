import React, { useEffect } from "react";
import "./Navbar.css";
import WOW from 'wowjs';

const Navbar = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
  }).init();
  }, []);
  return (
    <React.Fragment>
      <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="#" className="logo">
                  <h4>
                    SEO Dream <img src="/images/logo-icon.png" alt="logo" />
                  </h4>
                </a>

                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#features">Features</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#about">About Us</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#services">Services</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#contact">Contact Us</a>
                  </li>
                  <li className="scroll-to-section">
                    <div className="main-blue-button">
                      <a href="#contact">Get Your Quote</a>
                    </div>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
