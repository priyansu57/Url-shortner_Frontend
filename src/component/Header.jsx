import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logout_user from '../routes/Auth/Logout';

const Header = () => {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 tracking-wide hover:text-blue-700 transition">
          🔗 URL Shortener
        </Link>

        {/* Navigation */}
        <nav className="space-x-4 text-sm font-medium inline-flex">
          <Link to="/" className="text-gray-600 hover:text-blue-500 transition">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-500 transition">About</Link>
          <Link to="/login" className="text-gray-600 hover:text-blue-500 transition"><Logout_user /></Link>
          {!auth && (
          <Link to="/register" className="text-gray-600 hover:text-blue-500 transition">Register</Link> )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
