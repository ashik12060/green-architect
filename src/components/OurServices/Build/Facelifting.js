

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
