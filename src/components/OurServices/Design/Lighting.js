import React from "react";

const Lighting = () => {
  return (
    <div className="p-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-4">Lighting Design by Dhaka Designer</h1>
      <p className="text-lg text-justify max-w-4xl mx-auto mb-8">
        At <span className="font-semibold">Dhaka Designer</span>, we specialize in providing 
        customized lighting solutions that improve both the functionality and visual appeal of your spaces. 
        Our team crafts unique lighting designs tailored specifically to meet the requirements of each project.
      </p>

      <div className="space-y-6 max-w-4xl mx-auto">
        <ServiceItem
          title="Indoor Lighting"
          description="We develop indoor lighting systems that ensure optimal brightness while enhancing the atmosphere of your interior spaces."
        />
        <ServiceItem
          title="Outdoor Lighting"
          description="We design exterior lighting that ensures safety, security, and visual beauty for your outdoor spaces."
        />
        <ServiceItem
          title="Architectural Lighting"
          description="We accentuate architectural features with sophisticated lighting designs that add elegance and visual appeal to your building."
        />
        <ServiceItem
          title="Energy-Saving Lighting"
          description="We integrate energy-efficient lighting solutions, such as LED and smart systems, to minimize energy use and reduce costs."
        />
        <ServiceItem
          title="Lighting Control Systems"
          description="We implement advanced lighting control systems with features like dimmers, sensors, and automation to offer convenience and enhance user experience."
        />
        <ServiceItem
          title="Emergency Lighting"
          description="We provide reliable emergency lighting systems to ensure safety during power outages by offering consistent illumination."
        />
        <ServiceItem
          title="Lighting Evaluation & Improvements"
          description="We perform lighting assessments to evaluate your current system and suggest upgrades to enhance performance and efficiency."
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

export default Lighting;
