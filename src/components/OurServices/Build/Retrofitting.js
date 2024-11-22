import React from "react";

const Retrofitting = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Retrofitting by Dhaka Designer</h1>
      <p className="text-lg mb-8">
        Dhaka Designer offers specialized Retrofitting services to enhance the safety, performance, and longevity of your existing structures. Our expert team ensures that your buildings meet modern standards and withstand future challenges.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Retrofitting Services:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Structural Upgrades"
          description="We reinforce and upgrade structural elements to improve the stability and strength of your building."
        />
        <ServiceItem
          title="Seismic Retrofitting"
          description="We implement seismic retrofitting measures to protect your building from earthquake damage, ensuring compliance with current codes."
        />
        <ServiceItem
          title="Energy Efficiency Enhancements"
          description="We enhance energy efficiency through insulation, window upgrades, and energy-efficient systems, reducing energy consumption and costs."
        />
        <ServiceItem
          title="Fire Safety Improvements"
          description="We upgrade fire safety systems, including alarms, sprinklers, and fire-resistant materials, to enhance occupant safety."
        />
        <ServiceItem
          title="Moisture & Water Damage Prevention"
          description="We address moisture and water damage issues with waterproofing, drainage improvements, and moisture barriers."
        />
        <ServiceItem
          title="Accessibility Upgrades"
          description="We improve accessibility with the addition of ramps, elevators, and other features to meet ADA standards and enhance usability."
        />
        <ServiceItem
          title="Mechanical & Electrical System Upgrades"
          description="We update mechanical and electrical systems to ensure efficiency, reliability, and compliance with modern standards."
        />
        <ServiceItem
          title="Facade Improvements"
          description="We upgrade building facades to improve aesthetics, energy efficiency, and weather resistance."
        />
        <ServiceItem
          title="Project Management"
          description="We oversee the entire retrofitting process, from assessment and design to implementation and final inspection, ensuring quality and timely completion."
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

export default Retrofitting;
