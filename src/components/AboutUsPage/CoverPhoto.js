import React from 'react'
import img from '../../assets/carousel (2).jpg'

const CoverPhoto = () => {
  return (
    <div>
        <div
      className="relative h-56 bg-cover bg-center flex items-center justify-center text-white"
      style={{ 
        backgroundImage: `url(${img})`, // Correctly set the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">ABOUT US</h1>
        <p className="text-lg md:text-xl">Your subtitle or description goes here.</p>
      </div>
    </div>
    </div>
  )
}

export default CoverPhoto


// import React from 'react';
// import img from '../../assets/carousel (2).jpg';
// import { useLanguage } from '../../LanguageContext';

// const translations = {
//   EN: {
//     title: "ABOUT US",
//     subtitle: "Your subtitle or description goes here.",
//   },
//   BN: {
//     title: "আমাদের সম্পর্কে",
//     subtitle: "আপনার সাবটাইটেল বা বর্ণনা এখানে যাবে।",
//   },
// };

// const CoverPhoto = () => {
//   const { language } = useLanguage(); // Get the current language

//   return (
//     <div>
//       <div
//         className="relative h-56 bg-cover bg-center flex items-center justify-center text-white"
//         style={{ 
//           backgroundImage: `url(${img})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat'
//         }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative z-10 text-center px-4">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             {translations[language].title}
//           </h1>
//           <p className="text-lg md:text-xl">
//             {translations[language].subtitle}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CoverPhoto;
