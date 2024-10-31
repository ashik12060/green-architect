import React from "react";
import img from '../../assets/architect1.jpg'
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

const WhyChoose = () => {
   
  const { isDarkMode } = useTheme();
  const { t } = useTranslation('AboutChoose'); 
  return (
    <div>
      <div className={`flex flex-col items-center justify-center min-h-screen ${isDarkMode ? ' text-white  bg-black' : 'bg-white'}`}>
        <div className={`container mx-auto p-4 rounded-lg shadow-md ${isDarkMode ? ' text-white  bg-black  shadow-md shadow-gray-800' : ''}`}>
          <h1 className="text-3xl text-center my-10 pb-10 font-bold text-green-700  mb-4">
          <span className={`${isDarkMode ? 'border-b-4 border-white text-white  ' : 'text-green-700 border-b-4 border-green-700'}`}>{t('title')}</span>
          </h1>
          <div className="flex flex-col md:flex-row">
            
            <div className="md:w-1/2 p-4">
              <p className=" mb-4">{t('paragraph1')}
              </p>
              <p className=" mb-4">{t('paragraph2')}
              </p>
              <p className="">{t('mission')}
              </p>
            </div>

            <div className="md:w-1/2">
              <img
                src={img}
                alt="Building Image"
                className="w-full rounded-lg shadow-sm"
              />
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;



