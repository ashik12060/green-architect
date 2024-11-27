import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faMapLocationDot,
  faMobileScreenButton,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/green shelter.jpeg";
import { useTheme } from "../../../context/ThemeContext";
import { useTranslation } from "react-i18next";

function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useTranslation("Footer");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, phoneNumber, message });
  };

  const { isDarkMode } = useTheme();

  return (
    <footer
      className={`bg-gray-900 text-white py-8 ${
        isDarkMode ? "bg-gray-700" : "bg-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-evenly items-start gap-8">
          {/* Left Contact Section */}
          <div className="flex flex-col ">
            <div>
              <div className="flex flex-col lg:flex-row justify-evenly items-start gap-8">
                <div className="">
                  <img src={logo} className=" w-80 rounded h-28 " />

                  <div className="text-xl py-2">
                    <nav className="space-x-6">
                      <a href="/" className="hover:text-blue-300">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      <a href="/" className="hover:text-blue-300">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>

                      <a href="/" className="hover:text-blue-300">
                        <FontAwesomeIcon icon={faSquareInstagram} />
                      </a>

                      <a href="/" className="hover:text-blue-300">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                      <a href="/" className="hover:text-blue-300">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    </nav>
                  </div>

                  <h6 className="text-l">
                    Build Your Own World, Where Nature Meets Design
                  </h6>
                </div>

                {/* middle Contact Section */}
                <div className="lg:w-1/3">
                  <h5 className="font-bold text-xl mb-4">
                    {t("footer.contact.quickLinks")}
                  </h5>
                  <ul className="text-gray-400 space-y-2">
                    <li className="flex items-center gap-2">
                      <Link>{t("footer.contact.aboutUs")} </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <Link>{t("footer.contact.contact")}</Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <Link>{t("footer.contact.blog")}</Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <Link>{t("footer.contact.services")}</Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <Link>{t("footer.contact.products")}</Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <Link>{t("footer.contact.scheduleMeeting")}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              {/* <div className="py-8 text-center flex flex-col lg:flex-row justify-evenly items-start gap-8">
                <div className="p-6  bg-gray-800 shadow-lg rounded-lg lg:w-1/3 border border-gray-200 w-full h-50  hover:shadow-2xl transition-shadow duration-300 ease-in-out text-white">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <h6 className="text-lg font-semibold ">Dhaka Office</h6>
                  <p className="mt-2 ">
                    <i>
                      44/28 Lift 3B Meraj Tower Panthapath Somorita Hospital
                      Opposite.
                      <br />
                      {t("footer.contact.cell")}
                    </i>
                  </p>
                 
                    
                  
                </div>

                <div className="p-4  bg-gray-800 shadow-lg rounded-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out text-white lg:w-1/3 w-full h-50">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <h6 className="text-lg font-semibold ">Lakshmipur Office</h6>
                  <p className="mt-2 ">
                    <i>
                      {" "}
                      Jonota Automobiles 2nd Floor Uttar Temuhoni Lakshmipur
                      Sadar
                    </i>
                  </p>
                </div>

                <div className="p-4  bg-gray-800 shadow-lg rounded-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out text-white lg:w-1/3 w-full h-50">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <h6 className="text-lg font-semibold ">Denmark Office</h6>
                  <p className="mt-2">
                    <i> Divelshul 1, st 3, 6000 Kolding</i>
                  </p>
                </div>
              </div> */}

<div>
  <div className="py-8 text-center flex flex-col lg:flex-row justify-evenly items-start gap-8">
    <div className="p-6 bg-gray-800 shadow-lg rounded-lg lg:w-1/3 w-full h-full min-h-[200px] border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out text-white flex flex-col">
      <FontAwesomeIcon icon={faLocationDot} />
      <h6 className="text-lg font-semibold mt-4">Dhaka Office</h6>
      <p className="mt-2">
        <i>
          44/28 Lift 3B Meraj Tower Panthapath Somorita Hospital Opposite.
          <br />
          Call Now: {t("footer.contact.cell")}
        </i>
      </p>
    </div>

    <div className="p-6 bg-gray-800 shadow-lg rounded-lg lg:w-1/3 w-full h-full min-h-[210px] border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out text-white flex flex-col">
      <FontAwesomeIcon icon={faLocationDot} />
      <h6 className="text-lg font-semibold mt-4">Lakshmipur Office</h6>
      <p className="mt-2">
        <i>Jonota Automobiles 2nd Floor Uttar Temuhoni Lakshmipur Sadar
        <br />
        Call Now: {t("footer.contact.cell")}
        </i>
      </p>
    </div>

    <div className="p-6 bg-gray-800 shadow-lg rounded-lg lg:w-1/3 w-full h-full min-h-[210px] border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out text-white flex flex-col">
      <FontAwesomeIcon icon={faLocationDot} />
      <h6 className="text-lg font-semibold mt-4">Denmark Office</h6>
      <p className="mt-2">
        <i>Divelshul 1, st 3, 6000 Kolding
        <br />
        Call Now: {t("footer.contact.cell")}
        </i>
      </p>
    </div>
  </div>
</div>

            </div>
          </div>

          {/* form */}
          <div className="flex flex-col lg:w-1/3 w-full">
            <h5 className="font-bold text-xl mb-4">
              {t("footer.form.getInTouch")}
            </h5>
            <form className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-400">
                  {t("footer.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  className="border border-gray-600 bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-400">
                  {t("footer.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-600 bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-gray-400">
                  {t("footer.form.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="border border-gray-600 bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-gray-400">
                  {t("footer.form.message")}
                </label>
                <textarea
                  id="message"
                  className="border border-gray-600 bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  rows="4"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-emerald-700 text-white font-bold py-2 px-4 rounded-md w-full hover:bg-green-600 transition duration-300"
              >
                {t("footer.form.submit")}
              </button>
            </form>
          </div>
        </div>

        {/* Newsletter Section */}

        <div className="mt-8 border-t border-gray-700 pt-4 flex  justify-evenly">
          <div>
            <h5 className="font-bold text-xl mb-4">
              {t("footer.newsletter.subscribe")}
            </h5>
            <p className="text-gray-400 mb-4">
              {t("footer.newsletter.description")}
            </p>
          </div>
          <div>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder={t("footer.newsletter.namePlaceholder")}
                className="bg-gray-800 text-white rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder={t("footer.newsletter.emailPlaceholder")}
                className="bg-gray-800 text-white rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-green-500">
                {t("footer.newsletter.connectButton")}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Green Shelter Design & Development.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
