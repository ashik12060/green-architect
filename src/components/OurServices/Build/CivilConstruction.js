// import React from "react";

// const CivilConstruction = () => {
//   return (
//     <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
//       <h1 className="text-3xl font-bold mb-4">Civil Construction by Green Shelter Design and Development</h1>
//       <p className="text-lg mb-8">
//         At <span className="font-semibold">Green Shelter Design and Development</span>, we specialize in delivering high-quality Civil Construction services, transforming your ideas into reality. Our skilled team guarantees that each step of the construction process is carried out with accuracy and excellence.
//       </p>

//       <h2 className="text-2xl font-semibold mb-6">Our Civil Construction Services:</h2>

//       <div className="space-y-6 max-w-4xl w-full">
//         <ServiceItem
//           title="Site Preparation"
//           description="We handle all the necessary site preparation tasks such as clearing, grading, and excavation to properly prepare your site for construction."
//         />
//         <ServiceItem
//           title="Foundation Work"
//           description="We build durable and stable foundations, customized to suit the specific soil conditions and structural needs of your project."
//         />
//         <ServiceItem
//           title="Structural Construction"
//           description="We construct sturdy structural components such as beams, columns, and frameworks, ensuring the building's integrity and longevity."
//         />
//         <ServiceItem
//           title="Concrete Work"
//           description="We provide top-notch concrete services for everything from foundations to structural elements, ensuring both strength and long-lasting durability."
//         />
//         <ServiceItem
//           title="Masonry Work"
//           description="Our expert masonry services cover a wide range of tasks, including brick, stone, and block work, both for structural support and decorative purposes."
//         />
//         <ServiceItem
//           title="Road & Pavement Construction"
//           description="We specialize in building roads, pavements, and other essential infrastructure with a focus on durability and adherence to industry standards."
//         />
//         <ServiceItem
//           title="Utilities Installation"
//           description="We expertly install key utilities such as water supply, drainage, and sewage systems, ensuring the site's functionality."
//         />
//         <ServiceItem
//           title="Landscaping & Site Finishing"
//           description="Our landscaping and finishing services enhance the final look and usability of your project, leaving it visually appealing and functional."
//         />
//         <ServiceItem
//           title="Project Management"
//           description="We offer comprehensive project management services, overseeing each construction phase to ensure timely and successful project completion."
//         />
//       </div>
//     </div>
//   );
// };

// const ServiceItem = ({ title, description }) => (
//   <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 border-b border-gray-300 pb-4">
//     <h3 className="text-xl font-semibold flex-shrink-0 sm:w-1/3">{title}</h3>
//     <p className="text-gray-600 sm:w-2/3 text-justify">{description}</p>
//   </div>
// );

// export default CivilConstruction;



import React from "react";
import { useTranslation } from "react-i18next";

const CivilConstruction = () => {
  const { t } = useTranslation('Service'); // Use the 'Service' namespace for translations

  return (
    <div className="flex flex-col items-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">{t('civilConstructionTitle')}</h1>
      <p className="text-lg mb-8">
        {t('civilConstructionIntro')}
      </p>

      <h2 className="text-2xl font-semibold mb-6">{t('civilConstructionServices')}</h2>

      <div className="space-y-6 max-w-4xl w-full">
        <ServiceItem
          title={t('sitePreparation')}
          description={t('sitePreparationDesc')}
        />
        <ServiceItem
          title={t('foundationWork')}
          description={t('foundationWorkDesc')}
        />
        <ServiceItem
          title={t('structuralConstruction')}
          description={t('structuralConstructionDesc')}
        />
        <ServiceItem
          title={t('concreteWork')}
          description={t('concreteWorkDesc')}
        />
        <ServiceItem
          title={t('masonryWork')}
          description={t('masonryWorkDesc')}
        />
        <ServiceItem
          title={t('roadAndPavementConstruction')}
          description={t('roadAndPavementConstructionDesc')}
        />
        <ServiceItem
          title={t('utilitiesInstallation')}
          description={t('utilitiesInstallationDesc')}
        />
        <ServiceItem
          title={t('landscapingAndSiteFinishing')}
          description={t('landscapingAndSiteFinishingDesc')}
        />
        <ServiceItem
          title={t('projectManagement')}
          description={t('projectManagementDesc')}
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
