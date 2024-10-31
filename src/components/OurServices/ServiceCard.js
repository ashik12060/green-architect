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

// export const ServiceCard = () => {
//   const { isDarkMode } = useTheme();
//   return (
//     <div className={` ${isDarkMode ? 'text-white' : 'bg-gray-300 '}`}>
//       <div className="container mx-auto px-4 py-16">
//         <h1 className={`text-4xl  font-bold text-center mb-10  ${isDarkMode ? ' text-white' : 'text-black'}`}><span className="${isDarkMode ? ' border-b-4 border-white' : 'text-black  border-b-4 border-black'}">Our Services</span></h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
//           <div className="bg-white rounded-lg shadow-md p-6 text-center">
//             <div className="justify-center mb-4">
//               <FontAwesomeIcon
//                 className="text-green-500 text-3xl"
//                 icon={faBuilding}
//               />
//               <h2 className="ml-2 text-xl font-bold text-black">Pre-Design</h2>
//             </div>
//             <p className="text-gray-700">
//               Green Architect Provides Top-Notch Architectural Design Services,
//               Combining Creativity and Expertise to Bring Your Vision to Life.
//             </p>
//             <button className="mt-4 inline-block px-4 py-2 text-green-500  font-bold rounded-lg ">
//               Read More{" "}
//               <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
//             </button>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6 text-center">
//             <div className=" justify-center mb-4">
//               <FontAwesomeIcon
//                 className="text-green-500 text-3xl"
//                 icon={faWandMagicSparkles}
//               />

//               <h2 className="ml-2 text-xl font-bold text-black">Design</h2>
//             </div>
//             <p className="text-gray-700">
//               Transform Your Space into a Masterpiece with Our Expert Interior
//               Design Services. Let us Bring Your Vision to Life.
//             </p>
//             <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg ">
//               Read More{" "}
//               <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
//             </button>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6 text-center">
//             <div className=" justify-center mb-4">
//               <FontAwesomeIcon
//                 className="text-green-500 text-3xl"
//                 icon={faPlaceOfWorship}
//               />

//               <h2 className="ml-2 text-xl font-bold text-black">Build</h2>
//             </div>
//             <p className="text-gray-700">
//               Committed to Delivering Exceptional Structural Design Services for
//               a Range of Building Projects, Ensuring the Stability and Safety of
//               Each Structure.
//             </p>
//             <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg ">
//               Read More{" "}
//               <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
//             </button>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6 text-center">
//             <div className=" items-center justify-center mb-4">
//             <FontAwesomeIcon
//                 className="text-green-500 text-3xl"
//                 icon={faHouseChimneyWindow}
//               />
//               <h2 className="ml-2 text-xl font-bold text-black">Interior</h2>
//             </div>
//             <p className="text-gray-700">
//               Green Architect Provides Top-Notch Architectural Design Services,
//               Combining Creativity and Expertise to Bring Your Vision to Life.
//             </p>
//             <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg ">
//               Read More{" "}
//               <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
//             </button>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6 text-center">
//             <div className=" items-center justify-center mb-4">
             
//               <FontAwesomeIcon
//                 className="text-green-500 text-3xl"
//                 icon={faCube}
//               />
//               <h2 className="ml-2 text-xl font-bold text-black">3D Work</h2>
//             </div>
//             <p className="text-gray-700">
//               Transform Your Space into a Masterpiece with Our Expert Interior
//               Design Services. Let us Bring Your Vision to Life.
//             </p>
//             <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg ">
//               Read More{" "}
//               <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
//             </button>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6 text-center">
//             <div className=" justify-center mb-4">
//               <FontAwesomeIcon
//                 className="text-green-500 text-3xl"
//                 icon={faPlaceOfWorship}
//               />
//               <h2 className="ml-2 text-xl font-bold text-black">Real State</h2>
//             </div>
//             <p className="text-gray-700">
//               Committed to Delivering Exceptional Structural Design Services for
//               a Range of Building Projects, Ensuring the Stability and Safety of
//               Each Structure.
//             </p>
//             <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg ">
//               Read More{" "}
//               <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
// import { useTranslation } from "react-i18next";

// export const ServiceCard = () => {
//   const { t } = useTranslation("Service");

//   return (
//     <div>
//       <h1>{t("title")}</h1>
//       <div>
//         {t("services", { returnObjects: true }).map((service, index) => (
//           <div key={index}>
//             <FontAwesomeIcon icon={service.icon} />
//             <h2>{service.title}</h2>
//             <p>{service.description}</p>
//             <button>{t("readMore")}</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next"; // Assuming you're using react-i18next for translation
import { useTheme } from "../../context/ThemeContext";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export const ServiceCard = () => {
  const { t } = useTranslation("Service");
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? "text-white" : "bg-gray-300"}`}>
      <div className="container mx-auto px-4 py-16">
        <h1 className={`text-4xl font-bold text-center mb-10 ${isDarkMode ? "text-white" : "text-black"}`}>
          <span className={`${isDarkMode ? "border-b-4 border-white" : "border-b-4 border-black"}`}>
            {t("title")}
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t("services", { returnObjects: true }).map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mb-4">
                <FontAwesomeIcon className="text-green-500 text-3xl" icon={service.icon} />
                <h2 className="ml-2 text-xl font-bold text-black">{service.title}</h2>
              </div>
              <p className="text-gray-700">{service.description}</p>
              <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg">
                {t("readMore")}<FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
