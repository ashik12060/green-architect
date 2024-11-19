import React from "react";

const DroneSurvey = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4 px-8 sm:px-32">
        Drone Survey Services by Green Shelter Design and Development
      </h1>
      <p className="text-lg mb-8 text-justify px-8 sm:px-32">
        Green Shelter Design and Development specializes in providing high-quality Drone Survey services that deliver precise aerial imagery and topographic data for your project. Using state-of-the-art drone technology, we ensure comprehensive and accurate surveys.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Drone Survey Services Include:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="High-Quality Aerial Imagery"
          description="We capture sharp, detailed aerial photographs of your site, offering a comprehensive view from above."
        />
        <ServiceItem
          title="Topographic Data Collection"
          description="Our drones gather precise topographic data, allowing you to fully understand the terrain and natural features of your site."
        />
        <ServiceItem
          title="3D Mapping"
          description="We generate intricate 3D maps of your site, offering an in-depth view to support your planning and design needs."
        />
        <ServiceItem
          title="Construction Progress Monitoring"
          description="Using drones, we track the progress of construction, providing regular updates and identifying potential challenges early in the process."
        />
        <ServiceItem
          title="Environmental Monitoring"
          description="Our drones assess environmental factors, ensuring that your project aligns with environmental guidelines and regulations."
        />
      </div>
    </div>
  );
};

const ServiceItem = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4 text-justify">
    <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
    <p className="text-gray-600 sm:w-2/3">{description}</p>
  </div>
);

export default DroneSurvey;
