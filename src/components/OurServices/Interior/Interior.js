import React from 'react';
import { Link } from 'react-router-dom';


const Interior = () => {
  return (
    <>
    {/* <Header /> */}
    <div className="container mx-auto px-4 pb-32 pt-5">
       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/interior/residential' className="mt-4 text-gray-800">Residential</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/interior/industrial' className="mt-4 text-gray-800">Industrial</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/interior/retail' className="mt-4 text-gray-800"> Retail </Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/interior/office' className="mt-4 text-gray-800">Office</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          <Link to='/interior/furniture' className="mt-4 text-gray-800">Furniture</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
          <Link to='/interior/sculpture' className="mt-4 text-gray-800">Sculpture</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
          <Link to='/interior/lighting-interior' className="mt-4 text-gray-800">Lighting</Link>
        </div>
        <div className=" rounded-md shadow-md px-2 py-4 text-center">
          
          <Link to='/interior/accessories' className="mt-4 text-gray-800">Accessories</Link>
        </div>
        
      </div>
    </div>

    {/* <Footer /> */}
    </>
  );
};

export default Interior;
