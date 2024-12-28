import React, { useEffect, useState } from "react";
import axiosInstance from "../../pages/axiosInstance";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

function ImageCarousel() {
  const { t, i18n } = useTranslation(); // Access i18next's current language
  const [activeImage, setActiveImage] = useState(0);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await axiosInstance.get(
          `${process.env.REACT_APP_API_URL}/api/carousels/show`
        );
        setImages(data.carousels || []);
      } catch (err) {
        console.error("Error fetching images:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleHover = (index) => {
    setActiveImage(index);
  };

  if (loading) return <div>{t("loading")}</div>; // Use i18n for loading text if needed
  if (error)
    return (
      <div>
        {t("error")}: {error}
      </div>
    );

  return (
    <div className="relative w-full lg:h-[500px] sm:h-[200] flex overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image._id}
          className={`relative transition-all duration-500 ease-in-out ${
            activeImage === index ? "flex-[7]" : "flex-[1]"
          } flex-shrink-0`}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={() => handleHover(null)} // Reset hover effect
        >
          <img
            src={image.image.url}
            alt={image.title[i18n.language]} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-2 text-sm text-white bg-black bg-opacity-50">
            {image.title[i18n.language]}{" "}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageCarousel;


