

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../../Shared/Headers/Header';
// import Footer from '../../Shared/Footer/Footer';

// const TdWorks = () => {
//   return (
//     <>
//       <Header />
//       <div className="container mx-auto px-4  mt-20 mb-56 pt-5">
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
//           <div
//             className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-green-700"
//             style={{
//                // green gradient
//               color: 'white',
//             }}
//           >
//             <Link to='/3d-works/technical' className="text-lg font-semibold hover:text-green-200">
//               Technical
//             </Link>
//           </div>

//           <div
//             className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl  bg-green-700"
//             style={{
             
//               color: 'white',
//             }}
//           >
//             <Link to='/3d-works/oil-gas' className="text-lg font-semibold hover:text-green-200">
//               Oil & Gas
//             </Link>
//           </div>

//           <div
//             className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-green-700"
//             style={{
              
//               color: 'white',
//             }}
//           >
//             <Link to='/3d-works/construction-3d' className="text-lg font-semibold hover:text-green-200">
//               Construction
//             </Link>
//           </div>

//           <div
//             className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-green-700"
//             style={{
            
//               color: 'white',
//             }}
//           >
//             <Link to='/3d-works/products-3d' className="text-lg font-semibold hover:text-green-200">
//               Products
//             </Link>
//           </div>

//           <div
//             className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-green-700"
//             style={{
       
//               color: 'white',
//             }}
//           >
//             <Link to='/3d-works/solar-3d' className="text-lg font-semibold hover:text-green-200">
//               Solar
//             </Link>
//           </div>

//           <div
//             className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-green-700"
//             style={{
//               color: 'white',
//             }}
//           >
//             <Link to='/3d-works/game-cinema' className="text-lg font-semibold hover:text-green-200">
//               Game | Cinema
//             </Link>
//           </div>

//           <div
//             className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-green-700"
//             style={{
//               color: 'white',
//             }}
//           >
//             <Link to='/3d-works/arch' className="text-lg font-semibold hover:text-green-200">
//               Arch | BD
//             </Link>
//           </div>

//           <div
//             className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-green-700"
//             style={{
//               color: 'white',
//             }}
//           >
//             <Link to='/3d-works/arch-global' className="text-lg font-semibold hover:text-green-200">
//               Arch | Global
//             </Link>
//           </div>

//           <div
//             className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-green-700"
//             style={{
//               color: 'white',
//             }}
//           >
//             <Link to='/3d-works/vs-works' className="text-lg font-semibold hover:text-green-200">
//               VR Works
//             </Link>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default TdWorks;



import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDraftingCompass,
  faGasPump,
  faBuilding,
  faCube,
  faSun,
  faFilm,
  faLandmark,
  faGlobe,
  faVrCardboard,
} from '@fortawesome/free-solid-svg-icons';
import Header from '../../Shared/Headers/Header';
import Footer from '../../Shared/Footer/Footer';

const TdWorks = () => {
  const sections = [
    { title: 'Technical', link: '/3d-works/technical', icon: faDraftingCompass },
    { title: 'Oil & Gas', link: '/3d-works/oil-gas', icon: faGasPump },
    { title: 'Construction', link: '/3d-works/construction-3d', icon: faBuilding },
    { title: 'Products', link: '/3d-works/products-3d', icon: faCube },
    { title: 'Solar', link: '/3d-works/solar-3d', icon: faSun },
    { title: 'Game | Cinema', link: '/3d-works/game-cinema', icon: faFilm },
    { title: 'Arch | BD', link: '/3d-works/arch', icon: faLandmark },
    { title: 'Arch | Global', link: '/3d-works/arch-global', icon: faGlobe },
    { title: 'VR Works', link: '/3d-works/vs-works', icon: faVrCardboard },
  ];

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default TdWorks;
