

import React, { useState, useEffect } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import axiosInstance from "../../pages/axiosInstance";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ItemType = "project";

const OurProjects = ({ isAdmin }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { t } = useTranslation("Home");
  const { i18n } = useTranslation();

  console.log("isAdmin in OurProjects:", isAdmin);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axiosInstance.get(
          `${process.env.REACT_APP_API_URL}/api/projects/show`
        );

        const allProjects = data.projects || [];
        allProjects.sort((a, b) => a.order - b.order);

        setProjects(allProjects);
        setFilteredProjects(allProjects);

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
    console.log(`Moving item from ${fromIndex} to ${toIndex}`);
    const updatedProjects = [...filteredProjects];
    const [movedItem] = updatedProjects.splice(fromIndex, 1);
    updatedProjects.splice(toIndex, 0, movedItem);
    setFilteredProjects(updatedProjects);
  };

  const saveNewOrder = async () => {
    const reorderedIds = filteredProjects.map((project) => project._id);

    try {
      await axiosInstance.put(
        `${process.env.REACT_APP_API_URL}/api/projects/reorder`,
        { reorderedProjects: reorderedIds }
      );

      setProjects((prevProjects) =>
        reorderedIds.map((id) => prevProjects.find((p) => p._id === id))
      );

      console.log("Order saved successfully!");
    } catch (err) {
      console.error("Failed to save new order", err);
    }
  };

  const DraggableCard = ({ index, project }) => {
    const [, drag] = useDrag({
      type: ItemType,
      item: { index },
      canDrag: isAdmin,
    });

    const [, drop] = useDrop({
      accept: ItemType,
      hover: (item) => {
        console.log(`Hovering: Dragged item ${item.index} over ${index}`);
        if (item.index !== index && isAdmin) {
          moveCard(item.index, index);
          item.index = index;
        }
      },
      drop: isAdmin ? saveNewOrder : undefined,
    });

    return (
      <motion.div
        ref={(node) => drag(drop(node))}
        className="relative w-full h-64 sm:h-80 border border-gray-300 overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Link to={`/project/${project._id}`} className="block h-full">
          <div className="w-full h-full flex overflow-hidden">
            {project.images && project.images.length > 0 ? (
              project.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image.url}
                  alt={project.title[i18n.language] || "Project Image"}
                  className={`object-cover ${
                    idx === 0 ? "w-full" : "w-1/3"
                  } transition-all duration-300`}
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
              isAdmin ? "bg-gray-800" : "bg-green-700"
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
        isAdmin ? " text-white" : "bg-gray-100 text-black"
      }`}
    >
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {filteredProjects.map((project, index) => (
          <DraggableCard key={project._id} index={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default function WrappedOurProjects(props) {
  return (
    <DndProvider backend={HTML5Backend}>
      <OurProjects {...props} />
    </DndProvider>
  );
}
