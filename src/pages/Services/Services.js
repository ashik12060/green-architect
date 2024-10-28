// import React from 'react'
// import OurServices from '../../components/OurServices/OurServices'
// import Footer from '../../components/Shared/Footer/Footer'
// import SmallHeader from '../../components/Shared/Headers/SmallHeader'
// import Header from '../../components/Shared/Headers/Header'
// import img from '../../assets/23338.jpg'

// const Services = () => {
//   return (
//     <>
     
//      <Header />

//      {/* cover photo */}
//      <div
//       className="relative h-56 bg-cover bg-center flex items-center justify-center text-white"
//       style={{ 
//         backgroundImage: `url(${img})`, // Correctly set the background image
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat'
//       }}
//     >
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="relative z-10 text-center px-4">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Title Here</h1>
//         <p className="text-lg md:text-xl">Your subtitle or description goes here.</p>
//       </div>
//     </div>


//   <OurServices />
//   <Footer />
//     </>
//   )
// }

// export default Services


import React from 'react';
import OurServices from '../../components/OurServices/OurServices';
import Footer from '../../components/Shared/Footer/Footer';
import Header from '../../components/Shared/Headers/Header';
import img from '../../assets/23338.jpg';
import { useLanguage } from '../../LanguageContext';


const translations = {
  EN: {
    title: "Your Title Here",
    subtitle: "Your subtitle or description goes here.",
  },
  BN: {
    title: "আপনার শিরোনাম এখানে",
    subtitle: "আপনার উপশিরোনাম বা বর্ণনা এখানে রাখুন।",
  },
};

const Services = () => {
  const { language } = useLanguage(); // Get the current language

  return (
    <>
      <Header />

      {/* Cover Photo */}
      <div
        className="relative h-56 bg-cover bg-center flex items-center justify-center text-white"
        style={{ 
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{translations[language].title}</h1>
          <p className="text-lg md:text-xl">{translations[language].subtitle}</p>
        </div>
      </div>

      <OurServices />
      <Footer />
    </>
  );
}

export default Services;
