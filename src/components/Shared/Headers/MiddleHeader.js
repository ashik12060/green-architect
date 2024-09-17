import { faFacebook, faLinkedin, faSquareInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MiddleHeader = () => {
  return (
    <header className="bg-green-700 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="">
          <a href="/" className="hover:text-blue-300">
          <FontAwesomeIcon icon={faLocationDot} /> Panthapath, Kalabagan, Dhaka-1205
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <a href="/" className="hover:text-blue-300">
          <FontAwesomeIcon icon={faPhoneVolume} className="gap-2" />+880123456789
          </a>
          
        </nav>

        {/* Button or Call-to-Action */}
        <div>
        <nav className="space-x-6">
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
          
        </nav>
        </div>
      </div>
    </header>
  );
};

export default MiddleHeader;
