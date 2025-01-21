import React from "react";
import img from "../../assets/aboutus-bg.jpg";
import { useTranslation } from "react-i18next";

const CoverPhoto = () => {
  const { t } = useTranslation("AboutMain");
  return (
    <div>
      <div
        className="relative h-80 bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4"></div>
      </div>
    </div>
  );
};

export default CoverPhoto;
