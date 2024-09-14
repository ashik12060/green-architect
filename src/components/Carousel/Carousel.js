
// // import React, { useState } from "react";

// // function Carousel() {
// //   const [activeImage, setActiveImage] = useState(0);

// //   const images = [
// //     {
// //       src: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
// //       title: "Classic",
// //       alt: "Classic image",
// //     },
// //     {
// //       src: "https://t3.ftcdn.net/jpg/06/48/79/10/360_F_648791013_cQK30SdyiLrVQ96Bqn2MOkz4JmvgttGr.jpg",
// //       title: "Luxury",
// //       alt: "Luxury image",
// //     },
// //     {
// //       src: "https://t4.ftcdn.net/jpg/05/51/26/37/360_F_551263784_ShXFYL6pNLmLfNcgT3x8plmCdoPkJohh.jpg",
// //       title: "Wellness Communities",
// //       alt: "Wellness Communities image",
// //     },
// //     {
// //       src: "https://t4.ftcdn.net/jpg/08/09/09/83/360_F_809098361_z45jKPDGsYymmTJcFQvp3VGTPgGuY35L.jpg",
// //       title: "Commercial",
// //       alt: "Commercial image",
// //     },
// //   ];

// //   const handleImageHover = (index) => {
// //     setActiveImage(index);
// //   };

// //   return (
// //     <div className="flex h-80">
// //       {/* Main Image Section */}
// //       <div className="w-[100%] h-full transition-all duration-300">
// //         <img
// //           src={images[activeImage].src}
// //           alt={images[activeImage].alt}
// //           className="w-full h-full object-cover rounded-md"
// //         />
// //       </div>

// //       {/* Right-Side Thumbnails */}
// //       <div className="flex flex-col w-[30%] h-full">
// //         {images.map((image, index) => (
// //           <div
// //             key={index}
// //             className={`h-[25%] overflow-hidden transition-all duration-300 ${activeImage === index ? 'w-[70%]' : 'w-[10%]'}`}
// //             onMouseEnter={() => handleImageHover(index)}
// //           >
// //             <img
// //               src={image.src}
// //               alt={image.alt}
// //               className="w-full h-full object-cover"
// //             />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Carousel;



// import React, { useState } from "react";

// function Carousel() {
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

//   const handleImageHover = (index) => {
//     setActiveImage(index);
//   };

//   return (
//     <div className="flex h-80">
//       {/* Main Image Section */}
//       <div className="w-[70%] h-full transition-all duration-300">
//         <img
//           src={images[activeImage].src}
//           alt={images[activeImage].alt}
//           className="w-full h-full object-cover rounded-md"
//         />
//       </div>

//       {/* Right-Side Thumbnails (Horizontal) */}
//       <div className="flex flex-row w-[30%] h-full">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`w-[25%] overflow-hidden transition-all duration-300 cursor-pointer ${
//               activeImage === index ? "w-[70%]" : "w-[10%]"
//             }`}
//             onMouseEnter={() => handleImageHover(index)}
//           >
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Carousel;



// import React, { useState } from "react";

// function Carousel() {
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

//   const handleImageHover = (index) => {
//     setActiveImage(index);
//   };

//   return (
//     <div className="flex h-80">
//       {/* Main Image Section */}
//       <div className="w-[70%] h-full transition-all duration-300">
//         <img
//           src={images[activeImage].src}
//           alt={images[activeImage].alt}
//           className="w-full h-full object-cover rounded-md shadow-lg transition-transform duration-500 hover:scale-105"
//         />
//       </div>

//       {/* Right-Side Thumbnails (Horizontal) */}
//       <div className="flex flex-row w-[30%] h-full space-x-2">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`w-[25%] overflow-hidden transition-all duration-300 cursor-pointer relative ${
//               activeImage === index ? "w-[70%]" : "w-[10%]"
//             }`}
//             onMouseEnter={() => handleImageHover(index)}
//           >
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="w-full h-full object-cover rounded-md transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
//             />
//             <div
//               className={`absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ${
//                 activeImage === index ? "opacity-0" : "opacity-100 hover:opacity-0"
//               }`}
//             ></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Carousel;




import React, { useState } from "react";

function ImageCarousel() {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      src: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      title: "Classic",
      alt: "Classic image",
    },
    {
      src: "https://t3.ftcdn.net/jpg/06/48/79/10/360_F_648791013_cQK30SdyiLrVQ96Bqn2MOkz4JmvgttGr.jpg",
      title: "Luxury",
      alt: "Luxury image",
    },
    {
      src: "https://t4.ftcdn.net/jpg/05/51/26/37/360_F_551263784_ShXFYL6pNLmLfNcgT3x8plmCdoPkJohh.jpg",
      title: "Wellness Communities",
      alt: "Wellness Communities image",
    },
    {
      src: "https://t4.ftcdn.net/jpg/08/09/09/83/360_F_809098361_z45jKPDGsYymmTJcFQvp3VGTPgGuY35L.jpg",
      title: "Commercial",
      alt: "Commercial image",
    },
  ];

  const handleHover = (index) => {
    setActiveImage(index);
  };

  return (
    <div className="relative w-full h-[500px] flex overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative flex-shrink-0 transition-all duration-500 ease-in-out ${
            activeImage === index ? "w-[70%]" : "w-[10%]"
          }`}
          onMouseEnter={() => handleHover(index)}
        >
          <img
            src={image.src}
            alt={image.alt}
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


