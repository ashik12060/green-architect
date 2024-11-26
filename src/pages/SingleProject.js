


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
import { faBath, faBed, faBraille, faBuilding, faBuildingUn, faCalendarDays, faCar, faLocationDot, faPenRuler, faRoad, faRulerCombined, faShareNodes, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Overview from "../components/Overview/Overview";
import { LocalBenifits } from "../components/Overview/LocalBenifits";

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

  // Add Automatic Carousel Transition
  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds
      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [images]);

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
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-8">
              {/* Image Carousel */}
              <div className="relative">
                {images.length > 0 ? (
                  <>
                    <img
                      src={images[currentIndex]?.url}
                      className=" w-full h-96 object-cover rounded-lg"
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
                    className="w-full h-96 object-cover rounded-lg"
                    alt="No Images Available"
                  />
                )}
              </div>

              {/* At a Glance Section */}
              <div>
                <h2 className="text-2xl font-bold mb-4">{t("At a Glance")}</h2>
                <table className="w-full h-56 text-sm ">
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
                        {/* <FontAwesomeIcon className="pe-1" text-lg icon={faRulerCombined} /> */}
                        <FontAwesomeIcon className="pe-1" icon={faRoad} />
                        {/* {t(" Apartment Size")} */} Front Road
                      </td>
                      <td className="py-2">{renderField(projectData.size)}</td>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <td className=" pr-4 border-b border-gray-300">
                        <FontAwesomeIcon className="pe-1" icon={faBuildingUn} />
                        {/* {t(" Apartment Size")} */} Number Of Units
                      </td>
                      <td className="py-2">{renderField(projectData.size)}</td>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <td className=" pr-4 border-b border-gray-300">
                        {/* <FontAwesomeIcon className="pe-1" icon={faRulerCombined} /> */}
                        <FontAwesomeIcon className="pe-1"  icon={faCar} />
                        {/* {t(" Apartment Size")} */}  Number Of Parking
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

      {/* overview */}
      <Overview />
      <LocalBenifits />

      <Footer />
    </>
  );
};

export default SingleProject;
