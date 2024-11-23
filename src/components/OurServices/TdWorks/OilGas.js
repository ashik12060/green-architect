import React from "react";

const OilGas = () => {
  const animationCategories = [
    "Delayed Coker Unit (DCU)",
    "Asphalt Production Plant",
    "LNG Plant Insulation Systems",
    "LNG Safety Protocols",
    "LNG Facilities",
    "LNG Transport Safety Measures",
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-8 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-4">
        Oil & Gas Animation Solutions
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        We design custom digital content and animations tailored to your business needs.
      </p>

      <div className="max-w-3xl mx-auto space-y-4">
        {animationCategories.map((category, index) => (
          <AnimationCategory key={index} categoryName={category} />
        ))}
      </div>
    </div>
  );
};

const AnimationCategory = ({ categoryName }) => (
  <div className="bg-white rounded-lg shadow-md p-4 text-center">
    <h2 className="text-xl font-semibold">{categoryName}</h2>
  </div>
);

export default OilGas;
