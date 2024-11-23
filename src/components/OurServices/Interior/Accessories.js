import React from "react";

const Accessories = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Tailored Kitchen Accessories by Dhaka Designer</h1>
      <p className="text-lg mb-8">
        Dhaka Designer specializes in creating personalized Kitchen Accessories that enhance both the style and practicality of your kitchen. Our skilled team crafts customized solutions designed to meet your unique needs and aesthetic preferences.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Kitchen Accessories Services Include:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Custom Cabinetry"
          description="We design and create cabinetry tailored to optimize storage while seamlessly blending with your kitchen's design."
        />
        <ServiceItem
          title="Countertops and Backsplashes"
          description="Our range of custom countertops and backsplashes, crafted with premium materials, combine durability with visual appeal."
        />
        <ServiceItem
          title="Organized Storage Solutions"
          description="From pull-out shelves to spice racks and utensil organizers, we offer smart storage solutions to keep your kitchen tidy and functional."
        />
        <ServiceItem
          title="Customized Lighting"
          description="We design task lighting and under-cabinet lighting to enhance the usability and atmosphere of your kitchen."
        />
        <ServiceItem
          title="Unique Hardware and Fixtures"
          description="Our selection of custom handles, knobs, and faucets adds a personalized touch to your kitchen."
        />
        <ServiceItem
          title="Custom Kitchen Islands"
          description="We craft kitchen islands tailored to your needs, offering additional workspace, storage, and seating options."
        />
        <ServiceItem
          title="Eco-Friendly Materials"
          description="Our accessories use sustainable and environmentally friendly materials, combining style with responsibility."
        />
        <ServiceItem
          title="3D Design Previews"
          description="We provide 3D visualizations to help you preview how your customized accessories will look before installation."
        />
        <ServiceItem
          title="Professional Installation"
          description="Our expert team ensures precise installation, guaranteeing your kitchen accessories are securely and properly fitted."
        />
        <ServiceItem
          title="Tailored Consultations"
          description="We offer one-on-one consultations to fully understand your requirements and preferences, delivering results that surpass expectations."
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
