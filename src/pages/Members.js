import React, { useEffect, useState } from "react";
import MembersCard from "../components/MembersCard";
import axiosInstance from "./axiosInstance";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";

const Members = () => {
  const { i18n } = useTranslation();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  

  const showMembers = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/members/show`
      );
      console.log("Fetched members:", data.members); // Check the structure here
      setMembers(data.members);
    } catch (error) {
      console.error("Error fetching members:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    showMembers();
  }, []);

  return (
    <div className="min-h-34">
      <div className="container mx-auto py-16 min-h-24">
        <div className="flex flex-wrap mx-10 gap-y-16">
          {loading ? (
            <Loader />
          ) : (
            members.map((member, index) => (
              <div
                className="px-2 my-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                key={index}
              >
                <MembersCard
                  image={member.image ? member.image.url : ""}
                  id={member._id}
                  title={member.title[i18n.language] || "Default Title"} // Fallback if key is missing
                  designation={
                    member.designation[i18n.language] || "Default Designation"
                  } // Fallback
                  article={
                    member.article
                      ? member.article[i18n.language]
                      : "Default Article"
                  } // Fallback
                />

               
              </div>
             
              // </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Members;
