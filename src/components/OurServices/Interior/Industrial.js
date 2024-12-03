


import React from "react";
import { useTranslation } from "react-i18next";

const Industrial = () => {
  const { t } = useTranslation('Service'); // Fetch translations for 'Service' namespace

  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      {/* Header Section */}
      <h1 className="text-3xl font-bold mb-4">{t('industrialInteriorDesignTitle')}</h1>
      <p className="text-lg mb-8">{t('industrialInteriorDesignIntro')}</p>

      {/* Subheading */}
      <h2 className="text-2xl font-semibold mb-6">{t('whatWeOfferInIndustrialInteriorDesign')}</h2>

      {/* Service Items */}
      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t("maximizedSpaceUtilization")}
          description={t("maximizedSpaceUtilizationDesc")}
        />
        <ServiceItem
          title={t("employeeFriendlyEnvironments")}
          description={t("employeeFriendlyEnvironmentsDesc")}
        />
        <ServiceItem
          title={t("durableMaterialSelection")}
          description={t("durableMaterialSelectionDesc")}
        />
        <ServiceItem
          title={t("customizedLightingSolutions")}
          description={t("customizedLightingSolutionsDesc")}
        />
        <ServiceItem
          title={t("tailoredStorageSystems")}
          description={t("tailoredStorageSystemsDesc")}
        />
        <ServiceItem
          title={t("integratedSafetyFeatures")}
          description={t("integratedSafetyFeaturesDesc")}
        />
        <ServiceItem
          title={t("brandIdentityIntegration")}
          description={t("brandIdentityIntegrationDesc")}
        />
        <ServiceItem
          title={t("ecoFriendlyPractices")}
          description={t("ecoFriendlyPracticesDesc")}
        />
        <ServiceItem
          title={t("realistic3DVisualizations")}
          description={t("realistic3DVisualizationsDesc")}
        />
        <ServiceItem
          title={t("comprehensiveProjectManagement")}
          description={t("comprehensiveProjectManagementDesc")}
        />
      </div>
    </div>
  );
};

// Individual Service Item Component
const ServiceItem = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
    <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
    <p className="text-gray-600 sm:w-2/3 text-justify">{description}</p>
  </div>
);

export default Industrial;
