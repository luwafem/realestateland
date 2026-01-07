import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = ({ companyName, socialLinks, contactInfo }) => {
  const footerLinks = {
    "Properties": ["For Sale", "For Rent", "Commercial", "Luxury"],
    "Services": ["Buying", "Selling", "Renting", "Property Management"],
    "Company": ["About Us", "Careers", "Blog", "Contact"],
    "Resources": ["Market Reports", "Investment Guide", "FAQ", "Legal"]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4">{companyName}</div>
            <p className="text-gray-400 mb-6">
              Your trusted partner in real estate. We connect dreams with properties, 
              creating lasting relationships through exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href={socialLinks.facebook} className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href={socialLinks.twitter} className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href={socialLinks.instagram} className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href={socialLinks.linkedin} className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-lg mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Subscribe to Newsletter</h4>
              <p className="text-gray-400">
                Get the latest property listings and market insights
              </p>
            </div>
            <div>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="bg-primary-600 px-6 py-3 rounded-lg hover:bg-primary-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a> | 
            <a href="#" className="hover:text-white ml-2">Terms of Service</a> | 
            <a href="#" className="hover:text-white ml-2">Cookie Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;