import React from "react";

const CostEstimate = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Cost Estimation by Dhaka Designer</h1>
      <p className="text-lg mb-8">
        Dhaka Designer offers precise Cost Estimation services to help you plan and budget your construction projects effectively. Our detailed cost analysis ensures you have a clear understanding of all financial aspects.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Our Cost Estimation Services:</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title="Detailed Budgeting"
          description="We create comprehensive budgets that cover all project expenses, ensuring you have a complete financial overview."
        />
        <ServiceItem
          title="Quantity Takeoffs"
          description="We perform accurate quantity takeoffs to determine the materials and resources required for your project."
        />
        <ServiceItem
          title="Cost Analysis"
          description="We analyze current market prices and trends to provide accurate cost estimates for materials, labor, and equipment."
        />
        <ServiceItem
          title="Value Engineering"
          description="We identify cost-saving opportunities without compromising on quality, helping you get the best value for your investment."
        />
        <ServiceItem
          title="Bid Preparation"
          description="We assist in preparing detailed bid documents to ensure competitive and fair pricing from contractors."
        />
        <ServiceItem
          title="Cost Monitoring"
          description="We continuously monitor costs throughout the project, providing updates and adjustments as needed to stay within budget."
        />
        <ServiceItem
          title="Final Cost Reporting"
          description="We provide a final cost report upon project completion, detailing all expenses and comparing them to the initial budget."
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
