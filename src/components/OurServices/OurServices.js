
import React from "react";
import { ServiceCard } from "./ServiceCard";
import { useTheme } from "../../context/ThemeContext";

function OurServices() {
  const { isDarkMode } = useTheme();
  return (
    <>
    <ServiceCard />

<div className="container mx-auto p-14">
<h2 className={`text-3xl font-bold text-center mb-10  ${isDarkMode ? ' text-white ' : 'text-black'}`}>
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
<p className={`mt-4  text-center text-justify	 ${isDarkMode ? ' text-white' : 'text-black'}`}>
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
