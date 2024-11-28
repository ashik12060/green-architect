// import React from "react";

// const DroneSurvey = () => {
//   return (
//     <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
//       <h1 className="text-3xl font-bold mb-4 px-8 sm:px-32">
//         Drone Survey Services by Green Shelter Design and Development
//       </h1>
//       <p className="text-lg mb-8 text-justify px-8 sm:px-32">
//         At Green Shelter Design and Development, we specialize in delivering top-tier Drone Survey services. Using cutting-edge drone technology, we provide accurate aerial imagery and topographic data, ensuring comprehensive and precise surveys for your project.
//       </p>

//       <h2 className="text-2xl font-semibold mb-6">What Our Drone Survey Services Offer:</h2>

//       <div className="space-y-6 max-w-4xl w-full">
//         <ServiceItem
//           title="High-Resolution Aerial Photography"
//           description="We capture clear and detailed aerial photos of your site, providing a full perspective from above."
//         />
//         <ServiceItem
//           title="Topographic Surveying"
//           description="Our drones collect accurate topographic data, giving you a complete understanding of your site’s terrain and natural features."
//         />
//         <ServiceItem
//           title="3D Site Mapping"
//           description="We create detailed 3D maps of your site, offering a deeper perspective to aid in planning and design."
//         />
//         <ServiceItem
//           title="Construction Monitoring"
//           description="We use drones to track the progress of construction, providing ongoing updates and identifying potential issues early on."
//         />
//         <ServiceItem
//           title="Environmental Assessments"
//           description="Our drones monitor environmental factors to ensure your project complies with all relevant environmental standards and regulations."
//         />
//       </div>
//     </div>
//   );
// };

// const ServiceItem = ({ title, description }) => (
//   <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4 text-justify">
//     <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
//     <p className="text-gray-600 sm:w-2/3">{description}</p>
//   </div>
// );

// export default DroneSurvey;




import React from "react";

const DroneSurvey = () => {
  return (
    <div className="flex flex-col items-center py-12 px-4 bg-white text-gray-800">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center mb-6 max-w-4xl">
        Drone Survey Services by Green Shelter Design and Development
      </h1>
      <p className="text-lg text-justify mb-10 max-w-4xl leading-relaxed">
        At Green Shelter Design and Development, we specialize in delivering 
        top-tier Drone Survey services. Using cutting-edge drone technology, 
        we provide accurate aerial imagery and topographic data, ensuring 
        comprehensive and precise surveys for your project.
      </p>

      {/* Subheading */}
      <h2 className="text-2xl font-semibold text-center mb-8">
        What Our Drone Survey Services Offer:
      </h2>

      {/* Service Items */}
      <div className="space-y-8 max-w-4xl w-full">
        <ServiceItem
          title="High-Resolution Aerial Photography"
          description="We capture clear and detailed aerial photos of your site, providing a full perspective from above."
        />
        <ServiceItem
          title="Topographic Surveying"
          description="Our drones collect accurate topographic data, giving you a complete understanding of your site’s terrain and natural features."
        />
        <ServiceItem
          title="3D Site Mapping"
          description="We create detailed 3D maps of your site, offering a deeper perspective to aid in planning and design."
        />
        <ServiceItem
          title="Construction Monitoring"
          description="We use drones to track the progress of construction, providing ongoing updates and identifying potential issues early on."
        />
        <ServiceItem
          title="Environmental Assessments"
          description="Our drones monitor environmental factors to ensure your project complies with all relevant environmental standards and regulations."
        />
      </div>
    </div>
  );
};

// Individual Service Item
const ServiceItem = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 border-b pb-6 last:border-0">
    <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3 text-gray-900">
      {title}
    </h3>
    <p className="text-gray-700 sm:w-2/3 leading-relaxed">{description}</p>
  </div>
);

export default DroneSurvey;
