import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faMobileScreenButton,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

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
            <h5 className="font-bold text-xl mb-4">Get in Touch</h5>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-center gap-2">
                <i className="fas fa-phone-alt"></i>
                <a href="tel:16604" className="hover:text-white">
                  <FontAwesomeIcon className="pe-2" icon={faPhone} />
                  12345
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-mobile-alt"></i>
                <a href="tel:+8809813191919" className="hover:text-white">
                  <FontAwesomeIcon
                    className="pe-2"
                    icon={faMobileScreenButton}
                  />
                  +880123456789
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@btibd.org" className="hover:text-white">
                  <FontAwesomeIcon className="pe-2" icon={faEnvelope} />
                  info@example.com
                </a>
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
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md w-full"
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
        &copy; {new Date().getFullYear()} Green Shelter Design & Development. All rights reserved.
      </p>
    </div>
    </footer>
  );
}

export default Footer;
