import React from "react";

const CostEstimate = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Cost Estimation by Green Shelter Design and Development</h1>
      <p className="text-lg mb-8">
        At <span className="font-semibold">Green Shelter Design and Development</span>, we provide accurate and reliable Cost Estimation services, enabling you to effectively plan and manage your construction budgets. Our in-depth analysis ensures you have a comprehensive understanding of your project's financial requirements.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Cost Estimation Services:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Comprehensive Budgeting"
          description="We develop detailed budgets that encompass all project expenses, ensuring you have a complete financial picture."
        />
        <ServiceItem
          title="Material Quantity Takeoffs"
          description="We carry out precise quantity takeoffs to identify the materials and resources needed for your project."
        />
        <ServiceItem
          title="Cost Evaluation"
          description="We assess current market conditions to provide accurate estimates for materials, labor, and equipment."
        />
        <ServiceItem
          title="Value Engineering"
          description="We uncover cost-reduction opportunities without compromising quality, ensuring you receive optimal value for your investment."
        />
        <ServiceItem
          title="Bid Document Preparation"
          description="We assist in preparing detailed bid documents, ensuring you receive competitive and fair pricing from contractors."
        />
        <ServiceItem
          title="Ongoing Cost Monitoring"
          description="We track project costs throughout its duration, providing necessary updates and adjustments to stay within the approved budget."
        />
        <ServiceItem
          title="Final Cost Summary"
          description="Upon completion, we deliver a final cost summary, detailing all expenditures and comparing them to the initial budget."
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

export default CostEstimate;
