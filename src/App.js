import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PropertyShowcase from './components/PropertyShowcase';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { properties, lands } from './data/properties';

function App() {
  const [activeTab, setActiveTab] = useState('properties');

  const config = {
    companyName: "Prime Estate",
    contactEmail: "contact@primeestate.com",
    contactPhone: "+1 (555) 123-4567",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        companyName={config.companyName}
        contactPhone={config.contactPhone}
      />
      
      <Hero 
        title="Find Your Dream Property"
        subtitle="Premium real estate solutions for residential and commercial properties"
      />
      
      <PropertyShowcase 
        properties={properties}
        lands={lands}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      <Features />
      <Testimonials />
      <Contact 
        email={config.contactEmail}
        phone={config.contactPhone}
      />
      
      <Footer 
        companyName={config.companyName}
        socialLinks={config.socialLinks}
        contactInfo={config}
      />
    </div>
  );
}

export default App;