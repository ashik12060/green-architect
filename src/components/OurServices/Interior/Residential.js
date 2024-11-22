import React from "react";

const Residential = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">
        Residential Interior Design by Dhaka Designer
      </h1>
      <p className="text-lg mb-8">
        Dhaka Designer offers exceptional Residential Interior Design services
        to create beautiful and functional living spaces. Our expert team
        tailors each design to your unique style and needs, ensuring a home that
        reflects your personality and lifestyle.
      </p>

      <h2 className="text-2xl font-semibold mb-6">
        Our Residential Interior Design Services:
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Space Planning"
          description="We optimize the layout of your home to ensure efficient use of space and a comfortable flow between rooms."
        />
        <ServiceItem
          title="Custom Furniture Design"
          description="We create custom furniture pieces that fit perfectly in your space and meet your aesthetic preferences."
        />
        <ServiceItem
          title="Color Consultation"
          description="We provide expert color consultation to select the perfect palette that enhances the mood and style of your home."
        />
        <ServiceItem
          title="Lighting Design"
          description="We design effective and stylish lighting solutions that enhance the ambiance and functionality of each room."
        />
        <ServiceItem
          title="Kitchen & Bathroom Design"
          description="We specialize in designing kitchens and bathrooms that are both beautiful and highly functional, with attention to detail and quality."
        />
        <ServiceItem
          title="Storage Solutions"
          description="We design innovative storage solutions to keep your home organized and clutter-free."
        />
        <ServiceItem
          title="Material & Finish Selection"
          description="We help you choose the best materials and finishes for your home, ensuring durability and style."
        />
        <ServiceItem
          title="3D Visualization"
          description="We offer 3D visualization services to help you see how your finished space will look, making it easier to make design decisions."
        />
        <ServiceItem
          title="Project Management"
          description="We manage the entire interior design process, from initial concept to final installation, ensuring a seamless and stress-free experience."
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
