
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-tight text-architect-dark transition-colors duration-300"
          >
            Hyderabad Architects
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-architect-accent transition-colors duration-300 link-underline">
              Home
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-architect-accent transition-colors duration-300 link-underline">
              Blog
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-architect-accent transition-colors duration-300 link-underline">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-architect-accent transition-colors duration-300 link-underline">
              Contact
            </Link>
            <a 
              href="https://wallsasia.com/projects-portfolio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-architect-accent transition-colors duration-300 link-underline"
            >
              Portfolio
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden py-4 px-6 bg-white/95 backdrop-blur-md border-t animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 py-2 px-4 hover:bg-architect-hover rounded-md transition-colors duration-300"
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 py-2 px-4 hover:bg-architect-hover rounded-md transition-colors duration-300"
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 py-2 px-4 hover:bg-architect-hover rounded-md transition-colors duration-300"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 py-2 px-4 hover:bg-architect-hover rounded-md transition-colors duration-300"
            >
              Contact
            </Link>
            <a 
              href="https://wallsasia.com/projects-portfolio/" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 py-2 px-4 hover:bg-architect-hover rounded-md transition-colors duration-300"
            >
              Portfolio
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
