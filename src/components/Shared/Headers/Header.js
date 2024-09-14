import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-gray-400 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          
        </div>
        <nav className="flex space-x-6">
          <Link to='/'>Home</Link>
          <Link to='/services'>Services</Link>
          <Link to='/projects'>Projects</Link>
          <Link href="/businesses">Products</Link>
          <Link href="/construction-status">Research & Analysis</Link>
          <Link href="/construction-status">Blog</Link>
          <Link to='/team'>Team</Link>
          <Link href="/contact">Contact</Link>
          
        </nav>
      </div>
    </header>
  );
}

export default Header;