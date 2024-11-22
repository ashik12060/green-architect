import React from "react";

const Office = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Office Interior Design by Dhaka Designer</h1>
      <p className="text-lg mb-8">
        Dhaka Designer provides professional Office Interior Design services to create productive, efficient, and inspiring workspaces. Our designs focus on enhancing functionality, employee well-being, and brand identity.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Office Interior Design Services:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Space Planning"
          description="We design efficient layouts that optimize space utilization and support various work activities, from collaborative areas to private offices."
        />
        <ServiceItem
          title="Ergonomic Solutions"
          description="We incorporate ergonomic furniture and design principles to promote comfort, reduce strain, and enhance employee productivity."
        />
        <ServiceItem
          title="Brand Integration"
          description="We integrate your brand’s identity into the office design, creating a cohesive and professional environment that reflects your corporate culture."
        />
        <ServiceItem
          title="Lighting Design"
          description="We provide effective lighting solutions that enhance visibility, reduce eye strain, and create a pleasant work atmosphere."
        />
        <ServiceItem
          title="Flexible Workspaces"
          description="We design adaptable workspaces that can easily be reconfigured to accommodate changing needs and team dynamics."
        />
        <ServiceItem
          title="Color & Material Selection"
          description="We help you choose the right colors and materials that promote a productive and inviting work environment."
        />
        <ServiceItem
          title="Technology Integration"
          description="We incorporate modern technology solutions, such as smart office systems, to enhance connectivity and efficiency."
        />
        <ServiceItem
          title="Breakout & Wellness Areas"
          description="We design breakout and wellness areas to promote relaxation, creativity, and employee well-being."
        />
        <ServiceItem
          title="Storage Solutions"
          description="We create efficient storage solutions to keep the office organized and clutter-free."
        />
        <ServiceItem
          title="Sustainable Design"
          description="We implement sustainable design practices, using eco-friendly materials and energy-efficient systems to reduce environmental impact."
        />
        <ServiceItem
          title="3D Visualization"
          description="We offer 3D visualization services to help you see the final design and make informed decisions."
        />
        <ServiceItem
          title="Project Management"
          description="We oversee the entire design process, from concept to completion, ensuring a seamless and timely project delivery."
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

export default Office;
