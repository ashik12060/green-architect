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
  // const downloadProductAsPDF = () => {
  //   const doc = new jsPDF();

  //   // Set image size and position
  //   const imgWidth = 100;
  //   const imgHeight = 100;
  //   const imgMargin = 10;
  //   const imgX = (doc.internal.pageSize.width - imgWidth) / 2;
  //   let imgY = imgMargin;

  //   // Add image to the PDF
  //   doc.addImage(image, "JPEG", imgX, imgY, imgWidth, imgHeight);

  //   // Add product details
  //   let textY = imgY + imgHeight + imgMargin + 10;
  //   const textX = imgMargin;
  //   const maxWidth = doc.internal.pageSize.width - 2 * imgMargin;

  //   // Add product details to the PDF with padding
  //   if (title) {
  //     doc.setFont("helvetica", "bold");
  //     let titleLines = doc.splitTextToSize(`Product Title: ${title}`, maxWidth);
  //     doc.text(titleLines, textX, textY);
  //     doc.setFont("helvetica", "normal");
  //     textY = checkPageHeight(doc, textY, titleLines.length);
  //   }

  //   if (content) {
  //     doc.setFont("helvetica", "bold");
  //     let contentHeader = "Product Content:";
  //     let contentHeaderLines = doc.splitTextToSize(contentHeader, maxWidth);
  //     let contentLines = doc.splitTextToSize(content, maxWidth);
  //     doc.text(contentHeaderLines, textX, textY);
  //     doc.setFont("helvetica", "normal");
  //     textY = checkPageHeight(doc, textY, contentHeaderLines.length);
  //     doc.text(contentLines, textX, textY);
  //     textY = checkPageHeight(doc, textY, contentLines.length);
  //   }

    
  //   // Save the PDF with a file name if any content is available
  //   if (
  //     title ||
  //     content
  //     // feature1 ||
  //     // feature2 ||
  //     // feature3 ||
  //     // feature4 ||
  //     // feature5 ||
  //     // feature6 ||
  //     // feature7 ||
  //     // feature8 ||
  //     // feature9 ||
  //     // feature10 ||
  //     // techSpec1 ||
  //     // techSpec2 ||
  //     // techSpec3 ||
  //     // techSpec4 ||
  //     // techSpec5 ||
  //     // techSpec6 ||
  //     // techSpec7 ||
  //     // techSpec8 ||
  //     // techSpec9 ||
  //     // techSpec10 ||
  //     // techSpec11 ||
  //     // techSpec12
  //   ) {
  //     doc.save("product_details.pdf");
  //   }

  //   // Check if the text exceeds the page height and create a new page
  // };
  // const checkPageHeight = (doc, y, lines) => {
  //   let pageHeight = doc.internal.pageSize.height;
  //   let lineHeight = 10; // Assuming font size is 10
  //   if (y + lines * lineHeight > pageHeight - 10) {
  //     doc.addPage();
  //     return 10; // Reset to top of the page
  //   }
  //   return y + lines * lineHeight;
  // };

  // end pdf controller

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

  return (
    <>
    
      <Header />
     


<div className="bg-gray-100 flex justify-center pt-16 pb-16 min-h-screen">
  {loading ? (
    <Loader />
  ) : (
    <div className="container mx-auto bg-white shadow-md rounded-lg">
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
         <p className="mt-2 text-gray-700">{content}</p>
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
