import React from "react";

const SiteSupervision = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Site Supervision by Dhaka Designer</h1>
      <p className="text-lg mb-8">
        Dhaka Designer provides professional Site Supervision services to ensure your construction project is executed to the highest standards. Our experienced supervisors oversee every aspect of the site, ensuring quality, safety, and efficiency.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Site Supervision Services:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Daily Oversight"
          description="We provide daily on-site supervision to monitor construction activities and ensure they align with the project plans and specifications."
        />
        <ServiceItem
          title="Quality Assurance"
          description="We implement strict quality assurance measures to ensure all work meets the highest standards and adheres to design specifications."
        />
        <ServiceItem
          title="Safety Management"
          description="We enforce safety protocols and regulations on-site, ensuring a safe working environment for all personnel."
        />
        <ServiceItem
          title="Progress Reporting"
          description="We provide regular progress reports, keeping you informed about the status of the project and any issues that arise."
        />
        <ServiceItem
          title="Coordination of Trades"
          description="We coordinate the activities of various trades and subcontractors, ensuring smooth and efficient workflow."
        />
        <ServiceItem
          title="Issue Resolution"
          description="We address and resolve any on-site issues promptly, minimizing delays and ensuring the project stays on track."
        />
        <ServiceItem
          title="Compliance Monitoring"
          description="We ensure all construction activities comply with local building codes, regulations, and environmental standards."
        />
        <ServiceItem
          title="Final Inspection"
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
