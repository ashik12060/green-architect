import React from "react";

const MasterPlaning = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Master Planning by Dhaka Designer</h1>
      <p className="text-lg mb-8">
        Dhaka Designer offers expert Master Planning services to create comprehensive and sustainable plans for your project. We focus on developing functional, aesthetically pleasing, and future-ready spaces.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Master Planning Services:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Site Analysis"
          description="We conduct a thorough analysis of the site, including topography, existing structures, and environmental conditions, to inform the planning process."
        />
        <ServiceItem
          title="Concept Development"
          description="We create initial concepts that reflect your vision, goals, and the unique characteristics of the site."
        />
        <ServiceItem
          title="Land Use Planning"
          description="We develop land use plans that optimize space utilization, balancing residential, commercial, and recreational areas."
        />
        <ServiceItem
          title="Infrastructure Planning"
          description="We plan essential infrastructure, including roads, utilities, and public services, ensuring efficient and sustainable development."
        />
        <ServiceItem
          title="Environmental Planning"
          description="We integrate green spaces and sustainable practices into the plan, promoting environmental stewardship."
        />
        <ServiceItem
          title="Community Engagement"
          description="We engage with the community and stakeholders to gather input and ensure the plan meets local needs and expectations."
        />
        <ServiceItem
          title="Implementation Strategy"
          description="We develop a clear strategy for implementing the master plan, including phasing, timelines, and resource allocation."
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

export default MasterPlaning;
