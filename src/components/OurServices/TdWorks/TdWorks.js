import React from 'react';
import { Link } from 'react-router-dom';


const TdWorks = () => {
  return (
    <>
    {/* <Header /> */}
    <div className="container mx-auto px-4 pb-32 pt-5">
       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/3d-works/technical' className="mt-4 text-gray-800">Technical</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/3d-works/oil-gas' className="mt-4 text-gray-800"> Oil & Gas</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/3d-works/construction-3d' className="mt-4 text-gray-800">  Construction</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/3d-works/products-3d' className="mt-4 text-gray-800"> Products</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/3d-works/solar-3d' className="mt-4 text-gray-800">Solar</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
          <Link to='/3d-works/game-cinema' className="mt-4 text-gray-800">Game | Cinema</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
          <Link to='/3d-works/arch' className="mt-4 text-gray-800">Arch | BD</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
          <Link to='/3d-works/arch-global' className="mt-4 text-gray-800">Arch | Global</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
          <Link to='/3d-works/vs-works' className="mt-4 text-gray-800">VR Works
          </Link>
        </div>
        
      </div>
    </div>

    {/* <Footer /> */}
    </>
  );
};

export default TdWorks;
