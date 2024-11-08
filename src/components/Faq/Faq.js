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
