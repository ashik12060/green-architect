import React, { useEffect, useRef, useState } from "react";
import ProjectCount from "../../components/ProjectCount";
import SmallHeader from "../../components/Shared/Headers/SmallHeader";
import MiddleHeader from "../../components/Shared/Headers/MiddleHeader";
import Footer from "../../components/Shared/Footer/Footer";
import Faq from "../../components/Faq/Faq";
import Carousel from "../../components/Carousel/Carousel";
import Header from "../../components/Shared/Headers/Header";
import { ServiceCard } from "../../components/OurServices/ServiceCard";
import OurProjects from "../../components/ProjectsComp/OurProjects";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import Videos from "../../components/Videos/Videos";
import OurClients from "../../components/OurClients/OurClients";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { send } from "@emailjs/browser";
import { toast } from "react-toastify";
import "aos/dist/aos.css";

import { motion } from "framer-motion";
import Animation from "../../Animation";
import Aos from "aos";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectsCarousel from "../../components/ProjectsComp/ProjectsCarousel";
const Home = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
  const { t } = useTranslation("Home");
  // const { t } = useTranslation("contact");
  // Show the popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // email

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessages] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    send(
      "service_zn8v5ha",
      "template_1abfnbw",
      {
        user_name: name,
        user_email: email,
        user_phone: phone,
        user_message: message,
      },
      "SV6akA8uF1spLD8Oj"
    )
      .then((result) => {
        toast.success("Email sent successfully!");
        console.log(result.text);
        // Clear the form
        setName("");
        setEmail("");
        setPhone("");
        setMessages("");
      })
      .catch((error) => {
        toast.error("Failed to send email.");
        console.log(error.text);
      });
  };

  const handleScheduleMeeting = () => {
    navigate("/contact");
  };

  const { isDarkMode } = useTheme();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const textVariants = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: .5,
        duration: 2.5,
      },
    },
  };


  const linkVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 2.5,
      },
    },
  };

  const buttonVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 1.8,
      },
    },
  };
  return (
    <>
      <MiddleHeader />
      <Header />
      <Carousel />
      <ProjectCount />

      <div
        className={`text-center my-10 font-bold  ${
          isDarkMode ? " text-white" : "text-black"
        }`}
      >
        <h3
          className={`text-3xl  text-center my-10 font-bold  ${
            isDarkMode ? " text-white" : "text-black"
          }`}
        >
          {/* <span
            className={`text-center my-10 font-bold  ${
              isDarkMode
                ? " text-white border-b-4 border-green-700"
                : "text-black border-b-4 border-green-700"
            }`}
            data-aos="fade-right"
          >
            {t("projects")}
          </span> */}

          <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }} // Runs animation every time it scrolls into view
      variants={textVariants}
    >
      <span
        className={`text-center my-10 font-bold ${
          isDarkMode
            ? "text-white border-b-4 border-green-700"
            : "text-black border-b-4 border-green-700"
        }`}
      >
        {t("projects")}
      </span>
    </motion.div>

        </h3>
              <ProjectsCarousel />
        
     

        {/* <div className="flex items-center justify-center gap-2 my-10">
          <a
            href="tel:+8801711991792"
            className="text-green-500 hover:text-green-700"
          >
            <i className="fa-solid fa-phone"></i>
          </a>
          <Link
            to="/projects"
            className={`fw-bold px-4 py-2 rounded text-xl ${
              isDarkMode ? " text-white bg-gray-800" : "border-2  border-green-700 text-green-700"
            }`}
          >
            {t("allProjects")}
            <FontAwesomeIcon
              className="ps-2 animate-pulse"
              icon={faAnglesRight}
            />

          </Link>
        </div> */}
<div className="flex items-center justify-center gap-2 my-10">
      {/* Phone Icon */}
      <motion.a
        href="tel:+8801711991792"
        className="text-green-500 hover:text-green-700"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
        variants={linkVariants}
      >
       
      </motion.a>

      {/* "All Projects" Link */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
        variants={linkVariants}
      >
        <Link
          to="/projects"
          className={`fw-bold px-4 py-2 rounded text-xl ${
            isDarkMode
              ? "text-white bg-gray-800"
              : "border-2 border-green-700 text-green-700"
          }`}
        >
          {t("allProjects")}
          <FontAwesomeIcon className="ps-2 animate-pulse" icon={faAnglesRight} />
        </Link>
      </motion.div>
    </div>



      </div>

      <Videos />

      <ServiceCard />
      <OurClients />

      <Faq />

      {/* meeting schedule */}
      <div
        data-aos="fade-right"
        className={`flex items-center justify-center py-10 ${
          isDarkMode ? "bg-black" : "bg-white"
        }`}
      >
        {/* <button
          className={` font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out  ${
            isDarkMode
              ? "bg-black bg-gradient-to-r from-green-700 to-emerald-900 text-white"
              : "bg-gradient-to-r from-green-500 to-emerald-700 text-white"
          }`}
          onClick={handleScheduleMeeting}
          data-aos="fade-right"
        >
          <FontAwesomeIcon icon={faCalendarDays} className="pe-2 text-xl" />{" "}
          {t("schedule_meeting")}
        </button> */}
        <motion.button
      className={`font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out ${
        isDarkMode
          ? "bg-black bg-gradient-to-r from-green-700 to-emerald-900 text-white"
          : "bg-gradient-to-r from-green-500 to-emerald-700 text-white"
      }`}
      onClick={handleScheduleMeeting}
      data-aos="fade-right"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={buttonVariants}
    >
      <FontAwesomeIcon icon={faCalendarDays} className="pe-2 text-xl" />
      {t("schedule_meeting")}
    </motion.button>
      </div>
      <Footer />

 {/* popup form */}
{showPopup && (
  <div className="fixed inset-0 flex items-start justify-end p-4 sm:p-8 z-50 animate__animated animate__fadeIn animate__faster">
    <div className="bg-gradient-to-b from-green-100 to-emerald-50 p-4 sm:p-6 lg:p-10 rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-sm md:max-w-sm transition-all transform scale-95 hover:scale-100 max-h-[90vh] overflow-y-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-6 text-center text-green-800">
        {t("popup_title")}
      </h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
        <div className="relative">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-green-700"
          >
            {t("yourName")}
          </label>
          <div className="relative mt-1">
            <input
              id="name"
              type="text"
              name="user_name"
              onChange={(event) => setName(event.target.value)}
              value={name}
              required
              placeholder={t("namePlaceholder")}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 ease-in-out shadow-sm"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-green-500">
              <i className="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div className="relative">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-green-700"
          >
            {t("yourEmail")}
          </label>
          <div className="relative mt-1">
            <input
              id="email"
              type="email"
              name="user_email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
              placeholder={t("emailPlaceholder")}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 ease-in-out shadow-sm"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-green-500">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div className="relative">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-green-700"
          >
            {t("yourPhoneNumber")}
          </label>
          <div className="relative mt-1">
            <input
              id="phone"
              type="tel"
              name="user_phone"
              onChange={(event) => setPhone(event.target.value)}
              value={phone}
              required
              placeholder={t("phonePlaceholder")}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 ease-in-out shadow-sm"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-green-500">
              <i className="fas fa-phone"></i>
            </span>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-green-700"
          >
            {t("projectDetails")}
          </label>
          <textarea
            onChange={(event) => setMessages(event.target.value)}
            value={message}
            id="message"
            name="user_message"
            rows="4"
            required
            placeholder={t("detailsPlaceholder")}
            className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-200 ease-in-out shadow-sm"
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
          

          <button
            type="submit"
            className="bg-gradient-to-r from-green-700 to-emerald-900 text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            {t("submitRequest")}
          </button>

          <button
            className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg hover:bg-red-700 transition duration-300"
            onClick={() => setShowPopup(false)}
          >
            {t("form.close")}
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </>
  );
};

export default Home;
