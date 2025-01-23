

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenRuler,
  faPencilAlt,
  faHammer,
  faCouch,
  faCube,
  faBuilding,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ServiceCard = () => {
  const { t } = useTranslation("Service");
  const { isDarkMode } = useTheme();

  // Animation variants for cards
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

  const serviceList = [
    {
      title: "preDesign",
      link: "/pre-design",
      description: "preDesignDescription",
      icon: faPenRuler,
    },
    {
      title: "design",
      link: "/design",
      description: "designDescription",
      icon: faPencilAlt,
    },
    {
      title: "build",
      link: "/build",
      description: "buildDescription",
      icon: faHammer,
    },
    {
      title: "interior",
      link: "/interior",
      description: "interiorDescription",
      icon: faCouch,
    },
    {
      title: "3dWork",
      link: "/3d-works",
      description: "3dWorkDescription",
      icon: faCube,
    },
    
    {
      title: "realEstate",
      link: "/real-estate",
      description: "realEstateDescription",
      icon: faHouse,
    },
  ];

  const headerVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 2.0,
      },
    },
  };

  return (
  //   <div className={`${isDarkMode ? "text-white" : "bg-gray-100"}`}>
  //     <div className="container lg:mx-auto lg:px-4 px-20 lg:py-16 py-20">
       
  //       <motion.h1
  //     className={`lg:text-4xl sm:text-xl font-bold text-center mb-10 ${
  //       isDarkMode ? "text-white" : "text-black"
  //     }`}
  //     initial="offscreen"
  //     whileInView="onscreen"
  //     viewport={{ once: false, amount: 0.2 }}
  //     variants={headerVariants}
  //   >
  //     {t("ourServices")}
  //   </motion.h1>

  //       <motion.div
  //         className="grid grid-cols-2 lg:p-1 sm:p-10 md:grid-cols-2 lg:grid-cols-3 gap-8"
  //         initial="hidden"
  //         animate="visible"
  //         variants={{
  //           visible: {
  //             transition: {
  //               staggerChildren: 0.2, 
  //             },
  //           },
  //         }}
  //       >
  //         {serviceList.map((service, index) => (
  //           <motion.div key={index} variants={cardVariants} whileHover={hoverEffect.hover}>
  //             {/* Make the whole card clickable */}
  //             <Link
  //               to={service.link}
  //               className={`relative  bg-white rounded-lg shadow-md p-10 text-center overflow-hidden group block min-h-[350px] ${
  //                 isDarkMode ? "bg-gray-800 text-white" : "text-black"
  //               }`}
  //             >
  //               <div className="absolute inset-0 border-2 border-green-500 rounded-lg animate-border group-hover:animate-border-hover"></div>
  //               <div className="mb-4 relative z-10">
  //                 <FontAwesomeIcon
  //                   icon={service.icon}
                    
  //                   className="text-gray-500 mb-4 lg:text-4xl text-xl"
  //                 />
  //                 <h2 className="ml-2 text-black  lg:text-xl text-lg font-bold">{t(service.title)}</h2>
  //               </div>
  //               <p className="text-gray-700 relative lg:text-lg text-sm z-10">{t(service.description)}</p>
  //               <div className="mt-4 inline-block px-4 py-2 text-green-700 font-bold rounded-lg relative z-10 hover:border-2 hover:border-green-800 lg:text-xl text-sm">
  //                 {t("seeMore")}
  //                 <FontAwesomeIcon
  //                   className="ps-2 animate-pulse text-green-700"
  //                   icon={faAnglesRight}
  //                 />
  //               </div>
  //             </Link>
  //           </motion.div>
  //         ))}
  //       </motion.div>
  //     </div>
  //   </div>
<div className={`${isDarkMode ? "text-white" : "bg-gray-100"}`}>
  <div className="container mx-auto px-4 lg:px-20 py-10 lg:py-16">
    <motion.h1
      className={`text-center font-bold mb-10 ${
        isDarkMode ? "text-white" : "text-black"
      } lg:text-4xl sm:text-2xl text-xl`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
      variants={headerVariants}
    >
      {t("ourServices")}
    </motion.h1>

    <motion.div
      className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
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
      {serviceList.map((service, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={hoverEffect.hover}
        >
          {/* Make the whole card clickable */}
          <Link
            to={service.link}
            className={`relative bg-white rounded-lg shadow-md p-6 sm:p-8 text-center overflow-hidden group block  h-[300px] max-h-[400px] ${ // Adjusted min height
              isDarkMode ? "bg-gray-800 text-white" : "text-black"
            } flex flex-col`}
          >
            <div className="absolute inset-0 border-2 border-green-500 rounded-lg animate-border group-hover:animate-border-hover"></div>
            <div className="mb-4 relative z-10">
              <FontAwesomeIcon
                icon={service.icon}
                className="text-gray-500 mb-4 lg:text-4xl text-2xl"
              />
              <h2 className="ml-2 lg:text-xl text-lg font-bold">
                {t(service.title)}
              </h2>
            </div>
            <p className="relative z-10 lg:text-lg text-sm text-gray-700 flex-grow">
              {t(service.description)}
            </p>
            <div className="mt-4 inline-block px-4 py-2 text-green-700 font-bold rounded-lg relative z-10 hover:border-2 hover:border-green-800 lg:text-lg text-sm">
              {t("seeMore")}
              <FontAwesomeIcon
                className="ps-2 animate-pulse text-green-700"
                icon={faAnglesRight}
              />
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  </div>
</div>

  
  );
};
