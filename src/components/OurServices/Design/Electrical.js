


import React from "react";
import { useTranslation } from "react-i18next";

const ElectricalDesign = () => {
  const { t } = useTranslation('Service');

  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">{t('electricalDesignTitle')}</h1>
      <p className="text-lg mb-8">{t('electricalDesignIntro')}</p>


      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t('powerDistribution')}
          description={t('powerDistributionDesc')}
        />
        <ServiceItem
          title={t('lightingSolutions')}
          description={t('lightingSolutionsDesc')}
        />
        <ServiceItem
          title={t('backupPowerSystems')}
          description={t('backupPowerSystemsDesc')}
        />
        <ServiceItem
          title={t('sustainableEnergyIntegration')}
          description={t('sustainableEnergyIntegrationDesc')}
        />
        <ServiceItem
          title={t('electricalSafetySystems')}
          description={t('electricalSafetySystemsDesc')}
        />
        <ServiceItem
          title={t('smartBuildingSolutions')}
          description={t('smartBuildingSolutionsDesc')}
        />
        <ServiceItem
          title={t('complianceWithRegulations')}
          description={t('complianceWithRegulationsDesc')}
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

export default ElectricalDesign;
