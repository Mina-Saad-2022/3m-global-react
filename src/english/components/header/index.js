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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EnglishHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header id="header" className="header sticky-top">
      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src="https://www2.0zz0.com/2024/12/17/12/558229242.jpeg" alt="Logo" />
          </a>

          {/* القائمة الجانبية */}
          <nav id="navmenu" className={`navmenu ${isNavOpen ? 'show' : ''}`}>
            <ul style={{ marginRight: '33%' }}>
              <li>
                <a href="#contact">
                  <h6 className="title_arabic">Contact Us</h6>
                </a>
              </li>
              <li>
                <a href="#Opinions">
                  <h6 className="title_arabic">Customer Reviews</h6>
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
                <Link to="/">
                  <img className="english" src="https://www2.0zz0.com/2024/12/19/14/297043513.png" alt="English" />
                </Link>
              </li>
            </ul>

            {/* الأيقونة الخاصة بفتح القائمة على الموبايل */}
            <i className="mobile-nav-toggle d-xl-none bi bi-list" onClick={handleToggleNav}></i>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default EnglishHeader;
