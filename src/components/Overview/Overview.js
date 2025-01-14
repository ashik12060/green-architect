import React, { useState, useEffect } from "react";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../context/ThemeContext";
import axiosInstance from "../../pages/axiosInstance";
import { useParams } from "react-router-dom"; // Import to get the dynamic id
import { useTranslation } from "react-i18next";

const Overview = () => {
  const { id } = useParams(); // Get the dynamic project id from URL
  const [images, setImages] = useState([]); // This will hold the overview images of the selected project
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const { isDarkMode } = useTheme();
   const { t } = useTranslation('SingleProject');

  useEffect(() => {
    const fetchProjectOverviewImages = async () => {
      try {
        setLoading(true);
        const { data } = await axiosInstance.get(
          `${process.env.REACT_APP_API_URL}/api/project/${id}`
        );
        
        // Set the overview images for the specific project
        setImages(data.project.overviewImages || []);
      } catch (err) {
        console.error("Error fetching overview images:", err.response?.data || err.message);
        setError("Failed to load overview images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectOverviewImages();
  }, [id]); // Only fetch when the id changes

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage < images.length ? prevIndex + itemsPerPage : 0
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage >= 0
        ? prevIndex - itemsPerPage
        : Math.max(0, images.length - itemsPerPage)
    );
  };

  // Ensure the images array is sliced correctly to avoid out-of-bounds errors.
  const displayedImages = images.slice(currentIndex, currentIndex + itemsPerPage);

  if (loading) return <div className="text-center">Loading images...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (images.length === 0) return <div className="text-center text-gray-500">No overview images to display.</div>;

  return (
    <div className="relative w-full max-w-7xl mx-auto my-20 px-4">
      <h1
        className={`text-4xl font-bold text-center mb-10 ${isDarkMode ? "text-white border-b-4 border-green-700" : "text-black"}`}
      >
        {t("OVERVIEW")}
      </h1>

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

      <div className="flex overflow-hidden justify-center mt-10">
        {displayedImages.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Overview ${currentIndex + index}`}
            className="w-full sm:w-64 md:w-80 lg:w-80 h-64 object-cover mx-2 rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default Overview;

// import React, { useState, useEffect } from "react";
// import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useTheme } from "../../context/ThemeContext";
// import axiosInstance from "../../pages/axiosInstance";
// import { useParams } from "react-router-dom"; // Import to get the dynamic id

// const Overview = () => {
//   const { id } = useParams(); // Get the dynamic project id from URL
//   const [images, setImages] = useState([]); // This will hold the overview images of the selected project
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerPage = 5;
//   const { isDarkMode } = useTheme();

//   useEffect(() => {
//     const fetchProjectOverviewImages = async () => {
//       try {
//         setLoading(true);
//         const { data } = await axiosInstance.get(
//           `${process.env.REACT_APP_API_URL}/api/project/${id}`
//         );
        
//         // Set the overview images for the specific project
//         setImages(data.project.overviewImages || []);
//       } catch (err) {
//         console.error("Error fetching overview images:", err.response?.data || err.message);
//         setError("Failed to load overview images. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjectOverviewImages();
//   }, [id]); // Only fetch when the id changes

//   const next = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + itemsPerPage < images.length ? prevIndex + itemsPerPage : 0
//     );
//   };

//   const prev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - itemsPerPage >= 0
//         ? prevIndex - itemsPerPage
//         : Math.max(0, images.length - itemsPerPage)
//     );
//   };

//   if (loading) return <div className="text-center">Loading images...</div>;
//   if (error) return <div className="text-center text-red-500">{error}</div>;
//   if (images.length === 0) return <div className="text-center text-gray-500">No overview images to display.</div>;

//   return (
//     <div className="relative w-full max-w-7xl mx-auto my-20 px-4">
//       <h1
//         className={`text-4xl font-bold text-center mb-10 ${isDarkMode ? "text-white border-b-4 border-green-700" : "text-black"}`}
//       >
//         OVERVIEW
//       </h1>

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

//       <div className="flex overflow-hidden justify-center mt-10">
//         {images.slice(currentIndex, currentIndex + itemsPerPage).map((image, index) => (
//           <img
//             key={index}
//             src={image.url}
//             alt={`Overview ${index}`}
//             className="w-full sm:w-64 md:w-80 lg:w-80 h-64 object-cover mx-2 rounded-lg shadow-md"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Overview;
