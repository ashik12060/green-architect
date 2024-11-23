import React from "react";

const Mechanical = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Mechanical Design by Dhaka Designer</h1>
      <p className="text-lg mb-8">
        At <span className="font-semibold">Dhaka Designer</span>, we offer high-quality Mechanical Design services that focus on creating efficient, reliable, and cost-effective mechanical systems for your projects. Our custom solutions are built to meet your unique requirements, ensuring outstanding performance and innovation.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Mechanical Design Services Include:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="HVAC Systems"
          description="We design top-tier heating, ventilation, and air conditioning systems to provide exceptional climate control indoors while optimizing energy usage."
        />
        <ServiceItem
          title="Plumbing Systems"
          description="We provide reliable plumbing designs that ensure consistent water supply, drainage, and wastewater management for your project."
        />
        <ServiceItem
          title="Fire Protection Systems"
          description="Our fire protection systems include cutting-edge sprinkler and alarm systems designed to protect your property and its occupants."
        />
        <ServiceItem
          title="Mechanical Equipment Layout"
          description="We create precise layouts for mechanical equipment to maximize space efficiency and simplify maintenance."
        />
        <ServiceItem
          title="Energy Management"
          description="We design energy management solutions aimed at reducing energy consumption and lowering operational expenses."
        />
        <ServiceItem
          title="Sustainable Design"
          description="Our designs incorporate sustainable approaches, such as using renewable energy sources and enhancing energy efficiency."
        />
        <ServiceItem
          title="Regulatory Compliance"
          description="We ensure that all mechanical designs comply with local codes and standards, ensuring safety and legal conformity."
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
