import React, { useEffect, useState } from "react";

const SmallHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [enabled, setEnabled] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
  };

  const toggleSwitch = () => {
    setEnabled(!enabled);
  };

  // Apply dark mode class to the body
  useEffect(() => {
    if (enabled) {
      document.body.classList.add("bg-black", "text-white");
      document.body.classList.remove("bg-white", "text-black");
    } else {
      document.body.classList.add("bg-white", "text-black");
      document.body.classList.remove("bg-black", "text-white");
    }
  }, [enabled]);

  return (
    <header
      className={`shadow-md py-2 ${
        enabled ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <a
            href="/"
            className={`hover:${
              enabled ? "text-blue-300" : "text-blue-500"
            }`}
          >
            Logo
          </a>
        </div>

        {/* Header Content */}
        <div className="flex gap-8 items-center">
          {/* Dark Mode Toggle Button */}
          <div
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition duration-300 ${
              enabled ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={toggleSwitch}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition duration-300 ${
                enabled ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </div>

          {/* Language Dropdown */}
          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              className={`inline-flex justify-center rounded-md border shadow-sm px-2 py-1 text-xs font-medium ${
                enabled ? "border-gray-700 bg-gray-800 text-white" : "border-gray-300 bg-white text-gray-700"
              } hover:${
                enabled ? "bg-gray-700" : "bg-gray-50"
              }`}
            >
              {selectedLanguage}
              <svg
                className="ml-1 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div
                className={`origin-top-right absolute right-0 mt-1 w-20 rounded-md shadow-lg ${
                  enabled ? "bg-gray-800 text-white ring-gray-700" : "bg-white text-gray-700 ring-black"
                } ring-1 ring-opacity-5 focus:outline-none z-10`}
              >
                <div className="py-1">
                  <button
                    onClick={() => selectLanguage("EN")}
                    className={`block px-2 py-1 text-xs ${
                      enabled ? "hover:bg-gray-700" : "hover:bg-gray-100"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => selectLanguage("BN")}
                    className={`block px-2 py-1 text-xs ${
                      enabled ? "hover:bg-gray-700" : "hover:bg-gray-100"
                    }`}
                  >
                    Bengali
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sign Up Button */}
          <button
            className={`px-4 py-1 rounded ${
              enabled
                ? "bg-gray-700 text-white hover:bg-blue-600"
                : "bg-green-700 text-white hover:bg-blue-500 hover:text-white"
            } transition duration-300`}
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default SmallHeader;
