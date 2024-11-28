import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const AdditionalServices = () => {
  const [activeService, setActiveService] = useState(1); 
  const handleCardClick = (id) => {
    setActiveService(id);
  };

  const { isDarkMode } = useTheme();

  const buttonStyles = (active) => ({
    padding: '1rem 2rem',
    borderRadius: '9999px',
    color: isDarkMode ? 'white' : 'white',
    fontWeight: '600',
    backgroundColor: active ? '#15803D' : '#15803D',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    cursor: 'pointer',
    border: isDarkMode ? '1px solid #15803D' : '1px solid #15803D',
  });

  const buttonHoverStyles = {
    backgroundColor: '#15803D',
    transform: 'scale(1.05)',
  };

  const fadeInStyles = {
    animation: 'fadeIn 0.5s forwards',
    textAlign: 'left',
    marginTop: '1rem',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: '1rem',
    color: isDarkMode ? 'white' : 'black',
    // color: isDarkMode ? '#E5E7EB' : '#555',
  };

  return (
    <div className={`text-center px-4 py-12 ${isDarkMode ? '' : 'bg-white '}`}>
      <h2 className={`${isDarkMode ? 'text-white' : 'text-black'} text-2xl font-bold mb-6`}>
        Additional Services We Offer
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
        <button
          onClick={() => handleCardClick(1)}
          style={buttonStyles(activeService === 1)}
         
          onMouseEnter={(e) => e.target.style.backgroundColor = '#15803D'} // Hover effect
          onMouseLeave={(e) => e.target.style.backgroundColor = activeService === 1 ? '#15803D' : '#15803D'} // Remove hover effect
        >
          Rajuk Approval
        </button>

        <button
          onClick={() => handleCardClick(2)}
          style={buttonStyles(activeService === 2)}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#15803D'} // Hover effect
          onMouseLeave={(e) => e.target.style.backgroundColor = activeService === 2 ? '#15803D' : '#15803D'} // Remove hover effect
        >
          Soil Test
        </button>

        <button
          onClick={() => handleCardClick(3)}
          style={buttonStyles(activeService === 3)}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#15803D'} // Hover effect
          onMouseLeave={(e) => e.target.style.backgroundColor = activeService === 3 ? '#15803D' : '#15803D'} // Remove hover effect
        >
          Cost Estimate
        </button>

        <button
          onClick={() => handleCardClick(4)}
          style={buttonStyles(activeService === 4)}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#15803D'} // Hover effect
          onMouseLeave={(e) => e.target.style.backgroundColor = activeService === 4 ? '#15803D' : '#15803D'} // Remove hover effect
        >
          Digital Land Survey
        </button>
      </div>

      <div>
        {activeService === 1 && (
          <p style={{...fadeInStyles, animationDelay: '0.3s'}} className={`${isDarkMode ? "text-white" : "text-black"}`}>
            Green Shelter Design and Development simplifies the process of obtaining RAJUK and City Corporation approvals for building plans. Our experienced team ensures fast, hassle-free, and compliant approvals, protecting clients from legal issues and delays.
          </p>
        )}
        {activeService === 2 && (
          <p style={{...fadeInStyles, animationDelay: '0.3s'}} className={`${isDarkMode ? "text-white" : "text-black"}`}>
            Our soil test service ensures safe construction by assessing soil conditions for structural stability. This essential step helps prevent future issues with the building’s foundation.
          </p>
        )}
        {activeService === 3 && (
          <p style={{...fadeInStyles, animationDelay: '0.3s'}} className={`${isDarkMode ? "text-white" : "text-black"}`}>
            Get accurate cost estimations for efficient budget planning. Our cost estimation service allows you to understand project expenses and manage resources effectively.
          </p>
        )}
        {activeService === 4 && (
          <p style={{...fadeInStyles, animationDelay: '0.3s'}} className={`${isDarkMode ? "text-white" : "text-black"}`}>
            Our digital land survey provides precise data for land planning and development. Using advanced technology, we ensure accurate information for your project needs.
          </p>
        )}
      </div>
    </div>
  );
};

export default AdditionalServices;
