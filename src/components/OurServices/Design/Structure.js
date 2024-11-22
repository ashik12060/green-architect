import React from "react";

const Structure = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Structural Design by Dhaka Designer</h1>
      <p className="text-lg mb-8">
        Dhaka Designer offers comprehensive Structural Design services to ensure the stability and safety of your projects. Our experienced team designs robust and innovative structures that stand the test of time.
      </p>

      <h2 className="text-2xl font-semibold mb-6">
        Our Structural Design Services:
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Structural Analysis"
          description="We conduct thorough structural analysis to determine the best design solutions for your project, ensuring safety and efficiency."
        />
        <ServiceItem
          title="Building Structures"
          description="We design the structural framework for residential, commercial, and industrial buildings, ensuring they can withstand various loads and forces."
        />
        <ServiceItem
          title="Foundation Design"
          description="We create strong and stable foundation designs tailored to the specific soil conditions and requirements of your site."
        />
        <ServiceItem
          title="Seismic Design"
          description="We incorporate seismic design principles to protect buildings from earthquake damage, ensuring compliance with local regulations."
        />
        <ServiceItem
          title="Retrofitting & Strengthening"
          description="We provide retrofitting and strengthening solutions for existing structures, enhancing their safety and extending their lifespan."
        />
        <ServiceItem
          title="Materials Selection"
          description="We select appropriate construction materials to ensure durability, cost-effectiveness, and sustainability."
        />
        <ServiceItem
          title="Structural Inspections"
          description="We conduct detailed structural inspections to assess the condition of existing structures and recommend necessary improvements."
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
