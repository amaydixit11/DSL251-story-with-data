import React, { useState, useEffect } from 'react';
import { ExternalLink, ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    {
      title: "View Analysis Notebook",
      href: "https://colab.research.google.com/drive/1SiAznpjyErzbzoyA8r2L4zOqpUfBzYaz?usp=sharing",
      icon: <ExternalLink className="w-4 h-4 ml-2" />
    },
    {
      title: "View Report",
      href: "https://github.com/amaydixit11/Academics/blob/main/DSL251/HomeWork1/AmayDixit_12340220_HomeWork1_DSL251_DAV.pdf",
      icon: <ExternalLink className="w-4 h-4 ml-2" />
    }
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-md' 
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Title Section */}
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 transition-colors duration-200 hover:text-indigo-600">
              Spotify Listening Analysis
            </h1>
            <p className="mt-1 text-sm sm:text-base text-gray-600">
              April to December 2024
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="group relative inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-200
                  border border-transparent rounded-md
                  text-white bg-indigo-600 hover:bg-indigo-700
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.title} (opens in new tab)`}
              >
                <span>{link.title}</span>
                {link.icon}
                
                {/* Hover animation */}
                <span className="absolute inset-0 rounded-md bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-48 opacity-100 mt-4' 
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="py-2 space-y-2">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="flex items-center justify-between px-4 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{link.title}</span>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;