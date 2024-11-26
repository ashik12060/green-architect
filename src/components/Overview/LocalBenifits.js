


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const LocalBenifits = () => {
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

  return (
    <div className={`${isDarkMode ? "text-white" : "bg-gray-100"}`}>
      <div className="container mx-auto px-4 py-16">
        <h1
          className={`text-4xl font-bold text-center mb-10 ${
            isDarkMode ? "text-white  border-b-4 border-green-700" : "text-black "
          }`}
        >
          LOCAL BENIFITS
          <span
            className={`${
              isDarkMode ? "border-b-4 border-white" : "border-b-4 border-black"
            }`}
          ></span>
        </h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2, // Delay between each card's animation
              },
            },
          }}
        >
          {[ // Service list
            { title: "Baitun Nur Mosjid", description: ".2km" },
            { title: "College",  description: ".2km", icon:'faMosque' },
            { title: "School",  description: ".2km" },
            { title: "Market ",  description: ".2km" },
            { title: "BRAC Bank", description: ".2km" },
            { title: "ATM Booth",  description: ".2km" },
            { title: "Bus Stop",  description: ".2km" },
            { title: "Islami Bank",  description: ".2km" },
          ].map((service, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-lg shadow-md p-6 text-center overflow-hidden group ${
                isDarkMode ? "bg-gray-800 text-white" : "text-black"
              }`}
              variants={cardVariants}
              whileHover={hoverEffect.hover}
            >
              {/* Continuous border animation */}
              <div className="absolute inset-0 border-2 py-56 border-t-green-800 rounded-lg animate-border group-hover:animate-border-hover"></div>
              <div className="mb-4 relative z-10  py-20">
              <FontAwesomeIcon icon={service?.icon} color="#ddd" />
              <p className="text-gray-700 relative text-green-700 font-bold z-10">{t(service.description)}</p>
                
                <h2 className="ml-2 text-xl font-bold">{t(service.title)}</h2>
              </div>
              
              {/* <Link
                to={service.link}
                className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg relative z-10 hover:border-2 hover:border-green-800"
              >
                {t("seeMore")}
                <FontAwesomeIcon className="ps-2 animate-pulse" icon={faAnglesRight} />
              </Link> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
