import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { toast } from "react-toastify";
import axiosInstance from "../pages/axiosInstance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentIcon from "@mui/icons-material/Comment";
import { faAnglesRight, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';

const PostCard = ({ id, title, subheader, image, content, comments, likes, showPosts, likesId }) => {
    const { t } = useTranslation('Service');
    const { userInfo } = useSelector((state) => state.signIn);

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

           <div className="flex gap-2 mt-5 ps-5 ">
           <FontAwesomeIcon icon={faCalendarDays} /><p className="text-gray-500  text-sm">{subheader}</p>
           </div>

            <div className="p-4">
                
                <div className="flex py-5">
                
                <br />
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <br />
                    
                </div>
                <p className="text-gray-700 pb-4">
                    <span dangerouslySetInnerHTML={{
                        __html: content ? content.split(" ").slice(0, 10).join(" ") + "..." : ""
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
