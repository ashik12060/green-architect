
import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next"; // Import useTranslation
import { motion } from "framer-motion"; // Import framer-motion

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { isDarkMode } = useTheme();
  const { t } = useTranslation("Faq"); // Initialize translation hook

  const faqs = t("faqs", { returnObjects: true }); // Retrieve FAQs from translation file

  const [visibleFaqs, setVisibleFaqs] = useState(faqs); // State to control the number of visible FAQs
  const [isSmallScreen, setIsSmallScreen] = useState(false); // State to track small devices

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

  useEffect(() => {
    // Function to check screen size
    const checkScreenSize = () => {
      const isSmall = window.innerWidth <= 640; // Tailwind's "sm" breakpoint (640px)
      setIsSmallScreen(isSmall);

      // Show only the first 4 FAQs on small screens, otherwise show all
      setVisibleFaqs(isSmall ? faqs.slice(0, 4) : faqs);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [faqs]);

  return (
    <div
      className={`py-10 px-4 ${
        isDarkMode ? "text-black bg-black" : "bg-gray-100"
      }`}
    >
      <div className="max-w-4xl mx-auto ">
        <motion.h2
          className={`lg:text-3xl text-xl font-bold text-center mb-8 ${
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
          {visibleFaqs.map((faq, index) => (
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
                  {activeIndex === index ? "-" : "+"}
                </motion.span>
              </div>

              {/* Animate the answer section */}
              {activeIndex === index && (
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
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
