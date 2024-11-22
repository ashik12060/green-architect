import React from "react";

const CivilConstruction = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Civil Construction by Dhaka Designer</h1>
      <p className="text-lg mb-8">
        Dhaka Designer provides top-quality Civil Construction services to bring your project from concept to reality. Our experienced team ensures that every aspect of construction is executed with precision and excellence.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Civil Construction Services:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Site Preparation"
          description="We handle all site preparation activities, including clearing, grading, and excavation, to ready the site for construction."
        />
        <ServiceItem
          title="Foundation Work"
          description="We construct strong and stable foundations, tailored to the specific soil conditions and structural requirements of your project."
        />
        <ServiceItem
          title="Structural Construction"
          description="We build robust structural elements, including beams, columns, and frameworks, ensuring the integrity and durability of the building."
        />
        <ServiceItem
          title="Concrete Work"
          description="We perform high-quality concrete work, from foundations to structural components, ensuring strength and longevity."
        />
        <ServiceItem
          title="Masonry Work"
          description="We provide skilled masonry services, including brickwork, stonework, and blockwork, for both structural and aesthetic purposes."
        />
        <ServiceItem
          title="Road & Pavement Construction"
          description="We construct roads, pavements, and other infrastructure elements, ensuring durability and compliance with standards."
        />
        <ServiceItem
          title="Utilities Installation"
          description="We install essential utilities, such as water supply, drainage, and sewage systems, to ensure the functionality of the site."
        />
        <ServiceItem
          title="Landscaping & Site Finishing"
          description="We offer landscaping and site finishing services to enhance the appearance and usability of the completed project."
        />
        <ServiceItem
          title="Project Management"
          description="We provide comprehensive project management, overseeing every phase of construction to ensure timely and successful completion."
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

export default CivilConstruction;
