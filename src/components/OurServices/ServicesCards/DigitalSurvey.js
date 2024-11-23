import React from "react";

const SiteVisit = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4 px-4 sm:px-8 md:px-16">
        Digital Survey & Reporting by Green Shelter Design and Development
      </h1>
      <p className="text-lg mb-8 px-4 sm:px-8 md:px-16">
        At Green Shelter Design and Development, we offer comprehensive Site Visit & Reporting services to gather essential information for effective project planning and design. Our thorough on-site assessments ensure that all key site conditions are accurately documented and analyzed.
      </p>

      <h2 className="text-2xl font-semibold mb-6 px-4 sm:px-8 md:px-16">
        Overview of Our Site Visit & Reporting Services:
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="3D Scanning"
          description="We generate detailed 3D models of existing structures and landscapes, offering a clear understanding of your site."
        />
        <ServiceItem
          title="Drone Surveys"
          description="Utilizing drones, we capture high-resolution aerial images and topographical data, giving you a full view of your site."
        />
        <ServiceItem
          title="GIS Mapping"
          description="We create detailed Geographic Information System (GIS) maps for precise spatial analysis, helping you understand the layout and features of your site."
        />
        <ServiceItem
          title="Data Integration"
          description="We combine survey data with existing plans and models to provide a unified perspective for informed decision-making."
        />
        <ServiceItem
          title="Virtual Reality (VR) Integration"
          description="We offer a virtual representation of the site and proposed modifications, facilitating smooth planning and adjustments."
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
