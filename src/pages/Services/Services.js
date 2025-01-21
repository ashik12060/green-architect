import React from 'react'
import OurServices from '../../components/OurServices/OurServices'
import Footer from '../../components/Shared/Footer/Footer'
import Header from '../../components/Shared/Headers/Header'
import img from '../../assets/23338.jpg'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation('ServiceMain');

  return (
    <>
     
     <Header />

     {/* cover photo */}
     <div
      className="relative h-80 bg-cover bg-center flex items-center justify-center text-white"
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
      </div>
    </div>


  <OurServices />
  <Footer />
    </>
  )
}

export default Services

