import React from "react";

const Solar3d = () => {
  const categories = [
    "Electric Battery Insulation",
    "Solar Power Integration for Somalia",
    "Battery Insulation Solutions",
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-8 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-4">
        Electric & Solar Solutions
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Develop digital content and animations tailored to your business needs.
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

export default Solar3d;
