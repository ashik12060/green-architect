

import React from "react";
import { useTranslation } from "react-i18next";

const ArchBd = () => {
  const { t } = useTranslation('Service');  // Using 'archBd' namespace for translations

  const categories = [
    t("skyscrapers"),
    t("swimmingPools"),
    t("retailShops"),
    t("hospitals"),
    t("resorts"),
    t("banks"),
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-8 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-4">
        {t('architecturalVisualizations')}
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        {t('shapingBangladesh')}
      </p>

      <div className="max-w-3xl mx-auto space-y-4">
        {categories.map((category, index) => (
          <CategoryItem key={index} name={category} />
        ))}
      </div>
    </div>
  );
};

const CategoryItem = ({ name }) => (
  <div className="bg-white rounded-lg shadow-md p-4 text-center">
    <h2 className="text-xl font-semibold">{name}</h2>
  </div>
);

export default ArchBd;
