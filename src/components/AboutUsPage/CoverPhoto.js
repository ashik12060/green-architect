import React from 'react'
import img from '../../assets/carousel (2).jpg'
import { useTranslation } from 'react-i18next';

const CoverPhoto = () => {
  const { t } = useTranslation('AboutMain'); 
  return (
    <div>
        <div
      className="relative h-56 bg-cover bg-center flex items-center justify-center text-white"
      style={{ 
        backgroundImage: `url(${img})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('title')}</h1>
        <p className="text-lg md:text-xl">{t('subtitle')}</p>
      </div>
    </div>
    </div>
  )
}

export default CoverPhoto

