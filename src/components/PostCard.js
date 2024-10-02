import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
//import image from '../images/blog.jpg'
// import am from '../images/amar.jpeg'
// import am from '../assets/'
import am from "../assets/23338.jpg";
import axiosInstance from "../pages/axiosInstance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
// import axiosInstance from '../pages/axiosInstance';

const PostCard = ({
  id,
  title,
  subheader,
  image,
  content,
  comments,
  likes,
  showPosts,
  likesId,
}) => {
  const { userInfo } = useSelector((state) => state.signIn);

  //add like
  const addLike = async () => {
    try {
      const { data } = await axiosInstance.put(
        `${process.env.REACT_APP_API_URL}/api/addlike/post/${id}`
      );
      console.log("likes", data.post);
      if (data.success == true) {
        showPosts();
      }
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  //remove like
  const removeLike = async () => {
    try {
      // was empty
      const { data } = await axiosInstance.put(
        `${process.env.REACT_APP_API_URL}/api/removelike/post/${id}`
      );
      console.log("remove likes", data.post);
      if (data.success == true) {
        showPosts();
      }
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  return (
    // <Card sx={{ maxWidth: 345 }}>
    //     <CardHeader
    //         avatar={
    //             <Avatar >
    //                 <img src={am}
    //                 style={{ width: '40px', height: '40px', borderRadius: '50%' }}
    //                 alt="company-img" />

    //             </Avatar>
    //         }

    //         title={title}
    //         subheader={subheader}

    //     />
    //     <Link to={`/post/${id}`}>

    //         <CardMedia
    //             component="img"
    //             height="194"
    //             image={image}
    //             alt="Paella dish"
    //         />
    //     </Link>
    //     <CardContent>
    //         <Typography variant="body2" color="text.primary">
    //             {/* {content} */}

    //             <Box component='span' dangerouslySetInnerHTML={{ __html: content.split(" ").slice(0, 10).join(" ") + "..." }}></Box>

    //         </Typography>
    //     </CardContent>
    //     <CardActions >
    //         <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
    //             <Box>

    //                 {
    //                     likesId.includes(userInfo && userInfo.id) ?
    //                         <IconButton onClick={removeLike} aria-label="add to favorites">
    //                             <FavoriteIcon sx={{ color: 'red' }} />
    //                         </IconButton>
    //                         :
    //                         <IconButton onClick={addLike} aria-label="add to favorites">
    //                             <FavoriteBorderIcon sx={{ color: 'red' }} />
    //                         </IconButton>
    //                 }

    //                 {likes} Like(s)
    //             </Box>
    //             <Box>
    //                 {comments}
    //                 <IconButton aria-label="comment">
    //                     <CommentIcon />
    //                 </IconButton>
    //             </Box>
    //         </Box>

    //     </CardActions>

    // </Card>

    //     <div className=" bg-white rounded-lg overflow-hidden">
    //   <div className="flex p-4">
    //     <Avatar>
    //       <img
    //         src={am}
    //         className="w-10 h-10 rounded-full"
    //         alt="company-img"
    //       />
    //     </Avatar>
    //     <div className="ml-3">
    //       <h2 className="text-lg font-semibold">{title}</h2>
    //       <p className="text-gray-500 text-sm">{subheader}</p>
    //     </div>
    //   </div>

    //   <Link to={`/post/${id}`}>
    //     <img
    //       className="w-full h-48 object-cover"
    //       src={image}
    //       alt="Post"
    //     />
    //   </Link>

    //   <div className="p-4">
    //     <p className="text-gray-700">
    //       <span dangerouslySetInnerHTML={{ __html: content.split(" ").slice(0, 10).join(" ") + "..." }} />
    //     </p>
    //   </div>

    //   <div className="flex justify-between items-center p-4 border-t">
    //     <div className="flex items-center">
    //       <button onClick={likesId.includes(userInfo?.id) ? removeLike : addLike} aria-label="toggle like">
    //         {likesId.includes(userInfo?.id) ? (
    //           <FavoriteIcon className="text-red-500" />
    //         ) : (
    //           <FavoriteBorderIcon className="text-red-500" />
    //         )}
    //       </button>
    //       <span className="ml-1">{likes} Like(s)</span>
    //     </div>

    //     <div className="flex items-center">
    //       <span>{comments}</span>
    //       <button aria-label="comment" className="ml-2">
    //         <CommentIcon />
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className=" bg-white rounded-lg overflow-hidden">
      {/* <div className="flex p-4">
        <Avatar>
          <img src={am} className="w-10 h-15 rounded-full" alt="company-img" />
        </Avatar>
        <div className="ml-3">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-gray-500 text-sm">{subheader}</p>
        </div>
      </div> */}

      <Link to={`/post/${id}`}>
        <img className="w-full h-56 object-cover" src={image} alt="Post" />
      </Link>

      <div className="p-4">
      <div className="flex py-5">
        <Avatar>
          <img src={am} className="w-10 h-15 rounded-full" alt="company-img" />
        </Avatar>
        <div className="ml-3">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-gray-500 text-sm">{subheader}</p>
        </div>
      </div>
        <p className="text-gray-700 pb-4">
          <span
            dangerouslySetInnerHTML={{
              __html: content.split(" ").slice(0, 10).join(" ") + "...",
            }}
          />
        </p>
        <Link className="text-green-700 font-bold p-1 " to={`/post/${id}`}>
        Read More <FontAwesomeIcon icon={faAnglesRight} />
        </Link>
      </div>

      <div className="flex justify-between items-center p-4 border-t">
        <div className="flex items-center">
          <button
            onClick={likesId.includes(userInfo?.id) ? removeLike : addLike}
            aria-label="toggle like"
          >
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
