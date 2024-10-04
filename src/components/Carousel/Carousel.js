// import React, { useState } from "react";

// function ImageCarousel() {
//   const [activeImage, setActiveImage] = useState(0);

//   const images = [
//     {
//       src: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
//       title: "Classic",
//       alt: "Classic image",
//     },
//     {
//       src: "https://t3.ftcdn.net/jpg/06/48/79/10/360_F_648791013_cQK30SdyiLrVQ96Bqn2MOkz4JmvgttGr.jpg",
//       title: "Luxury",
//       alt: "Luxury image",
//     },
//     {
//       src: "https://t4.ftcdn.net/jpg/05/51/26/37/360_F_551263784_ShXFYL6pNLmLfNcgT3x8plmCdoPkJohh.jpg",
//       title: "Wellness Communities",
//       alt: "Wellness Communities image",
//     },
//     {
//       src: "https://t4.ftcdn.net/jpg/08/09/09/83/360_F_809098361_z45jKPDGsYymmTJcFQvp3VGTPgGuY35L.jpg",
//       title: "Commercial",
//       alt: "Commercial image",
//     },
//   ];

//   const handleHover = (index) => {
//     setActiveImage(index);
//   };

//   return (
//     <div className="relative w-full h-[500px] flex overflow-hidden">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`relative flex-shrink-0 transition-all duration-500 ease-in-out ${
//             activeImage === index ? "w-[70%]" : "w-[10%]"
//           }`}
//           onMouseEnter={() => handleHover(index)}
//         >
//           <img
//             src={image.src}
//             alt={image.alt}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute bottom-0 left-0 p-2 text-white bg-black bg-opacity-50">
//             {image.title}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ImageCarousel;

// second

// import React, { useState, useEffect } from "react";
// import axiosInstance from "../../pages/axiosInstance";

// function ImageCarousel() {
//   const [activeImage, setActiveImage] = useState(0);
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/carousels/show`);
//         console.log(data);
        
//         // Assuming data.images contains the array of image objects
//         setImages(data.images || []);
//         console.log(data.images);
//       } catch (err) {
//         console.error("Error fetching images:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchImages();
//   }, []);

//   const handleHover = (index) => {
//     setActiveImage(index);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="relative w-full h-[500px] flex overflow-hidden">
//       {images.map((image, index) => (
//         <div
//           key={image._id} // Use a unique identifier from your image object
//           className={`relative flex-shrink-0 transition-all duration-500 ease-in-out ${
//             activeImage === index ? "w-[70%]" : "w-[10%]"
//           }`}
//           onMouseEnter={() => handleHover(index)}
//         >
//           <img
//             src={image.imageUrl} // Ensure this matches your backend response
//             alt={image.title} // Ensure this matches your backend response
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute bottom-0 left-0 p-2 text-white bg-black bg-opacity-50">
//             {image.title}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ImageCarousel;



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
        console.log(data); // Check the structure of your data
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
