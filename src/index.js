// import React from "react";
// import ReactDOM from "react-dom/client"; // تعديل هنا للاستيراد الجديد
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";

// // استخدام createRoot بدلاً من render
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

import React from "react";
import ReactDOM from "react-dom/client"; // تعديل هنا للاستيراد الجديد
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// استيراد مكتبات CSS من npm
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'swiper/swiper-bundle.css';

// استيراد مكتبات JavaScript من npm
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import GLightbox from 'glightbox';
import Swiper from 'swiper/bundle';
import { gsap } from 'gsap';
import $ from 'jquery';
import Popper from '@popperjs/core';

AOS.init();
const lightbox = GLightbox({ selector: '.glightbox' });
new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  // المزيد من الإعدادات...
});

// استخدام createRoot بدلاً من render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

