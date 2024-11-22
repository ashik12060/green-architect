// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import DOMPurify from "dompurify";
// import { useTheme } from "../context/ThemeContext";
// import { useTranslation } from "react-i18next";
// import axiosInstance from "./axiosInstance";
// import Loader from "../components/Loader";
// import Header from "../components/Shared/Headers/Header";
// import Footer from "../components/Shared/Footer/Footer";
// import "./Pro.css";

// const SingleProject = () => {
//   const { userInfo } = useSelector((state) => state.signIn);
//   const { t, i18n } = useTranslation();
//   const { id } = useParams();

//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [address, setAddress] = useState("");
//   const [landArea, setLandArea] = useState("");
//   const [floors, setFloors] = useState("");
//   const [apartmentFloor, setApartmentFloor] = useState("");
//   const [size, setSize] = useState("");
//   const [bedroom, setBedroom] = useState("");
//   const [bathroom, setBathroom] = useState("");
//   const [launchDate, setLaunchDate] = useState("");
//   const [collectionName, setCollectionName] = useState("");
//   const [buildingType, setBuildingType] = useState("");
//   const [images, setImages] = useState([]); // State for storing multiple images
//   const [createdAt, setCreatedAt] = useState("");
//   const [loading, setLoading] = useState(false);

//   const { isDarkMode } = useTheme();

//   // Fetch single project data
//   const displaySingleProject = async () => {
//     setLoading(true);
//     try {
//       const { data } = await axiosInstance.get(
//         `${process.env.REACT_APP_API_URL}/api/project/${id}`
//       );

//       setTitle(data.project.title);
//       setContent(data.project.content);
//       // starts
//       setAddress(data.project.address);
//       setLandArea(data.project.landArea);
//       setFloors(data.project.floors);
//       setApartmentFloor(data.project.apartmentFloor);
//       setSize(data.project.size);
//       setBedroom(data.project.bedroom);
//       setBathroom(data.project.bathroom);
//       setLaunchDate(data.project.launchDate);
//       setCollectionName(data.project.collectionName);
//       setBuildingType(data.project.buildingType);

//       // ends
//       setImages(data.project.images); // Set multiple images
//       setCreatedAt(data.project.createdAt);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     displaySingleProject();
//   }, [id]);

//   const sanitizeHTML = (html) => {
//     return { __html: DOMPurify.sanitize(html) };
//   };

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to go to the next image
//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   // Function to go to the previous image
//   const prevImage = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   return (
//     <>
//       <Header />

//       <div
//         className={`flex justify-center items-center pt-5 pb-16 min-h-screen ${
//           isDarkMode ? "text-white bg-black" : "bg-gray-100"
//         }`}
//       >
//         {loading ? (
//           <Loader />
//         ) : (
//           <div
//             className={`container mx-auto ${
//               isDarkMode
//                 ? "text-white bg-black shadow-md rounded-lg shadow-gray-700"
//                 : "bg-gray-100 shadow-md rounded-lg"
//             }`}
//           >
//             <div className="flex flex-col items-center text-center">
//               {/* Carousel for images */}
//               <div className="w-full md:w-2/3 lg:w-1/2 p-4">
//                 <div className="relative">
//                   {images.length > 0 ? (
//                     <>
//                       <img
//                         src={images[currentIndex].url}
//                         className="w-full h-96 object-cover rounded-lg"
//                         alt={`Project Image ${currentIndex + 1}`}
//                       />
//                       {/* Navigation Buttons */}
//                       <button
//                         onClick={prevImage}
//                         className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-600 p-2 rounded-full"
//                       >
//                         &#10094;
//                       </button>
//                       <button
//                         onClick={nextImage}
//                         className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-600 p-2 rounded-full"
//                       >
//                         &#10095;
//                       </button>
//                     </>
//                   ) : (
//                     <img
//                       src="/path/to/placeholder.jpg"
//                       className="w-full h-96 object-cover rounded-lg"
//                       alt="No Images Available"
//                     />
//                   )}
//                 </div>
//               </div>

//               {/* Displaying title and content */}
//               <div className="w-full md:w-2/3 lg:w-1/2 mt-6">
//                 <h2 className="text-2xl ">{title[i18n.language]}</h2>
//                 <p
//                   className="mt-2"
//                   dangerouslySetInnerHTML={sanitizeHTML(content[i18n.language])}
//                 />
//                 {/* start */}
//                 <p
//                   className="mt-2"
//                   dangerouslySetInnerHTML={sanitizeHTML(landArea[i18n.language])}
//                 />
//                 <p
//                   className="mt-2"
//                   dangerouslySetInnerHTML={sanitizeHTML(floors[i18n.language])}
//                 />
//                 <p
//                   className="mt-2"
//                   dangerouslySetInnerHTML={sanitizeHTML(apartmentFloor[i18n.language])}
//                 />
//                 <p
//                   className="mt-2"
//                   dangerouslySetInnerHTML={sanitizeHTML(size[i18n.language])}
//                 />
//                 <p
//                   className="mt-2"
//                   dangerouslySetInnerHTML={sanitizeHTML(bedroom[i18n.language])}
//                 />
//                 <p
//                   className="mt-2"
//                   dangerouslySetInnerHTML={sanitizeHTML(bathroom[i18n.language])}
//                 />
//                 <p
//                   className="mt-2"
//                   dangerouslySetInnerHTML={sanitizeHTML(launchDate[i18n.language])}
//                 />
//                 <p
//                   className="mt-2"
//                   dangerouslySetInnerHTML={sanitizeHTML(collectionName[i18n.language])}
//                 />
//                 <p
//                   className="mt-2"
//                   dangerouslySetInnerHTML={sanitizeHTML(buildingType[i18n.language])}
//                 />
//                 <p
//                   className="mt-2"
//                   dangerouslySetInnerHTML={sanitizeHTML(address[i18n.language])}
//                 />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default SingleProject;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import axiosInstance from "./axiosInstance";
import Loader from "../components/Loader";
import Header from "../components/Shared/Headers/Header";
import Footer from "../components/Shared/Footer/Footer";
import { faBath, faBed, faBraille, faBuilding, faCalendarDays, faLocationDot, faPenRuler, faRulerCombined, faShareNodes, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleProject = () => {
  const { userInfo } = useSelector((state) => state.signIn);
  const { t, i18n } = useTranslation();
  const { id } = useParams();

  const [projectData, setProjectData] = useState({});
  const [images, setImages] = useState([]); // State for storing multiple images
  const [loading, setLoading] = useState(false);

  const { isDarkMode } = useTheme();

  const displaySingleProject = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/project/${id}`
      );

      setProjectData(data.project);
      setImages(data.project.images || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    displaySingleProject();
  }, [id]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const renderField = (field) => {
    if (typeof field === "object") {
      // Check for translations or objects
      return field[i18n.language] || "N/A";
    }
    return field || "N/A";
  };

  return (
    <>
      <Header />

      <div
        className={`pt-5 pb-16 min-h-screen ${
          isDarkMode ? "bg-black text-white" : "bg-gray-100 text-black"
        }`}
      >
        {loading ? (
          <Loader />
        ) : (
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Carousel */}
              <div className="relative">
                {images.length > 0 ? (
                  <>
                    <img
                      src={images[currentIndex]?.url}
                      className="w-full h-96 object-cover rounded-lg"
                      alt={`Project Image ${currentIndex + 1}`}
                    />
                    <button
                      onClick={prevImage}
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-600 p-2 rounded-full"
                    >
                      &#10094;
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-600 p-2 rounded-full"
                    >
                      &#10095;
                    </button>
                  </>
                ) : (
                  <img
                    src="/path/to/placeholder.jpg"
                    className="w-full h-auto object-cover rounded-lg"
                    alt="No Images Available"
                  />
                )}
              </div>

              {/* At a Glance Section */}
              <div>
                <h2 className="text-2xl font-bold mb-4">{t("At a Glance")}</h2>
                <table className="w-full h-80 text-sm ">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className=" pr-4 border-b border-gray-300">
                      <FontAwesomeIcon className="pe-1" icon={faLocationDot} />
                        {t("Address")}
                      </td>
                      <td className="py-2">
                     
                        {renderField(projectData.address)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className=" pr-4 border-b border-gray-300">
                      <FontAwesomeIcon className="pe-1" icon={faPenRuler} />
                        {t("Land Area")}
                      </td>
                      <td className="py-2">
                        {renderField(projectData.landArea)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className=" pr-4 border-b border-gray-300">
                      <FontAwesomeIcon className="pe-1" text-lg icon={faBuilding} />
                        {t(" No. of Floors")}
                      </td>
                      <td className="py-2">
                        {renderField(projectData.floors)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className=" pr-4 border-b border-gray-300">
                      <FontAwesomeIcon className="pe-1" text-lg icon={faBraille} />
                        {t(" Apartment/Floor")}
                      </td>
                      <td className="py-2">
                        {renderField(projectData.apartmentFloor)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className=" pr-4 border-b border-gray-300">
                      <FontAwesomeIcon className="pe-1" text-lg icon={faRulerCombined} />
                        {t(" Apartment Size")}
                      </td>
                      <td className="py-2">{renderField(projectData.size)}</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className=" pr-4 border-b border-gray-300">
                      <FontAwesomeIcon className="pe-1" text-lg icon={faBed} />
                        {t(" Bedroom")}
                      </td>
                      <td className="py-2">
                        {renderField(projectData.bedroom)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className=" pr-4 border-b border-gray-300">
                      <FontAwesomeIcon className="pe-1" text-lg icon={faBath} />
                        {t("Bathroom")}
                      </td>
                      <td className="py-2">
                        {renderField(projectData.bathroom)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className=" pr-4 border-b border-gray-300">
                      <FontAwesomeIcon className="pe-1" text-lg icon={faCalendarDays} />
                        {t(" Launch Date")}
                      </td>
                      <td className="py-2">
                        {renderField(projectData.launchDate)}
                      </td>
                    </tr>
                    <tr>
                      <td className=" pr-4 border-b border-gray-300">
                      <FontAwesomeIcon className="pe-1" text-lg icon={faShareNodes} />
                        {t("Collection")}
                      </td>
                      <td className="py-2">
                        {renderField(projectData.collectionName)}
                      </td>
                    </tr>
                    <tr>
                      <td className=" pr-4 border-b border-gray-300">
                      <FontAwesomeIcon className="pe-1" text-lg icon={faWrench} />
                        {t("Building Type")}
                      </td>
                      <td className="py-2">
                        {renderField(projectData.buildingType)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                  {t("construction_status")}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default SingleProject;
