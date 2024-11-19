import React from "react";

const ProjectIntegration = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4 px-8 sm:px-32">
        Project Integration Services by Green Shelter Design and Development
      </h1>
      <p className="text-lg mb-8 text-justify px-8 sm:px-32">
        Green Shelter Design and Development offers comprehensive Project Integration services to ensure seamless coordination and execution of your project. We bring all project elements together, ensuring they work harmoniously for a successful outcome.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Project Integration Services Include:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Planning & Coordination"
          description="We create a detailed project plan and coordinate all activities to ensure smooth execution throughout the project lifecycle."
        />
        <ServiceItem
          title="Resource Management"
          description="We efficiently manage resources, ensuring that all necessary materials, labor, and equipment are available on time."
        />
        <ServiceItem
          title="Stakeholder Communication"
          description="We ensure clear and consistent communication with all stakeholders, keeping everyone informed and aligned on project goals."
        />
        <ServiceItem
          title="Risk Management"
          description="We identify potential risks early on and develop strategies to mitigate them, ensuring project stability and success."
        />
        <ServiceItem
          title="Quality Control"
          description="We implement rigorous quality control measures to ensure that all aspects of the project meet high standards and specifications."
        />
        <ServiceItem
          title="Project Monitoring & Reporting"
          description="We continuously monitor project progress and provide regular updates and reports to ensure transparency and timely completion."
        />
      </div>
    </div>
  );
};

const ServiceItem = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4 text-justify">
    <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
    <p className="text-gray-600 sm:w-2/3">{description}</p>
  </div>
);

export default ProjectIntegration;
