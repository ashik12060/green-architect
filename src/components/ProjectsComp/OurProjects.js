// import React, { useState, useEffect } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import axiosInstance from "../../pages/axiosInstance";
// import { useTheme } from "../../context/ThemeContext";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";

// const SplitImageCarousel = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [projects, setProjects] = useState([]);
//   const [filteredProjects, setFilteredProjects] = useState([]);
//   const [categories, setCategories] = useState(["All"]); // Default to "All"
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const { t } = useTranslation("Home");
//   const { isDarkMode } = useTheme();
//   const { i18n } = useTranslation();

//   const fetchProjects = async () => {
//     try {
//       const { data } = await axiosInstance.get(
//         `${process.env.REACT_APP_API_URL}/api/projects/show`
//       );
//       setProjects(data.projects || []);

//       // Extract unique categories from projects
//       const uniqueCategories = [
//         "All",
//         ...new Set(data.projects.map((project) => project.category)),
//       ];
//       setCategories(uniqueCategories);

//       // Initially display all projects
//       setFilteredProjects(data.projects || []);
//     } catch (err) {
//       console.error("Error fetching projects:", err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const filterProjectsByCategory = (category) => {
//     setSelectedCategory(category);
//     setFilteredProjects(
//       category === "All"
//         ? projects
//         : projects.filter((project) => project.category === category)
//     );
//   };

//   const handleDragEnd = (result) => {
//     if (!result.destination) return;

//     const reorderedProjects = Array.from(filteredProjects);
//     const [movedItem] = reorderedProjects.splice(result.source.index, 1);
//     reorderedProjects.splice(result.destination.index, 0, movedItem);

//     setFilteredProjects(reorderedProjects);

//     // Optionally, send the new order to the server
//     // axiosInstance.post('/api/projects/reorder', reorderedProjects);
//   };

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   if (loading) return <div className="text-center">Loading...</div>;
//   if (error) return <div className="text-center">Error: {error}</div>;

//   return (
//     <div
//       className={`flex flex-col items-center justify-center gap-4 mx-4 sm:mx-8 lg:mx-32 mt-10 mb-16 ${
//         isDarkMode ? "bg-gray-900" : "bg-gray-100"
//       }`}
//     >
//       {/* Category Filter */}
//       <div className="flex justify-center gap-4 mb-6">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => filterProjectsByCategory(category)}
//             className={`px-4 py-2 rounded-md ${
//               selectedCategory === category
//                 ? "bg-green-700 text-white"
//                 : "bg-gray-200 text-black"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Drag and Drop Context */}
//       <DragDropContext onDragEnd={handleDragEnd}>
//         <Droppable droppableId="projects">
//           {(provided) => (
//             <div
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
//             >
//               {filteredProjects.map((project, index) => (
//                 <Draggable key={project._id} draggableId={project._id} index={index}>
//                   {(provided) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       className="relative w-full h-64 sm:h-80 overflow-hidden rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105"
//                     >
//                       <Link to={`/project/${project._id}`}>
//                         <img
//                           src={
//                             project.images && project.images.length > 0
//                               ? project.images[0].url
//                               : "/path/to/placeholder.jpg"
//                           }
//                           alt={project.title[i18n.language] || "Project Image"}
//                           className="w-full h-full object-cover"
//                         />
//                       </Link>
//                       <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-800 bg-opacity-70 text-white text-center">
//                         <p className="font-bold pb-3">
//                           {project.title[i18n.language]}
//                         </p>
//                         <Link
//                           to={`/project/${project._id}`}
//                           className={`px-4 py-2 rounded-md transition ${
//                             isDarkMode
//                               ? "border-2 bg-gray-800 hover:bg-black text-white"
//                               : "bg-green-700 text-white"
//                           }`}
//                         >
//                           {t("LearnMore")}
//                         </Link>
//                       </div>
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// };

// export default SplitImageCarousel;

// main one

// import React, { useState, useEffect } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import axiosInstance from "../../pages/axiosInstance";
// import { useTheme } from "../../context/ThemeContext";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion"; // Import framer-motion for animation

// const SplitImageCarousel = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [projects, setProjects] = useState([]);
//   const [filteredProjects, setFilteredProjects] = useState([]);
//   const [categories, setCategories] = useState(["All"]); // Default to "All"
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const { t } = useTranslation("Home");
//   const { isDarkMode } = useTheme();
//   const { i18n } = useTranslation();

//   const fetchProjects = async () => {
//     try {
//       const { data } = await axiosInstance.get(
//         `${process.env.REACT_APP_API_URL}/api/projects/show`
//       );
//       setProjects(data.projects || []);

//       // Extract unique categories from projects
//       const uniqueCategories = [
//         "All",
//         ...new Set(data.projects.map((project) => project.category)),
//       ];
//       setCategories(uniqueCategories);

//       // Initially display all projects
//       setFilteredProjects(data.projects || []);
//     } catch (err) {
//       console.error("Error fetching projects:", err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const filterProjectsByCategory = (category) => {
//     setSelectedCategory(category);
//     setFilteredProjects(
//       category === "All"
//         ? projects
//         : projects.filter((project) => project.category === category)
//     );
//   };

//   const handleDragEnd = (result) => {
//     if (!result.destination) return;

//     const reorderedProjects = Array.from(filteredProjects);
//     const [movedItem] = reorderedProjects.splice(result.source.index, 1);
//     reorderedProjects.splice(result.destination.index, 0, movedItem);

//     setFilteredProjects(reorderedProjects);

//     // Optionally, send the new order to the server
//     // axiosInstance.post('/api/projects/reorder', reorderedProjects);
//   };

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   if (loading) return <div className="text-center">Loading...</div>;
//   if (error) return <div className="text-center">Error: {error}</div>;

//   return (
//     <div
//       className={`flex flex-col items-center justify-center gap-4 mx-4 sm:mx-8 lg:mx-32 mt-10 mb-16 ${
//         isDarkMode ? "bg-gray-900" : "bg-gray-100"
//       }`}
//     >
//       {/* Category Filter */}
//       <div className="flex justify-center gap-4 mb-6  ">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => filterProjectsByCategory(category)}
//             className={`px-4 py-2 rounded-md ${
//               selectedCategory === category
//                 ? "bg-green-700 text-white"
//                 : "bg-gray-200 text-black"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Drag and Drop Context */}
//       <DragDropContext onDragEnd={handleDragEnd}>
//         <Droppable droppableId="projects">
//           {(provided) => (
//             <div
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full "
//             >
//               {filteredProjects.map((project, index) => (
//                 <Draggable key={project._id} draggableId={project._id} index={index}>
//                   {(provided) => (
//                     <motion.div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       className="relative w-full h-64 sm:h-80 border-2 border-green-800 overflow-hidden rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105"
//                       initial={{ opacity: 0, scale: 0.95 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.3 }}
//                       whileHover={{
//                         scale: 1.05, // Enlarge on hover
//                         borderColor: "#34D399", // Light green color for the border on hover
//                         boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Add a shadow effect
//                       }}
//                     >
//                       <Link to={`/project/${project._id}`}>
//                         <img
//                           src={
//                             project.images && project.images.length > 0
//                               ? project.images[0].url
//                               : "/path/to/placeholder.jpg"
//                           }
//                           alt={project.title[i18n.language] || "Project Image"}
//                           className="w-full h-full object-cover"
//                         />
//                       </Link>
//                       <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-800 bg-opacity-70 text-white text-center">
//                         <p className="font-bold pb-3">
//                           {project.title[i18n.language]}
//                         </p>
//                         <Link
//                           to={`/project/${project._id}`}
//                           className={`px-4 py-2 rounded-md transition ${
//                             isDarkMode
//                               ? "border-2 bg-gray-800 hover:bg-black text-white"
//                               : "bg-green-700 text-white"
//                           }`}
//                         >
//                           {t("LearnMore")}
//                         </Link>
//                       </div>
//                     </motion.div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// };

// export default SplitImageCarousel;




// import React, { useState, useEffect } from "react";
// import { useDrag, useDrop } from "react-dnd";
// import axiosInstance from "../../pages/axiosInstance";
// import { useTheme } from "../../context/ThemeContext";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion"; // For animations

// const ItemType = "CARD"; // Define the item type for drag-and-drop

// const SplitImageCarousel = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [projects, setProjects] = useState([]);
//   const [filteredProjects, setFilteredProjects] = useState([]);
//   const [categories, setCategories] = useState(["All"]); // Default to "All"
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const { t } = useTranslation("Home");
//   const { isDarkMode } = useTheme();
//   const { i18n } = useTranslation();

//   // Fetch projects from API
//   const fetchProjects = async () => {
//     try {
//       const { data } = await axiosInstance.get(
//         `${process.env.REACT_APP_API_URL}/api/projects/show`
//       );
//       setProjects(data.projects || []);

//       // Extract unique categories from projects
//       const uniqueCategories = [
//         "All",
//         ...new Set(data.projects.map((project) => project.category)),
//       ];
//       setCategories(uniqueCategories);

//       // Initially display all projects
//       setFilteredProjects(data.projects || []);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Filter projects by selected category
//   const filterProjectsByCategory = (category) => {
//     setSelectedCategory(category);
//     setFilteredProjects(
//       category === "All"
//         ? projects
//         : projects.filter((project) => project.category === category)
//     );
//   };

//   // Handle the reordering of items when dragged and dropped
//   const moveCard = (fromIndex, toIndex) => {
//     const updatedProjects = [...filteredProjects];
//     const [movedItem] = updatedProjects.splice(fromIndex, 1);
//     updatedProjects.splice(toIndex, 0, movedItem);
//     setFilteredProjects(updatedProjects);
//   };

//   // Drag and Drop Logic
//   const DraggableCard = ({ index, project }) => {
//     const [, drag] = useDrag({
//       type: ItemType,
//       item: { index },
//     });

//     const [, drop] = useDrop({
//       accept: ItemType,
//       hover: (item) => {
//         if (item.index !== index) {
//           moveCard(item.index, index); // Move item when dragged over
//           item.index = index; // Update index after movement
//         }
//       },
//     });

//     return (
//       <motion.div
//         ref={(node) => drag(drop(node))} // Combine both drag and drop refs
//         className="relative w-full h-64 sm:h-80 border-2 border-green-800 overflow-hidden rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105"
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.3 }}
//         whileHover={{
//           scale: 1.05,
//           borderColor: "#34D399", // Light green color for the border on hover
//           boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Add shadow
//         }}
//       >
//         <Link to={`/project/${project._id}`}>
//           <img
//             src={
//               project.images && project.images.length > 0
//                 ? project.images[0].url
//                 : "/path/to/placeholder.jpg"
//             }
//             alt={project.title[i18n.language] || "Project Image"}
//             className="w-full h-full object-cover"
//           />
//         </Link>
//         <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-800 bg-opacity-70 text-white text-center">
//           <p className="font-bold pb-3">
//             {project.title[i18n.language]}
//           </p>
//           <Link
//             to={`/project/${project._id}`}
//             className={`px-4 py-2 rounded-md transition ${
//               isDarkMode
//                 ? "border-2 bg-gray-800 hover:bg-black text-white"
//                 : "bg-green-700 text-white"
//             }`}
//           >
//             {t("LearnMore")}
//           </Link>
//         </div>
//       </motion.div>
//     );
//   };

//   // Fetch projects on component mount
//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   if (loading) return <div className="text-center">Loading...</div>;
//   if (error) return <div className="text-center">Error: {error}</div>;

//   return (
//     <div
//       className={`flex flex-col items-center justify-center gap-4 mx-4 sm:mx-8 lg:mx-32 mt-10 mb-16 ${
//         isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
//       }`}
//     >
//       {/* Category Filter */}
//       <div className="flex justify-center gap-4 mb-6">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => filterProjectsByCategory(category)}
//             className={`px-4 py-2 rounded-md ${
//               selectedCategory === category
//                 ? "bg-green-700 text-white"
//                 : "bg-gray-200 text-black"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Drag-and-Drop Area */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
//         {filteredProjects.map((project, index) => (
//           <DraggableCard key={project._id} index={index} project={project} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SplitImageCarousel;




import React, { useState, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import axiosInstance from "../../pages/axiosInstance";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ItemType = "CARD";

const SplitImageCarousel = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { t } = useTranslation("Home");
  const { isDarkMode } = useTheme();
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axiosInstance.get(
          `${process.env.REACT_APP_API_URL}/api/projects/show`
        );
        const allProjects = data.projects || [];
        setProjects(allProjects);
        setFilteredProjects(allProjects);

        // Generate unique categories from project data
        const uniqueCategories = [
          "All",
          ...new Set(allProjects.map((project) => project.category)),
        ];
        setCategories(uniqueCategories);
      } catch (err) {
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filterProjectsByCategory = (category) => {
    setSelectedCategory(category);
    setFilteredProjects(
      category === "All"
        ? projects
        : projects.filter((project) => project.category === category)
    );
  };

  const moveCard = (fromIndex, toIndex) => {
    const updatedProjects = [...filteredProjects];
    const [movedItem] = updatedProjects.splice(fromIndex, 1);
    updatedProjects.splice(toIndex, 0, movedItem);
    setFilteredProjects(updatedProjects);
  };

  const saveNewOrder = async () => {
    try {
      const reorderedIds = filteredProjects.map((project) => project._id);
      await axiosInstance.put(
        `${process.env.REACT_APP_API_URL}/api/projects/reorder`,
        { reorderedProjects: reorderedIds }
      );
    } catch (err) {
      console.error("Failed to save new order", err);
    }
  };

  // const DraggableCard = ({ index, project }) => {
  //   const [, drag] = useDrag({
  //     type: ItemType,
  //     item: { index },
  //   });

  //   const [, drop] = useDrop({
  //     accept: ItemType,
  //     hover: (item) => {
  //       if (item.index !== index) {
  //         moveCard(item.index, index);
  //         item.index = index;
  //       }
  //     },
  //     drop: saveNewOrder, // Save order when the drag action is dropped
  //   });

  const DraggableCard = ({ index, project }) => {
    const [, drag] = useDrag({
      type: ItemType,
      item: { index },
    });
  
    const [, drop] = useDrop({
      accept: ItemType,
      hover: (item) => {
        if (item.index !== index) {
          moveCard(item.index, index);
          item.index = index;
        }
      },
      drop: saveNewOrder, // Save order when the drag action is dropped
    });

    return (
    //   <motion.div
    //     ref={(node) => drag(drop(node))}
    //     className="relative w-full h-64 sm:h-80 border border-gray-300 overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105"
    //     initial={{ opacity: 0, scale: 0.95 }}
    //     animate={{ opacity: 1, scale: 1 }}
    //     transition={{ duration: 0.3 }}
    //   >
    //     <Link to={`/project/${project._id}`} className="block h-full">
    //       <img
    //         src={
    //           project.images && project.images.length > 0
    //             ? project.images[0].url
    //             : "/path/to/placeholder.jpg"
    //         }
    //         alt={project.title[i18n.language] || "Project Image"}
    //         className="w-full h-full object-cover"
    //       />
    //     </Link>
    //     <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
    //       <p className="font-bold text-center truncate">
    //         {project.title[i18n.language]}
    //       </p>
    //       <Link
    //         to={`/project/${project._id}`}
    //         className={`mt-2 block w-fit mx-auto px-4 py-2 rounded-md ${
    //           isDarkMode
    //             ? "bg-gray-800 hover:bg-black"
    //             : "bg-green-700 hover:bg-green-800"
    //         } text-white`}
    //       >
    //         {t("LearnMore")}
    //       </Link>
    //     </div>
    //   </motion.div>

    <motion.div
      ref={(node) => drag(drop(node))}
      className="relative w-full h-64 sm:h-80 border border-gray-300 overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/project/${project._id}`} className="block h-full">
        <div className="w-full h-full flex overflow-hidden">
          {/* Render multiple images */}
          {project.images && project.images.length > 0 ? (
            project.images.map((image, idx) => (
              <img
                key={idx}
                src={image.url}
                alt={project.title[i18n.language] || "Project Image"}
                className={`object-cover ${idx === 0 ? "w-full" : "w-1/3"} transition-all duration-300`}
              />
            ))
          ) : (
            <img
              src="/path/to/placeholder.jpg"
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </Link>
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
        <p className="font-bold text-center truncate">
          {project.title[i18n.language]}
        </p>
        <Link
          to={`/project/${project._id}`}
          className={`mt-2 block w-fit mx-auto px-4 py-2 rounded-md ${
            isDarkMode
              ? "bg-gray-800 hover:bg-black"
              : "bg-green-700 hover:bg-green-800"
          } text-white`}
        >
          {t("LearnMore")}
        </Link>
      </div>
    </motion.div>
    );
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div
      className={`flex flex-col items-center gap-6 px-4 sm:px-8 lg:px-32 mt-10 mb-16 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => filterProjectsByCategory(category)}
            className={`px-4 py-2 rounded-md transition ${
              selectedCategory === category
                ? "bg-green-700 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {filteredProjects.map((project, index) => (
          <DraggableCard key={project._id} index={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default SplitImageCarousel;
