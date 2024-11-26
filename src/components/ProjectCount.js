// import React from 'react';
// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';
// import { useTheme } from '../context/ThemeContext';
// import { useTranslation } from 'react-i18next';

// const ProjectCount = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true, // Trigger the animation only once
//     threshold: 0.1, // Trigger when 10% of the element is visible
//   });
//   const { isDarkMode } = useTheme();
//   const { t } = useTranslation('ProjectComplete'); 

//   return (
//     <div className={` bg-gray-100 py-8 ${isDarkMode ? 'bg-black text-white border border-gray-600' : 'bg-white-700 text-black'}`}>
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           <div
//             ref={ref}
//             className="bg-white rounded-md p-4 shadow-md text-center"
//           >
//             <h2 className="text-3xl font-bold text-green-500 mb-2">
//               {inView ? <CountUp end={t('projectsCompleted.count')} separator="," /> : '0'}
//             </h2>
//             <p className="text-gray-600"> {t('projectsCompleted.label')}</p>
//           </div>
//           <div
//             ref={ref}
//             className="bg-white rounded-md p-4 shadow-md text-center"
//           >
//             <h2 className="text-3xl font-bold text-green-500 mb-2">
//               {inView ? <CountUp end={t('satisfiedClients.count')}  separator="," /> : '0'}
//             </h2>
//             <p className="text-gray-600"> {t('satisfiedClients.label')}</p>
//           </div>
//           <div
//             ref={ref}
//             className="bg-white rounded-md p-4 shadow-md text-center"
//           >
//             <h2 className="text-3xl font-bold text-green-500 mb-2">
//               {inView ? <CountUp end={t('yearsExperience.count')}  /> : '0'}
//             </h2>
//             <p className="text-gray-600"> {t('yearsExperience.label')}</p>
//           </div>
//           <div
//             ref={ref}
//             className="bg-white rounded-md p-4 shadow-md text-center"
//           >
//             <h2 className="text-3xl font-bold text-blue-500 mb-2">
//               {inView ? <CountUp end={t('awardsWon.count')} separator="," /> : '0'}
//             </h2>
//             <p className="text-gray-600"> {t('awardsWon.label')}</p>
//           </div>
//         </div>
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
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });
  const { isDarkMode } = useTheme();
  const { t } = useTranslation('ProjectComplete');

  // Framer Motion Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

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
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            {
              count: t('projectsCompleted.count'),
              label: t('projectsCompleted.label'),
              color: 'text-green-700',
            },
            {
              count: t('satisfiedClients.count'),
              label: t('satisfiedClients.label'),
              color: 'text-green-700',
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
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg text-center"
              variants={cardVariants}
            >
              <h2 className={`text-4xl font-extrabold mb-2 ${item.color}`}>
                {inView ? <CountUp end={item.count} separator="," /> : '0'}
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
