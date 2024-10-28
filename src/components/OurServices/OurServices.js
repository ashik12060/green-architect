
import React from "react";
import { ServiceCard } from "./ServiceCard";
import { useTheme } from "../../context/ThemeContext";

function OurServices() {
  const { isDarkMode } = useTheme();
  return (
    <>
    <ServiceCard />

<div className="container mx-auto p-14">
<h2 className={`text-3xl font-bold text-center mb-10  ${isDarkMode ? ' text-white ' : 'text-black'}`}>
  Additional Services We Offer
</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
  <div className="bg-green-500 p-10 rounded-full shadow-md">
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      <h3 className="ml-2 text-lg font-bold text-white">
        Rajuk Approval
      </h3>
    </div>
  </div>
  <div className="bg-green-600 p-10 rounded-full shadow-md">
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="ml-2 text-lg font-bold text-white ">
        Soil Test
      </h3>
    </div>
  </div>
  <div className="bg-green-700 p-10 rounded-full shadow-md">
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="ml-2 text-lg font-bold text-white">
        Cost Estimate
      </h3>
    </div>
  </div>
  <div className="bg-green-800 p-10 rounded-full text-center shadow-md">
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="ml-2 text-lg font-bold text-white">
        Digital Land Survey
      </h3>
    </div>
  </div>
</div>
<p className={`mt-4  text-center text-justify	 ${isDarkMode ? ' text-white' : 'text-black'}`}>
  Green Architect simplifies the process of obtaining RAJUK and City
  Corporation approvals for building plans. Our experienced team ensures
  fast, hassle-free, and compliant approvals, protecting clients from legal
  issues and delays. Trust us to guide you through the complex process,
  providing personalized support and ensuring a smooth, efficient
  experience. Choose Green Architect for peace of mind and a stress-free
  building plan approval process.
</p>
</div>
    </>
  );
}

export default OurServices;



// import React from "react";
// import { ServiceCard } from "./ServiceCard";
// import { useTheme } from "../../context/ThemeContext";
// import { useLanguage } from "../../LanguageContext";

// const translations = {
//   EN: {
//     additionalServices: "Additional Services We Offer",
//     rajukApproval: "Rajuk Approval",
//     soilTest: "Soil Test",
//     costEstimate: "Cost Estimate",
//     digitalSurvey: "Digital Land Survey",
//     description: `Green Architect simplifies the process of obtaining RAJUK and City
//       Corporation approvals for building plans. Our experienced team ensures
//       fast, hassle-free, and compliant approvals, protecting clients from legal
//       issues and delays. Trust us to guide you through the complex process,
//       providing personalized support and ensuring a smooth, efficient
//       experience. Choose Green Architect for peace of mind and a stress-free
//       building plan approval process.`,
//   },
//   BN: {
//     additionalServices: "আমাদের প্রদান করা অতিরিক্ত পরিষেবাগুলি",
//     rajukApproval: "রাজুক অনুমোদন",
//     soilTest: "মাটির পরীক্ষা",
//     costEstimate: "খরচের আনুমানিক হিসাব",
//     digitalSurvey: "ডিজিটাল জমি জরিপ",
//     description: `গ্রিন আর্কিটেক্ট রাজুক এবং সিটি কর্পোরেশন অনুমোদন প্রক্রিয়াকে সহজ করে।
//       আমাদের অভিজ্ঞ দল নিশ্চিত করে দ্রুত, ঝামেলা-মুক্ত এবং অনুসারী অনুমোদন, ক্লায়েন্টদের
//       আইনি সমস্যা এবং বিলম্ব থেকে রক্ষা করে। আমাদের বিশ্বাস করুন জটিল প্রক্রিয়ায় আপনাকে
//       গাইড করার জন্য, ব্যক্তিগত সমর্থন প্রদান করার জন্য এবং একটি মসৃণ, কার্যকরী অভিজ্ঞতা
//       নিশ্চিত করার জন্য। শান্তি ও স্ট্রেস-মুক্ত নির্মাণ পরিকল্পনা অনুমোদন প্রক্রিয়ার জন্য
//       গ্রিন আর্কিটেক্ট বেছে নিন।`,
//   },
// };

// function OurServices() {
//   const { isDarkMode } = useTheme();
//   const { language } = useLanguage(); // Get the current language

//   return (
//     <>
//       <ServiceCard />

//       <div className="container mx-auto p-14">
//         <h2 className={`text-3xl font-bold text-center mb-10 ${isDarkMode ? 'text-white' : 'text-black'}`}>
//           {translations[language].additionalServices}
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <div className="bg-green-500 p-10 rounded-full shadow-md">
//             <div className="flex items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-white"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//               <h3 className="ml-2 text-lg font-bold text-white">
//                 {translations[language].rajukApproval}
//               </h3>
//             </div>
//           </div>
//           <div className="bg-green-600 p-10 rounded-full shadow-md">
//             <div className="flex items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-white"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//               <h3 className="ml-2 text-lg font-bold text-white">
//                 {translations[language].soilTest}
//               </h3>
//             </div>
//           </div>
//           <div className="bg-green-700 p-10 rounded-full shadow-md">
//             <div className="flex items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-white"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//               <h3 className="ml-2 text-lg font-bold text-white">
//                 {translations[language].costEstimate}
//               </h3>
//             </div>
//           </div>
//           <div className="bg-green-800 p-10 rounded-full text-center shadow-md">
//             <div className="flex items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-white"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//               <h3 className="ml-2 text-lg font-bold text-white">
//                 {translations[language].digitalSurvey}
//               </h3>
//             </div>
//           </div>
//         </div>
//         <p className={`mt-4 text-center text-justify ${isDarkMode ? 'text-white' : 'text-black'}`}>
//           {translations[language].description}
//         </p>
//       </div>
//     </>
//   );
// }

// export default OurServices;
