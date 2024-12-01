// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faSearch,
//   faMapMarkerAlt,
//   faDigitalTachograph,
//   faVideo,
//   faVial,
//   faPuzzlePiece,
//   faCar,
// } from '@fortawesome/free-solid-svg-icons';
// import Header from '../../Shared/Headers/Header';
// import Footer from '../../Shared/Footer/Footer';

// const Feasibility = () => {
//   const sections = [
//     { title: 'Feasibility', link: '/pre-design/feasibility-study', icon: faSearch },
//     { title: 'Site Visit', link: '/pre-design/site-visit', icon: faMapMarkerAlt },
//     { title: 'Digital Survey', link: '/pre-design/digital-survey', icon: faDigitalTachograph },
//     { title: 'Drone Survey', link: '/pre-design/drone-survey', icon: faVideo },
//     { title: 'Soil Test', link: '/pre-design/soil-test', icon: faVial },
//     { title: 'Integration', link: '/pre-design/integration', icon: faPuzzlePiece },
//     { title: 'Traffic Survey', link: '/pre-design/traffic-survey', icon: faCar },
//   ];

//   return (
//     <>
//       <Header />
//       <div className="container mx-auto px-4 pb-32 pt-5 mt-16 mb-32">
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//           {sections.map((section, index) => (
//             <div
//               key={index}
//               className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-green-700"
//               style={{
               
//                 color: 'white',
//               }}
//             >
//               <Link
//                 to={section.link}
//                 className="flex flex-col items-center text-lg font-semibold hover:text-green-200"
//               >
//                 <FontAwesomeIcon icon={section.icon} size="2x" className="mb-3" />
//                 {section.title}
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Feasibility;



import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faMapMarkerAlt,
  faDigitalTachograph,
  faVideo,
  faVial,
  faPuzzlePiece,
  faCar,
} from '@fortawesome/free-solid-svg-icons';
import Header from '../../Shared/Headers/Header';
import Footer from '../../Shared/Footer/Footer';
import { useTranslation } from 'react-i18next';

const Feasibility = () => {
  const { t } = useTranslation('Service');  // Assuming translations are under 'Service' namespace

  const sections = [
    { title: t('feasibility'), link: '/pre-design/feasibility-study', icon: faSearch },
    { title: t('siteVisit'), link: '/pre-design/site-visit', icon: faMapMarkerAlt },
    { title: t('digitalSurvey'), link: '/pre-design/digital-survey', icon: faDigitalTachograph },
    { title: t('droneSurvey'), link: '/pre-design/drone-survey', icon: faVideo },
    { title: t('soilTest'), link: '/pre-design/soil-test', icon: faVial },
    { title: t('integration'), link: '/pre-design/integration', icon: faPuzzlePiece },
    { title: t('trafficSurvey'), link: '/pre-design/traffic-survey', icon: faCar },
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 pb-32 pt-5 mt-16 mb-32">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-green-700"
              style={{
                color: 'white',
              }}
            >
              <Link
                to={section.link}
                className="flex flex-col items-center text-lg font-semibold hover:text-green-200"
              >
                <FontAwesomeIcon icon={section.icon} size="2x" className="mb-3" />
                {section.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Feasibility;
