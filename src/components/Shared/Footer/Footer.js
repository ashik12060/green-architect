import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faMobileScreenButton,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo/green shelter.jpeg'
import { useTheme } from "../../../context/ThemeContext";

function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, phoneNumber, message });
  };

  
  const { isDarkMode } = useTheme();

  return (
    <footer className={`bg-gray-900 text-white py-8 ${isDarkMode ? 'bg-gray-700' : 'bg-black'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-evenly items-start gap-8">
          {/* Left Contact Section */}
          <div className="lg:w-1/3">
            <img src={logo} className="rounded-full w-24 h-24" />

            <div className="text-xl">
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
            <div className="py-4">
              <a href="/" className="hover:text-blue-300">
                <FontAwesomeIcon icon={faLocationDot} /> Panthapath, Kalabagan,
                Dhaka-1205
              </a>
            </div>
            <h5 className="text-xl">Design Your Own World</h5>
          </div>

          {/* middle Contact Section */}
          <div className="lg:w-1/3">
            <h5 className="font-bold text-xl mb-4">Quick Links</h5>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-center gap-2">
                <Link>About Us</Link>
              </li>
              <li className="flex items-center gap-2">
                
              <Link>Contact</Link>
              </li>
              <li className="flex items-center gap-2">
              <Link>Blog</Link>
              </li>
              <li className="flex items-center gap-2">
                <Link>Services</Link>
              </li>
              <li className="flex items-center gap-2">
                
              <Link>Products</Link>
              </li>
              <li className="flex items-center gap-2">
              <Link>Schedule a Meeting</Link>
              </li>
            </ul>
          </div>

          {/* Right Form Section */}
          {/* <div className="lg:w-1/3">
            <h5 className="font-bold text-xl mb-4">Get in Touch</h5>
            <form className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-400">
                  NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  className="border border-gray-600 bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-400">
                  EMAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-600 bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-gray-400">
                  CONTACT NUMBER *
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="border border-gray-600 bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-gray-400">
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  className="border border-gray-600 bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-emerald-700 text-white font-bold py-2 px-4 rounded-md w-full"
              >
                Submit
              </button>
            </form>
          </div> */}
          <div className="flex flex-col lg:w-1/3 w-full">
  <h5 className="font-bold text-xl mb-4">Get in Touch</h5>
  <form className="space-y-4">
    <div className="flex flex-col">
      <label htmlFor="name" className="text-gray-400">
        NAME *
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
        EMAIL *
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
        CONTACT NUMBER *
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
        MESSAGE *
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
      Submit
    </button>
  </form>
</div>


        </div>

        {/* Newsletter Section */}

        <div className="mt-8 border-t border-gray-700 pt-4 flex  justify-evenly">
          <div>
            <h5 className="font-bold text-xl mb-4">
              SUBSCRIBE TO OUR NEWSLETTER
            </h5>
            <p className="text-gray-400 mb-4">
              Get all the latest updates easily
            </p>
          </div>
          <div>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-800 text-white rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-800 text-white rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-green-500">
                Connect
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


// import {
//   faFacebook,
//   faLinkedin,
//   faSquareInstagram,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import {
//   faLocationDot,
//   faPhone,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from '../../../assets/logo/green shelter.jpeg';
// import { useTheme } from "../../../context/ThemeContext";
// import { useLanguage } from "../../../LanguageContext"; // Import the Language Context

// const translations = {
//   EN: {
//     location: "Panthapath, Kalabagan, Dhaka-1205",
//     quickLinks: "Quick Links",
//     aboutUs: "About Us",
//     contact: "Contact",
//     blog: "Blog",
//     services: "Services",
//     products: "Products",
//     scheduleMeeting: "Schedule a Meeting",
//     getInTouch: "Get in Touch",
//     subscribe: "SUBSCRIBE TO OUR NEWSLETTER",
//     updatesMessage: "Get all the latest updates easily",
//     submit: "Submit",
//     connect: "Connect",
//     rights: "All rights reserved."
//   },
//   BN: {
//     location: "পান্থপথ, কালাবাগান, ঢাকা-১২০৫",
//     quickLinks: "দ্রুত লিঙ্ক",
//     aboutUs: "আমাদের সম্পর্কে",
//     contact: "যোগাযোগ",
//     blog: "ব্লগ",
//     services: "সেবা",
//     products: "পণ্য",
//     scheduleMeeting: "মিটিং নির্ধারণ করুন",
//     getInTouch: "যোগাযোগ করুন",
//     subscribe: "নিউজলেটারে সাবস্ক্রাইব করুন",
//     updatesMessage: "সকল সর্বশেষ আপডেট সহজেই পান",
//     submit: "জমা দিন",
//     connect: "সংযুক্ত করুন",
//     rights: "সর্বস্বত্ব সংরক্ষিত।"
//   },
// };

// function Footer() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here
//     console.log("Form submitted:", { name, email, phoneNumber, message });
//   };

//   const { isDarkMode } = useTheme();
//   const { language } = useLanguage(); // Get the current language

//   return (
//     <footer className={`bg-gray-900 text-white py-8 ${isDarkMode ? 'bg-gray-700' : 'bg-black'}`}>
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row justify-evenly items-start gap-8">
//           {/* Left Contact Section */}
//           <div className="lg:w-1/3">
//             <img src={logo} className="rounded-full w-24 h-24" />

//             <div className="text-xl">
//               <nav className="space-x-6">
//                 <a href="/" className="hover:text-blue-300">
//                   <FontAwesomeIcon icon={faFacebook} />
//                 </a>
//                 <a href="/" className="hover:text-blue-300">
//                   <FontAwesomeIcon icon={faYoutube} />
//                 </a>
//                 <a href="/" className="hover:text-blue-300">
//                   <FontAwesomeIcon icon={faSquareInstagram} />
//                 </a>
//                 <a href="/" className="hover:text-blue-300">
//                   <FontAwesomeIcon icon={faLinkedin} />
//                 </a>
//                 <a href="/" className="hover:text-blue-300">
//                   <FontAwesomeIcon icon={faEnvelope} />
//                 </a>
//               </nav>
//             </div>
//             <div className="py-4">
//               <a href="/" className="hover:text-blue-300">
//                 <FontAwesomeIcon icon={faLocationDot} /> {translations[language].location}
//               </a>
//             </div>
//             <h5 className="text-xl">Design Your Own World</h5>
//           </div>

//           {/* Middle Contact Section */}
//           <div className="lg:w-1/3">
//             <h5 className="font-bold text-xl mb-4">{translations[language].quickLinks}</h5>
//             <ul className="text-gray-400 space-y-2">
//               <li className="flex items-center gap-2">
//                 <Link>{translations[language].aboutUs}</Link>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Link>{translations[language].contact}</Link>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Link>{translations[language].blog}</Link>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Link>{translations[language].services}</Link>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Link>{translations[language].products}</Link>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Link>{translations[language].scheduleMeeting}</Link>
//               </li>
//             </ul>
//           </div>

//           {/* Right Form Section */}
//           <div className="flex flex-col lg:w-1/3 w-full">
//             <h5 className="font-bold text-xl mb-4">{translations[language].getInTouch}</h5>
//             <form className="space-y-4" onSubmit={handleSubmit}>
//               <div className="flex flex-col">
//                 <label htmlFor="name" className="text-gray-400">
//                   NAME *
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="border border-gray-600 bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="email" className="text-gray-400">
//                   EMAIL *
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="border border-gray-600 bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="phone" className="text-gray-400">
//                   CONTACT NUMBER *
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   className="border border-gray-600 bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="message" className="text-gray-400">
//                   MESSAGE *
//                 </label>
//                 <textarea
//                   id="message"
//                   className="border border-gray-600 bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                   rows="4"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-green-500 to-emerald-700 text-white font-bold py-2 px-4 rounded-md w-full hover:bg-green-600 transition duration-300"
//               >
//                 {translations[language].submit}
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Newsletter Section */}
//         <div className="mt-8 border-t border-gray-700 pt-4 flex justify-evenly">
//           <div>
//             <h5 className="font-bold text-xl mb-4">{translations[language].subscribe}</h5>
//             <p className="text-gray-400 mb-4">{translations[language].updatesMessage}</p>
//           </div>
//           <div>
//             <form className="flex flex-col sm:flex-row gap-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="bg-gray-800 text-white rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="bg-gray-800 text-white rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//               <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-green-500">
//                 {translations[language].connect}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8 border-t border-gray-700 pt-4 text-center">
//         <p className="text-gray-400 text-sm">
//           &copy; {new Date().getFullYear()} Green Shelter Design & Development. {translations[language].rights}
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
