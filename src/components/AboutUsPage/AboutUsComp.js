import React from 'react';
import img from '../../assets/architec1.jpg'
import { useTheme } from '../../context/ThemeContext';

function AboutUsComp() {
  
  const { isDarkMode } = useTheme();
  return (
   <>
    <div className="flex flex-col items-center justify-center min-h-screen fa-100">
      <div className={`container mx-auto p-4 rounded-lg shadow-md ${isDarkMode ? ' text-white shadow-md shadow-gray-800' : 'bg-white'}`}>
        <h1 className="text-3xl text-center my-10 pb-10 font-bold mb-4"><span className={`${isDarkMode ? 'border-b-4 border-white text-white  ' : 'text-green-700 border-b-4 border-green-700'}`}>About Our Process</span></h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src={img} alt="Building Image" className="w-full rounded-lg shadow-sm" />
          </div>
          <div className="md:w-1/2 p-4">
            <p className=" mb-4">
              SHELLMARK LIMITED was established in 2012 as a partnership firm with the name of SHELLMARK Engineers & Architects. A group of professionals were willing to pool their resources to define a new order of Engineering Standard. Later in 2014, it has incorporated as a Private Limited company to the Registrar of Joint Stock Companies of Bangladesh under the Companies Act-1994.
            </p>
            <p className=" mb-4">
              Today, it is a fast growing Company for Building Design, Architectural and Structural Consultancy, Soil Test, Digital Survey, RAJUK Plan Pass, Civil Construction & Project Management. So far SHELLMARK's integrity and technological resources comprise modern & world class solutions to meet the needs of today.
            </p>
            <p className="">
              Our Mission is to offer excellent service in each of our professional disciplines, in accordance with state of the art practices, codes of conduct and integrity.
            </p>
          </div>
        </div>
      </div>
    </div>
   
   </>
  );
}

export default AboutUsComp;