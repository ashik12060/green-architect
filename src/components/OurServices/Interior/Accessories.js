import React from "react";

const Accessories = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Custom Kitchen Accessories by Dhaka Designer</h1>
      <p className="text-lg mb-8">
        Dhaka Designer offers bespoke Kitchen Accessories services to enhance the functionality and aesthetics of your kitchen. Our expert team designs and creates custom accessories tailored to your specific needs and style preferences.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Custom Kitchen Accessories Services:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Custom Cabinets"
          description="We design and build custom cabinets that maximize storage space and complement your kitchen's design."
        />
        <ServiceItem
          title="Countertops & Backsplashes"
          description="We offer a variety of custom countertop and backsplash options, using high-quality materials for durability and style."
        />
        <ServiceItem
          title="Storage Solutions"
          description="We create innovative storage solutions, such as pull-out shelves, spice racks, and utensil organizers, to keep your kitchen organized."
        />
        <ServiceItem
          title="Lighting Solutions"
          description="We design custom lighting solutions, including under-cabinet and task lighting, to improve functionality and ambiance."
        />
        <ServiceItem
          title="Hardware & Fixtures"
          description="We provide a selection of custom hardware and fixtures, such as handles, knobs, and faucets, to add a unique touch to your kitchen."
        />
        <ServiceItem
          title="Custom Islands"
          description="We design and build custom kitchen islands that provide additional workspace, storage, and seating options."
        />
        <ServiceItem
          title="Sustainable Materials"
          description="We use eco-friendly and sustainable materials in our custom kitchen accessories to promote environmental responsibility."
        />
        <ServiceItem
          title="3D Visualization"
          description="We offer 3D visualization services to help you see how the custom accessories will look in your kitchen before installation."
        />
        <ServiceItem
          title="Installation Services"
          description="We provide professional installation services to ensure your custom kitchen accessories are securely and correctly installed."
        />
        <ServiceItem
          title="Personalized Consultation"
          description="We offer personalized consultation to understand your needs and preferences, ensuring the final product exceeds your expectations."
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

export default Accessories;
