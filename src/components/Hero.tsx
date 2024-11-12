import React from 'react';
import srinuImage from '../images/srinu.jpg'; // Importing your local image
import niladriImage from '../images/niladri.jpg'; // Importing another local image

const Hero = () => {
  return (
    <div id="home" className="pt-16 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Welcome text with different colors for each word */}
        <div className="flex justify-center mb-8">
          <h2 className="text-5xl font-bold text-center text-yellow-500">
          Welcome To Trishakti Transport</h2>
     </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            {/* Image section: First image (niladri.jpg) then second image (srinu.jpg) */}
            <div className="flex space-x-4 mb-6">
              {/* First image (niladri.jpg) */}
              <img 
                src={niladriImage} 
                alt="Transport Services"
                className="w-1/2 h-auto rounded-lg shadow-xl object-cover" 
              />
              
              {/* Second image (srinu.jpg) */}
              <img 
                src={srinuImage} 
                alt="Transport Services"
                className="w-1/2 h-auto rounded-lg shadow-xl object-cover" 
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Your Trusted Partner in Transportation
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              Providing reliable goods transport and passenger travel services across India. From trucks to bikes, we've got your transportation needs covered.
            </p>
            <div className="space-x-4">
              <a href="#book" className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 inline-block">
                Book Now
              </a>
              <a href="#services" className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-900 inline-block">
                Our Services
              </a>
            </div>
          </div>

          {/* Image section on larger screens */}
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80" 
              alt="Transport Services"
              className="w-full h-auto rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;