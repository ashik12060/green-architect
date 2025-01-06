import React, { useRef, useState } from "react";
import backgroundImage from "../../assets/architect2.jpg";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { send } from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Lottie from "lottie-react";
import contactLotti from './contact-lottie.json'

function ContactUs() {
  const { t } = useTranslation("contact");
  const { isDarkMode } = useTheme();

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

  return (
    <div className={`${isDarkMode ? " text-white" : "text-black"}`}>
      {/* Hero Section with Architectural Image */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white">{t("getInTouch")}</h1>
          {/* <h1 className="text-4xl font-bold text-white">Get In Touch</h1> */}
        </div>
      </div>
      
      <div className="flex justify-center items-center text-xl mt-4">
  <Lottie className="lottiContact text-xl w-1/4  border-2" animationData={contactLotti} />
</div>


      {/* Contact Information Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          
          <div>
            <h2
              className={`lg:text-3xl text-xl font-semibold mb-8  ${
                isDarkMode ? " text-white" : "text-black"
              }`}
            >
              {t("contactInfo")}
            </h2>

            <div className="space-y-8 p-6 rounded-lg shadow-lg">
              {/* Call Us */}
              <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-green-600">
                  {/* Phone Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 011.85-1.995L5 3h14a2 2 0 011.995 1.85L21 5v14a2 2 0 01-1.85 1.995L19 21H5a2 2 0 01-1.995-1.85L3 19V5zm4 3v6h6V8H7zm2 2h2v2H9v-2zm7 5v-3h2v5H9v-5h2v2h4v-2h2v5h-5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="lg:text-2xl text-xl font-bold text-gray-900">
                    {" "}
                    {t("callUs")}
                  </h3>
                  <p className="text-gray-900"> {t("phoneNumber")}</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-green-600">
                  {/* Email Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12v6M8 12v6m0-4a4 4 0 018 0v4m0-8a4 4 0 00-8 0v4m-2 8h12a2 2 0 002-2v-6a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2zm0-8h12V9a2 2 0 00-2-2H8a2 2 0 00-2 2v3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="lg:text-2xl text-xl font-bold text-gray-900">
                    {t("emailUs")}
                  </h3>
                  <p>
                    <a
                      href="mailto:info@architectcompany.com"
                      className=" text-gray-900 hover:text-green-600 hover:underline transition duration-200"
                    >
                      {t("emailAddress")}
                    </a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-green-600">
                  {/* Clock Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m-1 1a9 9 0 110-18 9 9 0 010 18z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="lg:text-2xl text-xlfont-bold text-gray-900">
                    {t("workingHours")}
                  </h3>
                  <p className="text-gray-900">{t("workingDays")}</p>
                  <p className="text-gray-900"> {t("fridayClosed")}</p>
                </div>
              </div>

              
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2
              className={`lg:text-3xl text-xl font-semibold mb-8  ${
                isDarkMode ? " text-white" : "text-black"
              }`}
            >
              {t("requestQuote")}
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium ">
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
                <label htmlFor="email" className="block text-sm font-medium ">
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
                <label htmlFor="number" className="block text-sm font-medium ">
                  {t("yourPhoneNumber")}
                </label>
                <input
                  id="phone"
                  type="number"
                  name="user_phone"
                  onChange={(event) => setPhone(event.target.value)}
                  value={phone}
                  required
                  // type="number"
                  placeholder={t("phonePlaceholder")}
                  // id="number"
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="projectDetails"
                  className="block text-sm font-medium "
                >
                  {t("projectDetails")}
                </label>
                <textarea
                  onChange={(event) => setMessages(event.target.value)}
                  value={message}
                  id="message"
                  name="user_message"
                  rows="5"
                  required
                  placeholder={t("detailsPlaceholder")}
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                {t("submitRequest")}
              </button>
            </form>
          </div>
        </div>

        {/* Our Office */}
        <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="my-5">
            <h3 className="text-2xl text-center font-bold text-gray-900">
              {t("ourOffice")}
            </h3>
            {/* <p className="text-gray-900">{t("officeAddress")}</p> */}

            <div className="py-8 text-center flex flex-col lg:flex-row justify-evenly items-start gap-8">
              <div className="p-4  bg-gray-800 shadow-lg rounded-lg lg:w-1/3 border border-gray-200 w-full h-40  hover:shadow-2xl transition-shadow duration-300 ease-in-out text-white">
                <FontAwesomeIcon icon={faLocationDot} />
                <h6 className="text-lg font-semibold ">{t("dhakaOffice")}</h6>
                <p className="mt-2 ">
                  <i>
                    {" "}
                    {t("officeLocation")}
                  </i>
                </p>
              </div>

              <div className="p-4  bg-gray-800 shadow-lg rounded-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out text-white lg:w-1/3 w-full h-40">
                <FontAwesomeIcon icon={faLocationDot} />
                <h6 className="text-lg font-semibold ">{t("lakshmipurOffice")}</h6>
                <p className="mt-2 ">
                  <i>
                    {t("lakshmipurLocation")}
                  </i>
                </p>
              </div>

              <div className="p-4  bg-gray-800 shadow-lg rounded-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out text-white lg:w-1/3 w-full h-40">
                <FontAwesomeIcon icon={faLocationDot} />
                <h6 className="text-lg font-semibold ">{t("denmarkOffice")}</h6>
                <p className="mt-2">
                  <i>{t("denmarkLocation")}</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className=" py-16">
        <div className="container mx-auto">
          <h2 className="lg:text-3xl text-xl font-semibold text-center mb-8">
            {t("findUs")}
          </h2>
          <div className="flex justify-center">
            <iframe
              title="Google Map"
              className="w-full h-80 md:w-2/3 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8687100948728!2d90.38224757468046!3d23.7520607887138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9001b753d89%3A0xd959003a0f8022f2!2sGreen%20Shelter%20Design%20%26%20Development!5e0!3m2!1sen!2sbd!4v1731956414341!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
            ></iframe>


          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
