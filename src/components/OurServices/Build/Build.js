import React from 'react';
import { Link } from 'react-router-dom';


const Build = () => {
  return (
    <>
    {/* <Header /> */}
    <div className="container mx-auto px-4 pb-32 pt-5">
       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/build/pmc' className="mt-4 text-gray-800">PMC</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/build/site-supervision' className="mt-4 text-gray-800">Site Supervision</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/build/cost-estimate' className="mt-4 text-gray-800"> Cost Estimation</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/build/civilConstruction' className="mt-4 text-gray-800">Civil Construction</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/build/retrofitting' className="mt-4 text-gray-800">Retrofitting</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
          <Link to='/build/face-lifting' className="mt-4 text-gray-800">Facelifting</Link>
        </div>
        
      </div>
    </div>

    {/* <Footer /> */}
    </>
  );
};

export default Build;
