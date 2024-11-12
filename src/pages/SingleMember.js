import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import DOMPurify from "dompurify";
import axiosInstance from "./axiosInstance";
import Header from "../components/Shared/Headers/Header";
import Footer from "../components/Shared/Footer/Footer";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const SingleMember = () => {
  const [member, setMember] = useState({});
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();
  const { isDarkMode } = useTheme();
  const { id } = useParams();

  const displaySingleMember = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/member/${id}`
      );
      setMember(data.member);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    displaySingleMember();
  }, []);

  const sanitizeHTML = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  return (
    <>
      <Header />

      <div
        className={`flex justify-center pt-16 pb-16 min-h-screen ${
          isDarkMode ? "text-white bg-black" : "bg-gray-100"
        }`}
      >
        {loading ? (
          <Loader />
        ) : (
          <div
            className={`container mx-auto p-4 ${
              isDarkMode
                ? "text-white bg-black shadow-md rounded-lg shadow-gray-700"
                : "bg-gray-100 shadow-md rounded-lg"
            }`}
          >
            <div className="flex flex-col md:flex-row lg:flex-row">
              <div className="md:w-1/3 lg:w-1/2 p-4">
                <img
                  src={member.image ? member.image.url : ""}
                  className="img-fluid pt-2 border rounded-lg"
                  alt={member.title?.[i18n.language] || "Member Image"}
                />
              </div>
              <div className="ps-4 lg:w-2/3">
                <h2 className="text-xl font-bold mt-4">
                  {member.title?.[i18n.language] || "Title not available"}
                </h2>
                <p className="mt-2">
                  {member.designation?.[i18n.language] || "Designation not available"}
                </p>
                {member.article?.[i18n.language] && (
                  <div
                    className="mt-4 text-base"
                    dangerouslySetInnerHTML={sanitizeHTML(
                      member.article[i18n.language]
                    )}
                  ></div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default SingleMember;
