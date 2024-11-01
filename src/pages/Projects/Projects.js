import React from 'react'
import SmallHeader from '../../components/Shared/Headers/SmallHeader'
import Header from '../../components/Shared/Headers/Header'
import OurProjects from '../../components/ProjectsComp/OurProjects'
import Footer from '../../components/Shared/Footer/Footer'
import { useTheme } from '../../context/ThemeContext'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  
  const { isDarkMode } = useTheme();
  
  const { t } = useTranslation('ProjectComplete'); 
  
  return (
    <>
    <Header />
   <div>
    <h2 className={`text-center text-4xl font-bold mt-10  ${isDarkMode ? ' text-white' : 'text-black'}`}>{t('ourProjects')}</h2>
   <OurProjects />
   </div>
  
    <Footer />
    

    </>
  )
}

export default Projects