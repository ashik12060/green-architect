

// import React, { useState } from "react";
// import img1 from '../../assets/architec1.jpg';
// import img2 from '../../assets/architect1.jpg';
// import img3 from '../../assets/architect2.jpg';
// import img4 from '../../assets/carousel (2).jpg';
// import img5 from '../../assets/architec1.jpg';
// import img6 from '../../assets/architect1.jpg';
// import img7 from '../../assets/architect2.jpg';
// import img8 from '../../assets/carousel (2).jpg';
// import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useTheme } from "../../context/ThemeContext";

// const Overview = () => {
//   const images = [img1, img2, img3, img4, img5, img6, img7, img8]; // Array of images
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerPage = 3;

//   // Navigate to the next set of images
//   const next = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + itemsPerPage < images.length ? prevIndex + itemsPerPage : 0
//     );
//   };

//   // Navigate to the previous set of images
//   const prev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - itemsPerPage >= 0
//         ? prevIndex - itemsPerPage
//         : Math.max(0, images.length - itemsPerPage)
//     );
//   };

//   const { isDarkMode } = useTheme();

//   // Handle empty images array
//   if (images.length === 0) {
//     return <div className="text-center text-gray-500">No images to display.</div>;
//   }

//   return (
//     <div className="relative w-full max-w-7xl mx-auto my-20 px-4">
//       <h1
//         className={`text-4xl font-bold text-center mb-10 ${isDarkMode ? "text-white border-b-4 border-green-700" : "text-black"}`}
//       >
//         OVERVIEW
//       </h1>

//       {/* Navigation Buttons */}
//       <div className="absolute top-4 right-4 flex space-x-4">
//         <button
//           onClick={prev}
//           className="bg-gray-800 text-white px-6 py-4 rounded-full hover:bg-gray-700"
//         >
//           <FontAwesomeIcon icon={faLessThan} />
//         </button>
//         <button
//           onClick={next}
//           className="bg-gray-800 text-white px-6 py-4 rounded-full hover:bg-gray-700"
//         >
//           <FontAwesomeIcon icon={faGreaterThan} />
//         </button>
//       </div>

//       {/* Carousel Images */}
//       <div className="flex overflow-hidden  justify-center mt-10">
//         {images
//           .slice(currentIndex, currentIndex + itemsPerPage)
//           .map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Slide ${index}`}
//               className="w-80 h-80 object-cover mx-2 rounded-lg shadow-md" // Fixed size for images
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Overview;



import React, { useState } from "react";
import img1 from '../../assets/architec1.jpg';
import img2 from '../../assets/architect1.jpg';
import img3 from '../../assets/architect2.jpg';
import img4 from '../../assets/carousel (2).jpg';
import img5 from '../../assets/architec1.jpg';
import img6 from '../../assets/architect1.jpg';
import img7 from '../../assets/architect2.jpg';
import img8 from '../../assets/carousel (2).jpg';
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../context/ThemeContext";

const Overview = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  // Navigate to the next set of images
  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage < images.length ? prevIndex + itemsPerPage : 0
    );
  };

  // Navigate to the previous set of images
  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage >= 0
        ? prevIndex - itemsPerPage
        : Math.max(0, images.length - itemsPerPage)
    );
  };

  const { isDarkMode } = useTheme();

  // Handle empty images array
  if (images.length === 0) {
    return <div className="text-center text-gray-500">No images to display.</div>;
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto my-20 px-4">
      <h1
        className={`text-4xl font-bold text-center mb-10 ${isDarkMode ? "text-white border-b-4 border-green-700" : "text-black"}`}
      >
        OVERVIEW
      </h1>

      {/* Navigation Buttons */}
      <div className="absolute top-4 right-4 flex space-x-4">
        <button
          onClick={prev}
          className="bg-gray-800 text-white px-6 py-4 rounded-full hover:bg-gray-700"
        >
          <FontAwesomeIcon icon={faLessThan} />
        </button>
        <button
          onClick={next}
          className="bg-gray-800 text-white px-6 py-4 rounded-full hover:bg-gray-700"
        >
          <FontAwesomeIcon icon={faGreaterThan} />
        </button>
      </div>

      {/* Carousel Images */}
      <div className="flex overflow-hidden justify-center mt-10">
        {images
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="w-full sm:w-64 md:w-80 lg:w-80 h-64 object-cover mx-2 rounded-lg shadow-md" // Responsive size for images
            />
          ))}
      </div>
    </div>
  );
};

export default Overview;
