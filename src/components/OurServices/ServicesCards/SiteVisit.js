// import React from "react";

// const SiteVisit = () => {
//   return (
//     <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
//       <h1 className="text-3xl font-bold mb-4">
//         On-Site Evaluation & Reporting by Green Shelter Design and Development
//       </h1>
//       <p className="text-lg mb-8">
//         Green Shelter Design and Development provides comprehensive Site Visit &
//         Reporting services to collect crucial information for your project
//         planning and design. Our on-site assessments guarantee that all
//         site-specific factors are carefully recorded and analyzed
//       </p>

//       <h2 className="text-2xl font-semibold mb-6">
//         Overview of Our Site Visit & Reporting Services:{" "}
//       </h2>

//       <div className="space-y-6 max-w-4xl w-full">
//         <ServiceItem
//           title="Site Measurements"
//           description="We take precise measurements of your site to develop accurate site layouts and plans."
//         />
//         <ServiceItem
//           title="Environmental Assessments"
//           description="We assess environmental factors and potential impacts to ensure your project meets all environmental standards and regulations."
//         />
//         <ServiceItem
//           title="Condition Reporting"
//           description="We thoroughly document the existing condition of structures and infrastructure, giving you a clear overview of required repairs or updates."
//         />
//         <ServiceItem
//           title="Site Photographs"
//           description="We capture high-quality images of the site to aid in detailed analysis and reporting."
//         />
//         <ServiceItem
//           title="Stakeholder Meetings"
//           description="We organize discussions with local authorities, community members, and relevant parties to gather feedback and address any concerns."
//         />
//       </div>
//     </div>
//   );
// };

// const ServiceItem = ({ title, description }) => (
//   <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
//     <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
//     <p className="text-gray-600 sm:w-2/3">{description}</p>
//   </div>
// );

// export default SiteVisit;


import React from "react";

const SiteVisit = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4 px-4 sm:px-8 md:px-16">
        On-Site Evaluation & Reporting by Green Shelter Design and Development
      </h1>
      <p className="text-lg mb-8 px-4 sm:px-8 md:px-16">
        Green Shelter Design and Development provides comprehensive Site Visit &
        Reporting services to collect crucial information for your project
        planning and design. Our on-site assessments guarantee that all
        site-specific factors are carefully recorded and analyzed.
      </p>

      <h2 className="text-2xl font-semibold mb-6 px-4 sm:px-8 md:px-16">
        Overview of Our Site Visit & Reporting Services:
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Site Measurements"
          description="We take precise measurements of your site to develop accurate site layouts and plans."
        />
        <ServiceItem
          title="Environmental Assessments"
          description="We assess environmental factors and potential impacts to ensure your project meets all environmental standards and regulations."
        />
        <ServiceItem
          title="Condition Reporting"
          description="We thoroughly document the existing condition of structures and infrastructure, giving you a clear overview of required repairs or updates."
        />
        <ServiceItem
          title="Site Photographs"
          description="We capture high-quality images of the site to aid in detailed analysis and reporting."
        />
        <ServiceItem
          title="Stakeholder Meetings"
          description="We organize discussions with local authorities, community members, and relevant parties to gather feedback and address any concerns."
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
