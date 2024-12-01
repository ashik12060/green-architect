import React from "react";

const Retail = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Retail Interior Design by Green Shelter Design and Development</h1>
      <p className="text-lg mb-8">
        Green Shelter Design and Development specializes in creating dynamic and functional retail spaces through expert interior design services. Our goal is to enhance the customer experience, strengthen your brand presence, and increase sales.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Retail Interior Design Offerings:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Space Planning"
          description="We optimize store layouts to ensure efficient customer flow while making the best use of the available retail space."
        />
        <ServiceItem
          title="Visual Merchandising"
          description="We craft attention-grabbing displays and merchandising strategies that showcase your products and draw in customers."
        />
        <ServiceItem
          title="Brand Integration"
          description="We seamlessly integrate your brand identity into the store design, ensuring a unified and memorable shopping experience."
        />
        <ServiceItem
          title="Lighting Design"
          description="We provide lighting solutions that not only set the perfect ambiance but also highlight key products, enhancing the overall atmosphere."
        />
        <ServiceItem
          title="Fixture & Furniture Design"
          description="We design bespoke fixtures and furniture that are tailored to your space and meet both aesthetic and functional requirements."
        />
        <ServiceItem
          title="Color & Material Selection"
          description="We assist in selecting colors and materials that complement your brand and create a pleasant and engaging shopping environment."
        />
        <ServiceItem
          title="Technology Integration"
          description="We incorporate modern technologies, such as interactive displays and digital signage, to boost customer interaction and engagement."
        />
        <ServiceItem
          title="Storage Solutions"
          description="We create efficient storage solutions that help keep your inventory organized and easily accessible to meet the demands of your retail space."
        />
        <ServiceItem
          title="Sustainable Design"
          description="We emphasize sustainable practices and materials to minimize environmental impact and appeal to environmentally conscious shoppers."
        />
        <ServiceItem
          title="3D Visualization"
          description="Our 3D visualization services allow you to see the final design before implementation, helping you make well-informed decisions."
        />
        <ServiceItem
          title="Project Management"
          description="We oversee the entire design process, from initial concept to final execution, ensuring the project is delivered on time and with great results."
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
