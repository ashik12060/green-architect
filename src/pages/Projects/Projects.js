import React from 'react'
import SmallHeader from '../../components/Shared/Headers/SmallHeader'
import Header from '../../components/Shared/Headers/Header'
import OurProjects from '../../components/ProjectsComp/OurProjects'
import Footer from '../../components/Shared/Footer/Footer'
import { useTheme } from '../../context/ThemeContext'

const Projects = () => {
  
  const { isDarkMode } = useTheme();
  
  return (
    <>
    
    <Header />
   <div>
    <h2 className={`text-center text-4xl font-bold mt-10  ${isDarkMode ? ' text-white' : 'text-black'}`}>Our Projects</h2>
   <OurProjects />
   </div>
  
    <Footer />
    

    </>
  )
}

export default Projects