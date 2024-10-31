// import React, { useState } from 'react';
// import { useTheme } from '../../context/ThemeContext';

// const Faq = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const faqs = [
//     {
//       question: 'What is your return policy?',
//       answer: 'Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we cannot offer you a refund or exchange.',
//     },
//     {
//       question: 'How do I track my order?',
//       answer: 'Once your order has been shipped, you will receive a tracking number via email or SMS. You can use this number to track your order on our website.',
//     },
//     {
//       question: 'Do you offer international shipping?',
//       answer: 'Yes, we offer international shipping to selected countries. Please check the shipping page for more details.',
//     },
//     {
//       question: 'How do I contact customer service?',
//       answer: 'You can reach our customer service team by emailing us at support@yourcompany.com or calling our helpline at +123-456-789.',
//     },
//   ];

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };
//   const { isDarkMode } = useTheme();

//   return (
//     <div className={`py-10 px-4 ${isDarkMode ? 'text-black bg-black' : 'bg-gray-100'}`}>

//       <div className="max-w-4xl mx-auto">
//         <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>Frequently Asked Questions</h2>
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



import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { isDarkMode } = useTheme();
  const { t } = useTranslation('Faq'); // Initialize translation hook

  const faqs = t('faqs', { returnObjects: true }); // Retrieve FAQs from translation file

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`py-10 px-4 ${isDarkMode ? 'text-black bg-black' : 'bg-gray-100'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
          {t('title')} {/* Use translation for title */}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg shadow-lg p-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-xl">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>
              {activeIndex === index && (
                <div className="mt-4 ">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
