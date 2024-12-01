import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";


const AdditionalServices = () => {
  const [activeService, setActiveService] = useState(1); 
  const handleCardClick = (id) => {
    setActiveService(id);
  };

  const { isDarkMode } = useTheme();

  const buttonStyles = (active) => ({
    padding: '1rem 2rem',
    borderRadius: '9999px',
    color: isDarkMode ? 'white' : 'white',
    fontWeight: '600',
    backgroundColor: active ? '#15803D' : '#15803D',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    cursor: 'pointer',
    border: isDarkMode ? '1px solid #15803D' : '1px solid #15803D',
  });

  const buttonHoverStyles = {
    backgroundColor: '#15803D',
    transform: 'scale(1.05)',
  };

  const fadeInStyles = {
    animation: 'fadeIn 0.5s forwards',
    textAlign: 'left',
    marginTop: '1rem',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: '1rem',
    color: isDarkMode ? 'white' : 'black',
    // color: isDarkMode ? '#E5E7EB' : '#555',


  };
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

  const buttonVariants = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const { t } = useTranslation("Service");

  return (
    <div className={`text-center px-4 py-12 ${isDarkMode ? '' : 'bg-white '}`}>
      {/* <h2 className={`${isDarkMode ? 'text-white' : 'text-black'} text-2xl font-bold mb-6`}>
      {t("additonalServiceOffer")}
      </h2> */}
      <motion.h2
  className={`${isDarkMode ? 'text-white' : 'text-black'} text-2xl font-bold mb-6`}
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: false, amount: 0.2 }}
  variants={headerVariants}
>
  {t("additonalServiceOffer")}
</motion.h2>

      {/* <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
        <button
          onClick={() => handleCardClick(1)}
          style={buttonStyles(activeService === 1)}
         
          onMouseEnter={(e) => e.target.style.backgroundColor = '#15803D'} // Hover effect
          onMouseLeave={(e) => e.target.style.backgroundColor = activeService === 1 ? '#15803D' : '#15803D'} // Remove hover effect
        >
          
          {t("rajukApproval")}
        </button>

        <button
          onClick={() => handleCardClick(2)}
          style={buttonStyles(activeService === 2)}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#15803D'} // Hover effect
          onMouseLeave={(e) => e.target.style.backgroundColor = activeService === 2 ? '#15803D' : '#15803D'} // Remove hover effect
        >
      
          {t("soilTest")}
        </button>

        <button
          onClick={() => handleCardClick(3)}
          style={buttonStyles(activeService === 3)}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#15803D'} // Hover effect
          onMouseLeave={(e) => e.target.style.backgroundColor = activeService === 3 ? '#15803D' : '#15803D'} // Remove hover effect
        >
          {t("costEstimate")}
        </button>

        <button
          onClick={() => handleCardClick(4)}
          style={buttonStyles(activeService === 4)}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#15803D'} // Hover effect
          onMouseLeave={(e) => e.target.style.backgroundColor = activeService === 4 ? '#15803D' : '#15803D'} // Remove hover effect
        >
          {t("digitalLand")}
        </button>
      </div>

      <div>
        {activeService === 1 && (
          <p style={{...fadeInStyles, animationDelay: '0.3s'}} className={`${isDarkMode ? "text-white" : "text-black"}`}>
             {t("rajukApprovalContent")}</p>
        )}
        {activeService === 2 && (
          <p style={{...fadeInStyles, animationDelay: '0.3s'}} className={`${isDarkMode ? "text-white" : "text-black"}`}>
            {t("soilContet")}  </p>
        )}
        {activeService === 3 && (
          <p style={{...fadeInStyles, animationDelay: '0.3s'}} className={`${isDarkMode ? "text-white" : "text-black"}`}>
             {t("costEstimateContent")}</p>
        )}
        {activeService === 4 && (
          <p style={{...fadeInStyles, animationDelay: '0.3s'}} className={`${isDarkMode ? "text-white" : "text-black"}`}>
             {t("digitalLandSurvey")}</p>
        )}
      </div> */}

<div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
  <motion.button
    onClick={() => handleCardClick(1)}
    style={buttonStyles(activeService === 1)}
    variants={buttonVariants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: false, amount: 0.2 }}
    onMouseEnter={(e) => e.target.style.backgroundColor = '#15803D'}
    onMouseLeave={(e) => e.target.style.backgroundColor = activeService === 1 ? '#15803D' : '#15803D'}
  >
    {t("rajukApproval")}
  </motion.button>

  <motion.button
    onClick={() => handleCardClick(2)}
    style={buttonStyles(activeService === 2)}
    variants={buttonVariants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: false, amount: 0.2 }}
    onMouseEnter={(e) => e.target.style.backgroundColor = '#15803D'}
    onMouseLeave={(e) => e.target.style.backgroundColor = activeService === 2 ? '#15803D' : '#15803D'}
  >
    {t("soilTest")}
  </motion.button>

  <motion.button
    onClick={() => handleCardClick(3)}
    style={buttonStyles(activeService === 3)}
    variants={buttonVariants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: false, amount: 0.2 }}
    onMouseEnter={(e) => e.target.style.backgroundColor = '#15803D'}
    onMouseLeave={(e) => e.target.style.backgroundColor = activeService === 3 ? '#15803D' : '#15803D'}
  >
    {t("costEstimate")}
  </motion.button>

  <motion.button
    onClick={() => handleCardClick(4)}
    style={buttonStyles(activeService === 4)}
    variants={buttonVariants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: false, amount: 0.2 }}
    onMouseEnter={(e) => e.target.style.backgroundColor = '#15803D'}
    onMouseLeave={(e) => e.target.style.backgroundColor = activeService === 4 ? '#15803D' : '#15803D'}
  >
    {t("digitalLand")}
  </motion.button>
</div>

<div>
  {activeService === 1 && (
    <motion.p
      style={{...fadeInStyles, animationDelay: '0.3s'}}
      className={`${isDarkMode ? "text-white" : "text-black"}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
      variants={buttonVariants}
    >
      {t("rajukApprovalContent")}
    </motion.p>
  )}
  {activeService === 2 && (
    <motion.p
      style={{...fadeInStyles, animationDelay: '0.3s'}}
      className={`${isDarkMode ? "text-white" : "text-black"}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
      variants={buttonVariants}
    >
      {t("soilContet")}
    </motion.p>
  )}
  {activeService === 3 && (
    <motion.p
      style={{...fadeInStyles, animationDelay: '0.3s'}}
      className={`${isDarkMode ? "text-white" : "text-black"}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
      variants={buttonVariants}
    >
      {t("costEstimateContent")}
    </motion.p>
  )}
  {activeService === 4 && (
    <motion.p
      style={{...fadeInStyles, animationDelay: '0.3s'}}
      className={`${isDarkMode ? "text-white" : "text-black"}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
      variants={buttonVariants}
    >
      {t("digitalLandSurvey")}
    </motion.p>
  )}
</div>



    </div>
  );
};

export default AdditionalServices;
