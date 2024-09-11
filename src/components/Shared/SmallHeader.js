import React from "react";

const SmallHeader = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-blue-300">
            Logo
          </a>
        </div>

        {/* Navigation Links */}
        {/* <nav className="space-x-6">
          <a href="/" className="hover:text-blue-300">
            Home
          </a>
          <a href="/about" className="hover:text-blue-300">
            About
          </a>
          <a href="/services" className="hover:text-blue-300">
            Services
          </a>
          <a href="/contact" className="hover:text-blue-300">
            Contact
          </a>
        </nav> */}

        {/* Button or Call-to-Action */}
        <div className="
        flex gap-16">
            <p>Dark Mode</p>
            <p>BN/EN</p>
          <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default SmallHeader;
