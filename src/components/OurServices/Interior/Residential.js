import React from "react";

const Residential = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">
        Residential Interior Design Services by Green Shelter Design and Development
      </h1>
      <p className="text-lg mb-8">
        At Green Shelter Design and Development, we specialize in creating stunning and functional residential interiors. Our team works closely with you to craft designs that suit your personal style and meet your needs, ensuring your home reflects your individuality and lifestyle.
      </p>

      <h2 className="text-2xl font-semibold mb-6">
        Our Expertise in Residential Interior Design:
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Space Planning"
          description="We carefully plan the layout of your home to maximize space utilization and create a seamless flow between rooms."
        />
        <ServiceItem
          title="Custom Furniture Design"
          description="Our custom furniture designs are tailored to fit your space perfectly, complementing your aesthetic preferences."
        />
        <ServiceItem
          title="Color Consultation"
          description="Our experts provide color consultation services to help you select the perfect palette that enhances the ambiance of your home."
        />
        <ServiceItem
          title="Lighting Design"
          description="We craft lighting solutions that are both stylish and functional, setting the right mood in each room."
        />
        <ServiceItem
          title="Kitchen & Bathroom Design"
          description="We design kitchens and bathrooms that combine beauty and functionality, focusing on every detail for a high-quality finish."
        />
        <ServiceItem
          title="Storage Solutions"
          description="Our innovative storage solutions keep your home organized and free from clutter."
        />
        <ServiceItem
          title="Material & Finish Selection"
          description="We assist you in selecting high-quality materials and finishes that not only look great but also ensure durability."
        />
        <ServiceItem
          title="3D Visualization"
          description="We provide 3D visualizations to give you a clear idea of how your finished space will look, helping you make informed design decisions."
        />
        <ServiceItem
          title="Project Management"
          description="From the initial concept to the final installation, we manage the entire design process, ensuring a smooth and hassle-free experience."
        />
      </div>
    </div>
  );
};

const ServiceItem = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
    <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
    <p className="text-gray-600 sm:w-2/3">{description}</p>
  </div>
);

export default Residential;
