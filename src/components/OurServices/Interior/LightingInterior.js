import React from "react";

const LightingInterior = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Custom Lighting Design by Dhaka Designer</h1>
      <p className="text-lg mb-8">
        Dhaka Designer offers bespoke Custom Lighting Design services to illuminate your spaces with style and precision. Our expert team creates innovative lighting solutions tailored to your specific needs and aesthetic preferences.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Custom Lighting Design Services:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Tailored Lighting Solutions"
          description="We design custom lighting solutions that match your vision and enhance the ambiance of your space."
        />
        <ServiceItem
          title="Architectural Lighting"
          description="We create lighting designs that highlight architectural features and enhance the overall aesthetic appeal of your property."
        />
        <ServiceItem
          title="Decorative Lighting"
          description="We design decorative lighting fixtures that add a unique and artistic touch to your interiors."
        />
        <ServiceItem
          title="Functional Lighting"
          description="We ensure that our lighting designs provide optimal illumination for various activities, improving functionality and comfort."
        />
        <ServiceItem
          title="Energy-Efficient Lighting"
          description="We incorporate energy-efficient lighting technologies, such as LED and smart lighting systems, to reduce energy consumption and costs."
        />
        <ServiceItem
          title="Outdoor Lighting"
          description="We design custom outdoor lighting solutions that enhance the beauty and safety of your exterior spaces."
        />
        <ServiceItem
          title="Material & Finish Selection"
          description="We assist in selecting the best materials and finishes for your lighting fixtures, ensuring durability and style."
        />
        <ServiceItem
          title="Installation Services"
          description="We provide professional installation services to ensure your custom lighting fixtures are securely and correctly installed."
        />
        <ServiceItem
          title="Sustainable Practices"
          description="We integrate sustainable practices in our design and production processes, minimizing environmental impact."
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

export default LightingInterior;
