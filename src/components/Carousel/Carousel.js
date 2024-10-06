import React, { useEffect, useState } from "react";
import axiosInstance from "../../pages/axiosInstance";

function ImageCarousel() {
  const [activeImage, setActiveImage] = useState(0);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/carousels/show`);
        setImages(data.carousels || []); // Accessing the correct key
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="relative w-full h-[500px] flex overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image._id} // Use a unique identifier
          className={`relative flex-shrink-0 transition-all duration-500 ease-in-out ${
            activeImage === index ? "w-[70%]" : "w-[10%]"
          }`}
          onMouseEnter={() => handleHover(index)}
        >
          <img
            src={image.image.url} // Access the correct URL
            alt={image.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-2 text-white bg-black bg-opacity-50">
            {image.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageCarousel;
