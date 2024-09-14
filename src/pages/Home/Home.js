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
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <SmallHeader />
      <MiddleHeader />
      <Header />
      <Carousel />
      <ProjectCount />

      <div>
        <OurProjects />

        <div className="flex items-center justify-center gap-2 mt-4">
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

      <ServiceCard />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
