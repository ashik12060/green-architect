// import React from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../../Shared/Headers/Header';
// import Footer from '../../Shared/Footer/Footer';


// const Design = () => {
//   return (
//     <>
//     <Header />
//     <div className="container mx-auto px-4 pb-32 pt-5">
//        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
//           <Link to='/design/master-planing' className="mt-4 text-gray-800">Master Planning</Link>
//         </div>
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
//           <Link to='/design/infrastructure' className="mt-4 text-gray-800">Infrastructure</Link>
//         </div>
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
//           <Link to='/design/architecture' className="mt-4 text-gray-800"> Architecture</Link>
//         </div>
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
//           <Link to='/design/structure' className="mt-4 text-gray-800">Structure</Link>
//         </div>
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
//           <Link to='/design/electrical' className="mt-4 text-gray-800">Electrical</Link>
//         </div>
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
//           <Link to='/design/mechanical' className="mt-4 text-gray-800">Mechanical</Link>
//         </div>
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
//           <Link to='/design/plumbing' className="mt-4 text-gray-800">Plumbing </Link>
//         </div>
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
//           <Link to='/design/lighting' className="mt-4 text-gray-800">Lighting </Link>
//         </div>
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
//           <Link to='/design/leed-consultancy' className="mt-4 text-gray-800">LEED Consultancy </Link>
//         </div>
//       </div>
//     </div>

//     <Footer />
//     </>
//   );
// };

// export default Design;



import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Headers/Header';
import Footer from '../../Shared/Footer/Footer';

const Design = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 pb-32 pt-5">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          <div className="rounded-md shadow-md bg-green-600 px-2 py-6 text-center hover:bg-green-700 transition-colors duration-300">
            <Link to='/design/master-planing' className="text-white font-semibold hover:text-green-200">Master Planning</Link>
          </div>
          <div className="rounded-md shadow-md bg-green-600 px-2 py-6 text-center hover:bg-green-700 transition-colors duration-300">
            <Link to='/design/infrastructure' className="text-white font-semibold hover:text-green-200">Infrastructure</Link>
          </div>
          <div className="rounded-md shadow-md bg-green-600 px-2 py-6 text-center hover:bg-green-700 transition-colors duration-300">
            <Link to='/design/architecture' className="text-white font-semibold hover:text-green-200">Architecture</Link>
          </div>
          <div className="rounded-md shadow-md bg-green-600 px-2 py-6 text-center hover:bg-green-700 transition-colors duration-300">
            <Link to='/design/structure' className="text-white font-semibold hover:text-green-200">Structure</Link>
          </div>
          <div className="rounded-md shadow-md bg-green-600 px-2 py-6 text-center hover:bg-green-700 transition-colors duration-300">
            <Link to='/design/electrical' className="text-white font-semibold hover:text-green-200">Electrical</Link>
          </div>
          <div className="rounded-md shadow-md bg-green-600 px-2 py-6 text-center hover:bg-green-700 transition-colors duration-300">
            <Link to='/design/mechanical' className="text-white font-semibold hover:text-green-200">Mechanical</Link>
          </div>
          <div className="rounded-md shadow-md bg-green-600 px-2 py-6 text-center hover:bg-green-700 transition-colors duration-300">
            <Link to='/design/plumbing' className="text-white font-semibold hover:text-green-200">Plumbing</Link>
          </div>
          <div className="rounded-md shadow-md bg-green-600 px-2 py-6 text-center hover:bg-green-700 transition-colors duration-300">
            <Link to='/design/lighting' className="text-white font-semibold hover:text-green-200">Lighting</Link>
          </div>
          <div className="rounded-md shadow-md bg-green-600 px-2 py-6 text-center hover:bg-green-700 transition-colors duration-300">
            <Link to='/design/leed-consultancy' className="text-white font-semibold hover:text-green-200">LEED Consultancy</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Design;
