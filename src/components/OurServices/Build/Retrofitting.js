
import React from "react";
import { useTranslation } from "react-i18next";

const Retrofitting = () => {
  const { t } = useTranslation('Service');

  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">{t("retrofittingTitle")}</h1>
      <p className="text-lg mb-8">
        {t("retrofittingIntro")}
      </p>

      <h2 className="text-2xl font-semibold mb-6">{t("retrofittingSolutions")}</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t("structuralReinforcements")}
          description={t("structuralReinforcementsDesc")}
        />
        <ServiceItem
          title={t("seismicReinforcement")}
          description={t("seismicReinforcementDesc")}
        />
        <ServiceItem
          title={t("energyConservationUpgrades")}
          description={t("energyConservationUpgradesDesc")}
        />
        <ServiceItem
          title={t("fireSafetyEnhancements")}
          description={t("fireSafetyEnhancementsDesc")}
        />
        <ServiceItem
          title={t("waterproofingAndDamagePrevention")}
          description={t("waterproofingAndDamagePreventionDesc")}
        />
        <ServiceItem
          title={t("accessibilityImprovements")}
          description={t("accessibilityImprovementsDesc")}
        />
        <ServiceItem
          title={t("mechanicalElectricalSystemUpdates")}
          description={t("mechanicalElectricalSystemUpdatesDesc")}
        />
        <ServiceItem
          title={t("facadeRenovations")}
          description={t("facadeRenovationsDesc")}
        />
        <ServiceItem
          title={t("comprehensiveProjectManagement")}
          description={t("comprehensiveProjectManagementDesc")}
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

export default Retrofitting;
