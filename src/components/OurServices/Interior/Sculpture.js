import React from "react";

const Sculpture = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terracotta and Sculpture Design by Dhaka Designer</h1>
      <p className="text-lg mb-8">
        Dhaka Designer offers specialized Terracotta and Sculpture Design services to add artistic and cultural value to your spaces. Our skilled artisans create unique and exquisite pieces that reflect your style and enhance your environment.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Terracotta and Sculpture Design Services:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Custom Sculptures"
          description="We create custom sculptures tailored to your vision, whether for residential, commercial, or public spaces."
        />
        <ServiceItem
          title="Terracotta Art"
          description="We design and craft terracotta art pieces, bringing warmth and traditional charm to your interiors and exteriors."
        />
        <ServiceItem
          title="Thematic Designs"
          description="We develop thematic designs that reflect cultural, historical, or contemporary themes, adding depth and meaning to your space."
        />
        <ServiceItem
          title="Material Selection"
          description="We select high-quality materials, ensuring durability and aesthetic appeal for each piece."
        />
        <ServiceItem
          title="Artistic Detailing"
          description="Our artisans focus on intricate detailing, ensuring each sculpture and terracotta piece is a work of art."
        />
        <ServiceItem
          title="Installation Services"
          description="We provide professional installation services to securely place and display your sculptures and terracotta art."
        />
        <ServiceItem
          title="Restoration & Conservation"
          description="We offer restoration and conservation services for existing sculptures and terracotta pieces, preserving their beauty and integrity."
        />
        <ServiceItem
          title="Collaborative Process"
          description="We work closely with you to understand your vision and requirements, ensuring the final piece aligns with your expectations."
        />
        <ServiceItem
          title="3D Visualization"
          description="We provide 3D visualization services to help you see the design and make informed decisions before production."
        />
        <ServiceItem
          title="Sustainable Practices"
          description="We incorporate sustainable practices in our design and production processes, minimizing environmental impact."
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

export default Sculpture;
