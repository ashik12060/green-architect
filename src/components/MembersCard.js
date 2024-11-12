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
    //   <div>
    //   <div className="rounded-lg shadow-md bg-white p-4 text-center  gap-20">
    //     <div className="flex flex-col items-center "> {/* Added gap-4 for spacing */}
    //       <div className="-mt-16">
    //         <img src={image} alt={title} className="w-28 h-28 rounded-full" />
    //       </div>
    //       <h3 className="text-xl text-green-800 font-bold py-2">{title}</h3>
    //       <p className=" font-bold">{designation}</p>
    //     </div>
    //   </div>
    // </div>

    

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
        <p className="text-white text-base">{article}</p>
      </div>
      
    </div>
  );
};

export default MembersCard;
