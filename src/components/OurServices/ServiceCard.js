import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next"; // Assuming you're using react-i18next for translation
import { useTheme } from "../../context/ThemeContext";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const ServiceCard = () => {
  // const { t } = useTranslation("Service");
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? "text-white" : "bg-gray-100"}`}>
      <div className="container mx-auto px-4 py-16">
        <h1
          className={`text-4xl font-bold text-center mb-10 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          <span
            className={`${
              isDarkMode ? "border-b-4 border-white" : "border-b-4 border-black"
            }`}
          >
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-4">
              <h2 className="ml-2 text-xl font-bold text-black">Pre-Design</h2>
            </div>
            <p className="text-gray-700">Green Architect provides top-notch architectural design services, combining creativity and expertise to bring your vision to life</p>
            <Link to='/pre-design' className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg">
             
              
             See More
             <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
           </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-4">
              <h2 className="ml-2 text-xl font-bold text-black">Design</h2>
            </div>
            <p className="text-gray-700">Transform your space into a masterpiece with our expert interior design services. Let us bring your vision to life.</p>
            <Link to='/design' className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg">
             
              
             See More
             <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
           </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            {/* <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center"> */}
            <div className="mb-4">
              {/* <FontAwesomeIcon className="text-green-500 text-3xl" icon={service.icon} /> */}
              {/* <h2 className="ml-2 text-xl font-bold text-black">{service.title} </h2> */}
              <h2 className="ml-2 text-xl font-bold text-black">Build</h2>
            </div>
            <p className="text-gray-700">Committed to delivering exceptional structural design services for a range of building projects, ensuring the stability and safety of each structure.</p>
            {/* <p className="text-gray-700">{service.description}</p> */}
            <Link to='/build' className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg">
             
              
              See More
              <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            {/* <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center"> */}
            <div className="mb-4">
              {/* <FontAwesomeIcon className="text-green-500 text-3xl" icon={service.icon} /> */}
              {/* <h2 className="ml-2 text-xl font-bold text-black">{service.title} </h2> */}
              <h2 className="ml-2 text-xl font-bold text-black">Interior</h2>
            </div>
            <p className="text-gray-700">Green Architect provides top-notch architectural design services, combining creativity and expertise to bring your vision to life.</p>
            {/* <p className="text-gray-700">{service.description}</p> */}
            <Link to='/interior' className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg">
             
              
              See More
              <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-4">
            
              <h2 className="ml-2 text-xl font-bold text-black">3D Work</h2>
            </div>
            <p className="text-gray-700">Transform your space into a masterpiece with our expert interior design services. Let us bring your vision to life.</p>
            <Link to='/3d-works' className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg">
             
              
             See More
             <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
           </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-4">
             
              <h2 className="ml-2 text-xl font-bold text-black">Real Estate</h2>
            </div>
            <p className="text-gray-700">Committed to delivering exceptional structural design services for a range of building projects, ensuring the stability and safety of each structure.</p>
            {/* <p className="text-gray-700">{service.description}</p> */}
            <Link className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg">
             
              
              See More
              <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
            </Link>
          </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};
