import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import axiosInstance from "../../pages/axiosInstance";
import { Link } from "react-router-dom";
import { faAngleRight, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch only the latest two videos
    const fetchVideos = async () => {
      try {
        const response = await axiosInstance.get(
          `${process.env.REACT_APP_API_URL}/api/videos/show`
        );
        const allVideos = response.data.data; // Assuming response contains 'data' field with videos
        const latestVideos = allVideos.reverse().slice(0, 2); // Reverse and get the last two videos
        setVideos(latestVideos);
        setLoading(false);
      } catch (err) {
        setError("Failed to load videos");
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  if (loading) {
    return <Typography variant="h6">Loading videos...</Typography>;
  }

  if (error) {
    return (
      <Typography variant="h6" color="error">
        {error}
      </Typography>
    );
  }

  const getYouTubeVideoId = (url) => {
    if (!url) return null; // Check if url is undefined or null
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S+[\?\&]v=|[\S]*[\?\&]v=|\S+\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return (
    <div className="flex flex-col items-center space-y-8 px-4 md:px-8">
      {videos.map((video) => {
        const videoId = getYouTubeVideoId(video.videoUrl); // Extract YouTube video ID from URL
        const embedUrl = videoId
          ? `https://www.youtube.com/embed/${videoId}`
          : null; // Construct embed URL

        return (
          <div
            key={video._id}
            className="w-full bg-white shadow-lg rounded-md overflow-hidden"
          >
            <div className="p-4">
              <h3 className="text-xl text-gray-700 font-semibold text-center">
                {video.title.en}
              </h3>
            </div>
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title="Video"
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]" // Responsive heights
                allowFullScreen
              ></iframe>
            ) : (
              <div className="text-center text-gray-500 p-4">
                Invalid video URL
              </div>
            )}
          </div>
        );
      })}
      <Link to="/videos" className="border border-green-700 p-2 mb-3 hover:bg-green-700 hover:border-white hover:text-white ">See Other Videos <FontAwesomeIcon className="ps-2 text-xl" icon={faAngleRight} /></Link>
    </div>
  );
};

export default HomeVideos;
