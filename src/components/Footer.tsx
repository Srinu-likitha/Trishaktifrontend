import React from 'react';
import { Phone, Mail, MapPin, Truck } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Truck className="h-8 w-8 text-yellow-400" />
              <span className="ml-2 text-xl font-bold">Trishakti Transport</span>
            </div>
            <p className="text-gray-300">
              Your trusted partner in transportation services across India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Goods Transport</li>
              <li className="text-gray-300">Passenger Travel</li>
              <li className="text-gray-300">Quick Delivery</li>
              <li className="text-gray-300">24/7 Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-400 mr-2" />
                <span>+91 9618074971</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-400 mr-2" />
                <span>srinulikitha526@gmail.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 text-yellow-400 mr-2" />
                <span>TriShakti Transport pvt Ltd, A.S peta Border,Ichapuram mandal,Andhra Pradesh - 532312</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Trishakti Transport. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;