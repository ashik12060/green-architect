import "./ProductCard.css";

import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const MembersCard = ({
  id,
  title,
  image,
  designation,

  showMembers,
}) => {
  const { userInfo } = useSelector((state) => state.signIn);


console.log(title)
console.log(designation);

  return (
   
    <div>
    <div className="rounded-lg shadow-md bg-white p-4 text-center  gap-20">
      <div className="flex flex-col items-center "> {/* Added gap-4 for spacing */}
        <div className="-mt-16">
          <img src={image} alt={title} className="w-28 h-28 rounded-full" />
        </div>
        <h3 className="text-xl text-green-800 font-bold py-2">{title}</h3>
        <p className=" font-bold">{designation}</p>
      </div>
    </div>
  </div>
  

  );
};

export default MembersCard;
