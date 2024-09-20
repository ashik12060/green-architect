import React from "react";
import backgroundImage from "../../assets/architect2.jpg";

function ContactUs() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section with Architectural Image */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white">Get In Touch</h1>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-semibold mb-8">Contact Information</h2>
            {/* <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium">Our Office</h3>
                <p>Suite 2203, Level-R, Multicomplex, Gulshan 1, Dhaka 1212, Bangladesh</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Call Us</h3>
                <p>+8801711-001726</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Email Us</h3>
                <p><a href="mailto:info@architectcompany.com" className="text-green-500 hover:underline">info@architectcompany.com</a></p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Working Hours</h3>
                <p>Saturday - Thursday: 10am - 7pm</p>
                <p>Friday: Closed</p>
              </div>
            </div> */}
            <div className="space-y-8 p-6 rounded-lg shadow-lg">
              {/* Our Office */}
              <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-green-600">
                  {/* Office Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2L2 7h20L12 2zM2 17h20v5H2v-5zM17 12h5v5h-5v-5zM2 12h5v5H2v-5zM7 7v5H2V7h5zm10 0v5h5V7h-5zm-5 0v5h-5V7h5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Office
                  </h3>
                  <p className="text-gray-700">
                    Suite 2203, Level-R, Multicomplex, Gulshan 1, Dhaka 1212,
                    Bangladesh
                  </p>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-green-600">
                  {/* Phone Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 011.85-1.995L5 3h14a2 2 0 011.995 1.85L21 5v14a2 2 0 01-1.85 1.995L19 21H5a2 2 0 01-1.995-1.85L3 19V5zm4 3v6h6V8H7zm2 2h2v2H9v-2zm7 5v-3h2v5H9v-5h2v2h4v-2h2v5h-5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Call Us</h3>
                  <p className="text-gray-700">+8801711-001726</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-green-600">
                  {/* Email Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12v6M8 12v6m0-4a4 4 0 018 0v4m0-8a4 4 0 00-8 0v4m-2 8h12a2 2 0 002-2v-6a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2zm0-8h12V9a2 2 0 00-2-2H8a2 2 0 00-2 2v3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Email Us</h3>
                  <p>
                    <a
                      href="mailto:info@architectcompany.com"
                      className="text-green-500 hover:text-green-600 hover:underline transition duration-200"
                    >
                      info@architectcompany.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-green-600">
                  {/* Clock Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m-1 1a9 9 0 110-18 9 9 0 010 18z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Working Hours
                  </h3>
                  <p className="text-gray-700">
                    Saturday - Thursday: 10am - 7pm
                  </p>
                  <p className="text-gray-700">Friday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-semibold mb-8">
              Request a Free Quote
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="name"
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="email"
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Phone Number
                </label>
                <input
                  type="number"
                  placeholder="phone number"
                  id="number"
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="projectDetails"
                  className="block text-sm font-medium text-gray-700"
                >
                  Project Details
                </label>
                <textarea
                  id="projectDetails"
                  rows="5"
                  placeholder="Write your query"
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Find Us on Google Maps
          </h2>
          <div className="flex justify-center">
            <iframe
              title="Google Map"
              className="w-full h-80 md:w-2/3 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.9072897986236!2d90.41672617585488!3d23.750937184580207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85b9fbf5c5b%3A0x92bf8a8eec17798!2sGulshan!5e0!3m2!1sen!2sbd!4v1630994882079!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
