import React from "react";

const Retail = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Retail Interior Design by Dhaka Designer</h1>
      <p className="text-lg mb-8">
        Dhaka Designer offers expert Retail Interior Design services to create engaging and functional retail spaces. Our designs aim to enhance customer experience, promote your brand, and drive sales.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Retail Interior Design Services:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Space Planning"
          description="We optimize store layouts to ensure smooth customer flow and maximize the use of retail space."
        />
        <ServiceItem
          title="Visual Merchandising"
          description="We design eye-catching displays and merchandising solutions that highlight your products and attract customers."
        />
        <ServiceItem
          title="Brand Integration"
          description="We incorporate your brand’s identity into the design, creating a cohesive and memorable shopping experience."
        />
        <ServiceItem
          title="Lighting Design"
          description="We provide effective lighting solutions that enhance the ambiance and highlight key products, creating an inviting atmosphere."
        />
        <ServiceItem
          title="Fixture & Furniture Design"
          description="We design custom fixtures and furniture that fit your space and meet your aesthetic and functional needs."
        />
        <ServiceItem
          title="Color & Material Selection"
          description="We assist in choosing the right colors and materials that reflect your brand and create a pleasant shopping environment."
        />
        <ServiceItem
          title="Technology Integration"
          description="We integrate modern technologies, such as digital signage and interactive displays, to enhance customer engagement."
        />
        <ServiceItem
          title="Storage Solutions"
          description="We design efficient storage solutions that keep your inventory organized and easily accessible."
        />
        <ServiceItem
          title="Sustainable Design"
          description="We incorporate sustainable practices and materials to reduce environmental impact and appeal to eco-conscious consumers."
        />
        <ServiceItem
          title="3D Visualization"
          description="We offer 3D visualization services to help you envision the final design and make informed decisions."
        />
        <ServiceItem
          title="Project Management"
          description="We manage the entire design process, from concept to completion, ensuring timely and successful project delivery."
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

export default Retail;
