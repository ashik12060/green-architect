import React from "react";

const SoilTest = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4 px-8 sm:px-32">
        Soil Test Services by Green Shelter Design and Development
      </h1>
      <p className="text-lg mb-8 text-justify px-8 sm:px-32">
        Green Shelter Design and Development offers comprehensive Soil Test services to ensure your project's foundation is built on solid ground. Our in-depth testing allows you to understand the soil conditions, helping you make informed decisions for construction.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Soil Test Services Include:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Soil Sampling"
          description="We collect soil samples from various locations on your site to analyze its characteristics and properties."
        />
        <ServiceItem
          title="Soil Analysis"
          description="Our team performs comprehensive tests to determine the composition, strength, and suitability of the soil for construction."
        />
        <ServiceItem
          title="Moisture Content"
          description="We assess the moisture content of the soil to gauge its stability and suitability for building purposes."
        />
        <ServiceItem
          title="Bearing Capacity"
          description="We analyze the soil's bearing capacity to ensure it can support the weight of the proposed structure."
        />
        <ServiceItem
          title="Soil Contamination Testing"
          description="We conduct tests for contaminants to verify the soil's safety for construction and ensure compliance with environmental regulations."
        />
      </div>
    </div>
  );
};

const ServiceItem = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4 text-justify">
    <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
    <p className="text-gray-600 sm:w-2/3">{description}</p>
  </div>
);

export default SoilTest;
