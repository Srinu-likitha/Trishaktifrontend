import React, { useState } from 'react';
import { Menu, X, Truck } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-pink-500 text-white fixed w-full z-50"> {/* Changed to pink */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Increased logo size */}
            <Truck className="h-12 w-12 text-yellow-400" /> {/* Logo size increased */}
            <span className="ml-2 text-xl font-bold">Trishakti Transport and Travels Private Limited</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:bg-pink-700 px-3 py-2 rounded-md">Home</a>
              <a href="#services" className="hover:bg-pink-700 px-3 py-2 rounded-md">Services</a>
              <a href="#about" className="hover:bg-pink-700 px-3 py-2 rounded-md">About</a>
              <a href="#book" className="hover:bg-pink-700 px-3 py-2 rounded-md">Book Now</a>
              <a href="#contact" className="bg-yellow-500 text-pink-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400">Contact Us</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block hover:bg-pink-700 px-3 py-2 rounded-md">Home</a>
            <a href="#services" className="block hover:bg-pink-700 px-3 py-2 rounded-md">Services</a>
            <a href="#about" className="block hover:bg-pink-700 px-3 py-2 rounded-md">About</a>
            <a href="#book" className="block hover:bg-pink-700 px-3 py-2 rounded-md">Book Now</a>
            <a href="#contact" className="block bg-yellow-500 text-pink-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
