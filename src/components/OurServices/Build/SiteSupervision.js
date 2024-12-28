

import React from "react";
import { useTranslation } from "react-i18next";

const SiteSupervision = () => {
  const { t } = useTranslation('Service');  // Fetch translations for the 'Service' namespace

  return (
    <div className="flex flex-col items-center py-12 px-4 bg-white text-gray-800">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center mb-6 max-w-4xl">
        {t('siteSupervisionTitle')}
      </h1>
      <p className="text-lg text-justify mb-10 max-w-4xl leading-relaxed">
        {t('siteSupervisionIntro')}
      </p>

      {/* Subheading */}
      <h2 className="text-2xl font-semibold text-center mb-8">
        {t('siteSupervisionServices')}
      </h2>

      {/* Service Items */}
      <div className="space-y-8 max-w-4xl w-full">
        <ServiceItem
          title={t("dailySupervision")}
          description={t("dailySupervisionDesc")}
        />
        <ServiceItem
          title={t("qualityControl")}
          description={t("qualityControlDesc")}
        />
        <ServiceItem
          title={t("safetyOversight")}
          description={t("safetyOversightDesc")}
        />
        <ServiceItem
          title={t("progressTracking")}
          description={t("progressTrackingDesc")}
        />
        <ServiceItem
          title={t("coordinationOfTrades")}
          description={t("coordinationOfTradesDesc")}
        />
        <ServiceItem
          title={t("problemResolution")}
          description={t("problemResolutionDesc")}
        />
        <ServiceItem
          title={t("regulatoryCompliance")}
          description={t("regulatoryComplianceDesc")}
        />
        <ServiceItem
          title={t("finalProjectInspection")}
          description={t("finalProjectInspectionDesc")}
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

export default SiteSupervision;
