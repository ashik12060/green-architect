// import React from "react";

// const Structure = () => {
//   return (
//     <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
//       <h1 className="text-3xl font-bold mb-4">Structural Design by Green Shelter Design and Development</h1>
//       <p className="text-lg mb-8">
//         Green Shelter Design and Development specializes in providing complete Structural Design services to guarantee the safety and durability of your projects. Our skilled team crafts resilient and innovative structures built to last.
//       </p>

//       <h2 className="text-2xl font-semibold mb-6">
//         Our Structural Design Services:
//       </h2>

//       <div className="space-y-6 max-w-4xl w-full">
//         <ServiceItem
//           title="Structural Analysis"
//           description="We perform comprehensive structural analyses to determine optimal design strategies, ensuring both safety and efficiency."
//         />
//         <ServiceItem
//           title="Building Structures"
//           description="Our designs include robust structural frameworks for residential, commercial, and industrial buildings, capable of handling diverse loads and forces."
//         />
//         <ServiceItem
//           title="Foundation Design"
//           description="We develop secure and tailored foundation designs that match the specific soil characteristics and requirements of your site."
//         />
//         <ServiceItem
//           title="Seismic Design"
//           description="Our seismic design expertise ensures your buildings are protected from earthquake damage and comply with relevant regulations."
//         />
//         <ServiceItem
//           title="Retrofitting & Strengthening"
//           description="We offer retrofitting and strengthening solutions for older structures, enhancing their safety and extending their operational life."
//         />
//         <ServiceItem
//           title="Materials Selection"
//           description="We carefully choose construction materials that combine durability, cost-effectiveness, and environmental sustainability."
//         />
//         <ServiceItem
//           title="Structural Inspections"
//           description="We conduct thorough structural inspections to evaluate the condition of existing buildings and suggest necessary improvements."
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

// export default Structure;


// import React from "react";
// import { useTranslation } from "react-i18next";

// const StructuralDesign = () => {
//   const { t } = useTranslation('Service');

//   return (
//     <div className="flex flex-col items-center px-4 sm:px-8 py-8 text-center bg-white text-gray-800">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-4">
//         {t('structuralDesignTitle')}
//       </h1>
//       <p className="text-base sm:text-lg mb-8 text-justify">
//         {t('structuralDesignIntro')}
//       </p>

//       <h2 className="text-xl sm:text-2xl font-semibold mb-6">
//         {t('structuralAnalysis')}
//       </h2>
//       <p className="text-sm sm:text-base text-gray-600 sm:w-2/3 text-justify">
//         {t('structuralAnalysisDesc')}
//       </p>

//       <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-6">
//         {t('buildingStructures')}
//       </h2>
//       <p className="text-sm sm:text-base text-gray-600 sm:w-2/3 text-justify">
//         {t('buildingStructuresDesc')}
//       </p>

//       <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-6">
//         {t('foundationDesign')}
//       </h2>
//       <p className="text-sm sm:text-base text-gray-600 sm:w-2/3 text-justify">
//         {t('foundationDesignDesc')}
//       </p>

//       <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-6">
//         {t('seismicDesign')}
//       </h2>
//       <p className="text-sm sm:text-base text-gray-600 sm:w-2/3 text-justify">
//         {t('seismicDesignDesc')}
//       </p>

//       <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-6">
//         {t('retrofittingStrengthening')}
//       </h2>
//       <p className="text-sm sm:text-base text-gray-600 sm:w-2/3 text-justify">
//         {t('retrofittingStrengtheningDesc')}
//       </p>

//       <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-6">
//         {t('materialsSelection')}
//       </h2>
//       <p className="text-sm sm:text-base text-gray-600 sm:w-2/3 text-justify">
//         {t('materialsSelectionDesc')}
//       </p>

//       <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-6">
//         {t('structuralInspections')}
//       </h2>
//       <p className="text-sm sm:text-base text-gray-600 sm:w-2/3 text-justify">
//         {t('structuralInspectionsDesc')}
//       </p>
//     </div>
//   );
// };

// export default StructuralDesign;


import React from "react";
import { useTranslation } from "react-i18next";

const Structure = () => {
  const { t } = useTranslation('Service');

  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">
        {t('structuralDesignTitle')}
      </h1>
      <p className="text-lg mb-8">
        {t('structuralDesignIntro')}
      </p>

      

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t('structuralAnalysis')}
          description={t('structuralAnalysisDesc')}
        />
        <ServiceItem
          title={t('buildingStructures')}
          description={t('buildingStructuresDesc')}
        />
        <ServiceItem
          title={t('foundationDesign')}
          description={t('foundationDesignDesc')}
        />
        <ServiceItem
          title={t('seismicDesign')}
          description={t('seismicDesignDesc')}
        />
        <ServiceItem
          title={t('retrofittingStrengthening')}
          description={t('retrofittingStrengtheningDesc')}
        />
        <ServiceItem
          title={t('materialsSelection')}
          description={t('materialsSelectionDesc')}
        />
        <ServiceItem
          title={t('structuralInspections')}
          description={t('structuralInspectionsDesc')}
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

export default Structure;
