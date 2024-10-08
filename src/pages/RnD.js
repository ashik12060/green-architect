import React, { useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import moment from "moment";
import Loader from "../components/Loader";
import { io } from "socket.io-client";
// import NavbarProducts from "../components/NavbarProducts";
import './Pro.css'
import axiosInstance from "./axiosInstance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import RndCard from "../components/RndCard";
import Header from "../components/Shared/Headers/Header";
import MiddleHeader from "../components/Shared/Headers/MiddleHeader";
import Footer from "../components/Shared/Footer/Footer";
import { useTheme } from "../context/ThemeContext";
// import axiosInstance from "./axiosInstance";
const socket = io("/", {
  reconnection: true,
});

const RnD = () => {
  const [rnds, setRnds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postAddLike, setPostAddLike] = useState([]);
  const [postRemoveLike, setPostRemoveLike] = useState([]);
  const [visibleRnds, setVisibleRnds] = useState(4); 

  const showMoreRnds = () => {
    setVisibleRnds(rnds.length);
  };
  const showRnds = async () => {
    setLoading(true);
    try {
      // ${process.env.REACT_APP_API_URL}
      // 
      const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/rnds/show`);
      setRnds(data.rnds);
      setLoading(false);
    } catch (error) {
    }
  };

  useEffect(() => {
    showRnds();
  }, []);

  useEffect(() => {
    socket.on("add-like", (newPosts) => {
      setPostAddLike(newPosts);
      setPostRemoveLike("");
    });
    socket.on("remove-like", (newPosts) => {
      setPostRemoveLike(newPosts);
      setPostAddLike("");
    });
  }, []);

  let uiPosts =
    postAddLike.length > 0
      ? postAddLike
      : postRemoveLike.length > 0
      ? postRemoveLike
      // : products;
      : rnds.slice(0, visibleRnds);


      const { isDarkMode } = useTheme();
  return (
    <>
    <MiddleHeader />
    <Header />
<div className={`min-h-screen my-8 ${isDarkMode ? ' text-white' : 'text-black'}`}>
        <div className="text-center pt-4">
          <h3>
            <span className="text-3xl font-bold">
              <span className={` ${isDarkMode ? ' text-white border-b-4 border-white' : 'text-black border-b-4 border-black'}`}>Research and Development</span>
            </span>
          </h3>
        </div>
        <div className="pt-3 pb-5 min-h-[83vh]">
          <div className="flex-grow mx-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-10 pt-6">
              {loading ? (
                <Loader />
              ) : (
                uiPosts.slice(0, visibleRnds).map((product, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                    <RndCard
                      image={product.image ? product.image.url : ""}
                      id={product._id}
                      title={product.title}
                      content={product.content}
                      subheader={moment(product.createdAt).format("MMMM DD, YYYY")}
                      comments={product.comments.length}
                      likes={product.likes.length}
                      likesId={product.likes}
                      showRnds={showRnds}
                    />
                  </div>
                ))
              )}
            </div>
            {rnds.length > 4 && visibleRnds < rnds.length && (
              <div className="text-center my-5">
                <button onClick={showMoreRnds} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                  See More <FontAwesomeIcon icon={faAnglesRight} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default RnD;
