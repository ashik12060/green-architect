import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
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
  const { t } = useTranslation("Home");
  const { isDarkMode } = useTheme();
  const { i18n } = useTranslation();

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
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedProjects = Array.from(filteredProjects);
    const [movedItem] = reorderedProjects.splice(result.source.index, 1);
    reorderedProjects.splice(result.destination.index, 0, movedItem);

    setFilteredProjects(reorderedProjects);

    // Optionally, send the new order to the server
    // axiosInstance.post('/api/projects/reorder', reorderedProjects);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

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

      {/* Drag and Drop Context */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="projects">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
            >
              {filteredProjects.map((project, index) => (
                <Draggable key={project._id} draggableId={project._id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
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
                        <p className="font-bold pb-3">
                          {project.title[i18n.language]}
                        </p>
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
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default SplitImageCarousel;

