// import React from "react";
// import { useTranslation } from "react-i18next";

// const MasterPlanning = () => {

//   const { t } = useTranslation('Service');

//   return (
//     <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
//       <h1 className="text-3xl font-bold mb-4">Master Planning by Green Shelter Design and Development</h1>
//       <p className="text-lg mb-8">
//         At <span className="font-semibold">Green Shelter Design and Development</span>, we provide expert Master Planning services to design well-rounded and sustainable plans for your project. Our focus is on creating spaces that are functional, visually appealing, and prepared for future growth.
//       </p>

//       <h2 className="text-2xl font-semibold mb-6">Our Master Planning Services Include:</h2>

//       <div className="space-y-6 max-w-4xl w-full">
//         <ServiceItem
//           title="Site Evaluation"
//           description="We conduct a comprehensive site evaluation, examining topography, existing structures, and environmental factors to guide the planning process."
//         />
//         <ServiceItem
//           title="Concept Design"
//           description="We develop initial design concepts that align with your vision, objectives, and the distinctive features of the site."
//         />
//         <ServiceItem
//           title="Land Planning"
//           description="We design land use plans that make the most efficient use of space, balancing residential, commercial, and recreational zones."
//         />
//         <ServiceItem
//           title="Infrastructure Design"
//           description="We plan the core infrastructure, such as roads, utilities, and public services, ensuring a smooth and sustainable development."
//         />
//         <ServiceItem
//           title="Eco-friendly Planning"
//           description="We incorporate green spaces and sustainable practices into the plan to promote environmental responsibility."
//         />
//         <ServiceItem
//           title="Community Collaboration"
//           description="We work closely with the community and stakeholders to collect feedback and ensure the plan aligns with local needs and expectations."
//         />
//         <ServiceItem
//           title="Execution Plan"
//           description="We create a detailed execution plan for the master plan, including timelines, phases, and resource allocation."
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

// export default MasterPlanning;


import React from "react";
import { useTranslation } from "react-i18next";

const MasterPlanning = () => {
  const { t } = useTranslation('Service'); // Using 'Service' namespace for translations

  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">{t("masterPlanningTitle")}</h1>
      <p className="text-lg mb-8">
        {t("masterPlanningIntro")}
      </p>

      <h2 className="text-2xl font-semibold mb-6">{t("masterPlanningCover")}</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t("siteEvaluation")}
          description={t("siteEvaluationDesc")}
        />
        <ServiceItem
          title={t("conceptDesign")}
          description={t("conceptDesignDesc")}
        />
        <ServiceItem
          title={t("landPlanning")}
          description={t("landPlanningDesc")}
        />
        <ServiceItem
          title={t("infrastructureDesign")}
          description={t("infrastructureDesignDesc")}
        />
        <ServiceItem
          title={t("ecoFriendlyPlanning")}
          description={t("ecoFriendlyPlanningDesc")}
        />
        <ServiceItem
          title={t("communityCollaboration")}
          description={t("communityCollaborationDesc")}
        />
        <ServiceItem
          title={t("executionPlan")}
          description={t("executionPlanDesc")}
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

export default MasterPlanning;
