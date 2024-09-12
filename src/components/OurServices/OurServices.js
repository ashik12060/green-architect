import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faAnglesRight, faCube, faHouseChimneyWindow, faPlaceOfWorship, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import React from "react";

function OurServices() {
  return (
    <>
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="justify-center mb-4">
          <FontAwesomeIcon className="text-green-500 text-3xl" icon={faBuilding} />
            <h2 className="ml-2 text-xl font-bold">Architectural Design</h2>
          </div>
          <p className="text-gray-700">
            Green Architect Provides Top-Notch Architectural Design Services,
            Combining Creativity and Expertise to Bring Your Vision to Life.
          </p>
          <button className="mt-4 inline-block px-4 py-2 text-green-500  font-bold rounded-lg ">
            Read More <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className=" justify-center mb-4">
          <FontAwesomeIcon className="text-green-500 text-3xl" icon={faWandMagicSparkles} />
          
            <h2 className="ml-2 text-xl font-bold">Interior Design</h2>
          </div>
          <p className="text-gray-700">
            Transform Your Space into a Masterpiece with Our Expert Interior
            Design Services. Let us Bring Your Vision to Life.
          </p>
          <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg ">
            Read More <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className=" justify-center mb-4">
          <FontAwesomeIcon  className="text-green-500 text-3xl" icon={faPlaceOfWorship} />
           
            <h2 className="ml-2 text-xl font-bold">Structural Design</h2>
          </div>
          <p className="text-gray-700">
            Committed to Delivering Exceptional Structural Design Services for a
            Range of Building Projects, Ensuring the Stability and Safety of
            Each Structure.
          </p>
          <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg ">
            Read More <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className=" items-center justify-center mb-4">
          <FontAwesomeIcon className="text-green-500 text-3xl" icon={faCube} />
            <h2 className="ml-2 text-xl font-bold">3D Visualisation</h2>
          </div>
          <p className="text-gray-700">
            Green Architect Provides Top-Notch Architectural Design Services,
            Combining Creativity and Expertise to Bring Your Vision to Life.
          </p>
          <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg ">
            Read More <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className=" items-center justify-center mb-4">
          <FontAwesomeIcon className="text-green-500 text-3xl" icon={faHouseChimneyWindow} />
            <h2 className="ml-2 text-xl font-bold">House Design</h2>
          </div>
          <p className="text-gray-700">
            Transform Your Space into a Masterpiece with Our Expert Interior
            Design Services. Let us Bring Your Vision to Life.
          </p>
          <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg ">
            Read More <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className=" justify-center mb-4">
          <FontAwesomeIcon className="text-green-500 text-3xl" icon={faPlaceOfWorship} />
            <h2 className="ml-2 text-xl font-bold">Construction</h2>
          </div>
          <p className="text-gray-700">
            Committed to Delivering Exceptional Structural Design Services for a
            Range of Building Projects, Ensuring the Stability and Safety of
            Each Structure.
          </p>
          <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg ">
            Read More <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
          </button>
        </div>
      </div>
    </div>

<div className="container mx-auto p-4">
<h2 className="text-3xl font-bold text-center mb-4">
  Additional Services We Offer
</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
  <div className="bg-green-500 p-10 rounded-full shadow-md">
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      <h3 className="ml-2 text-lg font-bold text-white">
        Rajuk Approval
      </h3>
    </div>
  </div>
  <div className="bg-green-600 p-10 rounded-full shadow-md">
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="ml-2 text-lg font-bold text-white ">
        Soil Test
      </h3>
    </div>
  </div>
  <div className="bg-green-700 p-10 rounded-full shadow-md">
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="ml-2 text-lg font-bold text-white">
        Cost Estimate
      </h3>
    </div>
  </div>
  <div className="bg-green-800 p-10 rounded-full text-center shadow-md">
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="ml-2 text-lg font-bold text-white">
        Digital Land Survey
      </h3>
    </div>
  </div>
</div>
<p className="mt-4 text-gray-700 text-center">
  Green Architect simplifies the process of obtaining RAJUK and City
  Corporation approvals for building plans. Our experienced team ensures
  fast, hassle-free, and compliant approvals, protecting clients from legal
  issues and delays. Trust us to guide you through the complex process,
  providing personalized support and ensuring a smooth, efficient
  experience. Choose Green Architect for peace of mind and a stress-free
  building plan approval process.
</p>
</div>
    </>
  );
}

export default OurServices;
