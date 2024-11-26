// import Card from "@mui/material/Card";
// import "./ProductCard.css";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Avatar from "@mui/material/Avatar";
// import Typography from "@mui/material/Typography";
// import { Box } from "@mui/material";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import am from "../assets/23338.jpg";
// import axiosInstance from "../pages/axiosInstance";
// import { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
// import { useTranslation } from "react-i18next";
// // import axiosInstance from "../pages/axiosInstance";

// const RndCard = ({
//   id,
//   title,
//   subheader,
//   image,
//   content,
//   comments,
//   likes,
//   showRnds,
//   likesId,
// }) => {
//   const { userInfo } = useSelector((state) => state.signIn);
//   const [truncatedContent, setTruncatedContent] = useState("");

//   const { t } = useTranslation('Home');

//   useEffect(() => {
//     const contentArray = content.split("\n");
//     const truncated = contentArray.slice(0, 8).join("\n");
//     setTruncatedContent(truncated);
//   }, [content]);

//   const addLike = async () => {
//     try {
//       const { data } = await axiosInstance.put(
//         `${process.env.REACT_APP_API_URL}/api/addlike/rnd/${id}`
//       );
//       console.log("likes", data.product);
//       if (data.success == true) {
//         showRnds();
//       }
//     } catch (error) {
//       console.log(error.response.data.error);
//       toast.error(error.response.data.error);
//     }
//   };

//   const removeLike = async () => {
//     try {
//       const { data } = await axiosInstance.put(
//         `${process.env.REACT_APP_API_URL}/api/removelike/rnd/${id}`
//       );
//       console.log("remove likes", data.product);
//       if (data.success == true) {
//         showRnds();
//       }
//     } catch (error) {
//       console.log(error.response.data.error);
//       toast.error(error.response.data.error);
//     }
//   };

//   return (
//      <>
//     <div className="overflow-hidden">
//       <div className="shadow border flex flex-col md:flex-row">
//         <div className="lg:w-1/2">
//           <Link to={`/rnd/${id}`}>
//             <img className="w-full h-72 object-cover p-4" src={image} alt="rnd" />
//           </Link>
//         </div>
//         <div className="p-4 flex-grow w-1/2">
//           <h3 className="text-lg font-semibold">{title}</h3>
//           <div className="mt-2 max-h-28 overflow-hidden">
//             {truncatedContent}
//           </div>
//           <div className="mt-auto">
//             <Link className="fw-bold text-blue-500" to={`/rnd/${id}`}>
//                {t('FindMore')} <FontAwesomeIcon icon={faAnglesRight} />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   </>
//   );
// };

// export default RndCard;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import axiosInstance from "../pages/axiosInstance";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const RndCard = ({
  id,
  title,
  subheader,
  image,
  content,
  comments,
  likes,
  showRnds,
  likesId,
}) => {
  const { userInfo } = useSelector((state) => state.signIn);
  const [truncatedContent, setTruncatedContent] = useState("");

  const { t } = useTranslation("Home");

  useEffect(() => {
    const contentArray = content.split("\n");
    const truncated = contentArray.slice(0, 8).join("\n");
    setTruncatedContent(truncated);
  }, [content]);

  const addLike = async () => {
    try {
      const { data } = await axiosInstance.put(
        `${process.env.REACT_APP_API_URL}/api/addlike/rnd/${id}`
      );
      if (data.success) {
        showRnds();
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "An error occurred");
    }
  };

  const removeLike = async () => {
    try {
      const { data } = await axiosInstance.put(
        `${process.env.REACT_APP_API_URL}/api/removelike/rnd/${id}`
      );
      if (data.success) {
        showRnds();
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "An error occurred");
    }
  };

  return (
    <div className="overflow-hidden">
      <div className="shadow border flex flex-col md:flex-row">
      <div className="w-2/3 h-full">
          <Link to={`/rnd/${id}`}>
            <img className="w-full h-72 object-cover p-4" src={image} alt="rnd" />
          </Link>
    
        </div>
        <div className="p-4 flex flex-col w-1/2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p> {truncatedContent}</p>
          <div className="mt-2 max-h-28 overflow-hidden"></div>
          <div className="mt-auto flex align-bottom ">
            <Link className="fw-bold text-green-800 border-2 border-green-800 p-2 " to={`/rnd/${id}`}>
              {t("FindMore")} <FontAwesomeIcon icon={faAnglesRight} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RndCard;
