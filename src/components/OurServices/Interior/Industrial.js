import React from "react";

const Industrial = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">
        Industrial Interior Design by Dhaka Designer
      </h1>
      <p className="text-lg mb-8">
        Dhaka Designer provides specialized Industrial Interior Design services
        to create efficient, safe, and aesthetically pleasing industrial spaces. 
        Our expert team designs environments that enhance productivity and reflect 
        your brand's identity.
      </p>

      <h2 className="text-2xl font-semibold mb-6">
        Our Industrial Interior Design Services:
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Space Optimization"
          description="We design layouts that maximize space utilization and improve workflow efficiency in your industrial facility."
        />
        <ServiceItem
          title="Ergonomic Design"
          description="We incorporate ergonomic principles to create comfortable and safe working environments for your employees."
        />
        <ServiceItem
          title="Material Selection"
          description="We select durable and high-quality materials that withstand the demands of industrial use and maintain a professional appearance."
        />
        <ServiceItem
          title="Lighting Solutions"
          description="We design effective lighting systems that ensure adequate illumination for safety and productivity, while also considering energy efficiency."
        />
        <ServiceItem
          title="Storage Solutions"
          description="We create customized storage solutions to keep your industrial space organized and optimize inventory management."
        />
        <ServiceItem
          title="Safety Enhancements"
          description="We integrate safety features into the design, including proper signage, safe walkways, and emergency exits, to ensure compliance with regulations."
        />
        <ServiceItem
          title="Brand Integration"
          description="We incorporate your brand's identity into the design, creating a cohesive look that reinforces your corporate image."
        />
        <ServiceItem
          title="Sustainable Design"
          description="We implement sustainable design practices, such as energy-efficient systems and environmentally friendly materials, to reduce operational costs and environmental impact."
        />
        <ServiceItem
          title="3D Visualization"
          description="We provide 3D visualization services to help you visualize the finished space and make informed design decisions."
        />
        <ServiceItem
          title="Project Management"
          description="We oversee the entire design process, from initial concept to final implementation, ensuring timely and successful completion."
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

export default Industrial;
