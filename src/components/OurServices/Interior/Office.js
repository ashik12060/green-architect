

import React from "react";
import { useTranslation } from "react-i18next";

const Office = () => {
  const { t } = useTranslation("Service"); // Fetch translations for the 'Service' namespace

  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      {/* Header Section */}
      <h1 className="text-3xl font-bold mb-4">{t("officeInteriorDesignHeader")}</h1>
      <p className="text-lg mb-8">{t("officeInteriorDesignIntroText")}</p>

      {/* Subheading */}
      <h2 className="text-2xl font-semibold mb-6">{t("officeInteriorDesignServices")}</h2>

      {/* Service Items */}
      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t("workplaceOptimizationTitle")}
          description={t("workplaceOptimizationDescription")}
        />
        <ServiceItem
          title={t("comfortSolutionsTitle")}
          description={t("comfortSolutionsDescription")}
        />
        <ServiceItem
          title={t("brandExpressionTitle")}
          description={t("brandExpressionDescription")}
        />
        <ServiceItem
          title={t("ambientLightingTitle")}
          description={t("ambientLightingDescription")}
        />
        <ServiceItem
          title={t("adaptableWorkspacesTitle")}
          description={t("adaptableWorkspacesDescription")}
        />
        <ServiceItem
          title={t("colorSchemeSelectionTitle")}
          description={t("colorSchemeSelectionDescription")}
        />
        <ServiceItem
          title={t("techIntegrationTitle")}
          description={t("techIntegrationDescription")}
        />
        <ServiceItem
          title={t("relaxationZonesTitle")}
          description={t("relaxationZonesDescription")}
        />
        <ServiceItem
          title={t("organizationSolutionsTitle")}
          description={t("organizationSolutionsDescription")}
        />
        <ServiceItem
          title={t("ecoFriendlyDesignTitle")}
          description={t("ecoFriendlyDesignDescription")}
        />
        <ServiceItem
          title={t("designSimulationTitle")}
          description={t("designSimulationDescription")}
        />
        <ServiceItem
          title={t("projectSupervisionTitle")}
          description={t("projectSupervisionDescription")}
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

export default Office;
