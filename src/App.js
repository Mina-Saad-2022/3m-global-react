import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ArabicIndex from './arabic/index';
import EnglishPage from './english/index'; // تأكد من أن الصفحة الإنجليزية موجودة

const App = () => {
  const location = useLocation(); // استخدام useLocation للحصول على الـ path الحالي

  useEffect(() => {
    // تحقق من الـ URL الحالي
    const isEnglish = location.pathname.includes('/english');
    
    // تغيير الـ dir الخاص بالـ html
    document.documentElement.setAttribute('dir', isEnglish ? 'ltr' : 'rtl');
    
    // تحديد ملف الـ CSS بناءً على اللغة
    const link = document.getElementById('language-stylesheet');
    if (isEnglish) {
      link.href = 'assets/css/styleEnglish.css'; // استخدم ملف الـ CSS الخاص بالإنجليزي
    } else {
      link.href = 'assets/css/styleArabic.css'; // استخدم ملف الـ CSS الخاص بالعربي
    }
  }, [location]); // إضافة location كـ dependency ليتم تحديثه عند تغيير الـ URL

  return (
    <div>
      <link
        id="language-stylesheet"
        rel="stylesheet"
        href="assets/css/styleArabic.css" // افتراضيًا يستخدم الـ CSS الخاص بالعربي
      />
      <Routes>
        <Route path="/" element={<ArabicIndex />} />
        <Route path="/english" element={<EnglishPage />} />
      </Routes>
    </div>
  );
};

export default App;
