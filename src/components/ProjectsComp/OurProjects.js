import React, { useState, useEffect } from 'react';
import axiosInstance from '../../pages/axiosInstance';


const Modal = ({ showModal, closeModal, project }) => {
  if (!showModal || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white text-black p-4 md:p-6 rounded-md w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-hidden">
        <div className="flex flex-col justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-2">{project.title}</h2>
          <p className="text-sm md:text-base text-center">{project.content}</p>
        </div>
        {/* Scrollable content area */}
        <div className="max-h-[60vh] overflow-y-auto">
          <p className="text-sm md:text-base">{project.description}</p>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={closeModal}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

function SplitImageCarousel() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const updateItemsToShow = () => {
    if (window.innerWidth < 640) {
      setItemsToShow(1); // 1 item for small screens
    } else if (window.innerWidth < 1024) {
      setItemsToShow(2); // 2 items for medium screens
    } else {
      setItemsToShow(3); // 3 items for large screens
    }
  };

  useEffect(() => {
    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);

    return () => {
      window.removeEventListener('resize', updateItemsToShow);
    };
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/projects/show`);
        console.log(data);
        setProjects(data.projects || []);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - itemsToShow ? 0 : prevIndex + itemsToShow
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - itemsToShow : prevIndex - itemsToShow
    );
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col items-center justify-center gap-4 mx-4 sm:mx-8 lg:mx-32 mt-10 mb-16">
      <div className="relative w-full flex justify-between items-center">
        {/* <button onClick={handlePrev} className="absolute left-0 text-gray-500 hover:text-gray-800 z-10">❮</button> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {projects.slice(currentIndex, currentIndex + itemsToShow).map((project, index) => (
            <div key={index} className="relative w-full h-64 sm:h-80 overflow-hidden rounded-md shadow-lg">
              <img
                src={project.image.url}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-800 bg-opacity-50 text-white text-center">
                <p className="font-bold">{project.title}</p>
                <button
                  onClick={() => openModal(project)}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* <button onClick={handleNext} className="absolute right-0 text-gray-500 hover:text-gray-800 z-10">❯</button> */}
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-2 mt-4">
        {Array.from({ length: Math.ceil(projects.length / itemsToShow) }).map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index * itemsToShow)}
            className={`w-4 h-4 rounded-full cursor-pointer ${currentIndex / itemsToShow === index ? 'bg-red-500' : 'bg-gray-400'}`}
          ></span>
        ))}
      </div>

      <Modal showModal={showModal} closeModal={closeModal} project={selectedProject} />
    </div>
  );
}

export default SplitImageCarousel;
