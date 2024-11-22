import React from "react";

const Mechanical = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Mechanical Design by Dhaka Designer</h1>
      <p className="text-lg mb-8">
        Dhaka Designer provides premium Mechanical Design services to develop efficient, dependable, and cost-effective mechanical systems for your projects. Our solutions are tailored to your specific needs, ensuring top-notch performance and innovation.
      </p>

      <h2 className="text-2xl font-semibold mb-6">
        Our Mechanical Design Services:
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="HVAC Systems"
          description="Expertly designed heating, ventilation, and air conditioning systems to deliver superior indoor climate control while maximizing energy efficiency."
        />
        <ServiceItem
          title="Plumbing Systems"
          description="Comprehensive plumbing designs that ensure reliable water supply, drainage, and wastewater management for your project."
        />
        <ServiceItem
          title="Fire Protection Systems"
          description="We design advanced fire protection systems, including sprinklers and alarms, to safeguard your property and occupants."
        />
        <ServiceItem
          title="Mechanical Equipment Layout"
          description="We create detailed layouts for mechanical equipment, optimizing space utilization and maintenance accessibility."
        />
        <ServiceItem
          title="Energy Management"
          description="We implement energy management solutions to minimize energy consumption and reduce operational costs."
        />
        <ServiceItem
          title="Sustainable Design"
          description="We integrate sustainable practices into mechanical designs, such as utilizing renewable energy sources and improving energy efficiency."
        />
        <ServiceItem
          title="Regulatory Compliance"
          description="We ensure all mechanical designs comply with local codes, standards, and regulations, ensuring safety and legal compliance."
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

export default Mechanical;
