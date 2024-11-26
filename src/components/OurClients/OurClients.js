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


import React from 'react';
import './Ourclients.css'

// Images
import img1 from "../../assets/architec1.jpg";
import img2 from "../../assets/architect1.jpg";
import img3 from "../../assets/architect2.jpg";
import img4 from "../../assets/carousel (2).jpg";
import img5 from "../../assets/team.jpg";
import img6 from "../../assets/architec1.jpg";
import img7 from "../../assets/architect1.jpg";
import img8 from "../../assets/architect2.jpg";
import img9 from "../../assets/architect2.jpg";
import img10 from "../../assets/team.jpg";

const logos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

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
            className="rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default OurClients;
