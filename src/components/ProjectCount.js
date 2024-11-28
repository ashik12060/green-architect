

// import React from 'react';
// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';
// import { useTheme } from '../context/ThemeContext';
// import { useTranslation } from 'react-i18next';
// import { motion } from 'framer-motion';

// const ProjectCount = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1, 
//   });
//   const { isDarkMode } = useTheme();
//   const { t } = useTranslation('ProjectComplete');

//   // Framer Motion Animation Variants
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div
//       className={`py-12 ${
//         isDarkMode ? 'bg-black text-white border border-gray-600' : 'bg-gray-100 text-black'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <motion.div
//           ref={ref}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//           initial="hidden"
//           animate={inView ? 'visible' : 'hidden'}
//           variants={{
//             visible: {
//               transition: {
//                 staggerChildren: 0.2,
//               },
//             },
//           }}
//         >
//           {[
//             {
//               count: t('projectsCompleted.count'),
//               label: t('projectsCompleted.label'),
//               color: 'text-green-700',
//             },
//             {
//               count: t('satisfiedClients.count'),
//               label: t('satisfiedClients.label'),
//               color: 'text-green-700',
//             },
//             {
//               count: t('yearsExperience.count'),
//               label: t('yearsExperience.label'),
//               color: 'text-green-700',
//             },
//             {
//               count: t('awardsWon.count'),
//               label: t('awardsWon.label'),
//               color: 'text-blue-500',
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-lg p-6 shadow-lg text-center"
//               variants={cardVariants}
//             >
//               <h2 className={`text-4xl font-extrabold mb-2 ${item.color}`}>
//                 {inView ? <CountUp end={item.count} separator="," /> : '0'}
//               </h2>
//               <p className="text-gray-600">{item.label}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCount;



// import React from 'react';
// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';
// import { useTheme } from '../context/ThemeContext';
// import { useTranslation } from 'react-i18next';
// import { motion } from 'framer-motion';

// const ProjectCount = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });
//   const { isDarkMode } = useTheme();
//   const { t } = useTranslation('ProjectComplete');

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const data = [
//     {
//       count: t('projectsCompleted.count'),
//       label: t('projectsCompleted.label'),
//       color: 'text-green-700',
//     },
//     {
//       count: t('satisfiedClients.count'),
//       label: t('satisfiedClients.label'),
//       color: 'text-green-700',
//       suffix: '%', 
//     },
//     {
//       count: t('yearsExperience.count'),
//       label: t('yearsExperience.label'),
//       color: 'text-green-700',
//     },
//     {
//       count: t('awardsWon.count'),
//       label: t('awardsWon.label'),
//       color: 'text-blue-500',
//     },
//   ];

//   return (
//     <div
//       className={`py-12 ${
//         isDarkMode ? 'bg-black text-white border border-gray-600' : 'bg-gray-100 text-black'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <motion.div
//           ref={ref}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//           initial="hidden"
//           animate={inView ? 'visible' : 'hidden'}
//           variants={{
//             visible: {
//               transition: {
//                 staggerChildren: 0.2,
//               },
//             },
//           }}
//         >
//           {data.map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-lg p-6 shadow-lg text-center"
//               variants={cardVariants}
//             >
//               <h2 className={`text-4xl font-extrabold mb-2 ${item.color}`}>
//                 {inView ? (
//                   <CountUp
//                     end={parseFloat(item.count)} 
//                     separator=","
//                     suffix={item.suffix || ''}
//                   />
//                 ) : (
//                   '0'
//                 )}
//               </h2>
//               <p className="text-gray-600">{item.label}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCount;




import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ProjectCount = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { isDarkMode } = useTheme();
  const { t } = useTranslation('ProjectComplete');

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger children animations
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state: fade-in and move up
    visible: { opacity: 1, y: 0 }, // Final state: visible and at original position
  };

  const data = [
    {
      count: t('projectsCompleted.count'),
      label: t('projectsCompleted.label'),
      color: 'text-green-700',
    },
    {
      count: t('satisfiedClients.count'),
      label: t('satisfiedClients.label'),
      color: 'text-green-700',
      suffix: '%',
    },
    {
      count: t('yearsExperience.count'),
      label: t('yearsExperience.label'),
      color: 'text-green-700',
    },
    {
      count: t('awardsWon.count'),
      label: t('awardsWon.label'),
      color: 'text-blue-500',
    },
  ];

  return (
    <div
      className={`py-12 ${
        isDarkMode ? 'bg-black text-white border border-gray-600' : 'bg-gray-100 text-black'
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg text-center"
              variants={cardVariants}
              transition={{
                type: 'spring',
                stiffness: 50,
                damping: 10, // Smooth spring animation
              }}
            >
              <h2 className={`text-4xl font-extrabold mb-2 ${item.color}`}>
                {inView ? (
                  <CountUp
                    end={parseFloat(item.count)}
                    separator=","
                    suffix={item.suffix || ''}
                    duration={2} // Animation duration for CountUp
                  />
                ) : (
                  '0'
                )}
              </h2>
              <p className="text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCount;
