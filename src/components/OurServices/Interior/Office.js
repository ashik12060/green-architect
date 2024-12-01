import React from "react";

const Office = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Office Interior Design by Green Shelter Design and Development</h1>
      <p className="text-lg mb-8">
        Green Shelter Design and Development provides professional Office Interior Design services to create productive, efficient, and inspiring workspaces. Our designs focus on enhancing functionality, employee well-being, and brand identity.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Office Interior Design Services:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        {officeServices.map((service, index) => (
          <ServiceItem key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
};

// List of office design services
const officeServices = [
  { title: "Space Planning", description: "Efficient layouts that optimize space utilization and support various work activities, from collaborative areas to private offices." },
  { title: "Ergonomic Solutions", description: "Incorporating ergonomic furniture and design principles to promote comfort, reduce strain, and enhance productivity." },
  { title: "Brand Integration", description: "Integrating your brand’s identity into the office design, creating a cohesive environment that reflects your corporate culture." },
  { title: "Lighting Design", description: "Providing lighting solutions that enhance visibility, reduce eye strain, and create a pleasant work atmosphere." },
  { title: "Flexible Workspaces", description: "Designing adaptable workspaces that can easily be reconfigured to accommodate changing needs and team dynamics." },
  { title: "Color & Material Selection", description: "Helping you choose the right colors and materials that promote a productive and inviting work environment." },
  { title: "Technology Integration", description: "Incorporating modern technology solutions, such as smart office systems, to enhance connectivity and efficiency." },
  { title: "Breakout & Wellness Areas", description: "Designing breakout and wellness areas to promote relaxation, creativity, and employee well-being." },
  { title: "Storage Solutions", description: "Creating efficient storage solutions to keep the office organized and clutter-free." },
  { title: "Sustainable Design", description: "Implementing sustainable design practices, using eco-friendly materials and energy-efficient systems to reduce environmental impact." },
  { title: "3D Visualization", description: "Offering 3D visualization services to help you see the final design and make informed decisions." },
  { title: "Project Management", description: "Overseeing the entire design process, ensuring a seamless and timely project delivery." }
];

// ServiceItem component
const ServiceItem = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
    <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
    <p className="text-gray-600 sm:w-2/3 text-justify">{description}</p>
  </div>
);

export default Office;
