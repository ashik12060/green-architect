import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import OurProjects from '../../components/ProjectsComp/OurProjects';
import Footer from '../../components/Shared/Footer/Footer';
import Header from '../../components/Shared/Headers/Header';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation('ProjectComplete');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    console.log('Stored user info:', user);

    if (user && user.role === 'admin') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []); // Run only once on mount

  useEffect(() => {
    console.log('isAdmin state after effect:', isAdmin); // Log after state has been updated
  }, [isAdmin]);

  return (
    <>
      <Header />
      <div>
        <h2 className={`text-center text-4xl font-bold mt-10 ${isDarkMode ? 'text-white' : 'text-black'}`}>
          {t('ourProjects')}
        </h2>
        <OurProjects isAdmin={isAdmin} />
      </div>
      <Footer />
    </>
  );
};

export default Projects;
