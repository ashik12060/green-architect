import React from "react";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import {
  faAnglesRight,
  faCube,
  faHouseChimneyWindow,
  faPlaceOfWorship,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../context/ThemeContext";

export const ServiceCard = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={` ${isDarkMode ? 'text-white' : 'bg-gray-300 '}`}>
      <div className="container mx-auto px-4 py-16">
        <h1 className={`text-4xl  font-bold text-center mb-10  ${isDarkMode ? ' text-white' : 'text-black'}`}><span className="${isDarkMode ? ' border-b-4 border-white' : 'text-black  border-b-4 border-black'}">Our Services</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="justify-center mb-4">
              <FontAwesomeIcon
                className="text-green-500 text-3xl"
                icon={faBuilding}
              />
              <h2 className="ml-2 text-xl font-bold text-black">Pre-Design</h2>
            </div>
            <p className="text-gray-700">
              Green Architect Provides Top-Notch Architectural Design Services,
              Combining Creativity and Expertise to Bring Your Vision to Life.
            </p>
            <button className="mt-4 inline-block px-4 py-2 text-green-500  font-bold rounded-lg ">
              Read More{" "}
              <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className=" justify-center mb-4">
              <FontAwesomeIcon
                className="text-green-500 text-3xl"
                icon={faWandMagicSparkles}
              />

              <h2 className="ml-2 text-xl font-bold text-black">Design</h2>
            </div>
            <p className="text-gray-700">
              Transform Your Space into a Masterpiece with Our Expert Interior
              Design Services. Let us Bring Your Vision to Life.
            </p>
            <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg ">
              Read More{" "}
              <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className=" justify-center mb-4">
              <FontAwesomeIcon
                className="text-green-500 text-3xl"
                icon={faPlaceOfWorship}
              />

              <h2 className="ml-2 text-xl font-bold text-black">Build</h2>
            </div>
            <p className="text-gray-700">
              Committed to Delivering Exceptional Structural Design Services for
              a Range of Building Projects, Ensuring the Stability and Safety of
              Each Structure.
            </p>
            <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg ">
              Read More{" "}
              <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className=" items-center justify-center mb-4">
            <FontAwesomeIcon
                className="text-green-500 text-3xl"
                icon={faHouseChimneyWindow}
              />
              <h2 className="ml-2 text-xl font-bold text-black">Interior</h2>
            </div>
            <p className="text-gray-700">
              Green Architect Provides Top-Notch Architectural Design Services,
              Combining Creativity and Expertise to Bring Your Vision to Life.
            </p>
            <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg ">
              Read More{" "}
              <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className=" items-center justify-center mb-4">
             
              <FontAwesomeIcon
                className="text-green-500 text-3xl"
                icon={faCube}
              />
              <h2 className="ml-2 text-xl font-bold text-black">3D Work</h2>
            </div>
            <p className="text-gray-700">
              Transform Your Space into a Masterpiece with Our Expert Interior
              Design Services. Let us Bring Your Vision to Life.
            </p>
            <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg ">
              Read More{" "}
              <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className=" justify-center mb-4">
              <FontAwesomeIcon
                className="text-green-500 text-3xl"
                icon={faPlaceOfWorship}
              />
              <h2 className="ml-2 text-xl font-bold text-black">Real State</h2>
            </div>
            <p className="text-gray-700">
              Committed to Delivering Exceptional Structural Design Services for
              a Range of Building Projects, Ensuring the Stability and Safety of
              Each Structure.
            </p>
            <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg ">
              Read More{" "}
              <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



// import React from "react";
// import { faBuilding } from "@fortawesome/free-regular-svg-icons";
// import {
//   faAnglesRight,
//   faCube,
//   faHouseChimneyWindow,
//   faPlaceOfWorship,
//   faWandMagicSparkles,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useTheme } from "../../context/ThemeContext";
// import { useLanguage } from "../../LanguageContext";

// const translations = {
//   EN: {
//     title: "Our Services",
//     services: [
//       {
//         icon: faBuilding,
//         title: "Pre-Design",
//         description: "Green Architect Provides Top-Notch Architectural Design Services, Combining Creativity and Expertise to Bring Your Vision to Life."
//       },
//       {
//         icon: faWandMagicSparkles,
//         title: "Design",
//         description: "Transform Your Space into a Masterpiece with Our Expert Interior Design Services. Let us Bring Your Vision to Life."
//       },
//       {
//         icon: faPlaceOfWorship,
//         title: "Build",
//         description: "Committed to Delivering Exceptional Structural Design Services for a Range of Building Projects, Ensuring the Stability and Safety of Each Structure."
//       },
//       {
//         icon: faHouseChimneyWindow,
//         title: "Interior",
//         description: "Green Architect Provides Top-Notch Architectural Design Services, Combining Creativity and Expertise to Bring Your Vision to Life."
//       },
//       {
//         icon: faCube,
//         title: "3D Work",
//         description: "Transform Your Space into a Masterpiece with Our Expert Interior Design Services. Let us Bring Your Vision to Life."
//       },
//       {
//         icon: faPlaceOfWorship,
//         title: "Real Estate",
//         description: "Committed to Delivering Exceptional Structural Design Services for a Range of Building Projects, Ensuring the Stability and Safety of Each Structure."
//       },
//     ]
//   },
//   BN: {
//     title: "আমাদের সেবা",
//     services: [
//       {
//         icon: faBuilding,
//         title: "প্রি-ডিজাইন",
//         description: "গ্রিন আর্কিটেক্ট শীর্ষস্থানীয় স্থাপত্য ডিজাইন সেবা প্রদান করে, সৃজনশীলতা এবং দক্ষতা একত্রিত করে আপনার দৃষ্টিভঙ্গি জীবন্ত করতে।"
//       },
//       {
//         icon: faWandMagicSparkles,
//         title: "ডিজাইন",
//         description: "আমাদের বিশেষজ্ঞ অভ্যন্তরীণ ডিজাইন সেবার সাহায্যে আপনার স্থানের একটি মাস্টারপিসে রূপান্তর করুন।"
//       },
//       {
//         icon: faPlaceOfWorship,
//         title: "নির্মাণ",
//         description: "বিভিন্ন বিল্ডিং প্রকল্পের জন্য অত্যন্ত গুণমানের কাঠামোগত ডিজাইন সেবা প্রদান করতে প্রতিশ্রুতিবদ্ধ।"
//       },
//       {
//         icon: faHouseChimneyWindow,
//         title: "অভ্যন্তরীণ",
//         description: "গ্রিন আর্কিটেক্ট শীর্ষস্থানীয় স্থাপত্য ডিজাইন সেবা প্রদান করে, সৃজনশীলতা এবং দক্ষতা একত্রিত করে আপনার দৃষ্টিভঙ্গি জীবন্ত করতে।"
//       },
//       {
//         icon: faCube,
//         title: "৩D কাজ",
//         description: "আমাদের বিশেষজ্ঞ অভ্যন্তরীণ ডিজাইন সেবার সাহায্যে আপনার স্থানের একটি মাস্টারপিসে রূপান্তর করুন।"
//       },
//       {
//         icon: faPlaceOfWorship,
//         title: "রিয়েল এস্টেট",
//         description: "বিভিন্ন বিল্ডিং প্রকল্পের জন্য অত্যন্ত গুণমানের কাঠামোগত ডিজাইন সেবা প্রদান করতে প্রতিশ্রুতিবদ্ধ।"
//       },
//     ]
//   },
// };

// export const ServiceCard = () => {
//   const { isDarkMode } = useTheme();
//   const { language } = useLanguage(); // Get the current language

//   return (
//     <div className={`${isDarkMode ? 'text-white' : 'bg-gray-300'}`}>
//       <div className="container mx-auto px-4 py-16">
//         <h1 className={`text-4xl font-bold text-center mb-10 ${isDarkMode ? 'text-white' : 'text-black'}`}>
//           <span className={`${isDarkMode ? 'border-b-4 border-white' : 'border-b-4 border-black'}`}>{translations[language].title}</span>
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {translations[language].services.map((service, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
//               <div className="justify-center mb-4">
//                 <FontAwesomeIcon className="text-green-500 text-3xl" icon={service.icon} />
//                 <h2 className="ml-2 text-xl font-bold text-black">{service.title}</h2>
//               </div>
//               <p className="text-gray-700">{service.description}</p>
//               <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg">
//                 Read More <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
