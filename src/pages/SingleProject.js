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
import "./Pro.css";

const SingleProject = () => {
  const { userInfo } = useSelector((state) => state.signIn);
  const { t, i18n } = useTranslation();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]); // State for storing multiple images
  const [createdAt, setCreatedAt] = useState("");
  const [loading, setLoading] = useState(false);

  const { isDarkMode } = useTheme();

  // Fetch single project data
  const displaySingleProject = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/project/${id}`
      );

      setTitle(data.project.title);
      setContent(data.project.content);
      setImages(data.project.images); // Set multiple images
      setCreatedAt(data.project.createdAt);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    displaySingleProject();
  }, [id]);

  const sanitizeHTML = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <Header />

      <div
        className={`flex justify-center items-center pt-5 pb-16 min-h-screen ${
          isDarkMode ? "text-white bg-black" : "bg-gray-100"
        }`}
      >
        {loading ? (
          <Loader />
        ) : (
          <div
            className={`container mx-auto ${
              isDarkMode
                ? "text-white bg-black shadow-md rounded-lg shadow-gray-700"
                : "bg-gray-100 shadow-md rounded-lg"
            }`}
          >
            <div className="flex flex-col items-center text-center">
              {/* Carousel for images */}
              <div className="w-full md:w-2/3 lg:w-1/2 p-4">
                <div className="relative">
                  {images.length > 0 ? (
                    <>
                      <img
                        src={images[currentIndex].url}
                        className="w-full h-96 object-cover rounded-lg"
                        alt={`Project Image ${currentIndex + 1}`}
                      />
                      {/* Navigation Buttons */}
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
              </div>

              {/* Displaying title and content */}
              <div className="w-full md:w-2/3 lg:w-1/2 mt-6">
                <h2 className="text-2xl font-bold">{title[i18n.language]}</h2>
                <p
                  className="mt-2"
                  dangerouslySetInnerHTML={sanitizeHTML(content[i18n.language])}
                />
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
