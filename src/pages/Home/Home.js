import React from "react";
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

const Home = () => {
  const navigate = useNavigate();

  const handleScheduleMeeting = () => {
    navigate('/contact');
  };
  
  return (
    <>
     
      <MiddleHeader />
      <Header />
      <Carousel />
      <ProjectCount />

      <div >
        <h3 className='text-3xl text-center my-10 font-bold' >Our Projects</h3>
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
            className="bg-green-700 text-white fw-bold px-4 py-2 rounded text-xl "
          >
            All Projects{" "}
            <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
          </Link>
        </div>
      </div>
      <Videos />

      <ServiceCard />
      <OurClients />
      
      <Faq />
      {/* meeting schedule */}
      <div className=" flex items-center justify-center bg-white py-10">
      <button
        className="bg-gradient-to-r from-green-500 to-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
        onClick={handleScheduleMeeting}
      >
       <FontAwesomeIcon icon={faCalendarDays} className="pe-2 text-xl" /> Schedule a Meeting
      </button>
    </div>
      <Footer />
    </>
  );
};

export default Home;
