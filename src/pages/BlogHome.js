// import { useEffect, useState } from 'react';
// import PostCard from '../components/PostCard';
// import moment from 'moment';
// import Loader from '../components/Loader';
// import { io } from 'socket.io-client';
// import axiosInstance from './axiosInstance';
// import Footer from '../components/Shared/Footer/Footer';
// import Header from '../components/Shared/Headers/Header';

// const socket = io('/', {
//     reconnection: true
// });

// const BlogHome = () => {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [postAddLike, setPostAddLike] = useState([]);
//     const [postRemoveLike, setPostRemoveLike] = useState([]);

//     const showPosts = async () => {
//         setLoading(true);
//         try {
//             const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/posts/show`);
//             setPosts(data.posts);
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         showPosts();
//     }, []);

//     useEffect(() => {
//         socket.on('add-like', (newPosts) => {
//             setPostAddLike(newPosts);
//             setPostRemoveLike([]);
//         });
//         socket.on('remove-like', (newPosts) => {
//             setPostRemoveLike(newPosts);
//             setPostAddLike([]);
//         });
//     }, []);
   

//     let uiPosts = postAddLike.length > 0 ? postAddLike : postRemoveLike.length > 0 ? postRemoveLike : posts;

//     return (
//         <div className=" ">
//             <Header />
//             {/* <div className="container mx-auto py-10">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                     {loading ? (
//                         <Loader />
//                     ) : (
//                         uiPosts.map((post, index) => (
//                             <div key={index} className="border-4 overflow-hidden">
//                                 <PostCard
//                                     id={post._id}
//                                     title={post.title}
//                                     content={post.content}
//                                     image={post.image ? post.image.url : ''}
//                                     subheader={moment(post.createdAt).format('MMMM DD, YYYY')}
//                                     comments={post.comments.length}
//                                     likes={post.likes.length}
//                                     likesId={post.likes}
//                                     showPosts={showPosts}
//                                 />
//                             </div>
//                         ))
//                     )}
//                 </div>
//             </div> */}
//             <div className="container mx-auto py-10">
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//     {loading ? (
//       <Loader />
//     ) : (
//       uiPosts.map((post, index) => (
//         <div key={index} className="border-1 border-green-100 overflow-hidden rounded-lg shadow-lg">
//           <PostCard
//             id={post._id}
//             title={post.title}
//             content={post.content}
//             image={post.image ? post.image.url : ''}
//             subheader={moment(post.createdAt).format('MMMM DD, YYYY')}
//             comments={post.comments.length}
//             likes={post.likes.length}
//             likesId={post.likes}
//             showPosts={showPosts}

//           />
//         </div>
//       ))
//     )}
//   </div>
// </div>

//             <Footer />
//         </div>
//     );
// };

// export default BlogHome;


// src/pages/BlogHome.js



// import { useEffect, useState } from 'react';
// import PostCard from '../components/PostCard';
// import moment from 'moment';
// import Loader from '../components/Loader';
// import { io } from 'socket.io-client';
// import axiosInstance from './axiosInstance';
// import Footer from '../components/Shared/Footer/Footer';
// import Header from '../components/Shared/Headers/Header';
// import { useTranslation } from 'react-i18next'; // Import useTranslation

// const socket = io('/', {
//     reconnection: true
// });

// const BlogHome = () => {
//     const { t } = useTranslation(); // Use translation hook
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [postAddLike, setPostAddLike] = useState([]);
//     const [postRemoveLike, setPostRemoveLike] = useState([]);

//     const showPosts = async () => {
//         setLoading(true);
//         try {
//             const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/posts/show`);
//             setPosts(data.posts);
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         showPosts();
//     }, []);

//     useEffect(() => {
//         socket.on('add-like', (newPosts) => {
//             setPostAddLike(newPosts);
//             setPostRemoveLike([]);
//         });
//         socket.on('remove-like', (newPosts) => {
//             setPostRemoveLike(newPosts);
//             setPostAddLike([]);
//         });
//     }, []);
   
//     let uiPosts = postAddLike.length > 0 ? postAddLike : postRemoveLike.length > 0 ? postRemoveLike : posts;

//     return (
//         <div>
//             <Header />
//             <div className="container mx-auto py-10">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                     {loading ? (
//                         <Loader />
//                     ) : (
//                         uiPosts.map((post, index) => (
//                             <div key={index} className="border-1 border-green-100 overflow-hidden rounded-lg shadow-lg">
//                                 <PostCard
//                                     id={post._id}
//                                     title={post.title}
//                                     content={post.content}
//                                     image={post.image ? post.image.url : ''}
//                                     subheader={moment(post.createdAt).format('MMMM DD, YYYY')}
//                                     comments={post.comments.length}
//                                     likes={post.likes.length}
//                                     likesId={post.likes}
//                                     showPosts={showPosts}
//                                 />
//                             </div>
//                         ))
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default BlogHome;



import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import moment from 'moment';
import Loader from '../components/Loader';
import { io } from 'socket.io-client';
import axiosInstance from './axiosInstance';
import Footer from '../components/Shared/Footer/Footer';
import Header from '../components/Shared/Headers/Header';
import { useTranslation } from 'react-i18next';

const socket = io('/', { reconnection: true });

const BlogHome = () => {
    const { t, i18n } = useTranslation(); // Use i18n to get the current language
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [postAddLike, setPostAddLike] = useState([]);
    const [postRemoveLike, setPostRemoveLike] = useState([]);

    const showPosts = async () => {
        setLoading(true);
        try {
            const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/posts/show`);
            setPosts(data.posts);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        showPosts();
    }, []);

    useEffect(() => {
        socket.on('add-like', (newPosts) => {
            setPostAddLike(newPosts);
            setPostRemoveLike([]);
        });
        socket.on('remove-like', (newPosts) => {
            setPostRemoveLike(newPosts);
            setPostAddLike([]);
        });
    }, []);

    let uiPosts = postAddLike.length > 0 ? postAddLike : postRemoveLike.length > 0 ? postRemoveLike : posts;

    return (
        <div>
            <Header />
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {loading ? (
                        <Loader />
                    ) : (
                        uiPosts.map((post, index) => (
                            <div key={index} className="border-1 border-green-100 overflow-hidden rounded-lg shadow-lg">
                                <PostCard
                                    id={post._id}
                                    // Access title and content based on current language
                                    title={post.title[i18n.language]}
                                    content={post.content[i18n.language]}
                                    image={post.image ? post.image.url : ''}
                                    subheader={moment(post.createdAt).format('MMMM DD, YYYY')}
                                    comments={post.comments.length}
                                    likes={post.likes.length}
                                    likesId={post.likes}
                                    showPosts={showPosts}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BlogHome;

