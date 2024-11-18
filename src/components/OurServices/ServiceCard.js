import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next"; // Assuming you're using react-i18next for translation
import { useTheme } from "../../context/ThemeContext";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const ServiceCard = () => {
  const { t } = useTranslation("Service");
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? "text-white" : "bg-gray-100"}`}>
      <div className="container mx-auto px-4 py-16">
        <h1
          className={`text-4xl font-bold text-center mb-10 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          <span
            className={`${
              isDarkMode ? "border-b-4 border-white" : "border-b-4 border-black"
            }`}
          >
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-4">
              <h2 className="ml-2 text-xl font-bold text-black"> {t("preDesign")}</h2>
            </div>
            <p className="text-gray-700">{t("preDesignDescription")}</p>
            <Link to='/pre-design' className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg">
             
              
             {t("seeMore")}
             <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
           </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-4">
              <h2 className="ml-2 text-xl font-bold text-black">{t("design")}</h2>
            </div>
            <p className="text-gray-700">{t("designDescription")}</p>
            <Link to='/design' className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg">
             
              
             {t("seeMore")}
             <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
           </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-4">
              <h2 className="ml-2 text-xl font-bold text-black">{t("build")}</h2>
            </div>
            <p className="text-gray-700"> {t("buildDescription")}</p>
            <Link to='/build' className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg">
             
              
             {t("seeMore")}
              <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-4">
              <h2 className="ml-2 text-xl font-bold text-black">  {t("interior")}</h2>
            </div>
            <p className="text-gray-700">{t("interiorDescription")}</p>
            <Link to='/interior' className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg">
             
              
             {t("seeMore")}
              <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-4">
            
              <h2 className="ml-2 text-xl font-bold text-black">{t("3dWork")}</h2>
            </div>
            <p className="text-gray-700"> {t("3dWorkDescription")}</p>
            <Link to='/3d-works' className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg">
             
              
           {t("seeMore")}
             <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
           </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-4">
            
              <h2 className="ml-2 text-xl font-bold text-black"> {t("modelMaking")}</h2>
            </div>
            <p className="text-gray-700"> {t("modelMakingDescription")}</p>
            <Link to='/model-making' className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg">
             
              
           {t("seeMore")}
             <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
           </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-4">
             
              <h2 className="ml-2 text-xl font-bold text-black"> {t("realEstate")}</h2>
            </div>
            <p className="text-gray-700">{t("realEstateDescription")}</p>
            <Link className="mt-4 inline-block px-4 py-2 text-green-500 font-bold rounded-lg">
             
              
             {t("seeMore")}
              <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
            </Link>
          </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};
