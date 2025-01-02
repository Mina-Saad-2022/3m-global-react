import React from 'react';

const EnglishHeader = () => {
  return (
    <header id="header" className="header sticky-top">
      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src="https://www2.0zz0.com/2024/12/17/12/558229242.jpeg" alt="Logo" />
          </a>

          <nav id="navmenu" className="navmenu">
            <ul style={{ marginRight: '33%' }}>
              <li>
                <a href="#contact">
                  <h6 className="title_arabic">Contact Us</h6>
                </a>
              </li>
              <li>
                <a href="#Opinions">
                  <h6 className="title_arabic">Customer Opinions</h6>
                </a>
              </li>
              <li>
                <a href="#services">
                  <h6 className="title_arabic">Our Products</h6>
                </a>
              </li>
              <li>
                <a href="#about">
                  <h6 className="title_arabic">About Us</h6>
                </a>
              </li>
              <li>
                <a href="#hero" className="active">
                  <h6 className="title_arabic">Home</h6>
                </a>
              </li>
              <li>
                <a href="english.html">
                  <img className="english" src="https://www2.0zz0.com/2024/12/19/13/657521320.png" alt="English" />
                </a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default EnglishHeader;
