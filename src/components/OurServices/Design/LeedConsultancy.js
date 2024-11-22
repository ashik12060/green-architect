import React from "react";

const LEEDConsultancy = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">LEED Consultancy Services</h1>
      <p className="text-lg mb-8 text-justify max-w-4xl">
        At <span className="font-semibold">Dhaka Designer</span>, we offer expert LEED
        Consultancy services to help you achieve sustainable building practices and gain
        LEED certification. Our team guides you through the entire process, ensuring your
        project meets the highest environmental standards.
      </p>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Certification Strategy"
          description="We develop a tailored strategy to achieve LEED certification, identifying the most suitable credits and prerequisites for your project."
        />
        <ServiceItem
          title="Sustainable Design Integration"
          description="We integrate sustainable design principles into your project, focusing on energy efficiency, water conservation, and material selection."
        />
        <ServiceItem
          title="Energy Modeling"
          description="We perform energy modeling to optimize building performance and identify opportunities for energy savings."
        />
        <ServiceItem
          title="Documentation & Submission"
          description="We manage all necessary documentation and submissions to the US Green Building Council (USGBC) to streamline the certification process."
        />
        <ServiceItem
          title="Green Building Materials"
          description="We recommend and source environmentally friendly materials that meet LEED standards, ensuring your project is both sustainable and cost-effective."
        />
        <ServiceItem
          title="Construction Oversight"
          description="We oversee the construction process to ensure that all sustainable practices and LEED requirements are implemented correctly."
        />
        <ServiceItem
          title="Post-Occupancy Evaluation"
          description="We conduct post-occupancy evaluations to assess building performance and ensure ongoing compliance with LEED standards."
        />
      </div>
    </div>
  );
};

const ServiceItem = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
    <h3 className="text-lg font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
    <p className="text-gray-600 sm:w-2/3">{description}</p>
  </div>
);

export default LEEDConsultancy;
