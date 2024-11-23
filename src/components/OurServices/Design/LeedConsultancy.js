import React from "react";

const LeedConsultancy = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">LEED Consultancy Services</h1>
      <p className="text-lg mb-8 text-justify max-w-4xl">
        At <span className="font-semibold">Dhaka Designer</span>, we provide expert LEED
        Consultancy services to guide you in implementing sustainable building practices and achieving
        LEED certification. Our experienced team will assist you throughout the entire process, ensuring
        that your project aligns with the highest environmental standards.
      </p>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Certification Strategy"
          description="We create a customized strategy for achieving LEED certification, focusing on the most relevant credits and prerequisites for your project."
        />
        <ServiceItem
          title="Sustainable Design Integration"
          description="We incorporate sustainable design principles into your project, with an emphasis on energy efficiency, water conservation, and sustainable material selection."
        />
        <ServiceItem
          title="Energy Modeling"
          description="We perform detailed energy modeling to optimize building performance and uncover opportunities for significant energy savings."
        />
        <ServiceItem
          title="Documentation & Submission"
          description="We handle all the necessary documentation and submission processes to the US Green Building Council (USGBC), simplifying the certification journey."
        />
        <ServiceItem
          title="Green Building Materials"
          description="We source and recommend eco-friendly building materials that comply with LEED standards, ensuring sustainability without compromising cost-effectiveness."
        />
        <ServiceItem
          title="Construction Oversight"
          description="We monitor the construction process to guarantee that all LEED requirements and sustainable practices are effectively implemented."
        />
        <ServiceItem
          title="Post-Occupancy Evaluation"
          description="We conduct post-occupancy evaluations to assess the ongoing performance of the building and ensure continuous compliance with LEED standards."
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

export default LeedConsultancy;
