import React from "react";

const Structure = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Structural Design by Green Shelter Design and Development</h1>
      <p className="text-lg mb-8">
        Green Shelter Design and Development specializes in providing complete Structural Design services to guarantee the safety and durability of your projects. Our skilled team crafts resilient and innovative structures built to last.
      </p>

      <h2 className="text-2xl font-semibold mb-6">
        Our Structural Design Services:
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Structural Analysis"
          description="We perform comprehensive structural analyses to determine optimal design strategies, ensuring both safety and efficiency."
        />
        <ServiceItem
          title="Building Structures"
          description="Our designs include robust structural frameworks for residential, commercial, and industrial buildings, capable of handling diverse loads and forces."
        />
        <ServiceItem
          title="Foundation Design"
          description="We develop secure and tailored foundation designs that match the specific soil characteristics and requirements of your site."
        />
        <ServiceItem
          title="Seismic Design"
          description="Our seismic design expertise ensures your buildings are protected from earthquake damage and comply with relevant regulations."
        />
        <ServiceItem
          title="Retrofitting & Strengthening"
          description="We offer retrofitting and strengthening solutions for older structures, enhancing their safety and extending their operational life."
        />
        <ServiceItem
          title="Materials Selection"
          description="We carefully choose construction materials that combine durability, cost-effectiveness, and environmental sustainability."
        />
        <ServiceItem
          title="Structural Inspections"
          description="We conduct thorough structural inspections to evaluate the condition of existing buildings and suggest necessary improvements."
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

export default Structure;
