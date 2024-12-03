import { faFacebook, faLinkedin, faSquareInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import { useTranslation } from "react-i18next";

const MiddleHeader = () => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation('Footer'); 
  return (
    <header className={`border border-green-50 text-white shadow-md py-4 hidden sm:flex ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-green-700 text-white'}`}>
      <div className="container mx-2 flex flex-row md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Location Section */}
        <div className="text-center md:text-left">
          <a href="tel:+8801706046312" className="hover:text-blue-300">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />{t('footer.contact.address')} 
          </a>
        </div>

        {/* Phone Number Section */}
        <div className="text-center">
          <a href="/" className="hover:text-blue-300">
            <FontAwesomeIcon icon={faPhoneVolume} className="mr-2" />{t('footer.contact.cell')}
          </a>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex justify-center space-x-4">
          <a href="/" className="hover:text-blue-300">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="/" className="hover:text-blue-300">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="/" className="hover:text-blue-300">
            <FontAwesomeIcon icon={faSquareInstagram} />
          </a>
          <a href="/" className="hover:text-blue-300">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="/" className="hover:text-blue-300">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default MiddleHeader;

