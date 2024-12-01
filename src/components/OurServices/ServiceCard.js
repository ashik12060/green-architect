

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
      title: "modelMaking",
      link: "/model-making",
      description: "modelMakingDescription",
      icon: faBuilding,
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
    <div className={`${isDarkMode ? "text-white" : "bg-gray-100"}`}>
      <div className="container mx-auto px-4 py-16">
       
        <motion.h1
      className={`text-4xl font-bold text-center mb-10 ${
        isDarkMode ? "text-white" : "text-black"
      }`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
      variants={headerVariants}
    >
      {t("ourServices")}
    </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
            <motion.div key={index} variants={cardVariants} whileHover={hoverEffect.hover}>
              {/* Make the whole card clickable */}
              <Link
                to={service.link}
                className={`relative bg-white rounded-lg shadow-md p-6 text-center overflow-hidden group block min-h-[350px] ${
                  isDarkMode ? "bg-gray-800 text-white" : "text-black"
                }`}
              >
                <div className="absolute inset-0 border-2 border-green-500 rounded-lg animate-border group-hover:animate-border-hover"></div>
                <div className="mb-4 relative z-10">
                  <FontAwesomeIcon
                    icon={service.icon}
                    size="3x"
                    className="text-gray-500 mb-4"
                  />
                  <h2 className="ml-2 text-black text-xl font-bold">{t(service.title)}</h2>
                </div>
                <p className="text-gray-700 relative z-10">{t(service.description)}</p>
                <div className="mt-4 inline-block px-4 py-2 text-green-700 font-bold rounded-lg relative z-10 hover:border-2 hover:border-green-800">
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
