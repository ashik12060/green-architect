

import React from "react";
import { useTranslation } from "react-i18next";

const OilGas = () => {
  const { t } = useTranslation('Service'); // Use 'oilGas' namespace for translations

  const animationCategories = [
    t("delayedCokerUnit"),
    t("asphaltProductionPlant"),
    t("lngPlantInsulationSystems"),
    t("lngSafetyProtocols"),
    t("lngFacilities"),
    t("lngTransportSafetyMeasures"),
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-8 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-4">{t('oilGasHeader')}</h1>
      <p className="text-lg text-center text-gray-600 mb-8">{t('oilGasIntro')}</p>

      <div className="max-w-3xl mx-auto space-y-4">
        {animationCategories.map((category, index) => (
          <AnimationCategory key={index} categoryName={category} />
        ))}
      </div>
    </div>
  );
};

const AnimationCategory = ({ categoryName }) => (
  <div className="bg-white rounded-lg shadow-md p-4 text-center">
    <h2 className="text-xl font-semibold">{categoryName}</h2>
  </div>
);

export default OilGas;
