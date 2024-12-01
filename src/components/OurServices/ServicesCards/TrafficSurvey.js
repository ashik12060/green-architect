// import React from "react";

// const TrafficSurvey = () => {
//   return (
//     <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
//       <h1 className="text-3xl font-bold mb-4">
//         Traffic Analysis Services by Green Shelter Design and Development
//       </h1>
//       <p className="text-lg mb-8">
//         Green Shelter Design and Development provides detailed Traffic Analysis services to offer insights into traffic dynamics, supporting effective project planning. Our surveys supply essential data for creating safe, efficient, and sustainable transportation solutions.
//       </p>

//       <h2 className="text-2xl font-semibold mb-6">Our Traffic Analysis Services Cover:</h2>

//       <div className="space-y-6 max-w-4xl w-full">
//         <ServiceItem
//           title="Traffic Flow Monitoring"
//           description="We capture data on vehicle flow at critical points to assess traffic congestion and movement trends."
//         />
//         <ServiceItem
//           title="Speed Pattern Evaluation"
//           description="We analyze vehicle speeds to identify areas requiring speed regulation measures for enhanced safety."
//         />
//         <ServiceItem
//           title="Travel Behavior Study"
//           description="We track origin and destination patterns to gain insights into travel behaviors, aiding in strategic route and infrastructure planning."
//         />
//         <ServiceItem
//           title="Parking Utilization Analysis"
//           description="We evaluate parking demands and usage trends to support the development of efficient parking solutions."
//         />
//         <ServiceItem
//           title="Traffic Impact Evaluation"
//           description="We analyze how proposed projects could influence local traffic and recommend strategies to minimize disruptions and improve traffic flow."
//         />
//       </div>
//     </div>
//   );
// };

// const ServiceItem = ({ title, description }) => (
//   <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
//     <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
//     <p className="text-gray-600 sm:w-2/3">{description}</p>
//   </div>
// );

// export default TrafficSurvey;



import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../Shared/Footer/Footer";

const TrafficSurvey = () => {
  const { t } = useTranslation('Service');  // Assumes translations are under 'Service' namespace

  return (
    <>
      <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
        <h1 className="text-3xl font-bold mb-4">
          {t('trafficAnalysisTitle')}
        </h1>
        <p className="text-lg mb-8">
          {t('trafficAnalysisIntro')}
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          {t('trafficAnalysisCover')}
        </h2>

        <div className="space-y-6 max-w-4xl w-full">
          <ServiceItem
            title={t('trafficFlowMonitoring')}
            description={t('trafficFlowMonitoringDesc')}
          />
          <ServiceItem
            title={t('speedPatternEvaluation')}
            description={t('speedPatternEvaluationDesc')}
          />
          <ServiceItem
            title={t('travelBehaviorStudy')}
            description={t('travelBehaviorStudyDesc')}
          />
          <ServiceItem
            title={t('parkingUtilizationAnalysis')}
            description={t('parkingUtilizationAnalysisDesc')}
          />
          <ServiceItem
            title={t('trafficImpactEvaluation')}
            description={t('trafficImpactEvaluationDesc')}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

const ServiceItem = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
    <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
    <p className="text-gray-600 sm:w-2/3">{description}</p>
  </div>
);

export default TrafficSurvey;
