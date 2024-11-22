import React from "react";

const Facelifting = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Facelifting / Addition by Dhaka Designer</h1>
      <p className="text-lg mb-8">
        Dhaka Designer provides expert Facelifting and Addition services to rejuvenate and expand your existing spaces. Our skilled team ensures seamless integration and enhances the aesthetic and functional appeal of your property.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Facelifting / Addition Services:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Exterior Facelifting"
          description="We refresh and modernize the exterior of your building, enhancing curb appeal and overall appearance."
        />
        <ServiceItem
          title="Interior Upgrades"
          description="We update interior spaces with new finishes, fixtures, and layouts to improve functionality and style."
        />
        <ServiceItem
          title="Building Additions"
          description="We design and construct additions, such as extra rooms or extensions, to increase your building’s usable space."
        />
        <ServiceItem
          title="Structural Enhancements"
          description="We reinforce and upgrade structural elements to support new additions and ensure the stability of the existing structure."
        />
        <ServiceItem
          title="Facade Improvements"
          description="We enhance the building facade with new materials, windows, and architectural details to give it a fresh look."
        />
        <ServiceItem
          title="Energy Efficiency Upgrades"
          description="We incorporate energy-efficient solutions, such as insulation, windows, and HVAC systems, to improve energy performance."
        />
        <ServiceItem
          title="Custom Design Solutions"
          description="We provide custom design solutions tailored to your specific needs, ensuring the new additions blend seamlessly with the existing structure."
        />
        <ServiceItem
          title="Permitting and Compliance"
          description="We handle all necessary permitting and ensure compliance with local building codes and regulations."
        />
        <ServiceItem
          title="Project Management"
          description="We manage the entire facelifting and addition process, from initial design to final inspection, ensuring quality and timely completion."
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

export default Facelifting;
