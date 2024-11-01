import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-orange-600">IndiWear</h1>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 px-3 py-2">Home</Link>
            <Link to="/collection" className="text-gray-700 hover:text-orange-600 px-3 py-2">Collections</Link>
            <Link to="/virtual-try-on" className="text-gray-700 hover:text-orange-600 px-3 py-2">Virtual Try-On</Link>
          </div>

          <div className="hidden sm:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-orange-600">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-orange-600">
              <User size={20} />
            </button>
            <button className="text-gray-700 hover:text-orange-600">
              <ShoppingBag size={20} />
            </button>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/collection"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/virtual-try-on"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              Virtual Try-On
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;