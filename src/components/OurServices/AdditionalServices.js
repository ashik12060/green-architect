import React, { useState } from 'react';

const AdditionalServices = () => {
  const [activeService, setActiveService] = useState(1); // Default to the first card (Rajuk Approval)

  const handleCardClick = (id) => {
    setActiveService(id); // Set the active card to the clicked one
  };

  return (
    <div className="text-center px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Additional Services We Offer</h2>

      {/* Button Container */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
        {/* Rajuk Approval Card */}
        <button
          onClick={() => handleCardClick(1)}
          className={`px-4 md:px-6 py-3 md:py-6 rounded-full text-white font-semibold transition-colors ${
            activeService === 1 ? 'bg-green-700' : 'bg-green-500'
          }`}
        >
          Rajuk Approval
        </button>

        {/* Soil Test Card */}
        <button
          onClick={() => handleCardClick(2)}
          className={`px-4 md:px-10 py-3 md:py-6 rounded-full text-white font-semibold transition-colors ${
            activeService === 2 ? 'bg-green-700' : 'bg-green-500'
          }`}
        >
          Soil Test
        </button>

        {/* Cost Estimate Card */}
        <button
          onClick={() => handleCardClick(3)}
          className={`px-4 md:px-6 py-3 md:py-6 rounded-full text-white font-semibold transition-colors ${
            activeService === 3 ? 'bg-green-700' : 'bg-green-500'
          }`}
        >
          Cost Estimate
        </button>

        {/* Digital Land Survey Card */}
        <button
          onClick={() => handleCardClick(4)}
          className={`px-4 md:px-6 py-3 md:py-6 rounded-full text-white font-semibold transition-colors ${
            activeService === 4 ? 'bg-green-700' : 'bg-green-500'
          }`}
        >
          Digital Land Survey
        </button>
      </div>

      {/* Conditionally Rendered Paragraphs */}
      <div className="px-4">
        {activeService === 1 && (
          <p className="mt-4 text-gray-700 max-w-xl mx-auto text-sm md:text-base">
            Green Architect simplifies the process of obtaining RAJUK and City Corporation approvals for building plans. Our experienced team ensures fast, hassle-free, and compliant approvals, protecting clients from legal issues and delays.
          </p>
        )}
        {activeService === 2 && (
          <p className="mt-4 text-gray-700 max-w-xl mx-auto text-sm md:text-base">
            Our soil test service ensures safe construction by assessing soil conditions for structural stability. This essential step helps prevent future issues with the building’s foundation.
          </p>
        )}
        {activeService === 3 && (
          <p className="mt-4 text-gray-700 max-w-xl mx-auto text-sm md:text-base">
            Get accurate cost estimations for efficient budget planning. Our cost estimation service allows you to understand project expenses and manage resources effectively.
          </p>
        )}
        {activeService === 4 && (
          <p className="mt-4 text-gray-700 max-w-xl mx-auto text-sm md:text-base">
            Our digital land survey provides precise data for land planning and development. Using advanced technology, we ensure accurate information for your project needs.
          </p>
        )}
      </div>
    </div>
  );
};

export default AdditionalServices;
