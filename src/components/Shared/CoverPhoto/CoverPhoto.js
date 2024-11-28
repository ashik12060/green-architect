import React from 'react';
import img from '../../../assets/cover_team.png'; // Ensure this path is correct
import { useTranslation } from 'react-i18next';

const CoverPhoto = () => {
  const { t } = useTranslation('Home'); 
  // ourTeam
  return (
    <div
      className="relative h-56 bg-cover bg-center flex items-center justify-center text-white"
      style={{ 
        backgroundImage: `url(${img})`, // Correctly set the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('ourTeam')}</h1>
        <p className="text-lg md:text-xl">{t('meetTeam')}
          .</p>
      </div>
    </div>
  );
};

export default CoverPhoto;
