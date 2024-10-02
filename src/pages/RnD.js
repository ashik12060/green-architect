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

  return (
    <>
    <MiddleHeader />
    <Header />
      <Box sx={{ bgColor: "#fafafa", minHeight: "100vh" }}>
       

        <div className='text-center mt-3  '>
      <h3><span  className='text-3xl font-bold '><span className="border-b-4 border-black">Research and Development</span></span></h3>
    </div>
        <Container sx={{ pt: 3, pb: 5, minHeight: "83vh" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 2, lg:1 }}>
              {loading ? (
                <Loader />
              ) : (
                // uiPosts.map((product, index) => (
                  uiPosts.slice(0, visibleRnds).map((product, index) => (

                  <Grid item xs={12} sm={4} md={4} lg={3} key={index}>
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
                  </Grid>
                ))
              )}
            </Grid>
            {rnds.length > 4 && visibleRnds < rnds.length && (
        <div className="text-center my-5">
          <button onClick={showMoreRnds} className="see-more-button">
            See More <FontAwesomeIcon icon={faAnglesRight} /> 
          </button>
        </div>
      )}
          </Box>
          
        </Container>
      </Box>
      <Footer />
    </>
  );
};
export default RnD;
