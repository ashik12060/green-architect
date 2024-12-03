

import React from "react";
import { useTranslation } from "react-i18next";

const TailoredKitchenAccessories = () => {
  const { t } = useTranslation('Service');  // Fetch translations for 'Service' namespace

  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      {/* Header Section */}
      <h1 className="text-3xl font-bold mb-4">{t('kitchenAccessoriesHeader')}</h1>
      <p className="text-lg mb-8">{t('kitchenAccessoriesIntroText')}</p>

      {/* Service Items */}
      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t("customCabinetryTitle")}
          description={t("customCabinetryDesc")}
        />
        <ServiceItem
          title={t("countertopsBacksplashesTitle")}
          description={t("countertopsBacksplashesDesc")}
        />
        <ServiceItem
          title={t("organizedStorageTitle")}
          description={t("organizedStorageDesc")}
        />
        <ServiceItem
          title={t("customizedLightingTitle")}
          description={t("customizedLightingDesc")}
        />
        <ServiceItem
          title={t("uniqueHardwareTitle")}
          description={t("uniqueHardwareDesc")}
        />
        <ServiceItem
          title={t("customKitchenIslandsTitle")}
          description={t("customKitchenIslandsDesc")}
        />
        <ServiceItem
          title={t("ecoFriendlyMaterialsTitle")}
          description={t("ecoFriendlyMaterialsDesc")}
        />
        <ServiceItem
          title={t("threeDDesignPreviewsTitle")}
          description={t("threeDDesignPreviewsDesc")}
        />
        <ServiceItem
          title={t("professionalInstallationTitle")}
          description={t("professionalInstallationDesc")}
        />
        <ServiceItem
          title={t("tailoredConsultationsTitlee")}
          description={t("tailoredConsultationsDescc")}
        />
      </div>
    </div>
  );
};

// Individual Service Item
const ServiceItem = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
    <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
    <p className="text-gray-600 sm:w-2/3 text-justify">{description}</p>
  </div>
);

export default TailoredKitchenAccessories;
