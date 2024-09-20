import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-100 text-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          
        </div>
        <nav className="flex space-x-6 font-bold">
          <Link to='/' className='hover:text-green-600 '>Home</Link>
          <Link to='/about-us' className='hover:text-green-600 '>About Us</Link>
          <Link to='/services' className='hover:text-green-600 '>Services</Link>
          <Link to='/projects' className='hover:text-green-600 '>Projects</Link>
          <Link to="/businesses" className='hover:text-green-600 '>Products</Link>
          <Link to="/construction-status" className='hover:text-green-600 '>Research & Analysis</Link>
          <Link to="/construction-status" className='hover:text-green-600 '>Blog</Link>
          <Link to='/team' className='hover:text-green-600 '>Team</Link>
          <Link to="/contact" className='hover:text-green-600 '>Contact</Link>
          
        </nav>
      </div>
    </header>
  );
}

export default Header;