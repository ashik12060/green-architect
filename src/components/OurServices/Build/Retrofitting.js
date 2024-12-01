import React from "react";

const Retrofitting = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Retrofitting Services by Green Shelter Design and Development</h1>
      <p className="text-lg mb-8">
        At Green Shelter Design and Development, we provide specialized Retrofitting services aimed at improving the safety, performance, and durability of your existing buildings. Our team ensures that your structures comply with modern standards and are well-equipped to face future challenges.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Retrofitting Solutions Include:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Structural Reinforcements"
          description="We strengthen and enhance structural components to boost your building’s stability and resilience."
        />
        <ServiceItem
          title="Seismic Reinforcement"
          description="We implement seismic retrofitting techniques to safeguard your building against earthquake damage while meeting current regulations."
        />
        <ServiceItem
          title="Energy Conservation Upgrades"
          description="We improve energy efficiency by adding insulation, upgrading windows, and installing energy-efficient systems, reducing consumption and operational costs."
        />
        <ServiceItem
          title="Fire Safety Enhancements"
          description="We upgrade fire protection systems, including alarms, sprinklers, and fire-resistant materials, ensuring higher levels of safety for occupants."
        />
        <ServiceItem
          title="Waterproofing and Damage Prevention"
          description="We address water and moisture-related issues by improving drainage, adding waterproofing layers, and installing moisture barriers."
        />
        <ServiceItem
          title="Accessibility Improvements"
          description="We install ramps, elevators, and other features to enhance accessibility and comply with ADA standards."
        />
        <ServiceItem
          title="Mechanical & Electrical System Updates"
          description="We modernize mechanical and electrical systems for better performance, reliability, and compliance with current standards."
        />
        <ServiceItem
          title="Facade Renovations"
          description="We upgrade building facades to enhance their aesthetic appeal, energy efficiency, and weather resistance."
        />
        <ServiceItem
          title="Comprehensive Project Management"
          description="We manage the entire retrofitting process, from assessment and design to execution and final inspection, ensuring the project is completed to the highest standards and on time."
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
