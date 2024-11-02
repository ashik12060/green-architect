import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareWhatsapp,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SocialMediaButton = () => {
  return (
    <div className="fixed bottom-10 transform -translate-y-1/2 space-y-1 py-2 ">
      
      <a
        href="https://wa.me/+8801317424004"
        target="_blank"
        rel="noopener noreferrer"
        className="block  text-green-600  hover:text-green-500 rounded-full shadow-lg transition"
      >
        <FontAwesomeIcon className="text-6xl ps-3 rounded-full" icon={faSquareWhatsapp} />
      </a>
    </div>
  );
};

export default SocialMediaButton;
