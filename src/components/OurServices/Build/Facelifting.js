// import React from "react";

// const Facelifting = () => {
//   return (
//     <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
//       <h1 className="text-3xl font-bold mb-4">Facelifting & Additions by Green Shelter Design and Development</h1>
//       <p className="text-lg mb-8">
//         Green Shelter Design and Development specializes in Facelifting and Addition services, transforming and expanding your existing spaces. Our expert team ensures smooth integration, enhancing both the visual and functional qualities of your property.
//       </p>

//       <h2 className="text-2xl font-semibold mb-6">Our Facelifting & Addition Services:</h2>

//       <div className="space-y-6 max-w-4xl w-full">
//         <ServiceItem
//           title="Exterior Refurbishment"
//           description="We revamp the exterior of your property, improving its curb appeal and overall visual impact."
//         />
//         <ServiceItem
//           title="Interior Enhancements"
//           description="We upgrade interior spaces with new finishes, fixtures, and layouts to enhance both function and style."
//         />
//         <ServiceItem
//           title="Property Extensions"
//           description="We design and build extensions, such as additional rooms or spaces, to enhance your building’s functionality."
//         />
//         <ServiceItem
//           title="Structural Upgrades"
//           description="We strengthen and upgrade the structural components to accommodate new additions while ensuring the stability of the original structure."
//         />
//         <ServiceItem
//           title="Facade Renovation"
//           description="We refresh the building’s facade with new materials, windows, and design details for a modern, appealing look."
//         />
//         <ServiceItem
//           title="Sustainability Improvements"
//           description="We integrate energy-saving solutions, such as better insulation, windows, and efficient HVAC systems, to improve overall energy efficiency."
//         />
//         <ServiceItem
//           title="Tailored Design Solutions"
//           description="We create custom designs to meet your specific needs, ensuring the new additions blend perfectly with your current building."
//         />
//         <ServiceItem
//           title="Permits and Compliance"
//           description="We manage all required permits and ensure that all work is fully compliant with local building codes and regulations."
//         />
//         <ServiceItem
//           title="Project Oversight"
//           description="We handle the entire process from initial design to final inspection, ensuring quality work and timely completion."
//         />
//       </div>
//     </div>
//   );
// };

// const ServiceItem = ({ title, description }) => (
//   <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
//     <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
//     <p className="text-gray-600 sm:w-2/3 text-justify">{description}</p>
//   </div>
// );

// export default Facelifting;



import React from "react";
import { useTranslation } from "react-i18next";

const Facelifting = () => {
  const { t } = useTranslation("Service");

  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">{t("faceliftingAndAdditionsTitle")}</h1>
      <p className="text-lg mb-8">
        {t("faceliftingAndAdditionsIntro")}
      </p>

      <h2 className="text-2xl font-semibold mb-6">{t("faceliftingAndAdditionsServices")}</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t("exteriorRefurbishment")}
          description={t("exteriorRefurbishmentDesc")}
        />
        <ServiceItem
          title={t("interiorEnhancements")}
          description={t("interiorEnhancementsDesc")}
        />
        <ServiceItem
          title={t("propertyExtensions")}
          description={t("propertyExtensionsDesc")}
        />
        <ServiceItem
          title={t("structuralUpgrades")}
          description={t("structuralUpgradesDesc")}
        />
        <ServiceItem
          title={t("facadeRenovation")}
          description={t("facadeRenovationDesc")}
        />
        <ServiceItem
          title={t("sustainabilityImprovements")}
          description={t("sustainabilityImprovementsDesc")}
        />
        <ServiceItem
          title={t("tailoredDesignSolutions")}
          description={t("tailoredDesignSolutionsDesc")}
        />
        <ServiceItem
          title={t("permitsAndCompliance")}
          description={t("permitsAndComplianceDesc")}
        />
        <ServiceItem
          title={t("projectOversight")}
          description={t("projectOversightDesc")}
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
