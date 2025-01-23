import React, { useEffect, useState } from "react";
import { Grid, Button } from "@mui/material";
import moment from "moment";
import Loader from "../components/Loader";
import { io } from "socket.io-client";
import RndCard from "../components/RndCard";
import Header from "../components/Shared/Headers/Header";
import MiddleHeader from "../components/Shared/Headers/MiddleHeader";
import Footer from "../components/Shared/Footer/Footer";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "./axiosInstance";
import "./Pro.css";

const socket = io("/", {
  reconnection: true,
});

const RnD = () => {
  const [rnds, setRnds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postAddLike, setPostAddLike] = useState([]);
  const [postRemoveLike, setPostRemoveLike] = useState([]);
  const [visibleRnds, setVisibleRnds] = useState(4);
  const { i18n } = useTranslation();
  const { t } = useTranslation("Home");
  const { isDarkMode } = useTheme();

  const showMoreRnds = () => {
    setVisibleRnds(rnds.length);
  };

  const showRnds = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/rnds/show`
      );
      setRnds(data.rnds);
      setLoading(false);
    } catch (error) {}
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
      : rnds;

  return (
    <>
      <MiddleHeader />
      <Header />
      <div
        className={`min-h-screen  my-8 px-4 sm:px-6 lg:px-8 ${
          isDarkMode ? " text-white" : "text-black"
        }`}
      >
        <div className="text-center  pt-4">
          <h3>
            <span className="text-3xl font-bold">
              <span
                className={`${
                  isDarkMode
                    ? " text-white border-b-4 border-white"
                    : "text-black border-b-4 border-black"
                }`}
              >
                {t('ResearchDevelopment')}
              </span>
            </span>
          </h3>
        </div>
        <div className="pt-6 pb-10 mx-3 min-h-[83vh] flex  flex-col">
          <div className="mx-auto max-w-7xl flex-grow">
            {loading ? (
              <Loader />
            ) : (
              <Grid container spacing={4}>
                {uiPosts.slice(0, visibleRnds).map((product, index) => (
                  <Grid item xs={12} sm={6} md={6} key={index} >
                    <div className="transform transition-all duration-300 rounded-lg overflow-hidden shadow-xl bg-white dark:bg-gray-800">
                      <RndCard
                        image={product.image ? product.image.url : ""}
                        id={product._id}
                        title={product.title?.[i18n.language] || "Title not available"}
                        content={product.content?.[i18n.language] || "Content not available"}
                        subheader={moment(product.createdAt).format("MMMM DD, YYYY")}
                        comments={product.comments.length}
                        likes={product.likes.length}
                        likesId={product.likes}
                        showRnds={showRnds}
                      />
                    </div>
                  </Grid>
                ))}
              </Grid>
            )}
          </div>

          {rnds.length > 4 && visibleRnds < rnds.length && (
            <div className="text-center my-5 mt-auto">
              <Button
                onClick={showMoreRnds}
                variant="contained"
                color="primary"
                size="large"
                className="flex items-center justify-center space-x-2"
              >
                <span>{t('SeeMore')}</span>
                <FontAwesomeIcon icon={faAnglesRight} />
              </Button>
            </div>
          )}
        </div>
      </div>

     

      <Footer />
    </>
  );
};

export default RnD;
