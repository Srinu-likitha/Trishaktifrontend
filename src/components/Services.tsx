import React from 'react';
import { Truck, Car, Bike } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Truck className="w-12 h-12 text-blue-900" />,
      title: "Goods Transport",
      description: "Professional transportation of goods via trucks and lorries with real-time tracking and secure handling.",
      vehicles: ["Heavy Trucks", "Medium Lorries", "Mini Vans"],
      images: [
        {
          url: "https://tse4.mm.bing.net/th?id=OIP.H-L2ntFI3H9IxiCfZbXL_AHaE8&pid=Api&P=0&h=180",
          alt: "Heavy Duty Truck"
        },
        {
          url: "https://tse4.mm.bing.net/th?id=OIP.H-L2ntFI3H9IxiCfZbXL_AHaE8&pid=Api&P=0&h=180",
          alt: "Medium Lorry"
        }
      ]
    },
    {
      icon: <Car className="w-12 h-12 text-blue-900" />,
      title: "Passenger Travel",
      description: "Comfortable and safe passenger transportation services for both long and short distances.",
      vehicles: ["Cars", "Autos", "Premium Vehicles"],
      images: [
        {
          url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
          alt: "Premium Car"
        }
      ]
    },
    {
      icon: <Bike className="w-12 h-12 text-blue-900" />,
      title: "Quick Delivery",
      description: "Fast and efficient delivery services for urgent packages and documents via bikes.",
      vehicles: ["Bikes", "Scooters", "Express Delivery"],
      images: [
        {
          url: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
          alt: "Delivery Bike"
        }
      ]
    }
  ];

  return (
    <div id="services" className="py-24 relative bg-yellow-500">
      {/* Overlay to darken background image */}
      <div className="absolute inset-0 bg-black opacity-40"></div> 
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1593642532973-d31b6557fa68")' }}></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive transportation solutions tailored to meet your specific needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              {/* Image Gallery */}
              <div className="relative h-48 overflow-hidden">
                {service.images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image.url}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      idx === 0 ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.vehicles.map((vehicle, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                      {vehicle}
                    </li>
                  ))}
                </ul>
                <a
                  href="#book"
                  className="mt-6 inline-block bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
