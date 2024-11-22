import React from "react";

const Furniture = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Custom Furniture Design by Dhaka Designer</h1>
      <p className="text-lg mb-8">
        Dhaka Designer offers bespoke Custom Furniture Design services to create unique, high-quality furniture that perfectly complements your space. Our expert team designs furniture that combines functionality, style, and craftsmanship.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Custom Furniture Design Services:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Tailored Design"
          description="We create custom furniture pieces tailored to your specific needs, preferences, and space requirements."
        />
        <ServiceItem
          title="Material Selection"
          description="We help you choose the best materials, ensuring durability, aesthetic appeal, and alignment with your design vision."
        />
        <ServiceItem
          title="Ergonomic Design"
          description="We incorporate ergonomic principles into our furniture designs to enhance comfort and usability."
        />
        <ServiceItem
          title="Innovative Solutions"
          description="We design innovative furniture solutions that maximize space and functionality, such as multi-purpose and modular pieces."
        />
        <ServiceItem
          title="Aesthetic Integration"
          description="We ensure that our custom furniture seamlessly integrates with your existing decor and enhances the overall aesthetic of your space."
        />
        <ServiceItem
          title="Detailed Craftsmanship"
          description="We focus on detailed craftsmanship, ensuring each piece is meticulously constructed and finished to the highest standards."
        />
        <ServiceItem
          title="3D Visualization"
          description="We provide 3D visualization services to help you see how the custom furniture will look in your space before production."
        />
        <ServiceItem
          title="Sustainable Practices"
          description="We use sustainable materials and eco-friendly practices in our furniture design and production to minimize environmental impact."
        />
        <ServiceItem
          title="Installation Services"
          description="We offer professional installation services to ensure that your custom furniture is perfectly placed and securely installed."
        />
        <ServiceItem
          title="Personalized Consultation"
          description="We provide personalized consultation to understand your vision and requirements, ensuring that the final product exceeds your expectations."
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
