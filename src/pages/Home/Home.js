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
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import Videos from "../../components/Videos/Videos";
import OurClients from "../../components/OurClients/OurClients";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { send } from "@emailjs/browser";
import { toast } from "react-toastify";

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
          <span
            className={`text-center my-10 font-bold  ${
              isDarkMode
                ? " text-white border-b-4 border-white"
                : "text-black border-b-4 border-black"
            }`}
          >
            {t("projects")}
          </span>
        </h3>
        <OurProjects />

        <div className="flex items-center justify-center gap-2 my-10">
          <a
            href="tel:+8801711991792"
            className="text-green-500 hover:text-green-700"
          >
            <i className="fa-solid fa-phone"></i>
          </a>
          <Link
            to="/projects"
            className={`fw-bold px-4 py-2 rounded text-xl ${
              isDarkMode ? " text-white bg-gray-800" : "bg-green-800 text-white"
            }`}
          >
            {t("allProjects")}
            <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
          </Link>
        </div>
      </div>
      <Videos />

      <ServiceCard />
      <OurClients />

      <Faq />
      {/* meeting schedule */}
      <div
        className={`flex items-center justify-center py-10 ${
          isDarkMode ? "bg-black" : "bg-white"
        }`}
      >
        <button
          className={` font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out  ${
            isDarkMode
              ? "bg-black bg-gradient-to-r from-green-700 to-emerald-900 text-white"
              : "bg-gradient-to-r from-green-500 to-emerald-700 text-white"
          }`}
          onClick={handleScheduleMeeting}
        >
          <FontAwesomeIcon icon={faCalendarDays} className="pe-2 text-xl" />{" "}
          {t("schedule_meeting")}
        </button>
      </div>
      <Footer />

      {/* Popup Form */}
      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-8">
        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg w-full max-w-md transition-transform transform hover:scale-105 max-h-[90vh] overflow-y-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-800">
            {t("popup_title")}
          </h2>
      
          <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                {t("yourName")}
              </label>
              <input
                id="name"
                type="text"
                name="user_name"
                onChange={(event) => setName(event.target.value)}
                value={name}
                required
                placeholder={t("namePlaceholder")}
                className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
      
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                {t("yourEmail")}
              </label>
              <input
                id="email"
                type="email"
                name="user_email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                required
                placeholder={t("emailPlaceholder")}
                className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
      
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                {t("yourPhoneNumber")}
              </label>
              <input
                id="phone"
                type="tel"
                name="user_phone"
                onChange={(event) => setPhone(event.target.value)}
                value={phone}
                required
                placeholder={t("phonePlaceholder")}
                className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
      
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
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
                className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
              ></textarea>
            </div>
      
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-full sm:w-auto"
                onClick={() => setShowPopup(false)}
              >
                {t("form.close")}
              </button>
      
              <button
                type="submit"
                className="bg-gradient-to-r from-green-700 to-emerald-900 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-full sm:w-auto"
              >
                {t("submitRequest")}
              </button>
            </div>
          </form>
        </div>
      </div>
      
        // <div className="fixed inset-0 flex items-center justify-center">
        //   <div className="bg-white p-8 rounded-lg shadow-lg w-96 transition-transform transform hover:scale-105">
        //     <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        //       {t("popup_title")}
        //     </h2>

        //     <form ref={form} onSubmit={sendEmail} className="space-y-6">
        //       <div>
        //         <label htmlFor="name" className="block text-sm font-medium ">
        //           {t("yourName")}
        //         </label>
        //         <input
        //           id="name"
        //           type="text"
        //           name="user_name"
        //           onChange={(event) => setName(event.target.value)}
        //           value={name}
        //           required
        //           placeholder={t("namePlaceholder")}
        //           className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
        //         />
        //       </div>

        //       <div>
        //         <label htmlFor="email" className="block text-sm font-medium ">
        //           {t("yourEmail")}
        //         </label>
        //         <input
        //           id="email"
        //           type="email"
        //           name="user_email"
        //           onChange={(event) => setEmail(event.target.value)}
        //           value={email}
        //           required
        //           placeholder={t("emailPlaceholder")}
        //           className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
        //         />
        //       </div>
        //       <div>
        //         <label htmlFor="number" className="block text-sm font-medium ">
        //           {t("yourPhoneNumber")}
        //         </label>
        //         <input
        //           id="phone"
        //           type="number"
        //           name="user_phone"
        //           onChange={(event) => setPhone(event.target.value)}
        //           value={phone}
        //           required
        //           // type="number"
        //           placeholder={t("phonePlaceholder")}
        //           // id="number"
        //           className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
        //         />
        //       </div>

        //       <div>
        //         <label
        //           htmlFor="projectDetails"
        //           className="block text-sm font-medium "
        //         >
        //           {t("projectDetails")}
        //         </label>
        //         <textarea
        //           onChange={(event) => setMessages(event.target.value)}
        //           value={message}
        //           id="message"
        //           name="user_message"
        //           rows="5"
        //           required
        //           placeholder={t("detailsPlaceholder")}
        //           className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
        //         ></textarea>
        //       </div>
        //       <div className="flex justify-between items-center mt-6">
        //         <button
        //           className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        //           onClick={() => setShowPopup(false)}
        //         >
        //           {t("form.close")}
        //         </button>

        //         <button
        //           type="submit"
        //           // className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        //           className="bg-gradient-to-r bg-green-700 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        //         >
        //           {t("submitRequest")}
        //         </button>
        //       </div>
        //     </form>
        //   </div>
        // </div>
      )}
    </>
  );
};

export default Home;
