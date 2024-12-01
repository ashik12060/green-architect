


import React from "react";
import Footer from "../../Shared/Footer/Footer";
import { useTranslation } from "react-i18next";



const FeasibilityStudy = () => {

  const { t } = useTranslation('Service');
  return (
    <>
      <div className="flex flex-col items-center p-6 sm:p-8 text-center bg-white text-gray-800">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 px-4 sm:px-32">
        {t('titlefeasibility-study')}

                
        </h1>
        <p className="text-base sm:text-lg mb-8 text-justify px-4 sm:px-32">
        {t('paragraph1feasibility-study')}        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
        {t('keyFeaturefeasibility-study')}  
        </h2>

        <div className="space-y-6 max-w-full sm:max-w-4xl w-full">
          <ServiceItem
            title={t("financialAnalysisfeasibility-study")}
            description={t("weEvaluatefeasibility-study")}
          />
          <ServiceItem
            title={t("technicalFeasibilityfeasibility-study")}
            description={t("weExaminefeasibility-study")}
          />
          <ServiceItem
            title={t("legalCompliancefeasibility-study")}
            description={t("weVerifyfeasibility-study")}
          />
          <ServiceItem
            title={t("timelineFeasibilityfeasibility-study")}
            description={t("weCreatefeasibility-study")}
          />
          <ServiceItem
            title={t("riskManagementfeasibility-study")}
            description={t("weProactivelyfeasibility-study")}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

const ServiceItem = ({ title, description }) => (
  <>
    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
      <h3 className="text-lg sm:text-xl font-semibold flex-shrink-0 sm:w-1/3 text-left">
        {title}
      </h3>
      <p className="text-gray-600 sm:w-2/3 text-left">{description}</p>
    </div>
  </>
);

export default FeasibilityStudy;
