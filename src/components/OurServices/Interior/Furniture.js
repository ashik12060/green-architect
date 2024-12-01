import React from "react";

const Furniture = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Green Shelter Design and Development Custom Furniture Services</h1>
      <p className="text-lg mb-8">
        At Green Shelter Design and Development, we specialize in crafting unique, premium-quality furniture tailored to your needs. Our team combines creativity, functionality, and expert craftsmanship to bring your vision to life.
      </p>

      <h2 className="text-2xl font-semibold mb-6">What We Offer in Custom Furniture Design:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Bespoke Designs"
          description="We create furniture uniquely designed to fit your space, style, and specific preferences."
        />
        <ServiceItem
          title="Premium Material Selection"
          description="We guide you in selecting the finest materials, ensuring durability and a polished finish that aligns with your design goals."
        />
        <ServiceItem
          title="Comfort-Focused Design"
          description="Our furniture designs prioritize comfort and ergonomics, making each piece practical and enjoyable to use."
        />
        <ServiceItem
          title="Space-Saving Innovations"
          description="We develop creative furniture solutions, including modular and multi-functional designs, to optimize your space."
        />
        <ServiceItem
          title="Seamless Style Integration"
          description="Our custom furniture is crafted to complement your existing decor, elevating the overall aesthetic of your space."
        />
        <ServiceItem
          title="Attention to Craftsmanship"
          description="Each piece is meticulously crafted with a focus on fine details and a high-quality finish."
        />
        <ServiceItem
          title="3D Concept Previews"
          description="We offer 3D visualizations so you can preview your custom furniture in your space before production begins."
        />
        <ServiceItem
          title="Eco-Friendly Choices"
          description="We use sustainable materials and environmentally friendly processes to design furniture that’s kind to the planet."
        />
        <ServiceItem
          title="Expert Installation"
          description="Our professional installation services ensure your custom furniture is securely and perfectly placed."
        />
        <ServiceItem
          title="Tailored Consultations"
          description="We provide one-on-one consultations to fully understand your requirements, delivering results that surpass expectations."
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

export default Furniture;
