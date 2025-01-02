import React from "react";
import ReactDOM from "react-dom/client"; // تعديل هنا للاستيراد الجديد
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// استخدام createRoot بدلاً من render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
