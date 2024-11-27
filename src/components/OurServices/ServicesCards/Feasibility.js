// import React from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../../Shared/Headers/Header';
// import Footer from '../../Shared/Footer/Footer';

// const Feasibility = () => {
//   return (
//     <>
//       <Header />
//       <div className="container mx-auto px-4 pb-32 pt-5">
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//           <div
//             className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//             style={{
//               background: 'linear-gradient(to right, #2e7d32, #66bb6a)', // green gradient
//               color: 'white',
//             }}
//           >
//             <Link to='/pre-design/feasibility-study' className="text-lg font-semibold hover:text-green-200">
//               Feasibility
//             </Link>
//           </div>

//           <div
//             className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//             style={{
//               background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
//               color: 'white',
//             }}
//           >
//             <Link to='/pre-design/site-visit' className="text-lg font-semibold hover:text-green-200">
//               Site Visit
//             </Link>
//           </div>

//           <div
//             className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//             style={{
//               background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
//               color: 'white',
//             }}
//           >
//             <Link to='/pre-design/digital-survey' className="text-lg font-semibold hover:text-green-200">
//               Digital Survey
//             </Link>
//           </div>

//           <div
//             className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//             style={{
//               background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
//               color: 'white',
//             }}
//           >
//             <Link to='/pre-design/drone-survey' className="text-lg font-semibold hover:text-green-200">
//               Drone Survey
//             </Link>
//           </div>

//           <div
//             className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//             style={{
//               background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
//               color: 'white',
//             }}
//           >
//             <Link to='/pre-design/soil-test' className="text-lg font-semibold hover:text-green-200">
//               Soil Test
//             </Link>
//           </div>

//           <div
//             className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//             style={{
//               background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
//               color: 'white',
//             }}
//           >
//             <Link to='/pre-design/integration' className="text-lg font-semibold hover:text-green-200">
//               Integration
//             </Link>
//           </div>

//           <div
//             className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//             style={{
//               background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
//               color: 'white',
//             }}
//           >
//             <Link to='/pre-design/traffic-survey' className="text-lg font-semibold hover:text-green-200">
//               Traffic Survey
//             </Link>
//           </div>
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

const Feasibility = () => {
  const sections = [
    { title: 'Feasibility', link: '/pre-design/feasibility-study', icon: faSearch },
    { title: 'Site Visit', link: '/pre-design/site-visit', icon: faMapMarkerAlt },
    { title: 'Digital Survey', link: '/pre-design/digital-survey', icon: faDigitalTachograph },
    { title: 'Drone Survey', link: '/pre-design/drone-survey', icon: faVideo },
    { title: 'Soil Test', link: '/pre-design/soil-test', icon: faVial },
    { title: 'Integration', link: '/pre-design/integration', icon: faPuzzlePiece },
    { title: 'Traffic Survey', link: '/pre-design/traffic-survey', icon: faCar },
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
