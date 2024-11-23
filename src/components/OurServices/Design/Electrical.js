import React from "react";

const Electrical = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Electrical Design Services by Dhaka Designer</h1>
      <p className="text-lg mb-8">
        At Dhaka Designer, we provide expert Electrical Design solutions that prioritize safety, efficiency, and reliability. Our team creates custom electrical designs to meet the specific requirements of your project.
      </p>

      <h2 className="text-2xl font-semibold mb-6">
        Our Electrical Design Offerings:
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Power Distribution"
          description="We develop power distribution networks that guarantee a stable and efficient supply of electricity across your entire project."
        />
        <ServiceItem
          title="Lighting Solutions"
          description="We design effective and visually appealing lighting schemes for both interior and exterior spaces."
        />
        <ServiceItem
          title="Backup Power Systems"
          description="Our team designs reliable backup power solutions, including generators and UPS, ensuring power continuity during outages."
        />
        <ServiceItem
          title="Sustainable Energy Integration"
          description="We integrate renewable energy solutions like solar power into your project to promote sustainability and lower energy costs."
        />
        <ServiceItem
          title="Electrical Safety Systems"
          description="We develop safety measures, such as grounding, surge protection, and fire alarms, to safeguard both your property and its occupants."
        />
        <ServiceItem
          title="Smart Building Solutions"
          description="We incorporate smart building technologies, including automated lighting, HVAC controls, and energy management, to improve functionality and efficiency."
        />
        <ServiceItem
          title="Compliance with Regulations"
          description="We ensure all our electrical designs meet local codes and regulations, providing peace of mind and avoiding potential legal issues."
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

export default Electrical;
