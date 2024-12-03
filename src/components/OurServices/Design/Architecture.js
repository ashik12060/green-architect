import React from "react";
import { useTranslation } from "react-i18next";

const Architecture = () => {
  const { t } = useTranslation('Service');
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 py-8 text-center bg-white text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">
        {t('architectureDesignTitle')}
      </h1>
      <p className="text-base sm:text-lg mb-8 text-justify">
        {t('architectureDesignIntro')}
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mb-6">
        {t('ourApproach')}
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t('clientCenteredApproach')}
          description={t('clientCenteredApproachDesc')}
        />
        <ServiceItem
          title={t('sustainabilityMatters')}
          description={t('sustainabilityMattersDesc')}
        />
        <ServiceItem
          title={t('fusingTraditionModernityAesthetics')}
          description={t('fusingTraditionModernityAestheticsDesc')}
        />
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-6">
        {t('architecturalServices')}
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t('residentialArchitecture')}
          description={t('residentialArchitectureDesc')}
        />
        <ServiceItem
          title={t('commercialArchitecture')}
          description={t('commercialArchitectureDesc')}
        />
        <ServiceItem
          title={t('communityPublicSpaces')}
          description={t('communityPublicSpacesDesc')}
        />
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-6">
        {t('ourDesignProcess')}
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ProcessStep
          step={t('initialConsultation')}
          description={t('initialConsultationDesc')}
        />
        <ProcessStep
          step={t('conceptDevelopment')}
          description={t('conceptDevelopmentDesc')}
        />
        <ProcessStep
          step={t('designRefinement')}
          description={t('designRefinementDesc')}
        />
        <ProcessStep
          step={t('detailedPlanning')}
          description={t('detailedPlanningDesc')}
        />
        <ProcessStep
          step={t('supportDuringConstruction')}
          description={t('supportDuringConstructionDesc')}
        />
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-6">
        {t('whyChooseUs')}
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t('expertiseAndLocalInsight')}
          description={t('expertiseAndLocalInsightDesc')}
        />
        <ServiceItem
          title={t('focusOnQuality')}
          description={t('focusOnQualityDesc')}
        />
        <ServiceItem
          title={t('comprehensiveService')}
          description={t('comprehensiveServiceDesc')}
        />
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-6">
        {t('frequentlyAskedQuestions')}
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t('faqTimeline')}
          description={t('faqTimelineDesc')}
        />
        <ServiceItem
          title={t('faqCustomization')}
          description={t('faqCustomizationDesc')}
        />
        <ServiceItem
          title={t('faqSustainability')}
          description={t('faqSustainabilityDesc')}
        />
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-10">
        {t('readyToTransform')}
      </h2>
      <p className="text-base sm:text-lg mt-4 text-justify max-w-4xl">
        {t('readyToTransformDesc')}{" "}
       
      </p>
    </div>
  );
};

const ServiceItem = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
    <h3 className="text-lg sm:text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
    <p className="text-sm sm:text-base text-gray-600 sm:w-2/3 text-justify">{description}</p>
  </div>
);

const ProcessStep = ({ step, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
    <h3 className="text-lg sm:text-xl font-semibold flex-shrink-0 sm:w-1/3">{step}</h3>
    <p className="text-sm sm:text-base text-gray-600 sm:w-2/3 text-justify">{description}</p>
  </div>
);

export default Architecture;
