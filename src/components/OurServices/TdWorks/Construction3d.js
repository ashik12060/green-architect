

import React from "react";
import { useTranslation } from "react-i18next";

const Construction3d = () => {
  const { t } = useTranslation('Service'); // Use 'construction' namespace for translations

  const categories = [
    t("modularHome1"),
    t("shippingContainerHome"),
    t("storageRackingSystem"),
    t("railwayBridge"),
    t("prefabParkingGarage"),
    t("excavationWork"),
    t("waterTreatmentSystem"),
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-8 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-4">{t('constructionHeader')}</h1>
      <p className="text-lg text-center text-gray-600 mb-8">{t('constructionIntro')}</p>

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

export default Construction3d;
