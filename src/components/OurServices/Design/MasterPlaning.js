


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
