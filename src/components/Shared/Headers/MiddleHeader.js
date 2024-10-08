// import { faFacebook, faLinkedin, faSquareInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React from "react";

// const MiddleHeader = () => {
//   return (
//     <header className="bg-green-700 text-white shadow-md py-4">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//         {/* Location Section */}
//         <div className="text-center md:text-left">
//           <a href="/" className="hover:text-blue-300">
//             <FontAwesomeIcon icon={faLocationDot} className="mr-2" /> Panthapath, Kalabagan, Dhaka-1205
//           </a>
//         </div>

//         {/* Phone Number Section */}
//         <div className="text-center">
//           <a href="/" className="hover:text-blue-300">
//             <FontAwesomeIcon icon={faPhoneVolume} className="mr-2" /> +880123456789
//           </a>
//         </div>

//         {/* Social Media Icons Section */}
//         <div className="flex justify-center space-x-4">
//           <a href="/" className="hover:text-blue-300">
//             <FontAwesomeIcon icon={faFacebook} />
//           </a>
//           <a href="/" className="hover:text-blue-300">
//             <FontAwesomeIcon icon={faYoutube} />
//           </a>
//           <a href="/" className="hover:text-blue-300">
//             <FontAwesomeIcon icon={faSquareInstagram} />
//           </a>
//           <a href="/" className="hover:text-blue-300">
//             <FontAwesomeIcon icon={faLinkedin} />
//           </a>
//           <a href="/" className="hover:text-blue-300">
//             <FontAwesomeIcon icon={faEnvelope} />
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default MiddleHeader;



import { faFacebook, faLinkedin, faSquareInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MiddleHeader = () => {
  return (
    <header className="bg-green-700 text-white shadow-md py-4 hidden sm:flex">
      <div className="container mx-2 flex flex-row md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Location Section */}
        <div className="text-center md:text-left">
          <a href="/" className="hover:text-blue-300">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" /> Panthapath, Kalabagan, Dhaka-1205
          </a>
        </div>

        {/* Phone Number Section */}
        <div className="text-center">
          <a href="/" className="hover:text-blue-300">
            <FontAwesomeIcon icon={faPhoneVolume} className="mr-2" /> +880123456789
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
