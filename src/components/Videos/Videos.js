

import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import axios from "axios"; // Make sure you have axios installed
import axiosInstance from "../../pages/axiosInstance";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

function Videos() {
  const [videos, setVideos] = useState([]); // Store videos from the API
  const [playingVideo, setPlayingVideo] = useState(null); // Store the id of the playing video
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation('Video'); 

  const { isDarkMode } = useTheme();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/videos/show`);
        console.log(data);
        setVideos(data.videos || []); // Assuming your API returns an object with a 'videos' array
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handlePlayClick = (videoId) => {
    setPlayingVideo(videoId); // Set the clicked video as the playing video
  };

  if (loading) return <p>{t('loading')}</p>;
  if (error) return <p>{t('errorLoading')} {error}</p>;
  
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen  pt-10  text-center my-10 font-bold  ${isDarkMode ? ' text-white bg-white' : 'text-black border border-gray-700'}`}>
      <div className="w-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-800  border-b-4 border-green-700"> {t('pageTitle')}</h1>
          <p className="mt-2 text-gray-600">{t('location')}</p>
          
          {/* Iterate over the fetched videos array to generate video sections */}
          {videos.map((video) => (
            <React.Fragment key={video._id}>
              <div className="bg-black text-white w-full mt-8 py-4">
                <ul className="flex justify-around">
                  <li>{video.title}</li>
                  <li className="hover:bg-white border transition duration-700 ease-in-out transform hover:text-black border-gray-600 px-2 py-1">
                    {video.location}
                  </li>
                </ul>
              </div>

              {/* Video section */}
              <div className="relative w-full h-96 group transition-transform duration-500 transform hover:scale-105">
                {playingVideo !== video.id ? (
                  <>
                    <img
                      src={video.thumbnail}
                      alt={`${video.title} Thumbnail`}
                      className="absolute w-full h-full object-cover"
                    />
                    <button
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-6 py-4 text-2xl rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      onClick={() => handlePlayClick(video.id)}
                    >
                      <FontAwesomeIcon icon={faPlay} className="text-white text-2xl" />
                    </button>
                  </>
                ) : (
                  <iframe
                    className="absolute w-full h-full"
                    src={video.videoUrl}
                    title={`${video.title} Video Player`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Videos;
