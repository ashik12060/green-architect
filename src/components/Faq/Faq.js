// import React, { useState } from 'react';
// import { useTheme } from '../../context/ThemeContext';
// import { useTranslation } from 'react-i18next'; // Import useTranslation

// const Faq = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const { isDarkMode } = useTheme();
//   const { t } = useTranslation('Faq'); // Initialize translation hook

//   const faqs = t('faqs', { returnObjects: true }); // Retrieve FAQs from translation file

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className={`py-10 px-4 ${isDarkMode ? 'text-black bg-black' : 'bg-gray-100'}`}>
//       <div className="max-w-4xl mx-auto">
//         <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
//           {t('title')} {/* Use translation for title */}
//         </h2>
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="bg-white border border-gray-300 rounded-lg shadow-lg p-4"
//             >
//               <div
//                 className="flex justify-between items-center cursor-pointer"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 <h3 className="text-lg font-semibold">{faq.question}</h3>
//                 <span className="text-xl">
//                   {activeIndex === index ? '-' : '+'}
//                 </span>
//               </div>
//               {activeIndex === index && (
//                 <div className="mt-4 ">
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Faq;






// import React, { useState } from 'react';
// import { useTheme } from '../../context/ThemeContext';
// import { useTranslation } from 'react-i18next'; // Import useTranslation
// import { motion } from 'framer-motion'; // Import framer-motion

// const Faq = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const { isDarkMode } = useTheme();
//   const { t } = useTranslation('Faq'); // Initialize translation hook

//   const faqs = t('faqs', { returnObjects: true }); // Retrieve FAQs from translation file

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className={`py-10 px-4 ${isDarkMode ? 'text-black bg-black' : 'bg-gray-100'}`}>
//       <div className="max-w-4xl mx-auto">
//         <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
//           {t('title')} {/* Use translation for title */}
//         </h2>
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               className="bg-white border border-gray-300 rounded-lg shadow-lg p-4"
//               initial={{ opacity: 0, scale: 0.95 }} // Initial state for animation
//               animate={{ opacity: 1, scale: 1 }} // Final state for animation
//               transition={{ duration: 0.3 }}
//             >
//               <div
//                 className="flex justify-between items-center cursor-pointer"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 <motion.h3
//                   className="text-lg font-semibold"
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   {faq.question}
//                 </motion.h3>
//                 <motion.span
//                   className="text-xl"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.1, duration: 0.2 }}
//                 >
//                   {activeIndex === index ? '-' : '+'}
//                 </motion.span>
//               </div>

//               {/* Animate the answer section */}
//               {activeIndex === index && (
//                 <motion.div
//                   className="mt-4"
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: 'auto' }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {faq.answer}
//                 </motion.div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Faq;


import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { motion } from 'framer-motion'; // Import framer-motion

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { isDarkMode } = useTheme();
  const { t } = useTranslation('Faq'); // Initialize translation hook

  const faqs = t('faqs', { returnObjects: true }); // Retrieve FAQs from translation file

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const headerVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1.8,
      },
    },
  };

  return (
    <div className={`py-10 px-4 ${isDarkMode ? 'text-black bg-black' : 'bg-gray-100'}`}>
      <div className="max-w-4xl mx-auto">
        {/* <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
          {t('title')} 
        </h2> */}
           <motion.h2
      className={`text-3xl font-bold text-center mb-8 ${
        isDarkMode ? "text-white" : "text-black"
      }`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
      variants={headerVariants}
    >
      {t("title")}
    </motion.h2>
  
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-300 rounded-lg shadow-lg p-4"
              initial={{ opacity: 0, scale: 0.95 }} // Initial state for animation
              animate={{ opacity: 1, scale: 1 }} // Final state for animation
              transition={{ duration: 0.3 }}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <motion.h3
                  className="text-lg font-semibold"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.05 }} // Hover effect to scale the question slightly
                >
                  {faq.question}
                </motion.h3>
                <motion.span
                  className="text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                  whileTap={{ rotate: 180 }} // Rotate the icon when clicked
                >
                  {activeIndex === index ? '-' : '+'}
                </motion.span>
              </div>

              {/* Animate the answer section */}
              {activeIndex === index && (
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }} // Animate exit when collapsed
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
