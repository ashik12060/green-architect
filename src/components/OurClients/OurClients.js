// import React from 'react';
// import img1 from "../../assets/architec1.jpg";
// import img2 from "../../assets/architect1.jpg";
// import img3 from "../../assets/architect2.jpg";
// import img4 from "../../assets/carousel (2).jpg";
// import img5 from "../../assets/team.jpg";
// import img6 from "../../assets/architec1.jpg";
// import img7 from "../../assets/architect1.jpg";
// import img8 from "../../assets/architect2.jpg";
// import img9 from "../../assets/architect2.jpg";
// import img10 from "../../assets/team.jpg";
// import './Ourclients.css'

// const logos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

// const OurClients = () => {
//   return (
//     <div className="bg-gray-100 py-10 overflow-hidden">
//       <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">PARTNERS</h2>
//       <div className="relative">
//         {/* Scrolling Wrapper */}
//         <div className="flex animate-scroll space-x-4">
//           {/* Render logos twice for seamless scrolling */}
//           {[...logos, ...logos].map((logo, index) => (
//             <img
//               key={index}
//               src={logo}
//               alt={`Partner ${index + 1}`}
//               className="h-24 w-auto mx-2 rounded-lg shadow-lg"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurClients;

import React from "react";
import "./Ourclients.css";

// Images
import img1 from "../../assets/partners logo/army.png";
import img2 from "../../assets/partners logo/RFL.jpg";
import img3 from "../../assets/partners logo/abul khair grp.jpg";
import img4 from "../../assets/partners logo/aci.jpg";
import img5 from "../../assets/partners logo/akij.jpg";
import img6 from "../../assets/partners logo/bar council.jpg";
import img7 from "../../assets/partners logo/bashundhara.jpg";
import img8 from "../../assets/partners logo/berger.png";
import img9 from "../../assets/partners logo/beximco.png";
import img10 from "../../assets/partners logo/bgb.png";
import img11 from "../../assets/partners logo/citi bank.png";
import img12 from "../../assets/partners logo/grameen bank.png";
import img13 from "../../assets/partners logo/holcim.png";
import img14 from "../../assets/partners logo/marine academy.png";
import img15 from "../../assets/partners logo/meta english.jpg";
import img16 from "../../assets/partners logo/mrs industry.png";
import img17 from "../../assets/partners logo/navy.png";
import img18 from "../../assets/partners logo/partext.png";
import img19 from "../../assets/partners logo/police.jpg";
import img20 from "../../assets/partners logo/square grp.png";
import img21 from "../../assets/partners logo/us bangla.png";

const logos = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
];

const OurClients = () => {
  return (
    <div className="our-clients-container">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
        PARTNERS
      </h2>
      <div className="our-clients-scroll">
        {/* Render logos twice for seamless scrolling */}
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner ${index + 1}`}
            className="rounded-lg shadow-lg w-20"
          />
        ))}
      </div>
    </div>
  );
};

export default OurClients;

