// import { faPlay } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState } from "react";

// function Videos() {
//   const [playingVideo, setPlayingVideo] = useState(null); // Store the id of the playing video

//   const videoData = [
//     {
//       id: "video1",
//       title: "Luxury Collection 1",
//       location: "Dhaka",
//       thumbnail: "https://img.youtube.com/vi/o7In7se2Kl4/maxresdefault.jpg",
//       videoUrl: "https://www.youtube.com/embed/o7In7se2Kl4?autoplay=1&controls=0&modestbranding=1",
//     },
//     {
//       id: "video2",
//       title: "Luxury Collection 2",
//       location: "Dhaka",
//       thumbnail: "https://img.youtube.com/vi/o7In7se2Kl4/maxresdefault.jpg",
//       videoUrl: "https://www.youtube.com/embed/o7In7se2Kl4?autoplay=1&controls=0&modestbranding=1",
//     },
//     {
//       id: "video3",
//       title: "Luxury Collection 3",
//       location: "Dhaka",
//       thumbnail: "https://img.youtube.com/vi/o7In7se2Kl4/maxresdefault.jpg",
//       videoUrl: "https://www.youtube.com/embed/o7In7se2Kl4?autoplay=1&controls=0&modestbranding=1",
//     },
//   ];

//   const handlePlayClick = (videoId) => {
//     setPlayingVideo(videoId); // Set the clicked video as the playing video
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-10">
//       <div className="w-full">
//         <div className="flex flex-col items-center justify-center">
//           <h1 className="text-3xl font-bold text-gray-800">Luxury Collection</h1>
//           <p className="mt-2 text-gray-600">Dhaka</p>
          
//           {/* Iterate over the videoData array to generate video sections */}
//           {videoData.map((video, index) => (
//             <React.Fragment key={video.id}>
//               <div className="bg-black text-white w-full mt-8 py-4">
//                 <ul className="flex justify-around">
//                   <li>{video.title}</li>
//                   <li className="hover:bg-white border transition duration-700 ease-in-out transform hover:text-black border-gray-600 px-2 py-1">
//                     {video.location}
//                   </li>
//                 </ul>
//               </div>

//               {/* Video section */}
//               <div className="relative w-full h-96 group transition-transform duration-500 transform hover:scale-105">
//                 {playingVideo !== video.id ? (
//                   <>
//                     <img
//                       src={video.thumbnail}
//                       alt={`${video.title} Thumbnail`}
//                       className="absolute w-full h-full object-cover"
//                     />
//                     <button
//                       className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-6 py-4 text-2xl rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                       onClick={() => handlePlayClick(video.id)}
//                     >
//                       <FontAwesomeIcon icon={faPlay} className="text-white text-2xl" />
//                     </button>
//                   </>
//                 ) : (
//                   <iframe
//                     className="absolute w-full h-full"
//                     src={video.videoUrl}
//                     title={`${video.title} Video Player`}
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   ></iframe>
//                 )}
//               </div>
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Videos;


import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import axios from "axios"; // Make sure you have axios installed
import axiosInstance from "../../pages/axiosInstance";
import { useTheme } from "../../context/ThemeContext";

function Videos() {
  const [videos, setVideos] = useState([]); // Store videos from the API
  const [playingVideo, setPlayingVideo] = useState(null); // Store the id of the playing video
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Loading videos...</p>;
  if (error) return <p>Error loading videos: {error}</p>;
  
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen  pt-10  text-center my-10 font-bold  ${isDarkMode ? ' text-white bg-white' : 'text-black border border-gray-700'}`}>
      <div className="w-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-800">Luxury Collection</h1>
          <p className="mt-2 text-gray-600">Dhaka</p>
          
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
