import React from 'react';
import img from '../../assets/architec1.jpg'
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';

function AboutUsComp() {
  const { t } = useTranslation('AboutProcess'); 
  
  const { isDarkMode } = useTheme();
  return (
   <>
    <div className="flex flex-col items-center justify-center min-h-screen fa-100">
      <div className={`container mx-auto p-4 rounded-lg shadow-md ${isDarkMode ? ' text-white shadow-md shadow-gray-800' : 'bg-white'}`}>
        <h1 className="text-3xl text-center my-10 pb-10 font-bold mb-4"><span className={`${isDarkMode ? 'border-b-4 border-white text-white  ' : 'text-green-700 border-b-4 border-green-700'}`}>{t('title')}</span></h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src={img} alt="Building Image" className="w-full rounded-lg shadow-sm" />
          </div>
          <div className="md:w-1/2 p-4">
            <p className=" mb-4">
            {t('paragraph1')}
              
            </p>
            <p className=" mb-4">
            {t('paragraph2')}
             
            </p>
            <p className="">
            {t('mission')}
            
            </p>
          </div>
        </div>
      </div>
    </div>
   
   </>
  );
}

export default AboutUsComp;
