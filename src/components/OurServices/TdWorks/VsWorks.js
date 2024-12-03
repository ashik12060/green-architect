


import React from "react";
import { useTranslation } from "react-i18next";

const VsWorks = () => {
  const { t } = useTranslation('Service');  // Using the 'vsWorks' namespace for translations

  const vrItems = [
    {
      title: t("interiorVisualization"),
      description: t("interiorDescriptionn"),
    },
    {
      title: t("exteriorVisualization"),
      description: t("exteriorDescription"),
    },
    {
      title: t("virtualRealityAnimation"),
      description: t("vrAnimationDescription"),
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-8 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8">
        {t('virtualRealityProjects')}
      </h1>
      <p className="text-lg text-center mb-12">
        {t('vrIntro')}
      </p>

      <div className="space-y-8 max-w-4xl mx-auto">
        {vrItems.map((item, index) => (
          <VRItem key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

const VRItem = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default VsWorks;
