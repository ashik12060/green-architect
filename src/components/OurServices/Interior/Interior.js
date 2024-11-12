// import React from 'react';
// import { Link } from 'react-router-dom';


// const Interior = () => {
//   return (
//     <>
//     {/* <Header /> */}
//     <div className="container mx-auto px-4 pb-32 pt-5">
//        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
//           <Link to='/interior/residential' className="mt-4 text-gray-800">Residential</Link>
//         </div>
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
//           <Link to='/interior/industrial' className="mt-4 text-gray-800">Industrial</Link>
//         </div>
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
//           <Link to='/interior/retail' className="mt-4 text-gray-800"> Retail </Link>
//         </div>
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
//           <Link to='/interior/office' className="mt-4 text-gray-800">Office</Link>
//         </div>
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
//           <Link to='/interior/furniture' className="mt-4 text-gray-800">Furniture</Link>
//         </div>
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
//           <Link to='/interior/sculpture' className="mt-4 text-gray-800">Sculpture</Link>
//         </div>
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
//           <Link to='/interior/lighting-interior' className="mt-4 text-gray-800">Lighting</Link>
//         </div>
//         <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
//           <Link to='/interior/accessories' className="mt-4 text-gray-800">Accessories</Link>
//         </div>
        
//       </div>
//     </div>

//     {/* <Footer /> */}
//     </>
//   );
// };

// export default Interior;


import React from 'react';
import { Link } from 'react-router-dom';

const Interior = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="container mx-auto px-4 pb-32 pt-5">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
              color: 'white',
            }}
          >
            <Link to='/interior/residential' className="text-lg font-semibold hover:text-green-200">
              Residential
            </Link>
          </div>

          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
              color: 'white',
            }}
          >
            <Link to='/interior/industrial' className="text-lg font-semibold hover:text-green-200">
              Industrial
            </Link>
          </div>

          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
              color: 'white',
            }}
          >
            <Link to='/interior/retail' className="text-lg font-semibold hover:text-green-200">
              Retail
            </Link>
          </div>

          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
              color: 'white',
            }}
          >
            <Link to='/interior/office' className="text-lg font-semibold hover:text-green-200">
              Office
            </Link>
          </div>

          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
              color: 'white',
            }}
          >
            <Link to='/interior/furniture' className="text-lg font-semibold hover:text-green-200">
              Furniture
            </Link>
          </div>

          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
              color: 'white',
            }}
          >
            <Link to='/interior/sculpture' className="text-lg font-semibold hover:text-green-200">
              Sculpture
            </Link>
          </div>

          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
              color: 'white',
            }}
          >
            <Link to='/interior/lighting-interior' className="text-lg font-semibold hover:text-green-200">
              Lighting
            </Link>
          </div>

          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
              color: 'white',
            }}
          >
            <Link to='/interior/accessories' className="text-lg font-semibold hover:text-green-200">
              Accessories
            </Link>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Interior;
