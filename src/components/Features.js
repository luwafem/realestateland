import React from 'react';
import { Shield, Award, Users, Clock, Home, Map } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Listings",
      description: "All properties undergo thorough verification process"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award Winning Service",
      description: "Recognized as top real estate agency 3 years in a row"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Agents",
      description: "Professional agents with 10+ years average experience"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support available"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Property Management",
      description: "Complete property management services"
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "Market Analysis",
      description: "Detailed market analysis and investment advice"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive real estate services with a commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-primary-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;