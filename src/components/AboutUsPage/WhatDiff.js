import React from 'react'
import img from '../../assets/architect2.jpg'
import { useTheme } from '../../context/ThemeContext';

const WhatDiff = () => {
  const { isDarkMode } = useTheme();
  return (
    <div>
        <div className={`flex flex-col items-center justify-center min-h-screen ${isDarkMode ? ' text-white  bg-black' : 'bg-white'}`}>
      <div className={`container mx-auto p-4 rounded-lg shadow-md ${isDarkMode ? ' text-white  bg-black  shadow-md shadow-gray-800' : ''}`}>
        <h1 className="text-3xl text-center my-10 pb-10 font-bold text-green-800 mb-4 "><span className={`${isDarkMode ? 'border-b-4 border-white text-white  ' : 'text-green-700 border-b-4 border-green-700'}`}>What Makes Us Different?</span></h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src={img} alt="Building Image" className="w-full rounded-lg shadow-sm" />
          </div>
          <div className="md:w-1/2 p-4">
            <p className=" mb-4">
              SHELLMARK LIMITED was established in 2012 as a partnership firm with the name of SHELLMARK Engineers & Architects. A group of professionals were willing to pool their resources to define a new order of Engineering Standard. Later in 2014, it has incorporated as a Private Limited company to the Registrar of Joint Stock Companies of Bangladesh under the Companies Act-1994.
            </p>
            <p className=" mb-4">
              Today, it is a fast growing Company for Building Design, Architectural and Structural Consultancy, Soil Test, Digital Survey, RAJUK Plan Pass, Civil Construction & Project Management. So far SHELLMARK's integrity and technological resources comprise modern & world class solutions to meet the needs of today.
            </p>
            <p className="">
              Our Mission is to offer excellent service in each of our professional disciplines, in accordance with state of the art practices, codes of conduct and integrity.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WhatDiff


// import React from 'react';
// import img from '../../assets/architect2.jpg';
// import { useTheme } from '../../context/ThemeContext';
// import { useLanguage } from '../../LanguageContext';

// const translations = {
//   EN: {
//     title: "What Makes Us Different?",
//     paragraph1: "SHELLMARK LIMITED was established in 2012 as a partnership firm with the name of SHELLMARK Engineers & Architects. A group of professionals were willing to pool their resources to define a new order of Engineering Standard. Later in 2014, it was incorporated as a Private Limited company to the Registrar of Joint Stock Companies of Bangladesh under the Companies Act-1994.",
//     paragraph2: "Today, it is a fast-growing company for Building Design, Architectural and Structural Consultancy, Soil Test, Digital Survey, RAJUK Plan Pass, Civil Construction & Project Management. So far, SHELLMARK's integrity and technological resources comprise modern & world-class solutions to meet the needs of today.",
//     mission: "Our Mission is to offer excellent service in each of our professional disciplines, in accordance with state of the art practices, codes of conduct, and integrity.",
//   },
//   BN: {
//     title: "আমাদের বিশেষত্ব কী?",
//     paragraph1: "SHELLMARK LIMITED 2012 সালে SHELLMARK Engineers & Architects নামের একটি পার্টনারশিপ ফার্ম হিসাবে প্রতিষ্ঠিত হয়েছিল। কিছু পেশাদার নিজেদের সংresources/resources একত্রিত করার জন্য প্রস্তুত ছিলেন একটি নতুন প্রকৌশল মানের সংজ্ঞা দেওয়ার জন্য। পরে 2014 সালে, এটি কোম্পানি আইন-1994 এর অধীনে বাংলাদেশের কোম্পানির নিবন্ধককে একটি প্রাইভেট লিমিটেড কোম্পানি হিসাবে অন্তর্ভুক্ত করা হয়।",
//     paragraph2: "আজ, এটি বিল্ডিং ডিজাইন, স্থাপত্য ও কাঠামোগত পরামর্শ, মাটি পরীক্ষা, ডিজিটাল জরিপ, RAJUK পরিকল্পনা পাস, সিভিল নির্মাণ ও প্রকল্প ব্যবস্থাপনায় দ্রুত বর্ধনশীল একটি কোম্পানি। এখন পর্যন্ত SHELLMARK-এর অখণ্ডতা এবং প্রযুক্তিগত সম্পদ আধুনিক ও বিশ্বমানের সমাধানগুলি নিয়ে এসেছে যা আজকের চাহিদাগুলি পূরণ করে।",
//     mission: "আমাদের মিশন হল আমাদের প্রতিটি পেশাগত শৃঙ্লায় চমৎকার সেবা প্রদান করা, আধুনিক প্রযুক্তির অনুশীলনের, আচরণের কোড এবং অখণ্ডতার সাথে সঙ্গতিপূর্ণ।",
//   },
// };

// const WhatDiff = () => {
//   const { isDarkMode } = useTheme();
//   const { language } = useLanguage();

//   return (
//     <div>
//       <div className={`flex flex-col items-center justify-center min-h-screen ${isDarkMode ? 'text-white bg-black' : 'bg-white'}`}>
//         <div className={`container mx-auto p-4 rounded-lg shadow-md ${isDarkMode ? 'text-white bg-black shadow-md shadow-gray-800' : ''}`}>
//           <h1 className="text-3xl text-center my-10 pb-10 font-bold text-green-800 mb-4">
//             <span className={`${isDarkMode ? 'border-b-4 border-white' : 'text-green-700 border-b-4 border-green-700'}`}>
//               {translations[language].title}
//             </span>
//           </h1>
//           <div className="flex flex-col md:flex-row">
//             <div className="md:w-1/2">
//               <img src={img} alt="Building Image" className="w-full rounded-lg shadow-sm" />
//             </div>
//             <div className="md:w-1/2 p-4">
//               <p className="mb-4">{translations[language].paragraph1}</p>
//               <p className="mb-4">{translations[language].paragraph2}</p>
//               <p className="">{translations[language].mission}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatDiff;
