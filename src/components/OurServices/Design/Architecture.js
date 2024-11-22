import React from "react";

const ArchitecturalServices = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 py-8 text-center bg-white text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">
        Architecture Design Services in Bangladesh | Dhaka Designer
      </h1>
      <p className="text-base sm:text-lg mb-8 text-justify">
        At Dhaka Designer, we offer thorough architectural design services in Bangladesh that smoothly blend beauty, functionality, and sustainability. Our goal is to create spaces that align with your needs and goals, whether it's a cozy home, a modern apartment, or a dynamic commercial space.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mb-6">
        Our Architectural Design Philosophy in Bangladesh
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Client-Centered Solutions"
          description="Great architecture starts with understanding you. From the moment we begin, we carefully listen to your ideas and vision. This way, we can develop designs that feel like they’re truly yours and match your lifestyle perfectly."
        />
        <ServiceItem
          title="Sustainability is Important to Us"
          description="Sustainability is important to everything we do. We focus on energy-efficient solutions and eco-friendly materials, designing spaces that feel great and make a positive impact on the environment."
        />
        <ServiceItem
          title="Blending Tradition, Modernity, and Beauty"
          description="Our designs bring together modern architectural elements with traditional Bangladeshi touches. We prioritize creating structures that not only function well but also look stunning, ensuring that every space is visually appealing and showcases the elegance that homeowners in Bangladesh desire."
        />
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-6">
        Architectural Services We Provide in Bangladesh
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Residential Architecture"
          description="Our residential services are all about creating homes that reflect your style and offer comfort. Whether you need a compact two-bedroom home or a spacious family duplex, we ensure the design is both practical and beautiful, tailored to meet your standards for elegance and charm."
        />
        <ServiceItem
          title="Commercial Architecture in Bangladesh"
          description="Our commercial designs are tailored for businesses that want spaces to inspire and support productivity. From offices to retail outlets, we design environments that leave a lasting impression on clients and visitors with an emphasis on visual appeal and professional aesthetics."
        />
        <ServiceItem
          title="Community and Public Spaces"
          description="We are passionate about working on projects that serve the community. From mosques to public gathering places, we design spaces that are accessible, durable, and visually striking, appealing to all who visit."
        />
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-6">
        Our Architectural Process
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ProcessStep step="Initial Consultation" description="We start by discussing your ideas and understanding the project’s scope." />
        <ProcessStep step="Concept Development" description="Our team creates initial design concepts based on your vision." />
        <ProcessStep step="Design Refinement" description="We work closely with you to fine-tune every detail." />
        <ProcessStep step="Detailed Planning" description="We prepare thorough plans and technical blueprints to guide construction." />
        <ProcessStep step="Support During Construction" description="We’re there to provide guidance and site visits, making sure everything goes smoothly." />
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-6">
        Why Choose Dhaka Designer for Architectural Services in Bangladesh?
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Expertise and Local Knowledge"
          description="With years of experience in Bangladesh’s architectural scene, we know the local regulations, climate, and culture inside out. This means our designs fit perfectly with their surroundings and meet all standards."
        />
        <ServiceItem
          title="Commitment to Quality"
          description="Quality is at the heart of what we do. We ensure that every project stands the test of time, with careful attention to both design and functionality."
        />
        <ServiceItem
          title="End-to-End Service"
          description="From the first sketch to the final touches during construction, we’re with you every step of the way. You can count on us to make the process seamless."
        />
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="How long does the design process take?"
          description="Timelines depend on the project’s size and complexity, but we focus on making steady progress while maintaining quality."
        />
        <ServiceItem
          title="Can you customize designs based on my specific needs?"
          description="Absolutely. We tailor each design to meet your unique requirements, preferences, and the specifics of your site."
        />
        <ServiceItem
          title="What sustainability practices do you incorporate in your designs?"
          description="We focus on energy-efficient layouts, sustainable materials, and ensuring natural light and ventilation play a key role in our projects."
        />
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-10">
        Ready to Bring Your Vision to Life?
      </h2>
      <p className="text-base sm:text-lg mt-4 text-justify max-w-4xl">
        Let’s turn your ideas into outstanding spaces. Whether it’s a residential project, a commercial build, or a community space, Dhaka Designer is ready to make it happen. Contact us today at{" "}
        <a href="tel:+8801724747050" className="text-green-600 font-bold">
          +880 1724-747050
        </a>{" "}
        or visit our appointment page to get started.
      </p>
    </div>
  );
};

const ServiceItem = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
    <h3 className="text-lg sm:text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
    <p className="text-sm sm:text-base text-gray-600 sm:w-2/3 text-justify">{description}</p>
  </div>
);

const ProcessStep = ({ step, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
    <h3 className="text-lg sm:text-xl font-semibold flex-shrink-0 sm:w-1/3">{step}</h3>
    <p className="text-sm sm:text-base text-gray-600 sm:w-2/3 text-justify">{description}</p>
  </div>
);

export default ArchitecturalServices;
