import React from 'react';
import img from '../../assets/logo/333.png';
import img1 from '../../assets/logo/999.png';
import img2 from '../../assets/logo/333.png';
import img3 from '../../assets/logo/surokkha.png';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const OurClients = () => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation('Client'); 
  return (
    <div className={`container mx-auto px-4 py-16 ${isDarkMode ? 'text-white border-t-2 border-gray-100' : ''}`}>
      <h2 className="text-3xl font-bold text-center mb-8">{t('heading')}</h2>
      <p className="text-center  mb-12">{t('description')}
       
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="bg-green-300 rounded-md shadow-md px-2 py-4 text-center">
          <img src={img} alt="BBC" className="w-24 h-14 mx-auto" />
          <p className="mt-4 text-gray-800">{t('clients.bbc')}</p>
        </div>
        <div className="bg-green-300 rounded-md shadow-md px-2 py-4 text-center">
          <img src={img1} alt="The New York Times" className="w-24 h-14 mx-auto" />
          <p className="mt-4 text-gray-800">{t('clients.newYorkTimes')}</p>
        </div>
        <div className="bg-green-300 rounded-md shadow-md px-2 py-4 text-center">
          <img src={img2} alt="Aston Martin" className="w-24 h-14 mx-auto" />
          <p className="mt-4 text-gray-800">{t('clients.astonMartin')} </p>
        </div>
        <div className="bg-green-300 rounded-md shadow-md px-2 py-4 text-center">
          <img src={img3} alt="Tesco" className="w-24 h-14 mx-auto" />
          <p className="mt-4 text-gray-800">{t('clients.tesco')}</p>
        </div>
        <div className="bg-green-300 rounded-md shadow-md px-2 py-4 text-center">
          <img src={img} alt="Mercedes-Benz" className="w-24 h-14 mx-auto" />
          <p className="mt-4 text-gray-800">{t('clients.mercedesBenz')}</p>
        </div>
        <div className="bg-green-300 rounded-md shadow-md px-2 py-4 text-center">
          <img src={img1} alt="Google" className="w-24 h-14 mx-auto" />
          <p className="mt-4 text-gray-800">{t('clients.google')}</p>
        </div>
        <div className="bg-green-300 rounded-md shadow-md px-2 py-4 text-center">
          <img src={img2} alt="Instagram" className="w-24 h-14 mx-auto" />
          <p className="mt-4 text-gray-800">{t('clients.instagram')}</p>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
