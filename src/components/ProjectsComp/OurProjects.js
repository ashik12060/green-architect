import React, { useState, useEffect } from 'react';
import imgg from '../../assets/architec1.jpg';
import imgg1 from '../../assets/architect1.jpg';
import imgg2 from '../../assets/architect2.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

function SplitImageCarousel() {
  const images = [
    { src: imgg, title: "BAITUL MAMUR JAME MOSJID" },
    { src: imgg1, title: "HOTEL STAR VALLEY" },
    { src: imgg2, title: "SKY DYNE RESTAURANT" },
    { src: imgg, title: "GREEN PARK" },
    { src: imgg1, title: "SUNRISE RESORT" },
    { src: imgg2, title: "BLUE SKY HOTEL" },
    { src: imgg, title: "OCEANIC VIEW" },
    { src: imgg1, title: "MOUNTAIN VILLA" },
    { src: imgg2, title: "CITY LIGHTS HOTEL" },
    { src: imgg, title: "HARBOR INN" },
    { src: imgg1, title: "DESERT OASIS" },
    { src: imgg2, title: "COASTAL ESCAPE" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3); // default to 3 images

  // Function to update the number of items to show based on screen size
  const updateItemsToShow = () => {
    if (window.innerWidth < 768) {
      setItemsToShow(1);
    } else {
      setItemsToShow(3);
    }
  };

  useEffect(() => {
    // Set the correct number of items to show on initial load
    updateItemsToShow();

    // Update number of items on window resize
    window.addEventListener('resize', updateItemsToShow);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateItemsToShow);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - itemsToShow ? 0 : prevIndex + itemsToShow
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - itemsToShow : prevIndex - itemsToShow
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 mx-32 mt-10 mb-16">
      {/* Image Carousel */}
      <div className="relative w-full flex justify-between items-center">
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {images.slice(currentIndex, currentIndex + itemsToShow).map((image, index) => (
            <div key={index} className="relative w-full h-80 overflow-hidden rounded-md">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-800 bg-opacity-50 text-white text-center">
                <p className="font-bold">{image.title}</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-2 mt-4">
        {Array.from({ length: Math.ceil(images.length / itemsToShow) }).map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index * itemsToShow)}
            className={`w-4 h-4 rounded-full ${currentIndex / itemsToShow === index ? 'bg-red-500' : 'bg-gray-400'}`}
          ></span>
        ))}
      </div>

      

      
    </div>
  );
}

export default SplitImageCarousel;
