// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Header from '../../Shared/Headers/Header';
// import Footer from '../../Shared/Footer/Footer';


// const Feasibility = () => {
//   return (
//     <>
//     <Header />
//     <div className="container mx-auto px-4 pb-32 pt-5">
//        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
//           <Link to='/pre-design/feasibility-study' className="mt-4 text-gray-800">Feasibility</Link>
//         </div>
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
//           <Link to='/pre-design/site-visit' className="mt-4 text-gray-800">Site Visit</Link>
//         </div>
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
//           <Link to='/pre-design/digital-survey' className="mt-4 text-gray-800"> Digital Survey</Link>
//         </div>
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
//           <Link to='/pre-design/drone-survey' className="mt-4 text-gray-800">Drone Survey</Link>
//         </div>
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
//           <Link to='/pre-design/soil-test' className="mt-4 text-gray-800">Soil Test</Link>
//         </div>
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
//           <Link to='/pre-design/integration' className="mt-4 text-gray-800">Integration</Link>
//         </div>
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
//           <Link to='/pre-design/traffic-survey' className="mt-4 text-gray-800">Traffic Survey</Link>
//         </div>
//       </div>
//     </div>

//     <Footer />
//     </>
//   );
// };

// export default Feasibility;



import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Headers/Header';
import Footer from '../../Shared/Footer/Footer';

const Feasibility = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 pb-32 pt-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(to right, #2e7d32, #66bb6a)', // green gradient
              color: 'white',
            }}
          >
            <Link to='/pre-design/feasibility-study' className="text-lg font-semibold hover:text-green-200">
              Feasibility
            </Link>
          </div>

          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
              color: 'white',
            }}
          >
            <Link to='/pre-design/site-visit' className="text-lg font-semibold hover:text-green-200">
              Site Visit
            </Link>
          </div>

          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
              color: 'white',
            }}
          >
            <Link to='/pre-design/digital-survey' className="text-lg font-semibold hover:text-green-200">
              Digital Survey
            </Link>
          </div>

          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
              color: 'white',
            }}
          >
            <Link to='/pre-design/drone-survey' className="text-lg font-semibold hover:text-green-200">
              Drone Survey
            </Link>
          </div>

          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
              color: 'white',
            }}
          >
            <Link to='/pre-design/soil-test' className="text-lg font-semibold hover:text-green-200">
              Soil Test
            </Link>
          </div>

          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
              color: 'white',
            }}
          >
            <Link to='/pre-design/integration' className="text-lg font-semibold hover:text-green-200">
              Integration
            </Link>
          </div>

          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
              color: 'white',
            }}
          >
            <Link to='/pre-design/traffic-survey' className="text-lg font-semibold hover:text-green-200">
              Traffic Survey
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Feasibility;
