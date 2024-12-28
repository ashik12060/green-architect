


import React from "react";
import { useTranslation } from "react-i18next";

const Residential = () => {
  const { t } = useTranslation('Service'); // Fetch translations for the 'Service' namespace

  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      {/* Header Section */}
      <h1 className="text-3xl font-bold mb-4">
        {t('residentialInteriorDesignTitle')}
      </h1>
      <p className="text-lg mb-8">
        {t('residentialInteriorDesignIntro')}
      </p>

      {/* Subheading */}
      <h2 className="text-2xl font-semibold mb-6">
        {t('ourExpertiseInResidentialInteriorDesign')}
      </h2>

      {/* Service Items */}
      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t("spacePlanning")}
          description={t("spacePlanningDesc")}
        />
        <ServiceItem
          title={t("customFurnitureDesign")}
          description={t("customFurnitureDesignDesc")}
        />
        <ServiceItem
          title={t("colorConsultation")}
          description={t("colorConsultationDesc")}
        />
        <ServiceItem
          title={t("lightingDesign")}
          description={t("lightingDesignDesc")}
        />
        <ServiceItem
          title={t("kitchenBathroomDesign")}
          description={t("kitchenBathroomDesignDesc")}
        />
        <ServiceItem
          title={t("storageSolutions")}
          description={t("storageSolutionsDesc")}
        />
        <ServiceItem
          title={t("materialFinishSelection")}
          description={t("materialFinishSelectionDesc")}
        />
        <ServiceItem
          title={t("3DVisualization")}
          description={t("3DVisualizationDesc")}
        />
        <ServiceItem
          title={t("projectManagement")}
          description={t("projectManagementDesc")}
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

export default Residential;
