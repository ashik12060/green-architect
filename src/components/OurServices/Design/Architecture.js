import React from "react";

const Architecture = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 py-8 text-center bg-white text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">
        Architecture Design Solutions in Bangladesh | Green Shelter Design and Development
      </h1>
      <p className="text-base sm:text-lg mb-8 text-justify">
        Green Shelter Design and Development provides comprehensive architectural design solutions in Bangladesh, seamlessly integrating aesthetics, functionality, and sustainability. Our mission is to create spaces that align with your vision, whether it’s a cozy home, modern apartment, or a dynamic commercial property.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mb-6">
        Our Approach to Architectural Design in Bangladesh
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Client-Centered Approach"
          description="Exceptional architecture begins with understanding you. We listen carefully to your ideas and aspirations, ensuring we create designs that truly reflect your needs and lifestyle."
        />
        <ServiceItem
          title="Sustainability Matters"
          description="Sustainability is a core principle in all our projects. We emphasize energy-efficient solutions and eco-friendly materials to design spaces that are both pleasant and environmentally responsible."
        />
        <ServiceItem
          title="Fusing Tradition, Modernity, and Aesthetics"
          description="Our designs combine contemporary architectural elements with traditional Bangladeshi influences. We aim to create structures that not only perform well but also offer stunning aesthetics, enhancing every space with beauty and elegance."
        />
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-6">
        Architectural Services We Offer in Bangladesh
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Residential Architecture"
          description="Our residential services focus on designing homes that reflect your personality and offer comfort. Whether it’s a small two-bedroom house or a large family duplex, we ensure that each design is practical, beautiful, and meets your standards for charm and elegance."
        />
        <ServiceItem
          title="Commercial Architecture in Bangladesh"
          description="We create commercial spaces that inspire productivity. From office buildings to retail shops, we design environments that make a lasting impression with an emphasis on both aesthetics and professional functionality."
        />
        <ServiceItem
          title="Community and Public Spaces"
          description="We’re passionate about designing spaces that serve the public good. From mosques to public gathering areas, we design accessible, durable, and visually impressive spaces that welcome everyone."
        />
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-6">
        Our Design Process
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ProcessStep step="Initial Consultation" description="We begin by discussing your ideas and gaining an understanding of the project’s scope." />
        <ProcessStep step="Concept Development" description="Our team drafts initial design ideas based on your vision." />
        <ProcessStep step="Design Refinement" description="We work closely with you to refine the design and perfect every detail." />
        <ProcessStep step="Detailed Planning" description="We prepare comprehensive plans and technical drawings to guide construction." />
        <ProcessStep step="Support During Construction" description="We remain involved throughout the process, offering guidance and conducting site visits to ensure smooth execution." />
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-6">
        Why Choose Green Shelter Design and Development for Your Architectural Needs in Bangladesh?
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Expertise and Local Insight"
          description="With years of experience in the architectural field in Bangladesh, we have a deep understanding of local regulations, climate, and culture, ensuring our designs fit perfectly within their environment and comply with all standards."
        />
        <ServiceItem
          title="Focus on Quality"
          description="Quality is our top priority. We ensure each project stands the test of time by paying close attention to design, materials, and functionality."
        />
        <ServiceItem
          title="Comprehensive Service"
          description="From concept to completion, we provide end-to-end services, ensuring the process is seamless and stress-free for you."
        />
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="What’s the typical timeline for design?"
          description="Project timelines vary depending on complexity, but we aim for steady progress while ensuring high-quality results."
        />
        <ServiceItem
          title="Can designs be customized?"
          description="Yes, every design is tailored to your specific needs, preferences, and site conditions."
        />
        <ServiceItem
          title="What sustainability measures do you implement?"
          description="We prioritize energy-efficient designs, use sustainable materials, and ensure natural light and ventilation are integral to the space."
        />
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-10">
        Ready to Transform Your Ideas into Reality?
      </h2>
      <p className="text-base sm:text-lg mt-4 text-justify max-w-4xl">
        Let’s make your vision come to life. Whether you’re planning a residential, commercial, or public space project, Green Shelter Design and Development is ready to bring it to fruition. Reach out today at{" "}
        <a href="tel:+8801724747050" className="text-green-600 font-bold">
        +8801711-001726
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

export default Architecture;
