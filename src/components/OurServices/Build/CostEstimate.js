import React from "react";
import { useTranslation } from "react-i18next";

const CostEstimate = () => {
  const { t } = useTranslation('Service'); // Use the 'Service' namespace for translations

  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">{t('costEstimationTitle')}</h1>
      <p className="text-lg mb-8">
        {t('costEstimationIntro')}
      </p>

      <h2 className="text-2xl font-semibold mb-6">{t('costEstimationServices')}</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t('comprehensiveBudgeting')}
          description={t('comprehensiveBudgetingDesc')}
        />
        <ServiceItem
          title={t('materialQuantityTakeoffs')}
          description={t('materialQuantityTakeoffsDesc')}
        />
        <ServiceItem
          title={t('costEvaluation')}
          description={t('costEvaluationDesc')}
        />
        <ServiceItem
          title={t('valueEngineering')}
          description={t('valueEngineeringDesc')}
        />
        <ServiceItem
          title={t('bidDocumentPreparation')}
          description={t('bidDocumentPreparationDesc')}
        />
        <ServiceItem
          title={t('ongoingCostMonitoring')}
          description={t('ongoingCostMonitoringDesc')}
        />
        <ServiceItem
          title={t('finalCostSummary')}
          description={t('finalCostSummaryDesc')}
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

export default CostEstimate;
