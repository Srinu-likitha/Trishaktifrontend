import React from 'react';
import { Shield, ThumbsUp, Zap, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      title: "Safe & Secure",
      description: "Your goods and passengers are fully insured and handled with utmost care"
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-yellow-500" />,
      title: "Experienced Team",
      description: "Professional drivers and staff with years of experience"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Fast Service",
      description: "Quick response and timely delivery guaranteed"
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for your convenience"
    }
  ];

  return (
    <div id="about" className="py-24 bg-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Trishakti Transport?</h2>
          <p className="text-gray-100 max-w-2xl mx-auto">
            With years of experience and a commitment to excellence, we ensure your transportation needs are met with the highest standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-orange-400 transition-colors">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
