import Card from "@mui/material/Card";
import React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";
import axios, { Axios } from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";
// import NavbarProducts from "../components/NavbarProducts";
import { jsPDF } from "jspdf";
import logo from "../assets/23338.jpg";
import axiosInstance from "./axiosInstance";
import "./Pro.css";
import Header from "../components/Shared/Headers/Header";
import Footer from "../components/Shared/Footer/Footer";
import { useTheme } from "../context/ThemeContext";
// const socket = io("/", {
//   reconnection: true,
// });

const renderUnorderedList = (items) => {
  return (
    <>
      <ul>
        {items
          .filter((item) => item) // Filter out empty or falsy values
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </>
  );
};

const SingleRnd = () => {
  
  const { userInfo } = useSelector((state) => state.signIn);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  const [image, setImage] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  //fetch single post
  const displaySingleRnd = async () => {
    setLoading(true);
    try {
      //
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/rnd/${id}`
      );
      setTitle(data.rnd.title);
      setContent(data.rnd.content);
      
      setImage(data.rnd.image.url);
      setCreatedAt(data.rnd.createdAt);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    displaySingleRnd();
  }, []);

  const sanitizeHTML = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  const { isDarkMode } = useTheme();

  return (
    <>
    
      <Header />
     


<div className={` flex justify-center pt-16 pb-16 min-h-screen ${isDarkMode ? ' text-white bg-black' : 'bg-gray-100'}`}>
  {loading ? (
    <Loader />
  ) : (
    <div className={`container mx-auto ${isDarkMode ? ' text-white bg-black  shadow-md rounded-lg shadow-gray-700' : 'bg-gray-100  shadow-md rounded-lg'}`}>
      <div className="flex flex-col md:flex-row lg:flex-row">
        <div className="md:w-1/3 lg:w-1/2 p-4">
          <img
            src={image}
            className="img-fluid pt-2 border rounded-lg"
            alt="name"
          />
         
        </div>
        <div className="ps-4 lg:w-2/3" >
         <h2 className="text-xl font-bold mt-4">{title}</h2>
         <p className="mt-2 ">{content}</p>
         </div>
      
      </div>
    </div>
  )}
</div>
<Footer />

    </>
  );
};

export default SingleRnd;
