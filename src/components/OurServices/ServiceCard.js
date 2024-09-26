import React from "react";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import {
  faAnglesRight,
  faCube,
  faHouseChimneyWindow,
  faPlaceOfWorship,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ServiceCard = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="justify-center mb-4">
              <FontAwesomeIcon
                className="text-green-500 text-3xl"
                icon={faBuilding}
              />
              <h2 className="ml-2 text-xl font-bold">Pre-Design</h2>
            </div>
            <p className="text-gray-700">
              Green Architect Provides Top-Notch Architectural Design Services,
              Combining Creativity and Expertise to Bring Your Vision to Life.
            </p>
            <button className="mt-4 inline-block px-4 py-2 text-green-500  font-bold rounded-lg ">
              Read More{" "}
              <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className=" justify-center mb-4">
              <FontAwesomeIcon
                className="text-green-500 text-3xl"
                icon={faWandMagicSparkles}
              />

              <h2 className="ml-2 text-xl font-bold">Design</h2>
            </div>
            <p className="text-gray-700">
              Transform Your Space into a Masterpiece with Our Expert Interior
              Design Services. Let us Bring Your Vision to Life.
            </p>
            <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg ">
              Read More{" "}
              <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className=" justify-center mb-4">
              <FontAwesomeIcon
                className="text-green-500 text-3xl"
                icon={faPlaceOfWorship}
              />

              <h2 className="ml-2 text-xl font-bold">Build</h2>
            </div>
            <p className="text-gray-700">
              Committed to Delivering Exceptional Structural Design Services for
              a Range of Building Projects, Ensuring the Stability and Safety of
              Each Structure.
            </p>
            <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg ">
              Read More{" "}
              <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className=" items-center justify-center mb-4">
            <FontAwesomeIcon
                className="text-green-500 text-3xl"
                icon={faHouseChimneyWindow}
              />
              <h2 className="ml-2 text-xl font-bold">Interior</h2>
            </div>
            <p className="text-gray-700">
              Green Architect Provides Top-Notch Architectural Design Services,
              Combining Creativity and Expertise to Bring Your Vision to Life.
            </p>
            <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg ">
              Read More{" "}
              <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className=" items-center justify-center mb-4">
             
              <FontAwesomeIcon
                className="text-green-500 text-3xl"
                icon={faCube}
              />
              <h2 className="ml-2 text-xl font-bold">3D Work</h2>
            </div>
            <p className="text-gray-700">
              Transform Your Space into a Masterpiece with Our Expert Interior
              Design Services. Let us Bring Your Vision to Life.
            </p>
            <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg ">
              Read More{" "}
              <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className=" justify-center mb-4">
              <FontAwesomeIcon
                className="text-green-500 text-3xl"
                icon={faPlaceOfWorship}
              />
              <h2 className="ml-2 text-xl font-bold">Real State</h2>
            </div>
            <p className="text-gray-700">
              Committed to Delivering Exceptional Structural Design Services for
              a Range of Building Projects, Ensuring the Stability and Safety of
              Each Structure.
            </p>
            <button className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg ">
              Read More{" "}
              <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
