import React from "react";

const Technical = () => {
  const categories = [
    "Advanced Gym Equipment",
    "Safety Demonstrations",
    "Airplane Cabin Design",
    "Electric Vehicle Charging Stations",
    "Product Unveilings",
    "Mining Game Assets",
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-8 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-4">
        Technical Animation Services
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Develop customized digital content and animations for your business.
      </p>

      <div className="max-w-3xl mx-auto space-y-4">
        {categories.map((category, index) => (
          <CategoryItem key={index} name={category} />
        ))}
      </div>
    </div>
  );
};

const CategoryItem = ({ name }) => (
  <div className="bg-white rounded-lg shadow-md p-4 text-center">
    <h2 className="text-xl font-semibold">{name}</h2>
  </div>
);

export default Technical;
