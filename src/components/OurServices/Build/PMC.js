import React from "react";

const PMC = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Project Management Consultancy (PMC) Services by Green Shelter Design and Development</h1>
      <p className="text-lg mb-8">
        At Green Shelter Design and Development, we provide expert Project Management Consultancy (PMC) services to ensure your construction projects are completed successfully. Our team offers guidance and oversight throughout every phase of your project.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our PMC Services Include:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Project Planning"
          description="We create comprehensive project plans, including timelines, budgets, and resource distribution, to ensure smooth project execution."
        />
        <ServiceItem
          title="Contract Oversight"
          description="We manage all aspects of contract negotiations, compliance, and amendments to ensure legal and operational consistency."
        />
        <ServiceItem
          title="Quality Assurance"
          description="We implement strict quality control measures to guarantee that construction meets the highest industry standards."
        />
        <ServiceItem
          title="Risk Mitigation"
          description="We identify potential risks early and devise strategies to minimize their impact, ensuring the project’s stability and success."
        />
        <ServiceItem
          title="Budget Oversight"
          description="We continuously monitor project costs, ensuring that the project stays within budget while identifying opportunities for cost optimization."
        />
        <ServiceItem
          title="Project Progress Tracking"
          description="We provide ongoing tracking of the project’s progress, offering regular updates and reports to keep you informed at every stage."
        />
        <ServiceItem
          title="Stakeholder Engagement"
          description="We facilitate clear communication and coordination among all stakeholders to ensure alignment and prompt resolution of issues."
        />
        <ServiceItem
          title="Commissioning and Handover"
          description="We manage the commissioning and handover process, ensuring that all systems are functioning and that the project meets your expectations."
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

export default PMC;
