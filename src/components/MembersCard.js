import "./ProductCard.css";

import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const MembersCard = ({
  id,
  title,
  image,
  designation,
  article,

  showMembers,
}) => {
  const { userInfo } = useSelector((state) => state.signIn);

  console.log(title);
  console.log(designation);
  console.log(article);

  return (
         <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg relative group">
        {/* <img className="w-full h-56" src={image} alt="name" /> */}

        <Link to={`/member/${id}`}>
        <img className="w-full h-56" src={image} alt="name" />
            </Link>

        {/* Social icons container */}
        <div className="absolute bottom-0 right-2 p-2 hidden group-hover:flex flex-col bg-green-700 space-y-2 rounded-r-lg">
          <a
            href="https://www.facebook.com"
            className="inline-block text-white "
            aria-label="Facebook"
          >
           <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://twitter.com"
            className="inline-block  text-white"
            aria-label="Twitter"
          >
           <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.instagram.com"
            className="inline-block  text-white"
            aria-label="Instagram"
          >
           <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"></div>
        <p className="text-white text-base">{title}</p>
        <p className="text-white text-base">{designation}</p>
        {/* <p className="text-white text-base">{article}</p> */}
      </div>
      
    </div>
  );
};

export default MembersCard;
