import React from 'react';
import { MapPin, Square, Compass, Heart } from 'lucide-react';

const LandCard = ({ land }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={land.image}
          alt={land.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            land.zoning === 'Commercial' 
              ? 'bg-purple-100 text-purple-800' 
              : 'bg-orange-100 text-orange-800'
          }`}>
            {land.zoning}
          </span>
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{land.title}</h3>
          <span className="text-2xl font-bold text-primary-600">{land.price}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{land.location}</span>
        </div>

        {/* Land Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-600">
              <Square className="w-5 h-5 mr-2" />
              <span>Area</span>
            </div>
            <span className="font-medium">{land.area}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-600">
              <Compass className="w-5 h-5 mr-2" />
              <span>Zoning</span>
            </div>
            <span className="font-medium">{land.zoning}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {land.features.map((feature, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
            View Details
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Get Survey
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandCard;