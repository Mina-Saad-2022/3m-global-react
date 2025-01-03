// import React from 'react';
// import { Link } from 'react-router-dom';

// const EnglishHeader = () => {
//   return (
//     <header id="header" className="header sticky-top">
//       <div className="branding d-flex align-items-center">
//         <div className="container position-relative d-flex align-items-center justify-content-between">
//           <a href="index.html" className="logo d-flex align-items-center">
//             <img src="https://www2.0zz0.com/2024/12/17/12/558229242.jpeg" alt="Logo" />
//           </a>

//           <nav id="navmenu" className="navmenu">
//             <ul style={{ marginRight: '33%' }}>
//               <li>
//                 <a href="#contact">
//                   <h6 className="title_arabic">Contact Us</h6>
//                 </a>
//               </li>
//               <li>
//                 <a href="#Opinions">
//                   <h6 className="title_arabic">Customer Reviews</h6>
//                 </a>
//               </li>
//               <li>
//                 <a href="#services">
//                   <h6 className="title_arabic">Our Products</h6>
//                 </a>
//               </li>
//               <li>
//                 <a href="#about">
//                   <h6 className="title_arabic">About Us</h6>
//                 </a>
//               </li>
//               <li>
//                 <a href="#hero" className="active">
//                   <h6 className="title_arabic">Home</h6>
//                 </a>
//               </li>
//               <li>
//                 <Link to="/">
//                   <img className="english" src="https://www2.0zz0.com/2024/12/19/14/297043513.png" alt="English" />
//                 </Link>
//               </li>
//             </ul>
//             <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default EnglishHeader;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css"; // تأكد من تثبيت bootstrap-icons

const EnglishHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state للتحكم في فتح وإغلاق القائمة

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // تبديل حالة القائمة
  };

  return (
    <header id="header" className="header sticky-top">
      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          {/* الشعار */}
          <a href="index.html" className="logo d-flex align-items-center">
            <img
              src="https://gcdnb.pbrd.co/images/BagDsRKe8AJU.png?o=1"
              alt="Logo"
            />
          </a>

          {/* القائمة */}
          <nav id="navmenu" className="navmenu">
            <ul className={isMenuOpen ? "active" : ""}>
              <li>
                <Link to="/">
                  <img
                    className="english"
                    src="https://gcdnb.pbrd.co/images/T5eLiFIHR9a5.png?o=1"
                    alt="English"
                  />
                </Link>
              </li>
              <li>
                <a href="#about">
                  <h6 className="title_arabic">About Us</h6>
                </a>
              </li>
              <li>
                <a href="#services">
                  <h6 className="title_arabic">Our Products</h6>
                </a>
              </li>
              <li>
                <a href="#Opinions">
                  <h6 className="title_arabic">Customer Reviews</h6>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <h6 className="title_arabic">Contact Us</h6>
                </a>
              </li>
              <li>
                <a href="#hero" className="active">
                  <h6 className="title_arabic">Home</h6>
                </a>
              </li>
            </ul>
            {/* أيقونة القائمة للهواتف المحمولة */}
            <i
              className="mobile-nav-toggle d-xl-none bi bi-list"
              onClick={toggleMenu}
            ></i>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default EnglishHeader;
