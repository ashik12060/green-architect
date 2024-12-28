



import React from "react";
import Footer from "../../Shared/Footer/Footer";  // Assuming the Footer component is the same
import { useTranslation } from "react-i18next";

const SoilTest = () => {
  const { t } = useTranslation('Service'); // Assuming 'Service' is your namespace

  return (
    <>
      <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 px-4 sm:px-32">
          {t('soilTestingTitle')} {/* Translated title */}
        </h1>
        <p className="text-base sm:text-lg mb-8 text-justify px-4 sm:px-32">
          {t('soilTestingIntro')} {/* Translated introduction */}
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
          {t('soilTestingServices')} {/* Translated subheading */}
        </h2>

        <div className="space-y-6 max-w-full sm:max-w-4xl w-full">
          <ServiceItem
            title={t('soilSampling')}  // Translated title for Soil Sampling
            description={t('soilSamplingDesc')} // Translated description for Soil Sampling
          />
          <ServiceItem
            title={t('soilAnalysis')}  // Translated title for Soil Analysis
            description={t('soilAnalysisDesc')} // Translated description for Soil Analysis
          />
          <ServiceItem
            title={t('moistureContent')}  // Translated title for Moisture Content
            description={t('moistureContentDesc')} // Translated description for Moisture Content
          />
          <ServiceItem
            title={t('loadBearingCapacity')}  // Translated title for Load-Bearing Capacity
            description={t('loadBearingCapacityDesc')} // Translated description for Load-Bearing Capacity
          />
          <ServiceItem
            title={t('soilContamination')}  // Translated title for Soil Contamination
            description={t('soilContaminationDesc')} // Translated description for Soil Contamination
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

const ServiceItem = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4 text-justify">
    <h3 className="text-lg sm:text-xl font-semibold flex-shrink-0 sm:w-1/3 text-left">
      {title}
    </h3>
    <p className="text-gray-600 sm:w-2/3 text-left">{description}</p>
  </div>
);

export default SoilTest;
