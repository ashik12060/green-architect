// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useTheme } from "../../context/ThemeContext";
// import { motion } from "framer-motion";
// import {
//   faBuildingColumns,
//   faMosque,
//   faSchool,
//   faUniversity,
//   faStore,
//   faCreditCard,
//   faBus,
//   faBank,
// } from "@fortawesome/free-solid-svg-icons";
// import { useTranslation } from "react-i18next";

// export const LocalBenifits = ({ services }) => {
//   const { isDarkMode } = useTheme();
//   const { i18n } = useTranslation();

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1 },
//   };

//   const hoverEffect = {
//     hover: {
//       scale: 1.05,
//       transition: { duration: 0.3 },
//     },
//   };

//   const icons = {
//     mosque: faMosque,
//     school: faSchool,
//     university: faUniversity,
//     store: faStore,
//     creditCard: faCreditCard,
//     bus: faBus,
//     bank: faBank,
//     buildingColumns: faBuildingColumns, // Default icon if not matched
//   };

//   return (
//     <div className={`${isDarkMode ? "text-white" : "bg-white"}`}>
//       <div className="container mx-auto px-4 py-10 my-10">
//         <h1
//           className={`text-4xl font-bold text-center mb-10 ${
//             isDarkMode ? "text-white border-b-4 border-green-700" : "text-black"
//           }`}
//         >
//           LOCAL BENEFITS
//         </h1>
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             visible: {
//               transition: {
//                 staggerChildren: 0.2,
//               },
//             },
//           }}
//         >
//           {services.map((service, index) => {
//             // Debugging: Log the service and iconKey
//             console.log("Service:", service);
//             console.log("IconKey:", service.iconKey);

//             const IconComponent = icons[service.iconKey]  // Get the correct icon or fallback
//             return (
//               <motion.div
//                 key={index}
//                 className={`relative bg-white rounded-lg shadow-md p-6 text-center overflow-hidden group ${
//                   isDarkMode ? "bg-gray-800 text-white" : "text-black"
//                 }`}
//                 variants={cardVariants}
//                 whileHover={hoverEffect.hover}
//               >
//                 <div className="absolute inset-0 border-2 border-t-green-800 rounded-lg animate-border group-hover:animate-border-hover"></div>
//                 <div className="mb-4 relative z-10 py-16">
//                   {/* Use the dynamically selected icon */}
//                   <FontAwesomeIcon
//                     icon={IconComponent}
//                     className="text-gray-500 text-4xl mb-4"
//                   />
//                   <p className="relative text-green-700 font-bold z-10">
//                     {service.distance?.en || "Distance not available"}
//                   </p>
//                   <h2 className="ml-2 text-xl font-bold">
//                     {service.titleName?.en}
//                   </h2>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </div>
//   );
// };



import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import {
  faBuildingColumns,
  faMosque,
  faSchool,
  faUniversity,
  faStore,
  faCreditCard,
  faBus,
  faBank,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export const LocalBenifits = ({ services }) => {
  const { isDarkMode } = useTheme();
  const { t, i18n } = useTranslation();

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const hoverEffect = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const icons = {
    mosque: faMosque,
    school: faSchool,
    university: faUniversity,
    store: faStore,
    creditCard: faCreditCard,
    bus: faBus,
    bank: faBank,
    buildingColumns: faBuildingColumns, // Default icon if no match
  };

  return (
    <div className={`${isDarkMode ? "text-white" : "bg-white"}`}>
      <div className="container mx-auto px-4 py-10 my-10">
        <h1
          className={`text-4xl font-bold text-center mb-10 ${
            isDarkMode ? "text-white border-b-4 border-green-700" : "text-black"
          }`}
        >
          {t("local_benefits")}
        </h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {services.map((service, index) => {
            const IconComponent =
              icons[service.iconKey] || icons.buildingColumns;

            return (
              <motion.div
                key={index}
                className={`relative bg-white rounded-lg shadow-md p-6 text-center overflow-hidden group ${
                  isDarkMode ? "bg-gray-800 text-white" : "text-black"
                }`}
                variants={cardVariants}
                whileHover={hoverEffect.hover}
              >
                <div className="absolute inset-0 border-2 border-t-green-800 rounded-lg animate-border group-hover:animate-border-hover"></div>
                <div className="mb-4 relative z-10 py-16">
                  <FontAwesomeIcon
                    icon={IconComponent}
                    className="text-gray-500 text-4xl mb-4"
                  />
                  <p className="relative text-green-700 font-bold z-10">
                    {service.distance
                      ? service.distance[i18n.language] || t("not_available")
                      : t("not_available")}
                  </p>
                  <h2 className="ml-2 text-xl font-bold">
                    {service.titleName
                      ? service.titleName[i18n.language]
                      : t("no_name")}
                  </h2>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
