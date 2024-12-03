
import React from "react";
import { useTranslation } from "react-i18next";

const PMC = () => {
  const { t } = useTranslation('Service');  // Fetch translations for 'Service' namespace

  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      {/* Header Section */}
      <h1 className="text-3xl font-bold mb-4">{t('pmcTitle')}</h1>
      <p className="text-lg mb-8">{t('pmcIntro')}</p>

      {/* Subheading */}

      {/* Service Items */}
      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t("projectPlanning")}
          description={t("projectPlanningDesc")}
        />
        <ServiceItem
          title={t("contractOversight")}
          description={t("contractOversightDesc")}
        />
        <ServiceItem
          title={t("qualityAssurance")}
          description={t("qualityAssuranceDesc")}
        />
        <ServiceItem
          title={t("riskMitigation")}
          description={t("riskMitigationDesc")}
        />
        <ServiceItem
          title={t("budgetOversight")}
          description={t("budgetOversightDesc")}
        />
        <ServiceItem
          title={t("projectProgressTracking")}
          description={t("projectProgressTrackingDesc")}
        />
        <ServiceItem
          title={t("stakeholderEngagement")}
          description={t("stakeholderEngagementDesc")}
        />
        <ServiceItem
          title={t("commissioningAndHandover")}
          description={t("commissioningAndHandoverDesc")}
        />
      </div>
    </div>
  );
};

// Individual Service Item
const ServiceItem = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
    <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
    <p className="text-gray-600 sm:w-2/3 text-justify">{description}</p>
  </div>
);

export default PMC;
