import React from 'react';
import PropertyCard from './PropertyCard';
import LandCard from './LandCard';

const PropertyShowcase = ({ properties, lands, activeTab, onTabChange }) => {
  return (
    <section id="properties" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Properties & Lands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of premium properties and investment lands
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 p-1">
            <button
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'properties'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
              onClick={() => onTabChange('properties')}
            >
              Properties
            </button>
            <button
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'lands'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
              onClick={() => onTabChange('lands')}
            >
              Lands
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        <div className="mt-8">
          {activeTab === 'properties' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lands.map((land) => (
                <LandCard key={land.id} land={land} />
              ))}
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
            View All Listings
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;