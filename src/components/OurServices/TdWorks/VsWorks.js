import React from "react";

const VsWorks = () => {
  const vrItems = [
    {
      title: "360° Interior Visualization",
      description: "Immerse yourself in detailed 360° interior visuals, ideal for online demos and interactive walkthroughs.",
    },
    {
      title: "360° Exterior Visualization",
      description: "Discover the exterior of your project with high-definition 360° visuals. Easily shareable with clients online.",
    },
    {
      title: "Virtual Reality Animation",
      description: "Engage your audience with interactive VR animations that highlight your projects in a unique and innovative manner.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-8 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8">
        Virtual Reality Projects
      </h1>
      <p className="text-lg text-center mb-12">
        VR visuals and walkthroughs are a highly efficient method to present your spaces. 
        They are budget-friendly and can be easily hosted online. Below are some examples of our 360° visualizations and animations.
      </p>

      <div className="space-y-8 max-w-4xl mx-auto">
        {vrItems.map((item, index) => (
          <VRItem key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

const VRItem = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default VsWorks;
