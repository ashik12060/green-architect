import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import axiosInstance from "../../pages/axiosInstance";
import Header from "../Shared/Headers/Header";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axiosInstance.get(
          `${process.env.REACT_APP_API_URL}/api/videos/show`
        );

        setVideos(response.data.data);
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
    <div>
      <Header />
      <h5 className="text-center text-2xl font-bold py-10">Our Videos</h5>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {videos.map((video) => {
          const videoId = getYouTubeVideoId(video.videoUrl); // Extract YouTube video ID from URL
          const embedUrl = videoId
            ? `https://www.youtube.com/embed/${videoId}`
            : null; // Construct embed URL

          return (
            <div
              key={video._id}
              className="w-full sm:w-[48%] lg:w-[23%] bg-white shadow-lg rounded-md overflow-hidden"
            >
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title="Video"
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="text-center text-gray-500 p-4">
                  Invalid video URL
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center">
                  {video.title.en}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
