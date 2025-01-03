import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ArabicIndex from './arabic/index';
import EnglishPage from './english/index';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const isEnglish = location.pathname.includes('/english');
    
    document.documentElement.setAttribute('dir', isEnglish ? 'ltr' : 'rtl');
    
    const link = document.getElementById('language-stylesheet');
    if (isEnglish) {
      link.href = 'assets/css/styleEnglish.css';
    } else {
      link.href = 'assets/css/styleArabic.css';
    }
  }, [location]);

  return (
    <div>
      <link
        id="language-stylesheet"
        rel="stylesheet"
        href="assets/css/styleArabic.css"
      />
      <Routes>
        <Route path="/" element={<ArabicIndex />} />
        <Route path="/english" element={<EnglishPage />} />
      </Routes>
    </div>
  );
};

export default App;
