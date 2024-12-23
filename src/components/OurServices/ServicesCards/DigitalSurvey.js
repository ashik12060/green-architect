import React from "react";
import { useTranslation } from "react-i18next";

const DigitalSurvey = () => {
  const { t } = useTranslation('Service');
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4 px-4 sm:px-8 md:px-16">
        {t("digitalSurveyTitle")}
      </h1>
      <p className="text-lg mb-8 px-4 sm:px-8 md:px-16">
        {t("digitalSurveyIntro")}
      </p>

      <h2 className="text-2xl font-semibold mb-6 px-4 sm:px-8 md:px-16">
        {t("digitalSurveyOverview")}
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t("threeDScanning")}
          description={t("threeDScanningDesc")}
        />
        <ServiceItem
          title={t("droneSurveys")}
          description={t("droneSurveysDesc")}
        />
        <ServiceItem
          title={t("gisMapping")}
          description={t("gisMappingDesc")}
        />
        <ServiceItem
          title={t("dataIntegration")}
          description={t("dataIntegrationDesc")}
        />
        <ServiceItem
          title={t("virtualRealityIntegration")}
          description={t("virtualRealityIntegrationDesc")}
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

export default DigitalSurvey;
