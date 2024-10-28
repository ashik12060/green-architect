// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import CommentIcon from "@mui/icons-material/Comment";
// import { Box } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
// //import image from '../images/blog.jpg'
// // import am from '../images/amar.jpeg'
// // import am from '../assets/'
// import am from "../assets/23338.jpg";
// import axiosInstance from "../pages/axiosInstance";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
// // import axiosInstance from '../pages/axiosInstance';

// const PostCard = ({
//   id,
//   title,
//   subheader,
//   image,
//   content,
//   comments,
//   likes,
//   showPosts,
//   likesId,
// }) => {
//   const { userInfo } = useSelector((state) => state.signIn);

//   //add like
//   const addLike = async () => {
//     try {
//       const { data } = await axiosInstance.put(
//         `${process.env.REACT_APP_API_URL}/api/addlike/post/${id}`
//       );
//       console.log("likes", data.post);
//       if (data.success == true) {
//         showPosts();
//       }
//     } catch (error) {
//       console.log(error.response.data.error);
//       toast.error(error.response.data.error);
//     }
//   };

//   //remove like
//   const removeLike = async () => {
//     try {
//       // was empty
//       const { data } = await axiosInstance.put(
//         `${process.env.REACT_APP_API_URL}/api/removelike/post/${id}`
//       );
//       console.log("remove likes", data.post);
//       if (data.success == true) {
//         showPosts();
//       }
//     } catch (error) {
//       console.log(error.response.data.error);
//       toast.error(error.response.data.error);
//     }
//   };

//   return (
    

//     <div className=" bg-white rounded-lg overflow-hidden">

//       <Link to={`/post/${id}`}>
//         <img className="w-full h-56 object-cover" src={image} alt="Post" />
//       </Link>

//       <div className="p-4">
//       <div className="flex py-5">
//         <Avatar>
//           <img src={am} className="w-10 h-15 rounded-full" alt="company-img" />
//         </Avatar>
//         <div className="ml-3">
//           <h2 className="text-lg font-semibold">{title}</h2>
//           <p className="text-gray-500 text-sm">{subheader}</p>
//         </div>
//       </div>
//         <p className="text-gray-700 pb-4">
//           <span
//             dangerouslySetInnerHTML={{
//               __html: content.split(" ").slice(0, 10).join(" ") + "...",
//             }}
//           />
//         </p>
//         <Link className="text-green-700 font-bold p-1 " to={`/post/${id}`}>
//         Read More <FontAwesomeIcon icon={faAnglesRight} />
//         </Link>
//       </div>

//       <div className="flex justify-between items-center p-4 border-t">
//         <div className="flex items-center">
//           <button
//             onClick={likesId.includes(userInfo?.id) ? removeLike : addLike}
//             aria-label="toggle like"
//           >
//             {likesId.includes(userInfo?.id) ? (
//               <FavoriteIcon className="text-red-500" />
//             ) : (
//               <FavoriteBorderIcon className="text-red-500" />
//             )}
//           </button>
//           <span className="ml-1">{likes} Like(s)</span>
//         </div>

//         <div className="flex items-center">
//           <span>{comments}</span>
//           <button aria-label="comment" className="ml-2">
//             <CommentIcon />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostCard;


// src/components/PostCard.js
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


import { toast } from "react-toastify";
import axiosInstance from "../pages/axiosInstance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentIcon from "@mui/icons-material/Comment";

import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next'; // Import useTranslation

const PostCard = ({ id, title, subheader, image, content, comments, likes, showPosts, likesId }) => {
    const { t } = useTranslation(); // Use translation hook
    const { userInfo } = useSelector((state) => state.signIn);

    // Add like function
    const addLike = async () => {
        try {
            const { data } = await axiosInstance.put(`${process.env.REACT_APP_API_URL}/api/addlike/post/${id}`);
            if (data.success === true) {
                showPosts();
            }
        } catch (error) {
            toast.error(error.response.data.error);
        }
    };

    // Remove like function
    const removeLike = async () => {
        try {
            const { data } = await axiosInstance.put(`${process.env.REACT_APP_API_URL}/api/removelike/post/${id}`);
            if (data.success === true) {
                showPosts();
            }
        } catch (error) {
            toast.error(error.response.data.error);
        }
    };

    return (
        <div className="bg-white rounded-lg overflow-hidden">
            <Link to={`/post/${id}`}>
                <img className="w-full h-56 object-cover" src={image} alt="Post" />
            </Link>

            <div className="p-4">
                <div className="flex py-5">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="text-gray-500 text-sm">{subheader}</p>
                </div>
                <p className="text-gray-700 pb-4">
                    <span dangerouslySetInnerHTML={{
                        __html: content.split(" ").slice(0, 10).join(" ") + "..."
                    }} />
                </p>
                <Link className="text-green-700 font-bold p-1" to={`/post/${id}`}>
                    {t('readMore')} <FontAwesomeIcon icon={faAnglesRight} />
                </Link>
            </div>

            <div className="flex justify-between items-center p-4 border-t">
                <div className="flex items-center">
                    <button onClick={likesId.includes(userInfo?.id) ? removeLike : addLike} aria-label="toggle like">
                        {likesId.includes(userInfo?.id) ? (
                            <FavoriteIcon className="text-red-500" />
                        ) : (
                            <FavoriteBorderIcon className="text-red-500" />
                        )}
                    </button>
                    <span className="ml-1">{likes} Like(s)</span>
                </div>

                <div className="flex items-center">
                    <span>{comments}</span>
                    <button aria-label="comment" className="ml-2">
                        <CommentIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
