// import React, { useState, useEffect } from "react";
// import axiosInstance from "../../pages/axiosInstance";
// import { useTheme } from "../../context/ThemeContext";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";

// // const Modal = ({ showModal, closeModal, project, i18n }) => {
// //   if (!showModal || !project) return null;

// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
// //       <div className="bg-white text-black p-4 md:p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-hidden">

// //         <img
// //           src={
// //             project.image?.url ? project.image.url : "/path/to/placeholder.jpg"
// //           }
// //           alt={project.title[i18n.language] || "Project Image"}
// //           className="w-full h-full object-cover"
// //         />

// //         <h2 className="text-xl md:text-2xl font-bold text-center mb-2">
// //           {project.title[i18n.language]}
// //         </h2>
// //         <p className="text-sm md:text-base text-center mb-4">
// //           {project.content[i18n.language]}
// //         </p>
// //         <div className="max-h-[60vh] overflow-y-auto p-2">
// //           {/* <p className="text-sm md:text-base">{project.description[i18n.language]}</p> */}
// //         </div>
// //         <div className="mt-4 flex justify-end">
// //           <button
// //             onClick={closeModal}
// //             className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
// //           >
// //             Close
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// const SplitImageCarousel = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [projects, setProjects] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [itemsToShow, setItemsToShow] = useState(3);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const { t } = useTranslation("Home");
//   const { isDarkMode } = useTheme();
//   const { i18n } = useTranslation(); // Call useTranslation at the top level

//   const updateItemsToShow = () => {
//     if (window.innerWidth < 640) {
//       setItemsToShow(1);
//     } else if (window.innerWidth < 1024) {
//       setItemsToShow(2);
//     } else {
//       setItemsToShow(3);
//     }
//   };

//   const fetchProjects = async () => {
//     try {
//       const { data } = await axiosInstance.get(
//         `${process.env.REACT_APP_API_URL}/api/projects/show`
//       );
//       console.log(data.projects); // Log project data to check for the `image` field
//       setProjects(data.projects || []);
//     } catch (err) {
//       console.error("Error fetching projects:", err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProjects();
//     updateItemsToShow();
//     window.addEventListener("resize", updateItemsToShow);

//     return () => {
//       window.removeEventListener("resize", updateItemsToShow);
//     };
//   }, []);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + itemsToShow < projects.length ? prevIndex + itemsToShow : 0
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - itemsToShow >= 0
//         ? prevIndex - itemsToShow
//         : projects.length - itemsToShow
//     );
//   };

//   const openModal = (project) => {
//     setSelectedProject(project);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedProject(null);
//   };

//   if (loading) return <div className="text-center">Loading...</div>;
//   if (error) return <div className="text-center">Error: {error}</div>;

//   return (
//     <div
//       className={`flex flex-col items-center justify-center gap-4 mx-4 sm:mx-8 lg:mx-32 mt-10 mb-16 ${
//         isDarkMode ? "bg-gray-900" : "bg-gray-100"
//       }`}
//     >
//       <div className="relative w-full flex justify-between items-center mb-4">
//         <button
//           onClick={handlePrev}
//           className="text-gray-500 hover:text-gray-800 z-10"
//         >
//           ❮
//         </button>
       

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
//           {projects
//             .slice(currentIndex, currentIndex + itemsToShow)
//             .map((project, index) => (
//               <div
//                 key={index}
//                 className="relative w-full h-64 sm:h-80 overflow-hidden rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105"
//               >
//                 {/* Display the first image as a preview */}

//                 <Link to={`/project/${project._id}`}>
//                   <img
//                     src={
//                       project.images && project.images.length > 0
//                         ? project.images[0].url // Show the first image
//                         : "/path/to/placeholder.jpg"
//                     }
//                     alt={project.title[i18n.language] || "Project Image"}
//                     className="w-full h-full object-cover"
//                   />{" "}
//                 </Link>

//                 <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-800 bg-opacity-70 text-white text-center">
//                   <p className="font-bold pb-3">{project.title[i18n.language]}</p>

//                   <Link
//                     to={`/project/${project._id}`}
//                     className={` px-4 py-2  rounded-md transition ${
//                       isDarkMode
//                         ? "border-2 bg-gray-800 hover:bg-black text-white"
//                         : "bg-green-700 text-white"
//                     }`}
//                   >
//                     {t("LearnMore")}
//                   </Link>
//                 </div>
//               </div>
//             ))}
//         </div>

//         <button
//           onClick={handleNext}
//           className="text-gray-500 hover:text-gray-800 z-10"
//         >
//           ❯
//         </button>
//       </div>

//       <div className="flex gap-2 mt-4">
//         {Array.from({ length: Math.ceil(projects.length / itemsToShow) }).map(
//           (_, index) => (
//             <span
//               key={index}
//               onClick={() => setCurrentIndex(index * itemsToShow)}
//               className={`w-4 h-4 rounded-full cursor-pointer ${
//                 Math.floor(currentIndex / itemsToShow) === index
//                   ? "bg-red-500"
//                   : "bg-gray-400"
//               }`}
//             ></span>
//           )
//         )}
//       </div>
      
     
//     </div>
//   );
// };

// export default SplitImageCarousel;



import React, { useState, useEffect } from "react";
import axiosInstance from "../../pages/axiosInstance";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SplitImageCarousel = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categories, setCategories] = useState(["All"]); // Default to "All"
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const { t } = useTranslation("Home");
  const { isDarkMode } = useTheme();
  const { i18n } = useTranslation();

  const updateItemsToShow = () => {
    if (window.innerWidth < 640) {
      setItemsToShow(1);
    } else if (window.innerWidth < 1024) {
      setItemsToShow(2);
    } else {
      setItemsToShow(3);
    }
  };

  const fetchProjects = async () => {
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/projects/show`
      );
      setProjects(data.projects || []);

      // Extract unique categories from projects
      const uniqueCategories = [
        "All",
        ...new Set(data.projects.map((project) => project.category)),
      ];
      setCategories(uniqueCategories);

      // Initially display all projects
      setFilteredProjects(data.projects || []);
    } catch (err) {
      console.error("Error fetching projects:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filterProjectsByCategory = (category) => {
    setSelectedCategory(category);
    setFilteredProjects(
      category === "All"
        ? projects
        : projects.filter((project) => project.category === category)
    );
    setCurrentIndex(0); // Reset index when filtering
  };

  useEffect(() => {
    fetchProjects();
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    return () => {
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow < filteredProjects.length
        ? prevIndex + itemsToShow
        : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsToShow >= 0
        ? prevIndex - itemsToShow
        : filteredProjects.length - itemsToShow
    );
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center">Error: {error}</div>;

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 mx-4 sm:mx-8 lg:mx-32 mt-10 mb-16 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => filterProjectsByCategory(category)}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === category
                ? "bg-green-700 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Carousel */}
      <div className="relative w-full flex justify-between items-center mb-4">
        <button
          onClick={handlePrev}
          className="text-gray-500 hover:text-gray-800 z-10"
        >
          ❮
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {filteredProjects
            .slice(currentIndex, currentIndex + itemsToShow)
            .map((project, index) => (
              <div
                key={index}
                className="relative w-full h-64 sm:h-80 overflow-hidden rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <Link to={`/project/${project._id}`}>
                  <img
                    src={
                      project.images && project.images.length > 0
                        ? project.images[0].url
                        : "/path/to/placeholder.jpg"
                    }
                    alt={project.title[i18n.language] || "Project Image"}
                    className="w-full h-full object-cover"
                  />
                </Link>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-800 bg-opacity-70 text-white text-center">
                  <p className="font-bold pb-3">{project.title[i18n.language]}</p>
                  <Link
                    to={`/project/${project._id}`}
                    className={`px-4 py-2 rounded-md transition ${
                      isDarkMode
                        ? "border-2 bg-gray-800 hover:bg-black text-white"
                        : "bg-green-700 text-white"
                    }`}
                  >
                    {t("LearnMore")}
                  </Link>
                </div>
              </div>
            ))}
        </div>

        <button
          onClick={handleNext}
          className="text-gray-500 hover:text-gray-800 z-10"
        >
          ❯
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2 mt-4">
        {Array.from({
          length: Math.ceil(filteredProjects.length / itemsToShow),
        }).map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index * itemsToShow)}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              Math.floor(currentIndex / itemsToShow) === index
                ? "bg-red-500"
                : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SplitImageCarousel;
