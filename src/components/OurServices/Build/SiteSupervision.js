import React from "react";

const SiteSupervision = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Site Supervision Services by Green Shelter Design and Development</h1>
      <p className="text-lg mb-8">
        At Green Shelter Design and Development, we offer expert Site Supervision services to ensure your construction project meets the highest standards. Our experienced team of supervisors meticulously oversees every aspect of the site, ensuring quality, safety, and efficiency at all stages.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Site Supervision Services Include:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Daily Supervision"
          description="Our team provides on-site supervision every day, ensuring all activities align with project plans and specifications."
        />
        <ServiceItem
          title="Quality Control"
          description="We enforce rigorous quality control measures to ensure that all work meets design specifications and high standards."
        />
        <ServiceItem
          title="Safety Oversight"
          description="We enforce safety protocols and regulations to create a safe working environment for all personnel on-site."
        />
        <ServiceItem
          title="Progress Tracking"
          description="We provide regular progress updates, keeping you informed of the status of the project and highlighting any issues that arise."
        />
        <ServiceItem
          title="Coordination of Trades"
          description="We manage the coordination of various trades and subcontractors, ensuring smooth workflow and efficiency."
        />
        <ServiceItem
          title="Problem Resolution"
          description="We quickly address and resolve on-site issues, minimizing delays and keeping the project on schedule."
        />
        <ServiceItem
          title="Regulatory Compliance"
          description="We monitor construction activities to ensure strict adherence to local building codes, regulations, and environmental standards."
        />
        <ServiceItem
          title="Final Project Inspection"
          description="We conduct thorough final inspections to ensure all work is completed to your satisfaction and ready for handover."
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

export default SiteSupervision;
