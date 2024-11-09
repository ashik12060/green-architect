import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../Shared/Headers/Header';
import Footer from '../../Shared/Footer/Footer';


const Feasibility = () => {
  return (
    <>
    <Header />
    <div className="container mx-auto px-4 pb-32 pt-5">
       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/pre-design/feasibility-study' className="mt-4 text-gray-800">Feasibility</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/pre-design/site-visit' className="mt-4 text-gray-800">Site Visit</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/pre-design/digital-survey' className="mt-4 text-gray-800"> Digital Survey</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/pre-design/drone-survey' className="mt-4 text-gray-800">Drone Survey</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/pre-design/soil-test' className="mt-4 text-gray-800">Soil Test</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
          <Link to='/pre-design/integration' className="mt-4 text-gray-800">Integration</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
          <Link to='/pre-design/traffic-survey' className="mt-4 text-gray-800">Traffic Survey</Link>
        </div>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default Feasibility;
