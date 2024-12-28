

import React from "react";
import { useTranslation } from "react-i18next";

const CustomFurniture = () => {
  const { t } = useTranslation("Service"); // Fetch translations for the 'Service' namespace

  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      {/* Header Section */}
      <h1 className="text-3xl font-bold mb-4">{t("customFurnitureHeader")}</h1>
      <p className="text-lg mb-8">{t("customFurnitureIntroText")}</p>

      {/* Subheading */}
      <h2 className="text-2xl font-semibold mb-6">{t("customFurnitureServices")}</h2>

      {/* Service Items */}
      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t("bespokeDesignsTitle")}
          description={t("bespokeDesignsDesc")}
        />
        <ServiceItem
          title={t("premiumMaterialSelectionTitle")}
          description={t("premiumMaterialSelectionDesc")}
        />
        <ServiceItem
          title={t("comfortFocusedDesignTitle")}
          description={t("comfortFocusedDesignDesc")}
        />
        <ServiceItem
          title={t("spaceSavingInnovationsTitle")}
          description={t("spaceSavingInnovationsDesc")}
        />
        <ServiceItem
          title={t("seamlessStyleIntegrationTitle")}
          description={t("seamlessStyleIntegrationDesc")}
        />
        <ServiceItem
          title={t("attentionToCraftsmanshipTitle")}
          description={t("attentionToCraftsmanshipDesc")}
        />
        <ServiceItem
          title={t("3DConceptPreviewsTitle")}
          description={t("3DConceptPreviewsDesc")}
        />
        <ServiceItem
          title={t("ecoFriendlyChoicesTitle")}
          description={t("ecoFriendlyChoicesDesc")}
        />
        <ServiceItem
          title={t("expertInstallationTitle")}
          description={t("expertInstallationDesc")}
        />
        <ServiceItem
          title={t("tailoredConsultationsTitle")}
          description={t("tailoredConsultationsDesc")}
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

export default CustomFurniture;
