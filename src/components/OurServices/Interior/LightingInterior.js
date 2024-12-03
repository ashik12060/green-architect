// import React from "react";

// const LightingInterior = () => {
//   return (
//     <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
//       <h1 className="text-3xl font-bold mb-4">Custom Lighting Design by Green Shelter Design and Development</h1>
//       <p className="text-lg mb-8">
//         Green Shelter Design and Development offers bespoke lighting design services, illuminating your spaces with style and precision. Our expert team crafts innovative lighting solutions tailored to your specific needs and aesthetic preferences.
//       </p>

//       <h2 className="text-2xl font-semibold mb-6">Our Custom Lighting Design Services:</h2>

//       <div className="space-y-6 max-w-4xl w-full">
//         {services.map((service, index) => (
//           <ServiceItem key={index} title={service.title} description={service.description} />
//         ))}
//       </div>
//     </div>
//   );
// };

// // List of services
// const services = [
//   { title: "Tailored Lighting Solutions", description: "Custom lighting solutions that match your vision and enhance your space." },
//   { title: "Architectural Lighting", description: "Lighting designs that highlight architectural features and enhance aesthetic appeal." },
//   { title: "Decorative Lighting", description: "Designs for decorative lighting fixtures that add unique artistic touches to interiors." },
//   { title: "Functional Lighting", description: "Lighting designs that provide optimal illumination for various activities." },
//   { title: "Energy-Efficient Lighting", description: "Energy-efficient lighting technologies like LED and smart systems to reduce consumption." },
//   { title: "Outdoor Lighting", description: "Custom outdoor lighting solutions that enhance beauty and safety of exterior spaces." },
//   { title: "Material & Finish Selection", description: "Assistance in selecting durable and stylish materials and finishes for lighting fixtures." },
//   { title: "Installation Services", description: "Professional installation of custom lighting fixtures for secure and correct setup." },
//   { title: "Sustainable Practices", description: "Integrating sustainable practices to minimize environmental impact in design and production." },
// ];

// // ServiceItem component
// const ServiceItem = ({ title, description }) => (
//   <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
//     <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
//     <p className="text-gray-600 sm:w-2/3 text-justify">{description}</p>
//   </div>
// );

// export default LightingInterior;



import React from "react";
import { useTranslation } from "react-i18next";

const CustomLighting = () => {
  const { t } = useTranslation("Service"); // Fetch translations for the 'Service' namespace

  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      {/* Header Section */}
      <h1 className="text-3xl font-bold mb-4">{t("customLightingHeader")}</h1>
      <p className="text-lg mb-8">{t("customLightingIntroText")}</p>

      {/* Subheading */}
      <h2 className="text-2xl font-semibold mb-6">{t("customLightingServices")}</h2>

      {/* Service Items */}
      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t("tailoredLightingTitle")}
          description={t("tailoredLightingDesc")}
        />
        <ServiceItem
          title={t("architecturalLightingTitle")}
          description={t("architecturalLightingDescc")}
        />
        <ServiceItem
          title={t("decorativeLightingTitle")}
          description={t("decorativeLightingDesc")}
        />
        <ServiceItem
          title={t("functionalLightingTitle")}
          description={t("functionalLightingDesc")}
        />
        <ServiceItem
          title={t("energyEfficientLightingTitle")}
          description={t("energyEfficientLightingDesc")}
        />
        <ServiceItem
          title={t("outdoorLightingTitle")}
          description={t("outdoorLightingDescc")}
        />
        <ServiceItem
          title={t("materialFinishSelectionTitle")}
          description={t("materialFinishSelectionDescc")}
        />
        <ServiceItem
          title={t("installationServicesTitlee")}
          description={t("installationServicesDesc")}
        />
        <ServiceItem
          title={t("sustainablePracticesTitlee")}
          description={t("sustainablePracticesDesc")}
        />
      </div>
    </div>
  );
};

// Individual Service Item Component
const ServiceItem = ({ title, description }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
    <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
    <p className="text-gray-600 sm:w-2/3 text-justify">{description}</p>
  </div>
);

export default CustomLighting;
