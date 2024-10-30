// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { Box, Button, Divider, Grid, TextareaAutosize } from "@mui/material";
// import { Link, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import moment from "moment";
// import Loader from "../components/Loader";
// import { useSelector } from "react-redux";
// // import {TextareaAutosize} from '@mui/base/TextareaAutosize';
// import { toast } from "react-toastify";
// import CommentList from "../components/CommentList";
// import { io } from "socket.io-client";
// import axiosInstance from "./axiosInstance";
// import Header from "../components/Shared/Headers/Header";
// import Footer from "../components/Shared/Footer/Footer";
// import { useTheme } from "../context/ThemeContext";

// const socket = io("/", {
//   reconnection: true,
// });

// const SinglePost = () => {
//   const { userInfo } = useSelector((state) => state.signIn);

//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState("");
//   const [createdAt, setCreatedAt] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState([]);
//   const [commentsRealTime, setCommentsRealTime] = useState([]);

//   const { id } = useParams();
//   //fetch single post
//   const displaySinglePost = async () => {
//     setLoading(true);
//     try {
//       //
//       const { data } = await axiosInstance.get(
//         `${process.env.REACT_APP_API_URL}/api/post/${id}`
//       );
//       // console.log(data)
//       setTitle(data.post.title);
//       setContent(data.post.content);
//       setImage(data.post.image.url);
//       setCreatedAt(data.post.createdAt);
//       setLoading(false);
//       setComments(data.post.comments);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     displaySinglePost();
//   }, []);

//   useEffect(() => {
//     // console.log('SOCKET IO', socket);
//     socket.on("new-comment", (newComment) => {
//       setCommentsRealTime(newComment);
//     });
//   }, []);

//   // add comment
//   const addComment = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axiosInstance.put(
//         `${process.env.REACT_APP_API_URL}/api/comment/post/${id}`,
//         { comment }
//       );
//       if (data.success === true) {
//         setComment("");
//         toast.success("comment added");

//         socket.emit("comment", data.post.comments);
//       }
//       //console.log("comment post", data.post)
//     } catch (error) {
//       console.log(error);
//       toast.error(error);
//     }
//   };

//   let uiCommentUpdate =
//     commentsRealTime.length > 0 ? commentsRealTime : comments;
//   const { isDarkMode } = useTheme();
//   return (
//     <div className="overflow-hidden">
//       <Header />

//       <div className={` flex justify-center py-16 min-h-screen ${isDarkMode ? 'bg-black ' : 'bg-gray-100'}`}>
//         {loading ? (
//           <Loader />
//         ) : (
//           <div className="flex justify-center w-full">
//             <div className="w-full max-w-3xl mx-4">
//               <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//                 <div className="flex items-center p-4">
//                   <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
//                     A
//                   </div>
//                   <div className="ml-4">
//                     <h2 className="text-lg font-bold">{title}</h2>
//                     <p className="">
//                       {moment(createdAt).format("MMMM DD, YYYY")}
//                     </p>
//                   </div>
//                 </div>
//                 <img
//                   src={image}
//                   alt={title}
//                   className="h-72 w-full object-cover border-b"
//                 />
//                 <div className="p-4">
//                   <div
//                     className="text-gray-700"
//                     dangerouslySetInnerHTML={{ __html: content }}
//                   />
//                   <hr className="my-4" />

//                   {comments.length > 0 && (
//                     <h3 className="text-xl font-semibold pt-3 mb-2">
//                       Comments:
//                     </h3>
//                   )}

//                   {uiCommentUpdate.map((comment) => (
//                     <CommentList
//                       key={comment._id}
//                       name={comment.postedBy.name}
//                       text={comment.text}
//                     />
//                   ))}

//                   {userInfo ? (
//                     <div className="pt-1">
//                       <h2 className="text-lg font-semibold">
//                         Add your comment here!
//                       </h2>
//                       <form onSubmit={addComment} className="mt-2">
//                         <textarea
//                           onChange={(e) => setComment(e.target.value)}
//                           value={comment}
//                           className="w-full p-2 border border-gray-300 rounded"
//                           rows="3"
//                           placeholder="Add a comment..."
//                         />
//                         <button
//                           type="submit"
//                           className="mt-2 bg-green-700 text-white px-4 py-2 rounded"
//                         >
//                           Comment
//                         </button>
//                       </form>
//                     </div>
//                   ) : (
//                     <Link to="/login" className="text-blue-500">
//                       Log In to add a comment
//                     </Link>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default SinglePost;


import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
import CommentList from "../components/CommentList";
import { io } from "socket.io-client";
import axiosInstance from "./axiosInstance";
import Header from "../components/Shared/Headers/Header";
import Footer from "../components/Shared/Footer/Footer";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

const socket = io("/", { reconnection: true });

const SinglePost = () => {
  const { id } = useParams();
  const { userInfo } = useSelector((state) => state.signIn);
  const { isDarkMode } = useTheme();
  const { t, i18n } = useTranslation(); // Using i18n for language
  const [post, setPost] = useState({
    title: {},
    content: {},
    image: "",
    createdAt: "",
    comments: [],
    likes: [],
  });
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState("");
  const [postAddLike, setPostAddLike] = useState([]);
  const [postRemoveLike, setPostRemoveLike] = useState([]);
  const [commentsRealTime, setCommentsRealTime] = useState([]);

  const fetchPost = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/post/${id}`
      );
      setPost({
        title: data.post.title,
        content: data.post.content,
        image: data.post.image.url,
        createdAt: data.post.createdAt,
        comments: data.post.comments,
        likes: data.post.likes,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  useEffect(() => {
    socket.on("add-like", (newLikes) => {
      setPostAddLike(newLikes);
      setPostRemoveLike([]);
    });
    socket.on("remove-like", (newLikes) => {
      setPostRemoveLike(newLikes);
      setPostAddLike([]);
    });
  }, []);

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.put(
        `${process.env.REACT_APP_API_URL}/api/comment/post/${id}`,
        { comment }
      );
      setComment("");
      socket.emit("comment", data.post.comments);
    } catch (error) {
      console.error(error);
    }
  };

  const displayedComments = commentsRealTime.length > 0 ? commentsRealTime : post.comments;

  const currentPost = postAddLike.length > 0 ? postAddLike : postRemoveLike.length > 0 ? postRemoveLike : post;

  return (
    <div className={`overflow-hidden ${isDarkMode ? "bg-black" : "bg-gray-100"} min-h-screen`}>
      <Header />
      <div className="container mx-auto py-10">
        {loading ? (
          <Loader />
        ) : (
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4 flex items-center">
              <Avatar sx={{ bgcolor: "red[500]" }}>A</Avatar>
              <div className="ml-4">
                <h2 className="text-lg font-bold">{currentPost.title[i18n.language]}</h2>
                <p>{moment(currentPost.createdAt).format("MMMM DD, YYYY")}</p>
              </div>
            </div>
            <img
              src={currentPost.image}
              alt={currentPost.title[i18n.language]}
              className="h-72 w-full object-cover border-b"
            />
            <div className="p-4">
              <div
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: currentPost.content[i18n.language] }}
              />

              
              <div className="my-4">
                <h3 className="text-xl font-semibold">All Comments:</h3>
                {displayedComments.map((comment) => (
                  <CommentList key={comment._id} name={comment.postedBy.name} text={comment.text} />
                ))}
              </div>
              {userInfo ? (
                <form onSubmit={addComment} className="pt-4">
                  <label htmlFor="comment" className="text-lg font-semibold">
                    Comments
                  </label>
                  <textarea
                    id="comment"
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                    className="w-full p-2 mt-2 border rounded"
                    rows="3"
                    placeholder={t("comments.placeholder")}
                  />
                  <button type="submit" className="mt-2 bg-green-700 text-white px-4 py-2 rounded">
                    {t("comments.submit")}
                  </button>
                </form>
              ) : (
                <Link to="/login" className="text-blue-500">
                  Login to comment
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SinglePost;
