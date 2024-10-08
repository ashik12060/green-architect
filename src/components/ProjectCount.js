import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const ProjectCount = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });
  const { isDarkMode } = useTheme();

  return (
    <div className={` bg-gray-100 py-8 ${isDarkMode ? 'bg-black text-white border border-gray-600' : 'bg-white-700 text-black'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            ref={ref}
            className="bg-white rounded-md p-4 shadow-md text-center"
          >
            <h2 className="text-3xl font-bold text-green-500 mb-2">
              {inView ? <CountUp end={2800} separator="," /> : '0'}
            </h2>
            <p className="text-gray-600">Project Completed</p>
          </div>
          <div
            ref={ref}
            className="bg-white rounded-md p-4 shadow-md text-center"
          >
            <h2 className="text-3xl font-bold text-green-500 mb-2">
              {inView ? <CountUp end={2500} separator="," /> : '0'}
            </h2>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>
          <div
            ref={ref}
            className="bg-white rounded-md p-4 shadow-md text-center"
          >
            <h2 className="text-3xl font-bold text-green-500 mb-2">
              {inView ? <CountUp end={18} /> : '0'}
            </h2>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div
            ref={ref}
            className="bg-white rounded-md p-4 shadow-md text-center"
          >
            <h2 className="text-3xl font-bold text-blue-500 mb-2">
              {inView ? <CountUp end={400} separator="," /> : '0'}
            </h2>
            <p className="text-gray-600">Awards Won</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCount;
