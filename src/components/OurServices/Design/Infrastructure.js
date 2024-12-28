


import React from "react";
import { useTranslation } from "react-i18next";

const DroneSurvey = () => {
  const { t } = useTranslation('Service');

  return (
    <div className="flex flex-col items-center py-12 px-4 bg-white text-gray-800">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center mb-6 max-w-4xl">
        {t('droneSurveyTitle')}
      </h1>
      <p className="text-lg text-justify mb-10 max-w-4xl leading-relaxed">
        {t('droneSurveyIntro')}
      </p>

      {/* Subheading */}
      <h2 className="text-2xl font-semibold text-center mb-8">
        {t('droneSurveyServices')}
      </h2>

      {/* Service Items */}
      <div className="space-y-8 max-w-4xl w-full">
        <ServiceItem
          title={t("highResolutionAerialPhotography")}
          description={t("highResolutionAerialPhotographyDesc")}
        />
        <ServiceItem
          title={t("topographicSurveying")}
          description={t("topographicSurveyingDesc")}
        />
        <ServiceItem
          title={t("threeDSiteMapping")}
          description={t("threeDSiteMappingDesc")}
        />
        <ServiceItem
          title={t("constructionMonitoring")}
          description={t("constructionMonitoringDesc")}
        />
        <ServiceItem
          title={t("environmentalAssessments")}
          description={t("environmentalAssessmentsDesc")}
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
