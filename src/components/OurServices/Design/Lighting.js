import React from "react";

const Lighting = () => {
  return (
    <div className="p-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-4">Lighting Design by Dhaka Designer</h1>
      <p className="text-lg text-justify max-w-4xl mx-auto mb-8">
        <span className="font-semibold">Dhaka Designer</span> offers specialized Lighting Design
        services to enhance the functionality and aesthetics of your spaces. Our team creates
        innovative lighting solutions tailored to your specific needs.
      </p>

      <div className="space-y-6 max-w-4xl mx-auto">
        <ServiceItem
          title="Interior Lighting"
          description="We design interior lighting systems that provide optimal illumination and enhance the ambiance of your indoor spaces."
        />
        <ServiceItem
          title="Exterior Lighting"
          description="We create exterior lighting solutions that ensure safety, security, and aesthetic appeal for outdoor areas."
        />
        <ServiceItem
          title="Architectural Lighting"
          description="We highlight architectural features with creative lighting designs that add visual interest and elegance to your building."
        />
        <ServiceItem
          title="Energy-Efficient Lighting"
          description="We incorporate energy-efficient lighting technologies, such as LED and smart lighting systems, to reduce energy consumption and operational costs."
        />
        <ServiceItem
          title="Lighting Controls"
          description="We design advanced lighting control systems, including dimmers, sensors, and automation, to provide flexibility and enhance user experience."
        />
        <ServiceItem
          title="Emergency Lighting"
          description="We ensure safety with well-designed emergency lighting systems that provide reliable illumination during power outages."
        />
        <ServiceItem
          title="Lighting Audits & Upgrades"
          description="We conduct lighting audits to assess the current lighting setup and recommend upgrades to improve performance and efficiency."
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
