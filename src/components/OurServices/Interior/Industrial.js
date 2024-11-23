import React from "react";

const Industrial = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">
        Dhaka Designer's Industrial Interior Design Services
      </h1>
      <p className="text-lg mb-8">
        At Dhaka Designer, we specialize in crafting innovative and functional industrial spaces. Our designs prioritize efficiency, safety, and aesthetics, all while reflecting your brand’s unique identity.
      </p>

      <h2 className="text-2xl font-semibold mb-6">
        What We Offer in Industrial Interior Design:
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Maximized Space Utilization"
          description="We design layouts to optimize workflow and ensure every square foot of your industrial facility is used effectively."
        />
        <ServiceItem
          title="Employee-Friendly Environments"
          description="Our ergonomic designs create safe and comfortable workplaces, boosting both employee well-being and productivity."
        />
        <ServiceItem
          title="Durable Material Selection"
          description="We choose high-quality, durable materials that stand up to industrial demands while maintaining a professional appearance."
        />
        <ServiceItem
          title="Customized Lighting Solutions"
          description="Our lighting designs enhance visibility and safety while improving energy efficiency, ensuring a brighter and more cost-effective workspace."
        />
        <ServiceItem
          title="Tailored Storage Systems"
          description="We develop storage solutions that keep your space organized and streamline inventory management."
        />
        <ServiceItem
          title="Integrated Safety Features"
          description="Safety is paramount. We incorporate clear signage, safe walkways, and proper emergency exits to ensure regulatory compliance."
        />
        <ServiceItem
          title="Brand Identity Integration"
          description="Your brand matters. We weave your corporate identity into the design for a cohesive, professional industrial environment."
        />
        <ServiceItem
          title="Eco-Friendly Practices"
          description="Our sustainable designs utilize energy-efficient systems and eco-friendly materials to minimize environmental impact and reduce costs."
        />
        <ServiceItem
          title="Realistic 3D Visualizations"
          description="We provide detailed 3D renders to help you visualize the final design and make well-informed decisions before implementation."
        />
        <ServiceItem
          title="Comprehensive Project Management"
          description="We manage the entire process, from conceptualization to completion, ensuring every detail is executed on time and to your satisfaction."
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
