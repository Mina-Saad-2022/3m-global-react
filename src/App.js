// import React from 'react';
// import ArabicIndex from './arabic/index'; // تأكد من أن المسار صحيح لتتوافق مع بنية الملفات لديك

// function App() {
//   return (
//     <div>
//       <ArabicIndex />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArabicIndex from './arabic/index';
import EnglishPage from './english/index'; // تأكد من أن الصفحة الإنجليزية موجودة

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ArabicIndex />} />
        <Route path="/english" element={<EnglishPage />} />
      </Routes>
    </div>
  );
};

export default App;
