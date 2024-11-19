import React from "react";

const SiteVisit = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4 px-4 sm:px-8 md:px-16">
       Digital Survey & Reporting by Green Shelter Design and Development
      </h1>
      <p className="text-lg mb-8 px-4 sm:px-8 md:px-16">
        At Green Shelter Design and Development, we offer thorough Site Visit & Reporting services, gathering vital information for effective project planning and design. Our meticulous on-site evaluations ensure all critical site conditions are accurately captured and analyzed.
      </p>

      <h2 className="text-2xl font-semibold mb-6 px-4 sm:px-8 md:px-16">
        A Glimpse Into Our Site Visit & Reporting Services:
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="3D Scanning"
          description="We produce detailed 3D models of existing structures and landscapes, giving you a comprehensive view of your site."
        />
        <ServiceItem
          title="Drone Surveys"
          description="Using drones, we collect high-quality aerial imagery and topographic data, providing you with a complete perspective of your site."
        />
        <ServiceItem
          title="GIS Mapping"
          description="We develop extensive Geographic Information System (GIS) maps for precise spatial analysis, helping you understand the full layout and features of your site."
        />
        <ServiceItem
          title="Data Integration"
          description="We merge survey data with existing plans and models, offering a unified view that aids in informed decision-making."
        />
        <ServiceItem
          title="Virtual Reality (VR) Integration"
          description="We provide a virtual representation of the site and proposed modifications, allowing for seamless planning and adjustments."
        />
      </div>
    </div>
  );
};

const ServiceItem = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 border-b border-gray-300 pb-6">
    <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3 text-center sm:text-left">
      {title}
    </h3>
    <p className="text-gray-600 sm:w-2/3 text-center sm:text-left">{description}</p>
  </div>
);

export default SiteVisit;
