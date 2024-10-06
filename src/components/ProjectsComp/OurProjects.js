

import React, { useState, useEffect } from 'react';
import axiosInstance from '../../pages/axiosInstance';

const Modal = ({ showModal, closeModal, project }) => {
  if (!showModal || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white text-black p-6 rounded-md w-1/2 md:w-1/2 lg:w-1/2">
        <div className="flex flex-col justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{project.title}</h2> 
         
          {/* <button onClick={closeModal} className="text-gray-500 hover:text-gray-800">
            X
          </button> */}
          <p>{project.content}</p>
        </div>
        <p>{project.description}</p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={closeModal}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
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
  const [itemsToShow, setItemsToShow] = useState(3); // default to 3 images

  const [showModal, setShowModal] = useState(false); // State to handle modal visibility
  const [selectedProject, setSelectedProject] = useState(null); // State to handle selected project for the modal


  // Function to update the number of items to show based on screen size
  const updateItemsToShow = () => {
    if (window.innerWidth < 768) {
      setItemsToShow(1);
    } else {
      setItemsToShow(3);
    }
  };

  useEffect(() => {
    // Set the correct number of items to show on initial load
    updateItemsToShow();

    // Update number of items on window resize
    window.addEventListener('resize', updateItemsToShow);

    // Clean up event listener on component unmount
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
    <div className="flex flex-col items-center justify-center gap-4 mx-32 mt-10 mb-16">
    
      <div className="relative w-full flex justify-between items-center">
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {projects.slice(currentIndex, currentIndex + itemsToShow).map((project, index) => (
            <div key={index} className="relative w-full h-80 overflow-hidden rounded-md">
              <img
                src={project.image.url}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-800 bg-opacity-50 text-white text-center">
                <p className="font-bold">{project.title}</p>
                <button
                  onClick={() => openModal(project)}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-2 mt-4">
        {Array.from({ length: Math.ceil(projects.length / itemsToShow) }).map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index * itemsToShow)}
            className={`w-4 h-4 rounded-full ${currentIndex / itemsToShow === index ? 'bg-red-500' : 'bg-gray-400'}`}
          ></span>
        ))}
      </div>

      
      <Modal showModal={showModal} closeModal={closeModal} project={selectedProject} />

      
    </div>
  );
}

export default SplitImageCarousel;
