// import React from "react";

// const FeasibilityStudy = () => {
//   return (
//     <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
//       <h1 className="text-3xl font-bold mb-4">
//         Feasibility Study by Green Shelter Design and Development
//       </h1>
//       <p className="text-lg mb-8">
//         At Green Shelter Design and Development, our Feasibility Study service helps you ensure your
//         project’s success from the start. We evaluate all critical aspects like
//         economic, technical, legal, and scheduling factors.
//       </p>

//       <h2 className="text-2xl font-semibold mb-6">
//         Our Feasibility Study Services:
//       </h2>

//       <div className="space-y-6 max-w-4xl w-full">
//         <ServiceItem
//           title="Economic Analysis"
//           description="We review project costs, revenue projections, and funding options to check financial viability. This helps you make informed decisions and secure funding."
//         />
//         <ServiceItem
//           title="Technical Feasibility"
//           description="We look at the technical requirements and challenges of your project. By identifying needed technologies, we ensure your project is feasible and efficient."
//         />
//         <ServiceItem
//           title="Legal & Regulatory Compliance"
//           description="We ensure your project meets all legal, zoning, and environmental regulations, protecting you from legal issues."
//         />
//         <ServiceItem
//           title="Schedule Feasibility"
//           description="We create detailed project timelines, identifying key milestones and potential delays, keeping your project on track and within budget."
//         />
//         <ServiceItem
//           title="Risk Assessment"
//           description="We identify potential risks early and develop strategies to manage them, ensuring project stability and success."
//         />
//       </div>
//     </div>
//   );
// };

// const ServiceItem = ({ title, description }) => (
//   <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
//     <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
//     <p className="text-gray-600 sm:w-2/3">{description}</p>
//   </div>
// );

// export default FeasibilityStudy;

// import React from "react";

// const FeasibilityStudy = () => {
//   return (
//     <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
//       <h1 className="text-3xl font-bold mb-4 px-32">
//       Project Feasibility Analysis by Green Shelter Design and Development
//       </h1>
//       <p className="text-lg mb-8 text-justify px-32">
//       At Green Shelter Design and Development, our Feasibility Study service is designed to set your project up for success from the very beginning. We thoroughly assess key factors such as economic, technical, legal, and scheduling considerations.
//       </p>

//       <h2 className="text-2xl font-semibold mb-6">
//       Highlights of Our Feasibility Study Services:
//       </h2>

//       <div className="space-y-6 max-w-4xl w-full">
//         <ServiceItem
//           title="Financial Assessment"
//           description="We analyze project costs, revenue estimates, and funding opportunities to evaluate financial viability, enabling you to make well-informed decisions and secure necessary resources."

//         />
//         <ServiceItem
//           title="Technical Viability"
//           description="We assess the technical requirements and potential challenges of your project. By identifying the necessary technologies, we ensure that your project is both feasible and optimized for efficiency."

//         />
//         <ServiceItem
//          title="Legal and Regulatory Adherence"
//          description="We ensure that your project complies with all legal, zoning, and environmental regulations, safeguarding you from potential legal complications."

//         />
//         <ServiceItem
//         title="Timeline Feasibility"
//         description="We develop comprehensive project timelines, highlighting critical milestones and potential delays, ensuring your project stays on schedule and within budget."

//         />
//         <ServiceItem
//           title="Risk Evaluation"
//           description="We proactively identify potential risks and create strategies to mitigate them, ensuring the stability and success of your project."

//         />
//       </div>
//     </div>
//   );
// };

// const ServiceItem = ({ title, description }) => (
//   <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4 text-justify">
//     <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
//     <p className="text-gray-600 sm:w-2/3 text-justify">{description}</p>
//   </div>
// );

// export default FeasibilityStudy;

import React from "react";
import Footer from "../../Shared/Footer/Footer";

const FeasibilityStudy = () => {
  return (
    <>
    <div className="flex flex-col items-center p-6 sm:p-8 text-center bg-white text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 px-4 sm:px-32">
        Project Feasibility Analysis by Green Shelter Design and Development
      </h1>
      <p className="text-base sm:text-lg mb-8 text-justify px-4 sm:px-32">
        At Green Shelter Design and Development, our Feasibility Study service
        is designed to set your project up for success from the very beginning.
        We thoroughly assess key factors such as economic, technical, legal, and
        scheduling considerations.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mb-6">
        Highlights of Our Feasibility Study Services:
      </h2>

      <div className="space-y-6 max-w-full sm:max-w-4xl w-full">
        <ServiceItem
          title="Financial Assessment"
          description="We analyze project costs, revenue estimates, and funding opportunities to evaluate financial viability, enabling you to make well-informed decisions and secure necessary resources."
        />
        <ServiceItem
          title="Technical Viability"
          description="We assess the technical requirements and potential challenges of your project. By identifying the necessary technologies, we ensure that your project is both feasible and optimized for efficiency."
        />
        <ServiceItem
          title="Legal and Regulatory Adherence"
          description="We ensure that your project complies with all legal, zoning, and environmental regulations, safeguarding you from potential legal complications."
        />
        <ServiceItem
          title="Timeline Feasibility"
          description="We develop comprehensive project timelines, highlighting critical milestones and potential delays, ensuring your project stays on schedule and within budget."
        />
        <ServiceItem
          title="Risk Evaluation"
          description="We proactively identify potential risks and create strategies to mitigate them, ensuring the stability and success of your project."
        />
      </div>
      
    </div>
    <Footer />
    </>
  );
};

const ServiceItem = ({ title, description }) => (
  <>
  
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4 text-justify">
    <h3 className="text-lg sm:text-xl font-semibold flex-shrink-0 sm:w-1/3">
      {title}
    </h3>
    <p className="text-gray-600 sm:w-2/3 text-justify">{description}</p>
  </div>

  </>
);

export default FeasibilityStudy;
