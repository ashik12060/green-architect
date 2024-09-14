import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-gray-400 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          
        </div>
        <nav className="flex space-x-6">
          <a href="/about">Home</a>
          <a href="/properties">Services</a>
          <a href="/landowners">Projects</a>
          <a href="/businesses">Products</a>
          <a href="/construction-status">Research & Analysis</a>
          <a href="/construction-status">Blog</a>
          <Link to='/team'>Team</Link>
          <a href="/contact">Contact</a>
          
        </nav>
      </div>
    </header>
  );
}

export default Header;