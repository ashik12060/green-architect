

import React from "react";
import { useTranslation } from "react-i18next";

const MechanicalDesign = () => {
  const { t } = useTranslation('Service');

  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">{t('mechanicalDesignTitle')}</h1>
      <p className="text-lg mb-8">{t('mechanicalDesignIntro')}</p>


      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t('hvacSystems')}
          description={t('hvacSystemsDesc')}
        />
        <ServiceItem
          title={t('plumbingSystems')}
          description={t('plumbingSystemsDesc')}
        />
        <ServiceItem
          title={t('fireProtectionSystems')}
          description={t('fireProtectionSystemsDesc')}
        />
        <ServiceItem
          title={t('mechanicalEquipmentLayout')}
          description={t('mechanicalEquipmentLayoutDesc')}
        />
        <ServiceItem
          title={t('energyManagement')}
          description={t('energyManagementDesc')}
        />
        <ServiceItem
          title={t('sustainableDesign')}
          description={t('sustainableDesignDesc')}
        />
        <ServiceItem
          title={t('regulatoryCompliance')}
          description={t('regulatoryComplianceDesc')}
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

export default MechanicalDesign;
