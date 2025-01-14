import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import axiosInstance from "./axiosInstance";
import Loader from "../components/Loader";
import Header from "../components/Shared/Headers/Header";
import Footer from "../components/Shared/Footer/Footer";
import {
  faBath,
  faBed,
  faBraille,
  faBuilding,
  faBuildingUn,
  faCalendarDays,
  faCar,
  faLocationDot,
  faPenRuler,
  faRoad,
  faRulerCombined,
  faShareNodes,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Overview from "../components/Overview/Overview";
import { LocalBenifits } from "../components/Overview/LocalBenifits";
import {
  faMosque,
  faSchool,
  faUniversity,
  faStore,
  faCreditCard,
  faBus,
  faBank,
} from "@fortawesome/free-solid-svg-icons";

const SingleProject = () => {
  const { userInfo } = useSelector((state) => state.signIn);
  const {  i18n } = useTranslation();
  const { id } = useParams();
  const { t } = useTranslation('SingleProject');

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

  // Define your icons mapping
  const icons = {
    mosque: faMosque,
    school: faSchool,
    university: faUniversity,
    store: faStore,
    creditCard: faCreditCard,
    bus: faBus,
    bank: faBank,
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
              <div className="relative">
                {images.length > 0 ? (
                  <>
                    <img
                      src={images[currentIndex]?.url}
                      className="w-full h-auto min-h-[550px] max-h-[800px] object-cover rounded-lg sm:h-64 md:h-80 lg:h-96"
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
                    className="w-full h-auto max-h-[800px] object-cover rounded-lg sm:h-64 md:h-80 lg:h-96"
                    alt="No Images Available"
                  />
                )}
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">{t("atAGlance")}</h2>
                <table className="w-full h-56 text-sm mb-4">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className=" pr-4 border-b border-gray-300">
                        <FontAwesomeIcon
                          className="pe-1"
                          icon={faLocationDot}
                        />
                        {t("address")}
                      </td>
                      <td className="py-2">
                        {renderField(projectData.address)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className=" pr-4 border-b border-gray-300">
                        <FontAwesomeIcon className="pe-1" icon={faPenRuler} />
                        {t("landArea")}
                      </td>
                      <td className="py-2">
                        {renderField(projectData.landArea)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className=" pr-4 border-b border-gray-300">
                        <FontAwesomeIcon
                          className="pe-1"
                          text-lg
                          icon={faBuilding}
                        />
                        {t("noOfFloors")}
                      </td>
                      <td className="py-2">
                        {renderField(projectData.floors)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className=" pr-4 border-b border-gray-300">
                        <FontAwesomeIcon
                          className="pe-1"
                          text-lg
                          icon={faBraille}
                        />
                        {t("apartmentFloor")}
                      </td>
                      <td className="py-2">
                        {renderField(projectData.apartmentFloor)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className=" pr-4 border-b border-gray-300">
                        <FontAwesomeIcon
                          className="pe-1"
                          text-lg
                          icon={faRulerCombined}
                        />
                        {t("apartmentSize")}
                      </td>
                      <td className="py-2">{renderField(projectData.size)}</td>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <td className=" pr-4 border-b border-gray-300">
                        <FontAwesomeIcon className="pe-1" icon={faRoad} />
                        {t("frontRoad")}
                        {/* one */}
                      </td>
                      <td className="py-2">{renderField(projectData.size)}</td>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <td className=" pr-4 border-b border-gray-300">
                        <FontAwesomeIcon className="pe-1" icon={faBuildingUn} />
                        {t("noOfUnits")}
                        {/* one */}
                      </td>
                      <td className="py-2">{renderField(projectData.size)}</td>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <td className=" pr-4 border-b border-gray-300">
                        {/* <FontAwesomeIcon className="pe-1" icon={faRulerCombined} /> */}
                        <FontAwesomeIcon className="pe-1" icon={faCar} />
                        {t("noOfParking")}
                        {/* one */}
                      </td>
                      <td className="py-2">{renderField(projectData.size)}</td>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <td className=" pr-4 border-b border-gray-300">
                        <FontAwesomeIcon
                          className="pe-1"
                          text-lg
                          icon={faBed}
                        />
                        {t("bedroom")}
                      </td>
                      <td className="py-2">
                        {renderField(projectData.bedroom)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className=" pr-4 border-b border-gray-300">
                        <FontAwesomeIcon
                          className="pe-1"
                          text-lg
                          icon={faBath}
                        />
                        {t("bathroom")}
                      </td>
                      <td className="py-2">
                        {renderField(projectData.bathroom)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className=" pr-4 border-b border-gray-300">
                        <FontAwesomeIcon
                          className="pe-1"
                          text-lg
                          icon={faCalendarDays}
                        />
                        {t("launchDate")}
                      </td>
                      <td className="py-2">
                        {renderField(projectData.launchDate)}
                      </td>
                    </tr>
                    <tr>
                      <td className=" pr-4 border-b border-gray-300">
                        <FontAwesomeIcon
                          className="pe-1"
                          text-lg
                          icon={faShareNodes}
                        />
                        {t("collection")}
                      </td>
                      <td className="py-2">
                        {renderField(projectData.collectionName)}
                      </td>
                    </tr>
                    <tr>
                      <td className=" pr-4 border-b border-gray-300">
                        <FontAwesomeIcon
                          className="pe-1"
                          text-lg
                          icon={faWrench}
                        />
                        {t("buildingType")}
                      </td>
                      <td className="py-2">
                        {renderField(projectData.buildingType)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Link to='/contact' className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                  {t("contactUs")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* overview */}
      <Overview />
      
      <LocalBenifits
  services={[
    { title: "Mosque", distance: projectData.mosque, titleName: projectData.mosqueName, iconKey: "mosque" },
    { title: "College", distance: projectData.college, titleName: projectData.collegeName, iconKey: "school" },
    { title: "School", distance: projectData.school, titleName: projectData.schoolName, iconKey: "school" },
    { title: "Market", distance: projectData.market, titleName: projectData.marketName, iconKey: "store" },
    { title: "Bank 1", distance: projectData.bank1, titleName: projectData.bank1Name, iconKey: "bank" },
    { title: "Bank 2", distance: projectData.bank2, titleName: projectData.bank2Name, iconKey: "bank" },
    { title: "ATM", distance: projectData.atm, titleName: projectData.atmName, iconKey: "creditCard" },
    { title: "Bus Stop", distance: projectData.busStop, titleName: projectData.busStopName, iconKey: "bus" },
  ]}
  icons={icons}
/>


      <Footer />
    </>
  );
};

export default SingleProject;
