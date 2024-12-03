// import React from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../../Shared/Headers/Header';
// import Footer from '../../Shared/Footer/Footer';

// const Build = () => {
//   return (
//     <>
//       <Header />
//       <div className="container mx-auto px-4 mt-20 mb-56 pt-5 ">
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
//           <div className="rounded-md shadow-md bg-green-600 px-2 py-6 text-center hover:bg-green-700 transition-colors duration-300">
//             <Link to='/build/pmc' className="text-white font-semibold hover:text-green-200">PMC</Link>
//           </div>
//           <div className="rounded-md shadow-md bg-green-600 px-2 py-6 text-center hover:bg-green-700 transition-colors duration-300">
//             <Link to='/build/site-supervision' className="text-white font-semibold hover:text-green-200">Site Supervision</Link>
//           </div>
//           <div className="rounded-md shadow-md bg-green-600 px-2 py-6 text-center hover:bg-green-700 transition-colors duration-300">
//             <Link to='/build/cost-estimate' className="text-white font-semibold hover:text-green-200">Cost Estimation</Link>
//           </div>
//           <div className="rounded-md shadow-md bg-green-600 px-2 py-6 text-center hover:bg-green-700 transition-colors duration-300">
//             <Link to='/build/civilConstruction' className="text-white font-semibold hover:text-green-200">Civil Construction</Link>
//           </div>
//           <div className="rounded-md shadow-md bg-green-600 px-2 py-6 text-center hover:bg-green-700 transition-colors duration-300">
//             <Link to='/build/retrofitting' className="text-white font-semibold hover:text-green-200">Retrofitting</Link>
//           </div>
//           <div className="rounded-md shadow-md bg-green-600 px-2 py-6 text-center hover:bg-green-700 transition-colors duration-300">
//             <Link to='/build/face-lifting' className="text-white font-semibold hover:text-green-200">Facelifting</Link>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Build;



import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Headers/Header';
import Footer from '../../Shared/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import {
  faHardHat,    // Icon for PMC
  faBuilding,   // Icon for Site Supervision
  faCalculator, // Icon for Cost Estimation
  faHammer,     // Icon for Civil Construction
  faWrench,     // Icon for Retrofitting
  faSmile,      // Icon for Facelifting
} from '@fortawesome/free-solid-svg-icons';

const Build = () => {
  const { t } = useTranslation('Service');  // Using the 'build' namespace for translations

  const buildItems = [
    { path: '/build/pmc', label: t('pmc'), icon: faHardHat },
    { path: '/build/site-supervision', label: t('siteSupervision'), icon: faBuilding },
    { path: '/build/cost-estimate', label: t('costEstimation'), icon: faCalculator },
    { path: '/build/civilConstruction', label: t('civilConstruction'), icon: faHammer },
    { path: '/build/retrofitting', label: t('retrofitting'), icon: faWrench },
    { path: '/build/face-lifting', label: t('facelifting'), icon: faSmile },
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 mt-20 mb-56 pt-5">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {buildItems.map((item, index) => (
            <div
              key={index}
              className="rounded-md shadow-md bg-green-600 px-2 py-6 text-center hover:bg-green-700 transition-colors duration-300"
            >
              <Link
                to={item.path}
                className="text-white font-semibold hover:text-green-200 flex flex-col items-center"
              >
                <FontAwesomeIcon icon={item.icon} size="2x" className="mb-2" />
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Build;
