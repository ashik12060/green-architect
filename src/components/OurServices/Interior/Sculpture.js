



import React from "react";
import { useTranslation } from "react-i18next";

const Sculpture = () => {
  const { t } = useTranslation("Service"); // Fetch translations for the 'Service' namespace

  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      {/* Header Section */}
      <h1 className="text-3xl font-bold mb-4">{t("terracottaSculptureHeader")}</h1>
      <p className="text-lg mb-8">{t("terracottaSculptureIntroText")}</p>

      {/* Subheading */}
      <h2 className="text-2xl font-semibold mb-6">{t("terracottaSculptureServices")}</h2>

      {/* Service Items */}
      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t("customSculpturesTitle")}
          description={t("customSculpturesDesc")}
        />
        <ServiceItem
          title={t("terracottaArtTitle")}
          description={t("terracottaArtDesc")}
        />
        <ServiceItem
          title={t("thematicDesignsTitle")}
          description={t("thematicDesignsDesc")}
        />
        <ServiceItem
          title={t("materialSelectionTitle")}
          description={t("materialSelectionDesc")}
        />
        <ServiceItem
          title={t("artisticDetailingTitle")}
          description={t("artisticDetailingDesc")}
        />
        <ServiceItem
          title={t("installationServicesTitle")}
          description={t("installationServicesDesc")}
        />
        <ServiceItem
          title={t("restorationConservationTitle")}
          description={t("restorationConservationDesc")}
        />
        <ServiceItem
          title={t("collaborativeProcessTitle")}
          description={t("collaborativeProcessDesc")}
        />
        <ServiceItem
          title={t("3DVisualizationTitle")}
          description={t("3DVisualizationDesc")}
        />
        <ServiceItem
          title={t("sustainablePracticesTitle")}
          description={t("sustainablePracticesDesc")}
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

export default Sculpture;
