import React from "react";

const Sculpture = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terracotta and Sculpture Design by Green Shelter Design and Development</h1>
      <p className="text-lg mb-8">
        Green Shelter Design and Development specializes in creating unique Terracotta and Sculpture pieces that enhance your spaces with artistic and cultural significance. Our expert artisans craft bespoke artworks that reflect your personal style and elevate your surroundings.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Terracotta and Sculpture Design Services:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Custom Sculptures"
          description="We design and create one-of-a-kind sculptures tailored to your specific vision, whether for private, commercial, or public spaces."
        />
        <ServiceItem
          title="Terracotta Art"
          description="Our team crafts terracotta art pieces that bring a touch of tradition and warmth to both indoor and outdoor environments."
        />
        <ServiceItem
          title="Thematic Designs"
          description="We specialize in creating thematic sculptures that reflect cultural, historical, or contemporary motifs, adding significance and depth to your space."
        />
        <ServiceItem
          title="Material Selection"
          description="We carefully choose premium materials that ensure each artwork is not only beautiful but also durable."
        />
        <ServiceItem
          title="Artistic Detailing"
          description="Our artisans focus on intricate craftsmanship, ensuring that every sculpture and terracotta piece is a finely detailed masterpiece."
        />
        <ServiceItem
          title="Installation Services"
          description="We provide professional installation services to ensure your sculptures and terracotta pieces are securely placed and displayed to perfection."
        />
        <ServiceItem
          title="Restoration & Conservation"
          description="We offer expert restoration and conservation services for existing sculptures and terracotta pieces, maintaining their beauty and preserving their historical integrity."
        />
        <ServiceItem
          title="Collaborative Process"
          description="We work closely with you to understand your vision, ensuring that the final artwork perfectly aligns with your expectations and needs."
        />
        <ServiceItem
          title="3D Visualization"
          description="Our 3D visualization services allow you to preview the design before production, helping you make confident decisions."
        />
        <ServiceItem
          title="Sustainable Practices"
          description="We incorporate eco-friendly practices in our design and production processes, minimizing environmental impact while creating beautiful, lasting art."
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
