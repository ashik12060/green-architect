import React from "react";

const Infrastructure = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Infrastructure Design Services by Dhaka Designer</h1>
      <p className="text-lg mb-8">
        Dhaka Designer offers comprehensive Infrastructure Design services aimed at ensuring a strong foundation for your project. Our focus is on creating efficient, sustainable, and resilient infrastructure solutions.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Infrastructure Design Solutions:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Road & Transportation Design"
          description="We design roads, highways, and transportation systems to optimize traffic flow and ensure safety for all users."
        />
        <ServiceItem
          title="Utility Systems"
          description="We plan and design essential utility systems, such as water supply, sewage, and drainage, to meet the needs of your development."
        />
        <ServiceItem
          title="Power & Electrical Systems"
          description="We create efficient and reliable power and electrical systems to guarantee continuous service and optimal energy usage."
        />
        <ServiceItem
          title="Telecommunications Infrastructure"
          description="We develop telecommunications networks, including internet and phone systems, to keep your project fully connected."
        />
        <ServiceItem
          title="Stormwater Management"
          description="We design stormwater management solutions to mitigate flooding risks and protect the surrounding environment."
        />
        <ServiceItem
          title="Sustainable Design Solutions"
          description="We incorporate green infrastructure and renewable energy sources to ensure sustainability in every aspect of our design."
        />
        <ServiceItem
          title="Infrastructure Upgrades"
          description="We evaluate and modernize existing infrastructure to meet current standards and enhance performance."
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
