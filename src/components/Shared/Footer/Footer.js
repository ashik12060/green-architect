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

  return (
    <footer className="bg-gray-900 text-white py-8">
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
          <div className="lg:w-1/3">
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
