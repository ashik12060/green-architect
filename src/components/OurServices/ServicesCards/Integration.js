

// import React from "react";

// const ProjectIntegration = () => {
//   return (
//     <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
//       <h1 className="text-3xl font-bold mb-4 px-8 sm:px-32">
//         Comprehensive Project Integration Services by Green Shelter Design and Development
//       </h1>
//       <p className="text-lg mb-8 text-justify px-8 sm:px-32">
//         At Green Shelter Design and Development, we provide a complete range of Project Integration services to ensure every aspect of your project is seamlessly coordinated and executed. Our expertise lies in uniting all project components to work in perfect synergy for successful outcomes.
//       </p>

//       <h2 className="text-2xl font-semibold mb-6">Key Features of Our Project Integration Services:</h2>

//       <div className="space-y-6 max-w-4xl w-full">
//         <ServiceItem
//           title="Strategic Planning and Coordination"
//           description="We develop a comprehensive project strategy and oversee all related tasks, ensuring smooth operations and effective management throughout the project's duration."
//         />
//         <ServiceItem
//           title="Efficient Resource Allocation"
//           description="We optimize resource usage by ensuring timely availability of required materials, labor, and equipment, minimizing delays and inefficiencies."
//         />
//         <ServiceItem
//           title="Effective Stakeholder Communication"
//           description="We prioritize clear and transparent communication, keeping all stakeholders informed and aligned with the project's vision and progress."
//         />
//         <ServiceItem
//           title="Comprehensive Risk Management"
//           description="We proactively identify potential risks and implement strategies to address them, ensuring uninterrupted project flow and success."
//         />
//         <ServiceItem
//           title="Enhanced Quality Assurance"
//           description="Our strict quality assurance processes guarantee that all project deliverables meet or exceed established standards and expectations."
//         />
//         <ServiceItem
//           title="Ongoing Monitoring and Reporting"
//           description="We provide continuous project tracking and regular updates, ensuring transparency, accountability, and adherence to timelines."
//         />
//       </div>
//     </div>
//   );
// };

// const ServiceItem = ({ title, description }) => (
//   <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4 text-justify">
//     <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3 text-left">
//       {title}
//     </h3>
//     <p className="text-gray-600 sm:w-2/3 text-left">{description}</p>
//   </div>
// );

// export default ProjectIntegration;



import React from "react";
import Footer from "../../Shared/Footer/Footer";
import { useTranslation } from "react-i18next";

const ProjectIntegration = () => {
  const { t } = useTranslation("Service");

  return (
    <>
      <div className="flex flex-col items-center p-6 sm:p-8 text-center bg-white text-gray-800">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 px-4 sm:px-32">
          {t("projectIntegrationTitle")}
        </h1>
        <p className="text-base sm:text-lg mb-8 text-justify px-4 sm:px-32">
          {t("projectIntegrationIntro")}
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
          {t("projectIntegrationFeatures")}
        </h2>

        <div className="space-y-6 max-w-full sm:max-w-4xl w-full">
          <ServiceItem
            title={t("strategicPlanning")}
            description={t("strategicPlanningDesc")}
          />
          <ServiceItem
            title={t("efficientResourceAllocation")}
            description={t("efficientResourceAllocationDesc")}
          />
          <ServiceItem
            title={t("effectiveStakeholderCommunication")}
            description={t("effectiveStakeholderCommunicationDesc")}
          />
          <ServiceItem
            title={t("comprehensiveRiskManagement")}
            description={t("comprehensiveRiskManagementDesc")}
          />
          <ServiceItem
            title={t("enhancedQualityAssurance")}
            description={t("enhancedQualityAssuranceDesc")}
          />
          <ServiceItem
            title={t("ongoingMonitoringAndReporting")}
            description={t("ongoingMonitoringAndReportingDesc")}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

const ServiceItem = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
    <h3 className="text-lg sm:text-xl font-semibold flex-shrink-0 sm:w-1/3 text-left">
      {title}
    </h3>
    <p className="text-gray-600 sm:w-2/3 text-left">{description}</p>
  </div>
);

export default ProjectIntegration;
