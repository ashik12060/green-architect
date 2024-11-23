import React from "react";

const SoilTest = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4 px-8 sm:px-32">
        Comprehensive Soil Testing by Green Shelter Design and Development
      </h1>
      <p className="text-lg mb-8 text-justify px-8 sm:px-32">
        Green Shelter Design and Development provides expert Soil Testing services to ensure your construction project is based on a reliable foundation. Our thorough assessments provide insights into soil conditions, helping you make well-informed decisions for your building plans.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Soil Testing Services Include:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Soil Sampling"
          description="We gather soil samples from different areas of your site to evaluate their characteristics and suitability."
        />
        <ServiceItem
          title="Detailed Soil Analysis"
          description="Our team conducts in-depth tests to assess the soil's composition, strength, and readiness for construction."
        />
        <ServiceItem
          title="Moisture Content Evaluation"
          description="We measure the moisture levels in the soil to determine its stability and feasibility for building purposes."
        />
        <ServiceItem
          title="Load-Bearing Capacity Assessment"
          description="We evaluate the soil's ability to support the weight of your planned structure, ensuring safety and reliability."
        />
        <ServiceItem
          title="Soil Contamination Testing"
          description="We test for any contaminants in the soil to confirm its safety for construction and compliance with environmental standards."
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
