// import React from "react";
// import img from '../../assets/architect1.jpg'
// import { useTheme } from "../../context/ThemeContext";
// import { useTranslation } from "react-i18next";

// const WhyChoose = () => {
   
//   const { isDarkMode } = useTheme();
//   const { t } = useTranslation('AboutChoose'); 
//   return (
//     <div>
//       <div className={`flex flex-col items-center justify-center min-h-screen ${isDarkMode ? ' text-white  bg-black' : 'bg-white'}`}>
//         <div className={`container mx-auto p-4 rounded-lg shadow-md ${isDarkMode ? ' text-white  bg-black  shadow-md shadow-gray-800' : ''}`}>
//           <h1 className="text-3xl text-center my-10 pb-10 font-bold text-green-700  mb-4">
//           <span className={`${isDarkMode ? 'border-b-4 border-white text-white  ' : 'text-green-700 border-b-4 border-green-700'}`}>{t('title')}</span>
//           </h1>
//           <div className="flex flex-col md:flex-row">
            
//             <div className="md:w-1/2 p-4"  >
//               <p className=" mb-4">{t('paragraph1')}
//               </p>
//               <p className=" mb-4">{t('paragraph2')}
//               </p>
//               <p className="">{t('mission')}
//               </p>
//             </div>

//             <div className="md:w-1/2">
//               <img
//                 src={img}
//                 alt="Building Image"
//                 className="w-full rounded-lg shadow-sm"
//               />
//             </div>


//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChoose;



// animation added
import React from 'react';
import img from '../../assets/architec1.jpg';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function AboutUsComp() {
  const { t } = useTranslation('AboutProcess'); 
  const { isDarkMode } = useTheme();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen fa-100">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`container mx-auto p-4 rounded-lg shadow-md ${isDarkMode ? 'text-white shadow-md shadow-gray-800' : 'bg-white'}`}
        >
          <h1 className="text-3xl text-center my-10 pb-10 font-bold mb-4">
            <motion.span
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className={`${isDarkMode ? 'border-b-4 border-white text-white' : 'text-green-700 border-b-4 border-green-700'}`}
            >
              {t('title')}
            </motion.span>
          </h1>
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1 }}
              className="md:w-1/2"
            >
              <img src={img} alt="Building Image" className="w-full rounded-lg shadow-sm" />
            </motion.div>
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="md:w-1/2 p-4"
            >
              <p className="mb-4">{t('paragraph1')}</p>
              <p className="mb-4">{t('paragraph2')}</p>
              <p>{t('mission')}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default AboutUsComp;
