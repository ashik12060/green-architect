import React from "react";

const SiteVisit = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4 px-4 sm:px-8 md:px-16">
        Detailed Site Assessments & Reporting by Green Shelter Design and Development
      </h1>
      <p className="text-lg mb-8 px-4 sm:px-8 md:px-16">
        Green Shelter Design and Development delivers thorough Site Evaluation & Reporting services to gather essential data for informed project planning and design. Our on-site evaluations ensure that all specific site conditions are meticulously documented and analyzed.
      </p>

      <h2 className="text-2xl font-semibold mb-6 px-4 sm:px-8 md:px-16">
        Highlights of Our Site Evaluation & Reporting Services:
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Accurate Site Measurements"
          description="We provide precise measurements of the site to ensure the creation of detailed and accurate layouts and plans."
        />
        <ServiceItem
          title="Environmental Impact Analysis"
          description="We evaluate environmental factors and potential impacts to ensure compliance with all relevant environmental regulations and standards."
        />
        <ServiceItem
          title="Condition Assessments"
          description="We comprehensively document the current state of existing structures and infrastructure, highlighting areas that may need repairs or updates."
        />
        <ServiceItem
          title="High-Quality Site Imagery"
          description="We take professional-grade photographs of the site to support in-depth analysis and reporting."
        />
        <ServiceItem
          title="Collaborative Stakeholder Meetings"
          description="We facilitate discussions with relevant stakeholders, including local authorities and community members, to address feedback and any potential concerns."
        />
      </div>
    </div>
  );
};

const ServiceItem = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 border-b border-gray-300 pb-6">
    <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3 text-center sm:text-left">
      {title}
    </h3>
    <p className="text-gray-600 sm:w-2/3 text-center sm:text-left">{description}</p>
  </div>
);

export default SiteVisit;
