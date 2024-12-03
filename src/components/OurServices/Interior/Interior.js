


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faHome,
//   faIndustry,
//   faStore,
//   faBuilding,
//   faCouch,
//   faShapes,
//   faLightbulb,
//   faGem,
// } from '@fortawesome/free-solid-svg-icons';

// const Interior = () => {
//   const sections = [
//     { title: 'Residential', link: '/interior/residential', icon: faHome },
//     { title: 'Industrial', link: '/interior/industrial', icon: faIndustry },
//     { title: 'Retail', link: '/interior/retail', icon: faStore },
//     { title: 'Office', link: '/interior/office', icon: faBuilding },
//     { title: 'Furniture', link: '/interior/furniture', icon: faCouch },
//     { title: 'Sculpture', link: '/interior/sculpture', icon: faShapes },
//     { title: 'Lighting', link: '/interior/lighting-interior', icon: faLightbulb },
//     { title: 'Accessories', link: '/interior/accessories', icon: faGem },
//   ];

//   return (
//     <>
//       <div className="container mx-auto px-4 mt-20 mb-56 pt-5">
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
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
//                 <FontAwesomeIcon  icon={section.icon} size="2x" className="mb-3" />
//                 {section.title}
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Interior;


import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import {
  faHome,
  faIndustry,
  faStore,
  faBuilding,
  faCouch,
  faShapes,
  faLightbulb,
  faGem,
} from '@fortawesome/free-solid-svg-icons';

const Interior = () => {
  const { t } = useTranslation('Service');  // Using the 'Interior' namespace for translations

  const sections = [
    { title: t('residential'), link: '/interior/residential', icon: faHome },
    { title: t('industrial'), link: '/interior/industrial', icon: faIndustry },
    { title: t('retail'), link: '/interior/retail', icon: faStore },
    { title: t('office'), link: '/interior/office', icon: faBuilding },
    { title: t('furniture'), link: '/interior/furniture', icon: faCouch },
    { title: t('sculpture'), link: '/interior/sculpture', icon: faShapes },
    { title: t('lightingg'), link: '/interior/lighting-interior', icon: faLightbulb },
    { title: t('accessories'), link: '/interior/accessories', icon: faGem },
  ];

  return (
    <div className="container mx-auto px-4 mt-20 mb-56 pt-5">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-green-700"
            style={{ color: 'white' }}
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
  );
};

export default Interior;
