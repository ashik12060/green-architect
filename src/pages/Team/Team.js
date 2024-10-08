import React from 'react'
import Footer from '../../components/Shared/Footer/Footer'
import Header from '../../components/Shared/Headers/Header'
import CoverPhoto from '../../components/Shared/CoverPhoto/CoverPhoto'
import ProjectCount from '../../components/ProjectCount'
import SmallHeader from '../../components/Shared/Headers/SmallHeader'
import Members from '../Members'
import { useTheme } from '../../context/ThemeContext'


const Team = () => {
  const { isDarkMode } = useTheme();
  return (
    <>
    
    <Header />
    <CoverPhoto />
    <Members />
    <div>
      <h3 className={`text-center text-3xl font-bold py-4 ${isDarkMode ? ' text-white' : 'text-black'}`}>A Numerical Snapshot of Our Story</h3>
      <ProjectCount />
    </div>
    
    <Footer />
    </>
  )
}

export default Team