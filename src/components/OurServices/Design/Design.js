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
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/design/master-planing' className="mt-4 text-gray-800">Master Planning</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/design/infrastructure' className="mt-4 text-gray-800">Infrastructure</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/design/architecture' className="mt-4 text-gray-800"> Architecture</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/design/structure' className="mt-4 text-gray-800">Structure</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/design/electrical' className="mt-4 text-gray-800">Electrical</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
          <Link to='/design/mechanical' className="mt-4 text-gray-800">Mechanical</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
          <Link to='/design/plumbing' className="mt-4 text-gray-800">Plumbing </Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
          <Link to='/design/lighting' className="mt-4 text-gray-800">Lighting </Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
          <Link to='/design/leed-consultancy' className="mt-4 text-gray-800">LEED Consultancy </Link>
        </div>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default Design;
