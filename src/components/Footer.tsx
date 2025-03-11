
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-architect-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold mb-4">Hyderabad Architects</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Creating innovative architectural solutions for residential and commercial spaces 
              in Hyderabad with a focus on sustainability and elegant design.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            
            <div className="flex items-start space-x-3">
              <Phone size={18} className="mt-1 text-architect-accent flex-shrink-0" />
              <p className="text-gray-300 text-sm">
                +91 799 511 3333
              </p>
            </div>
            
            <div className="flex items-start space-x-3">
              <Mail size={18} className="mt-1 text-architect-accent flex-shrink-0" />
              <p className="text-gray-300 text-sm">
                info@wallsasia.com
              </p>
            </div>
          </div>

          {/* Office Locations */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold mb-4">Our Offices</h3>
            
            <div className="flex items-start space-x-3">
              <MapPin size={18} className="mt-1 text-architect-accent flex-shrink-0" />
              <div>
                <h4 className="text-white text-sm font-medium">Head Office</h4>
                <p className="text-gray-300 text-sm">
                  H.No.3-6-174/1, IInd Floor, Opp MLA Quarters, Hyderguda,
                  Hyderabad, Telangana, India – 500029
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-architect-accent text-xs hover:underline inline-block mt-1"
                >
                  Get Directions
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 mt-4">
              <MapPin size={18} className="mt-1 text-architect-accent flex-shrink-0" />
              <div>
                <h4 className="text-white text-sm font-medium">Branch Office</h4>
                <p className="text-gray-300 text-sm">
                  Fantasy Square building, IIIrd floor, opp. Bio Diversity,
                  Gachibowli, Serilingampalle (M), Telangana 500032
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-architect-accent text-xs hover:underline inline-block mt-1"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                Home
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-300">
                Blog
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                About
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                Contact
              </Link>
              <a 
                href="https://wallsasia.com/projects-portfolio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Portfolio
              </a>
              <a 
                href="https://wallsasia.com/contact-us/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Official Site
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Hyderabad Architects Blog. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a 
                href="https://wallsasia.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 text-sm hover:text-architect-accent transition-colors duration-300"
              >
                Powered by Walls Asia
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
