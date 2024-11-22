import React from "react";

const Electrical = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Electrical Design by Dhaka Designer</h1>
      <p className="text-lg mb-8">
        Dhaka Designer offers expert Electrical Design services to ensure your project's electrical systems are safe, efficient, and reliable. Our team designs comprehensive electrical solutions tailored to your specific needs.
      </p>

      <h2 className="text-2xl font-semibold mb-6">
        Our Electrical Design Services:
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Power Distribution"
          description="We design power distribution systems that ensure reliable and efficient electricity supply throughout your project."
        />
        <ServiceItem
          title="Lighting Design"
          description="We create efficient and aesthetically pleasing lighting solutions for both interior and exterior spaces."
        />
        <ServiceItem
          title="Emergency Power Systems"
          description="We design backup power systems, including generators and UPS systems, to ensure uninterrupted power during outages."
        />
        <ServiceItem
          title="Renewable Energy Integration"
          description="We incorporate renewable energy sources, such as solar, into your project to promote sustainability and reduce energy costs."
        />
        <ServiceItem
          title="Electrical Safety Systems"
          description="We design safety systems, including grounding, surge protection, and fire alarm systems, to protect your property and occupants."
        />
        <ServiceItem
          title="Smart Building Systems"
          description="We integrate smart building technologies, such as automated lighting, HVAC controls, and energy management systems, to enhance functionality and efficiency."
        />
        <ServiceItem
          title="Regulatory Compliance"
          description="We ensure all electrical designs comply with local codes, standards, and regulations, providing peace of mind and avoiding legal issues."
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
