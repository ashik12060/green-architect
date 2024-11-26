
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import {
  faMosque,
  faSchool,
  faUniversity,
  faStore,
  faBuildingColumns,
  faCreditCard,
  faBus,
  faBank,
} from "@fortawesome/free-solid-svg-icons";

export const LocalBenifits = () => {
  const { t } = useTranslation("Service");
  const { isDarkMode } = useTheme();

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

  const services = [
    { title: "Baitun Nur Mosjid", description: ".2km", icon: faMosque },
    { title: "College", description: ".2km", icon: faUniversity },
    { title: "School", description: ".2km", icon: faSchool },
    { title: "Market", description: ".2km", icon: faStore },
    { title: "BRAC Bank", description: ".2km", icon: faBuildingColumns },
    { title: "ATM Booth", description: ".2km", icon: faCreditCard },
    { title: "Bus Stop", description: ".2km", icon: faBus },
    { title: "Islami Bank", description: ".2km", icon: faBank },
  ];

  return (
    <div className={`${isDarkMode ? "text-white" : "bg-white"}`}>
      <div className="container mx-auto px-4 py-10 my-10">
        <h1
          className={`text-4xl font-bold text-center mb-10 ${
            isDarkMode ? "text-white border-b-4 border-green-700" : "text-black"
          }`}
        >
          LOCAL BENEFITS
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-lg shadow-md p-6 text-center overflow-hidden group ${
                isDarkMode ? "bg-gray-800 text-white" : "text-black"
              }`}
              variants={cardVariants}
              whileHover={hoverEffect.hover}
            >
              <div className="absolute inset-0 border-2  border-t-green-800 rounded-lg animate-border group-hover:animate-border-hover"></div>
              <div className="mb-4 relative z-10 py-16">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-gray-500 text-4xl mb-4"
                />
                <p className="text-gray-700 relative text-green-700 font-bold z-10">
                  {t(service.description)}
                </p>
                <h2 className="ml-2 text-xl font-bold">{t(service.title)}</h2>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
