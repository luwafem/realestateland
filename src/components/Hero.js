import React from 'react';
import { Search } from 'lucide-react';

const Hero = ({ title, subtitle }) => {
  return (
    <section className="relative bg-gradient-to-r from-primary-500 to-primary-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl mb-10 opacity-90">
            {subtitle}
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-xl p-2 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                placeholder="Search by location, property type, or keyword..."
                className="flex-1 px-4 py-3 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <select className="px-4 py-3 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Property Type</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Land</option>
              </select>
              <select className="px-4 py-3 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Price Range</option>
                <option>$100,000 - $500,000</option>
                <option>$500,000 - $1M</option>
                <option>$1M - $5M</option>
                <option>$5M+</option>
              </select>
              <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 flex items-center justify-center">
                <Search className="w-5 h-5 mr-2" />
                Search
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-primary-100">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-primary-100">Lands Developed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-primary-100">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-primary-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;