import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Videos() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className=" w-full ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Luxury Collection
          </h1>
          <p className="mt-2 text-gray-600">Dhaka</p>
          <div className="bg-black text-white w-full mt-8 py-4  ">
            <ul className="flex justify-around">
                <li>Luxury Collection
                </li>
                <li className=" hover:bg-white border  transition duration-700 ease-in-out transform hover:text-black border-gray-600 px-2 py-1 ">Dhaka</li>
            </ul>
          </div>

          {/* first video */}
          <div className=" relative w-full h-96 group">
            {!isPlaying ? (
              <>
                {/* Thumbnail/Poster Image */}
                <img
                  src="https://img.youtube.com/vi/o7In7se2Kl4/maxresdefault.jpg"
                  alt="Video Thumbnail"
                  className="absolute w-full h-full object-cover"
                />
                <button
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-black px-6 py-4 text-2xl rounded-full text-gray-800  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 animate-spin-slow"
                  onClick={handlePlayClick}
                >
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="text-white text-2xl"
                  />
                </button>
              </>
            ) : (
              <iframe
                className="absolute w-full h-full"
                src="https://www.youtube.com/embed/o7In7se2Kl4?autoplay=1&controls=0&modestbranding=1"
                title="YouTube Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          {/* second video */}
          <div className="bg-black text-white w-full mt-8 py-4  ">
            <ul className="flex justify-around">
                <li>Luxury Collection
                </li>
                <li className=" hover:bg-white border  transition duration-700 ease-in-out transform hover:text-black border-gray-600 px-2 py-1 ">Dhaka</li>
            </ul>
          </div>
          <div className="relative w-full h-96 group">
            {!isPlaying ? (
              <>
                {/* Thumbnail/Poster Image */}
                <img
                  src="https://img.youtube.com/vi/o7In7se2Kl4/maxresdefault.jpg"
                  alt="Video Thumbnail"
                  className="absolute w-full h-full object-cover"
                />
                <button
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-black px-6 py-4 text-2xl rounded-full text-gray-800  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 animate-spin-slow"
                  onClick={handlePlayClick}
                >
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="text-white text-2xl"
                  />
                </button>
              </>
            ) : (
              <iframe
                className="absolute w-full h-full"
                src="https://www.youtube.com/embed/o7In7se2Kl4?autoplay=1&controls=0&modestbranding=1"
                title="YouTube Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          {/* third video */}
          <div className="bg-black text-white w-full mt-8 py-4  ">
            <ul className="flex justify-around">
                <li>Luxury Collection
                </li>
                <li className=" hover:bg-white border  transition duration-700 ease-in-out transform hover:text-black border-gray-600 px-2 py-1 ">Dhaka</li>
            </ul>
          </div>
          <div className="relative w-full h-96 group">
            {!isPlaying ? (
              <>
                {/* Thumbnail/Poster Image */}
                <img
                  src="https://img.youtube.com/vi/o7In7se2Kl4/maxresdefault.jpg"
                  alt="Video Thumbnail"
                  className="absolute w-full h-full object-cover"
                />
                <button
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-black px-6 py-4 text-2xl rounded-full text-gray-800  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 animate-spin-slow"
                  onClick={handlePlayClick}
                >
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="text-white text-2xl"
                  />
                </button>
              </>
            ) : (
              <iframe
                className="absolute w-full h-full"
                src="https://www.youtube.com/embed/o7In7se2Kl4?autoplay=1&controls=0&modestbranding=1"
                title="YouTube Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;
