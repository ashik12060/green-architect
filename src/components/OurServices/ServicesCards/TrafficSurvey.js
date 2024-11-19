import React from "react";

const TrafficSurvey = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">
        Traffic Survey Services by Green Shelter Design and Development
      </h1>
      <p className="text-lg mb-8">
        Green Shelter Design and Development offers comprehensive Traffic Survey services to provide
        a clear understanding of traffic patterns and support effective project
        planning. Our surveys deliver valuable data for designing safe, efficient,
        and sustainable transportation systems.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Traffic Survey Services Include:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Traffic Volume Measurement"
          description="We record the volume of vehicles passing key locations to evaluate traffic flow and congestion levels."
        />
        <ServiceItem
          title="Speed Analysis"
          description="We study vehicle speeds to identify areas where speed management solutions may be necessary to enhance safety."
        />
        <ServiceItem
          title="Origin-Destination Analysis"
          description="We track vehicle movement to understand travel behaviors, enabling more effective route planning and infrastructure design."
        />
        <ServiceItem
          title="Parking Demand Assessment"
          description="We examine parking usage and demand to help optimize the design of parking facilities."
        />
        <ServiceItem
          title="Traffic Impact Assessment"
          description="We assess how your project may affect local traffic patterns and offer recommendations to minimize disruptions and improve traffic management."
        />
      </div>
    </div>
  );
};

const ServiceItem = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
    <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
    <p className="text-gray-600 sm:w-2/3">{description}</p>
  </div>
);

export default TrafficSurvey;
