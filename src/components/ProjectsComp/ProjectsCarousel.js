import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import only required modules
import "swiper/css";
import "swiper/css/autoplay";
import axiosInstance from "../../pages/axiosInstance";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectsCarousel = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axiosInstance.get(
          `${process.env.REACT_APP_API_URL}/api/projects/show`
        );
        setProjects(data.projects || []);
      } catch (err) {
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="projects-carousel">
      <Swiper
        modules={[Autoplay]} // Use only the Autoplay module
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 1, // Smooth scrolling delay
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={3000} // Controls smooth scrolling speed
        loop={true} // Infinite scrolling
        freeMode={true} // Enables continuous, non-snapping scrolling
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project._id}>
            <motion.div
              className="relative w-full h-80 sm:h-80 border border-gray-300 overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/project/${project._id}`} className="block h-full">
                <div className="w-full h-full flex overflow-hidden">
                  {/* {project.images && project.images.length > 0 ? (
                    project.images.map((image, idx) => (
                      <img
                        key={idx}
                        src={image.url}
                        alt={project.title.en || "Project Image"}
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
                   */}
                  {project.images && project.images.length > 0 ? (
                    <img
                      src={project.images[0].url} // Display only the first image
                      alt={project.title.en || "Project Image"}
                      className="w-full h-full object-cover"
                    />
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
                  {project.title.en || "Untitled Project"}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectsCarousel;
