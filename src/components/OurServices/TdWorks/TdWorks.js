

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Headers/Header';
import Footer from '../../Shared/Footer/Footer';

const TdWorks = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4  mt-20 mb-56 pt-5">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-green-700"
            style={{
               // green gradient
              color: 'white',
            }}
          >
            <Link to='/3d-works/technical' className="text-lg font-semibold hover:text-green-200">
              Technical
            </Link>
          </div>

          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl  bg-green-700"
            style={{
             
              color: 'white',
            }}
          >
            <Link to='/3d-works/oil-gas' className="text-lg font-semibold hover:text-green-200">
              Oil & Gas
            </Link>
          </div>

          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-green-700"
            style={{
              
              color: 'white',
            }}
          >
            <Link to='/3d-works/construction-3d' className="text-lg font-semibold hover:text-green-200">
              Construction
            </Link>
          </div>

          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-green-700"
            style={{
            
              color: 'white',
            }}
          >
            <Link to='/3d-works/products-3d' className="text-lg font-semibold hover:text-green-200">
              Products
            </Link>
          </div>

          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-green-700"
            style={{
       
              color: 'white',
            }}
          >
            <Link to='/3d-works/solar-3d' className="text-lg font-semibold hover:text-green-200">
              Solar
            </Link>
          </div>

          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-green-700"
            style={{
              color: 'white',
            }}
          >
            <Link to='/3d-works/game-cinema' className="text-lg font-semibold hover:text-green-200">
              Game | Cinema
            </Link>
          </div>

          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-green-700"
            style={{
              color: 'white',
            }}
          >
            <Link to='/3d-works/arch' className="text-lg font-semibold hover:text-green-200">
              Arch | BD
            </Link>
          </div>

          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-green-700"
            style={{
              color: 'white',
            }}
          >
            <Link to='/3d-works/arch-global' className="text-lg font-semibold hover:text-green-200">
              Arch | Global
            </Link>
          </div>

          <div
            className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-green-700"
            style={{
              color: 'white',
            }}
          >
            <Link to='/3d-works/vs-works' className="text-lg font-semibold hover:text-green-200">
              VR Works
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TdWorks;
