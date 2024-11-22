import React from "react";

const Infrastructure = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Infrastructure Design by Dhaka Designer</h1>
      <p className="text-lg mb-8">
        Dhaka Designer provides comprehensive Infrastructure Design services to ensure that your project has a solid foundation. We focus on creating efficient, sustainable, and resilient infrastructure systems.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Infrastructure Design Services:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Road & Transportation Design"
          description="We design roads, highways, and transportation systems that optimize traffic flow and ensure safety."
        />
        <ServiceItem
          title="Utility Systems"
          description="We plan and design utility systems, including water supply, sewage, and drainage, to meet the needs of your project."
        />
        <ServiceItem
          title="Power & Electrical Systems"
          description="We design reliable and efficient power and electrical systems, ensuring uninterrupted service and energy efficiency."
        />
        <ServiceItem
          title="Telecommunications Networks"
          description="We develop telecommunications infrastructure, including internet and phone networks, to keep your project connected."
        />
        <ServiceItem
          title="Stormwater Management"
          description="We create effective stormwater management systems to prevent flooding and protect the environment."
        />
        <ServiceItem
          title="Sustainable Solutions"
          description="We integrate sustainable practices into our designs, such as green infrastructure and renewable energy sources."
        />
        <ServiceItem
          title="Infrastructure Upgrades"
          description="We assess and upgrade existing infrastructure to meet modern standards and improve performance."
        />
      </div>
    </div>
  );
};

const ServiceItem = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
    <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
    <p className="text-gray-600 sm:w-2/3 text-justify">{description}</p>
  </div>
);

export default Infrastructure;
