import React from "react";

const Plumbing = () => {
  return (
    <div className="p-8 bg-gray-50 text-gray-900">
      <h1 className="text-3xl font-bold text-center mb-4">Plumbing Design by Dhaka Designer</h1>
      <p className="text-lg text-justify max-w-4xl mx-auto mb-8">
        At <span className="font-semibold">Dhaka Designer</span>, we specialize in designing plumbing systems that prioritize efficiency, reliability, and sustainability. Each solution is customized to meet the unique requirements of your project.
      </p>

      <div className="space-y-6 max-w-4xl mx-auto">
        <ServiceItem
          title="Water Supply Systems"
          description="We design efficient water supply systems that ensure a constant and dependable flow of clean water throughout your property."
        />
        <ServiceItem
          title="Drainage Systems"
          description="Our drainage systems are designed to ensure proper waste management, preventing blockages and keeping your spaces clean and functional."
        />
      </div>
    </div>
  );
};

const ServiceItem = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
    <h3 className="text-lg font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
    <p className="text-gray-600 sm:w-2/3">{description}</p>
  </div>
);

export default Plumbing;
