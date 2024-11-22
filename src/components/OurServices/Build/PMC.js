import React from "react";

const PMC = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Project Management Consultancy (PMC) by Dhaka Designer</h1>
      <p className="text-lg mb-8">
        Dhaka Designer offers comprehensive Project Management Consultancy (PMC) services to ensure the successful execution of your construction projects. Our experienced team provides expert guidance and oversight from start to finish.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our PMC Services:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Project Planning"
          description="We develop detailed project plans, including schedules, budgets, and resource allocation, to ensure efficient project execution."
        />
        <ServiceItem
          title="Contract Management"
          description="We handle all aspects of contract management, from drafting and negotiating contracts to ensuring compliance and managing changes."
        />
        <ServiceItem
          title="Quality Control"
          description="We implement stringent quality control measures to ensure all construction work meets the highest standards."
        />
        <ServiceItem
          title="Risk Management"
          description="We identify potential risks early and develop strategies to mitigate them, ensuring project stability and success."
        />
        <ServiceItem
          title="Cost Management"
          description="We monitor project costs closely, ensuring that the project stays within budget and identifying opportunities for cost savings."
        />
        <ServiceItem
          title="Progress Monitoring"
          description="We continuously monitor project progress, providing regular updates and reports to keep you informed."
        />
        <ServiceItem
          title="Stakeholder Coordination"
          description="We facilitate communication and coordination among all stakeholders, ensuring that everyone is aligned and any issues are promptly addressed."
        />
        <ServiceItem
          title="Commissioning & Handover"
          description="We oversee the commissioning and handover process, ensuring that all systems are operational and that the project is delivered to your satisfaction."
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
