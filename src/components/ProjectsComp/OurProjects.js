// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../../pages/axiosInstance';
// import { useTheme } from '../../context/ThemeContext';


// const Modal = ({ showModal, closeModal, project }) => {
//   if (!showModal || !project) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white text-black p-4 md:p-6 rounded-md w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-hidden">
//         <div className="flex flex-col justify-between items-center mb-4">
//           <h2 className="text-xl md:text-2xl font-bold text-center mb-2">{project.title}</h2>
//           <p className="text-sm md:text-base text-center">{project.content}</p>
//         </div>
//         {/* Scrollable content area */}
//         <div className="max-h-[60vh] overflow-y-auto">
//           <p className="text-sm md:text-base">{project.description}</p>
//         </div>
//         <div className="mt-4 flex justify-end">
//           <button
//             onClick={closeModal}
//             className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// function SplitImageCarousel() {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [projects, setProjects] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [itemsToShow, setItemsToShow] = useState(3);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const { isDarkMode } = useTheme();

//   const updateItemsToShow = () => {
//     if (window.innerWidth < 640) {
//       setItemsToShow(1); // 1 item for small screens
//     } else if (window.innerWidth < 1024) {
//       setItemsToShow(2); // 2 items for medium screens
//     } else {
//       setItemsToShow(3); // 3 items for large screens
//     }
//   };

//   useEffect(() => {
//     updateItemsToShow();
//     window.addEventListener('resize', updateItemsToShow);

//     return () => {
//       window.removeEventListener('resize', updateItemsToShow);
//     };
//   }, []);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/projects/show`);
//         console.log(data);
//         setProjects(data.projects || []);
//       } catch (err) {
//         console.error("Error fetching projects:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === projects.length - itemsToShow ? 0 : prevIndex + itemsToShow
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? projects.length - itemsToShow : prevIndex - itemsToShow
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

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

 

//   return (
//     <div className="flex flex-col items-center justify-center gap-4 mx-4 sm:mx-8 lg:mx-32 mt-10 mb-16">
//       <div className="relative w-full flex justify-between items-center">
//         {/* <button onClick={handlePrev} className="absolute left-0 text-gray-500 hover:text-gray-800 z-10">❮</button> */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
//           {projects.slice(currentIndex, currentIndex + itemsToShow).map((project, index) => (
//             <div key={index} className="relative w-full h-64 sm:h-80 overflow-hidden rounded-md shadow-lg">
//               <img
//                 src={project.image.url}
//                 alt={project.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-800 bg-opacity-50 text-white text-center">
//                 <p className="font-bold">{project.title}</p>
//                 <button
//                   onClick={() => openModal(project)}
//                   className={`mt-2  px-4 py-2 rounded-md  transition ${isDarkMode ? ' border-2 bg-gray-800 hover:bg-black hover:text-white hover:border-white border-green-700 text-white' : 'bg-green-700 text-white'}`}
//                 >
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* <button onClick={handleNext} className="absolute right-0 text-gray-500 hover:text-gray-800 z-10">❯</button> */}
//       </div>

//       {/* Navigation Dots */}
//       <div className="flex gap-2 mt-4">
//         {Array.from({ length: Math.ceil(projects.length / itemsToShow) }).map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setCurrentIndex(index * itemsToShow)}
//             className={`w-4 h-4 rounded-full cursor-pointer ${currentIndex / itemsToShow === index ? 'bg-red-500' : 'bg-gray-400'}`}
//           ></span>
//         ))}
//       </div>

//       <Modal showModal={showModal} closeModal={closeModal} project={selectedProject} />
//     </div>
//   );
// }

// export default SplitImageCarousel;

// ne


// import { useEffect, useState } from 'react';
// import { io } from 'socket.io-client';
// import { useTranslation } from 'react-i18next';
// import axiosInstance from '../../pages/axiosInstance';
// import Header from '../Shared/Headers/Header';
// import Loader from '../Loader';
// import Footer from '../Shared/Footer/Footer';

// const socket = io('/', { reconnection: true });

// const ProjectHome = () => {
//     const { t, i18n } = useTranslation();
//     const [projects, setProjects] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [projectAddLike, setProjectAddLike] = useState([]);
//     const [projectRemoveLike, setProjectRemoveLike] = useState([]);

//     const showProjects = async () => {
//         setLoading(true);
//         try {
//             const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/projects/show`);
//             console.log(data); // Log the response
//             setProjects(data.projects || []); // Set to an empty array if undefined
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         showProjects();
//     }, []);

//     useEffect(() => {
//         socket.on('add-like', (newProjects) => {
//             setProjectAddLike(newProjects);
//             setProjectRemoveLike([]);
//         });
//         socket.on('remove-like', (newProjects) => {
//             setProjectRemoveLike(newProjects);
//             setProjectAddLike([]);
//         });
//     }, []);

//     let uiProjects = projectAddLike.length > 0 ? projectAddLike : projectRemoveLike.length > 0 ? projectRemoveLike : projects;

//     return (
//         <div>
//             <Header />
//             <div className="container mx-auto py-10">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                     {loading ? (
//                         <Loader />
//                     ) : (
//                         uiProjects.map((project, index) => (
//                             <div key={index} className="border-1 border-green-100 overflow-hidden rounded-lg shadow-lg">
//                                 <img
//                                     src={project.image ? project.image.url : ''} // Use optional chaining
//                                     alt={project.title[i18n.language] || 'Project Image'} // Fallback for alt text
//                                     className="w-full h-48 object-cover"
//                                 />
//                                 <div className="p-4">
//                                     <h3 className="text-lg font-bold">{project.title[i18n.language]}</h3>
//                                     <p className="text-sm">{project.content[i18n.language]}</p>
//                                     <p className="text-sm text-gray-500">Likes: {project.likes ? project.likes.length : 0}</p> {/* Fallback for likes length */}
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default ProjectHome;




// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../../pages/axiosInstance';
// import { useTheme } from '../../context/ThemeContext';
// import { useTranslation } from 'react-i18next';

// const Modal = ({ showModal, closeModal, project }) => {
//   if (!showModal || !project) return null;
//   const {i18n } = useTranslation(); 

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
//       <div className="bg-white text-black p-4 md:p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-hidden">
//         <h2 className="text-xl md:text-2xl font-bold text-center mb-2">{project.title[i18n.language]}</h2>
//         <p className="text-sm md:text-base text-center mb-4">{project.content[i18n.language]}</p>
//         <div className="max-h-[60vh] overflow-y-auto p-2">
//           {/* <p className="text-sm md:text-base">{project.description}</p> */}
//         </div>
//         <div className="mt-4 flex justify-end">
//           <button
//             onClick={closeModal}
//             className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const SplitImageCarousel = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [projects, setProjects] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [itemsToShow, setItemsToShow] = useState(3);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const { isDarkMode } = useTheme();

//   // Update the number of items to show based on the window size
//   const updateItemsToShow = () => {
//     if (window.innerWidth < 640) {
//       setItemsToShow(1); // 1 item for small screens
//     } else if (window.innerWidth < 1024) {
//       setItemsToShow(2); // 2 items for medium screens
//     } else {
//       setItemsToShow(3); // 3 items for large screens
//     }
//   };

//   // Fetch projects from the API
//   const fetchProjects = async () => {
//     try {
//       const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/projects/show`);
//       setProjects(data.projects || []); // Set to an empty array if undefined
//     } catch (err) {
//       console.error("Error fetching projects:", err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Effect to handle fetching projects and window resizing
//   useEffect(() => {
//     fetchProjects();
//     updateItemsToShow();
//     window.addEventListener('resize', updateItemsToShow);

//     // Cleanup event listener
//     return () => {
//       window.removeEventListener('resize', updateItemsToShow);
//     };
//   }, []);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex + itemsToShow < projects.length ? prevIndex + itemsToShow : 0
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex - itemsToShow >= 0 ? prevIndex - itemsToShow : projects.length - itemsToShow
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
//     <div className={`flex flex-col items-center justify-center gap-4 mx-4 sm:mx-8 lg:mx-32 mt-10 mb-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
//       <div className="relative w-full flex justify-between items-center mb-4">
//         <button onClick={handlePrev} className="text-gray-500 hover:text-gray-800 z-10">❮</button>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
//           {projects.slice(currentIndex, currentIndex + itemsToShow).map((project, index) => (
//             <div key={index} className="relative w-full h-64 sm:h-80 overflow-hidden rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105">
//               <img
//                 src={project.image.url}
//                 alt={project.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-800 bg-opacity-70 text-white text-center">
//                 <p className="font-bold"> title={project.title[i18n.language]}</p>
//                 <button
//                   onClick={() => openModal(project)}
//                   className={`mt-2 px-4 py-2 rounded-md transition ${isDarkMode ? 'border-2 bg-gray-800 hover:bg-black text-white' : 'bg-green-700 text-white'}`}
//                 >
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button onClick={handleNext} className="text-gray-500 hover:text-gray-800 z-10">❯</button>
//       </div>

//       {/* Navigation Dots */}
//       <div className="flex gap-2 mt-4">
//         {Array.from({ length: Math.ceil(projects.length / itemsToShow) }).map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setCurrentIndex(index * itemsToShow)}
//             className={`w-4 h-4 rounded-full cursor-pointer ${Math.floor(currentIndex / itemsToShow) === index ? 'bg-red-500' : 'bg-gray-400'}`}
//           ></span>
//         ))}
//       </div>

//       <Modal showModal={showModal} closeModal={closeModal} project={selectedProject} />
//     </div>
//   );
// }

// export default SplitImageCarousel;



import React, { useState, useEffect } from 'react';
import axiosInstance from '../../pages/axiosInstance';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Modal = ({ showModal, closeModal, project, i18n }) => {
  if (!showModal || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white text-black p-4 md:p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-hidden">
      <img
                src={project.image.url}
                alt={project.title[i18n.language]}
                className="w-full h-full object-cover"
              />
        <h2 className="text-xl md:text-2xl font-bold text-center mb-2">{project.title[i18n.language]}</h2>
        <p className="text-sm md:text-base text-center mb-4">{project.content[i18n.language]}</p>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {/* <p className="text-sm md:text-base">{project.description[i18n.language]}</p> */}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={closeModal}
            className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const SplitImageCarousel = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const { isDarkMode } = useTheme();
  const { i18n } = useTranslation(); // Call useTranslation at the top level

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
      const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/projects/show`);
      setProjects(data.projects || []);
    } catch (err) {
      console.error("Error fetching projects:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);

    return () => {
      window.removeEventListener('resize', updateItemsToShow);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsToShow < projects.length ? prevIndex + itemsToShow : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsToShow >= 0 ? prevIndex - itemsToShow : projects.length - itemsToShow
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

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center">Error: {error}</div>;

  return (
    <div className={`flex flex-col items-center justify-center gap-4 mx-4 sm:mx-8 lg:mx-32 mt-10 mb-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="relative w-full flex justify-between items-center mb-4">
        <button onClick={handlePrev} className="text-gray-500 hover:text-gray-800 z-10">❮</button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {projects.slice(currentIndex, currentIndex + itemsToShow).map((project, index) => (
            <div key={index} className="relative w-full h-64 sm:h-80 overflow-hidden rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img
                src={project.image.url}
                alt={project.title[i18n.language]}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-800 bg-opacity-70 text-white text-center">
                <p className="font-bold">{project.title[i18n.language]}</p>
                <button
                  onClick={() => openModal(project)}
                  className={`mt-2 px-4 py-2 rounded-md transition ${isDarkMode ? 'border-2 bg-gray-800 hover:bg-black text-white' : 'bg-green-700 text-white'}`}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="text-gray-500 hover:text-gray-800 z-10">❯</button>
      </div>

      <div className="flex gap-2 mt-4">
        {Array.from({ length: Math.ceil(projects.length / itemsToShow) }).map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index * itemsToShow)}
            className={`w-4 h-4 rounded-full cursor-pointer ${Math.floor(currentIndex / itemsToShow) === index ? 'bg-red-500' : 'bg-gray-400'}`}
          ></span>
        ))}
      </div>

      <Modal showModal={showModal} closeModal={closeModal} project={selectedProject} i18n={i18n} />
    </div>
  );
}

export default SplitImageCarousel;

