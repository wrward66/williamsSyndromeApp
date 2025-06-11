import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left side (Home) */}
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
          </div>

          {/* Right side (Navigation) */}
          <nav className="flex items-center space-x-6">
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
