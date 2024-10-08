// import React from "react";
// import ProjectCount from "../../components/ProjectCount";
// import SmallHeader from "../../components/Shared/Headers/SmallHeader";
// import MiddleHeader from "../../components/Shared/Headers/MiddleHeader";
// import Footer from "../../components/Shared/Footer/Footer";
// import Faq from "../../components/Faq/Faq";
// import Carousel from "../../components/Carousel/Carousel";
// import Header from "../../components/Shared/Headers/Header";
// import { ServiceCard } from "../../components/OurServices/ServiceCard";
// import OurProjects from "../../components/ProjectsComp/OurProjects";
// import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
// import Videos from "../../components/Videos/Videos";
// import OurClients from "../../components/OurClients/OurClients";
// import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
// import { useTheme } from "../../context/ThemeContext";

// const Home = () => {
//   const navigate = useNavigate();

//   const handleScheduleMeeting = () => {
//     navigate('/contact');
//   };

//   const { isDarkMode } = useTheme();

//   return (
//     <>

//       <MiddleHeader />
//       <Header />
//       <Carousel />
//       <ProjectCount />

//       <div  className={`text-center my-10 font-bold  ${isDarkMode ? ' text-white' : 'text-black'}`}>
//         <h3 className={`text-3xl  text-center my-10 font-bold  ${isDarkMode ? ' text-white' : 'text-black'}`}><span className={`text-center my-10 font-bold  ${isDarkMode ? ' text-white border-b-4 border-white' : 'text-black border-b-4 border-black'}`}>Our Projects</span></h3>
//         <OurProjects />

//         <div className="flex items-center justify-center gap-2 my-10">
//           <a
//             href="tel:+8801711991792"
//             className="text-green-500 hover:text-green-700"
//           >
//             <i className="fa-solid fa-phone"></i>
//           </a>
//           <Link
//             to="/projects"
//             className={`fw-bold px-4 py-2 rounded text-xl ${isDarkMode ? ' text-white bg-gray-800' : 'bg-green-800 text-white'}`}
//           >
//             All Projects{" "}
//             <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
//           </Link>
//         </div>
//       </div>
//       <Videos />

//       <ServiceCard />
//       <OurClients />

//       <Faq />
//       {/* meeting schedule */}
//       <div className={`flex items-center justify-center py-10 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
//       <button
//         className={` font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out  ${isDarkMode ? 'bg-black bg-gradient-to-r from-green-700 to-emerald-900 text-white' : 'bg-gradient-to-r from-green-500 to-emerald-700 text-white'}`}
//         onClick={handleScheduleMeeting}
//       >
//        <FontAwesomeIcon icon={faCalendarDays} className="pe-2 text-xl" /> Schedule a Meeting
//       </button>
//     </div>
//       <Footer />
//     </>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
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
import {
  faAnglesRight,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import Videos from "../../components/Videos/Videos";
import OurClients from "../../components/OurClients/OurClients";
import { useTheme } from "../../context/ThemeContext";

// const Home = () => {
//   const navigate = useNavigate();
//   const { isDarkMode } = useTheme();
//   const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

//   // Show the popup after 5 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowPopup(true);
//     }, 5000);

//     return () => clearTimeout(timer); // Cleanup timer
//   }, []);

//   const handleScheduleMeeting = () => {
//     navigate('/contact');
//   };

//   return (
//     <>
//       <MiddleHeader />
//       <Header />
//       <Carousel />
//       <ProjectCount />

//       <div className={`text-center my-10 font-bold ${isDarkMode ? ' text-white' : 'text-black'}`}>
//         <h3 className={`text-3xl text-center my-10 font-bold ${isDarkMode ? ' text-white' : 'text-black'}`}>
//           <span className={`text-center my-10 font-bold ${isDarkMode ? ' text-white border-b-4 border-white' : 'text-black border-b-4 border-black'}`}>
//             Our Projects
//           </span>
//         </h3>
//         <OurProjects />

//         <div className="flex items-center justify-center gap-2 my-10">
//           <a href="tel:+8801711991792" className="text-green-500 hover:text-green-700">
//             <i className="fa-solid fa-phone"></i>
//           </a>
//           <Link to="/projects" className={`fw-bold px-4 py-2 rounded text-xl ${isDarkMode ? ' text-white bg-gray-800' : 'bg-green-800 text-white'}`}>
//             All Projects <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
//           </Link>
//         </div>
//       </div>

//       <Videos />
//       <ServiceCard />
//       <OurClients />
//       <Faq />

//       {/* meeting schedule */}
//       <div className={`flex items-center justify-center py-10 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
//         <button
//           className={`font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out ${isDarkMode ? 'bg-black bg-gradient-to-r from-green-700 to-emerald-900 text-white' : 'bg-gradient-to-r from-green-500 to-emerald-700 text-white'}`}
//           onClick={handleScheduleMeeting}
//         >
//           <FontAwesomeIcon icon={faCalendarDays} className="pe-2 text-xl" /> Schedule a Meeting
//         </button>
//       </div>

//       <Footer />

//       {/* Popup Form */}
// {showPopup && (
//   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
//     <div className="bg-white p-6 rounded shadow-lg w-96">
//       <h2 className="text-xl font-bold mb-4">Fill out this form</h2>
//       <form>
//         <label className="block mb-2">
//           Name:
//           <input type="text" name="name" className="w-full p-2 border rounded" />
//         </label>
//         <label className="block mb-2">
//           Email:
//           <input type="email" name="email" className="w-full p-2 border rounded" />
//         </label>
//         <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
//       </form>
//       <button
//         className="mt-4 text-red-500 hover:text-red-700"
//         onClick={() => setShowPopup(false)}
//       >
//         Close
//       </button>
//     </div>
//   </div>
// )}

//     </>
//   );
// };

const Home = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleScheduleMeeting = () => {
    navigate("/contact");
  };

  return (
    <>
      <MiddleHeader />
      <Header />
      <Carousel />
      <ProjectCount />
      <div
        className={`text-center my-10 font-bold ${
          isDarkMode ? " text-white" : "text-black"
        }`}
      >
        <h3
          className={`text-3xl text-center my-10 font-bold ${
            isDarkMode ? " text-white" : "text-black"
          }`}
        >
          <span
            className={`text-center my-10 font-bold ${
              isDarkMode
                ? " text-white border-b-4 border-white"
                : "text-black border-b-4 border-black"
            }`}
          >
            Our Projects
          </span>
        </h3>
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
            className={`fw-bold px-4 py-2 rounded text-xl ${
              isDarkMode ? " text-white bg-gray-800" : "bg-green-800 text-white"
            }`}
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
      {/* Meeting Schedule */}
      <div
        className={`flex items-center justify-center py-10 ${
          isDarkMode ? "bg-black" : "bg-white"
        }`}
      >
        <button
          className={`font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out ${
            isDarkMode
              ? "bg-black bg-gradient-to-r from-green-700 to-emerald-900 text-white"
              : "bg-gradient-to-r from-green-500 to-emerald-700 text-white"
          }`}
          onClick={handleScheduleMeeting}
        >
          <FontAwesomeIcon icon={faCalendarDays} className="pe-2 text-xl" />{" "}
          Schedule a Meeting
        </button>
      </div>
      <Footer />

      {/* Popup Form */}
      {showPopup && (
        
        <div className="fixed inset-0 flex items-center justify-center">
  <div className="bg-white p-8 rounded-lg shadow-lg w-96 transition-transform transform hover:scale-105">
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Fill Out This Form</h2>
    <form>
      <label className="block mb-4">
        <span className="text-gray-700">Name:</span>
        <input
          type="text"
          name="name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-200"
          placeholder="Enter your name"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Email:</span>
        <input
          type="email"
          name="email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-200"
          placeholder="Enter your email"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Message:</span>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-200"
          placeholder="Type your message"
        ></textarea>
      </label>
      <div className="flex justify-between items-center mt-6">
        <button
          type="submit"
          className="bg-gradient-to-r from-green-500 to-green-700 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          Submit
        </button>
        <button
          className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          onClick={() => setShowPopup(false)}
        >
          Close
        </button>
      </div>
    </form>
  </div>
</div>

      )}
    </>
  );
};

export default Home;

// export default Home;
