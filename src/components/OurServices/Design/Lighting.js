


import React from "react";
import { useTranslation } from "react-i18next";

const LightingDesign = () => {
  const { t } = useTranslation('Service');

  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">{t('lightingDesignTitle')}</h1>
      <p className="text-lg mb-8">{t('lightingDesignIntro')}</p>


      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t('indoorLighting')}
          description={t('indoorLightingDesc')}
        />
        <ServiceItem
          title={t('outdoorLighting')}
          description={t('outdoorLightingDesc')}
        />
        <ServiceItem
          title={t('architecturalLighting')}
          description={t('architecturalLightingDesc')}
        />
        <ServiceItem
          title={t('energySavingLighting')}
          description={t('energySavingLightingDesc')}
        />
        <ServiceItem
          title={t('lightingControlSystems')}
          description={t('lightingControlSystemsDesc')}
        />
        <ServiceItem
          title={t('emergencyLighting')}
          description={t('emergencyLightingDesc')}
        />
        <ServiceItem
          title={t('lightingEvaluationImprovements')}
          description={t('lightingEvaluationImprovementsDesc')}
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

export default LightingDesign;
