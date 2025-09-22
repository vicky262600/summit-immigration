'use client';

import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-xl sticky top-0 z-50 border-b border-gray-100">
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs">
            <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-6 mb-1 md:mb-0">
              <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors cursor-pointer">
                <Phone className="h-3 w-3 text-blue-300" />
                <span className="font-medium">+1 (647) 854-3513</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors cursor-pointer">
                <Mail className="h-3 w-3 text-blue-300" />
                <span className="font-medium">info@summitimmigration.com</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors cursor-pointer">
                <MapPin className="h-3 w-3 text-blue-300" />
                <span className="font-medium">
                30 Quarry Ridge Road, Barrie, ON L4M 7G1
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo + Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-28 h-28 relative shrink-0">
              <Image
                src="/summitLogo.png"
                alt="Summit Immigration Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                Summit<br />
                Immigration
              </div>
              <div className="text-base font-medium text-gray-500 tracking-wide">
                Consulting Group
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-6">
            {[
              { href: '/', label: 'Home' },
              { href: '/aboutUs', label: 'About Us' },
              { href: '/services', label: 'Services' },
              { href: '/immigration-appeals', label: 'Immigration Appeals' },
              { href: '/refugee-claims', label: 'Refugee Claims' },
              { href: '/contact-us', label: 'Contact Us' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-bold relative group whitespace-nowrap text-base"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right: Action Button + Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              className="hidden md:block px-4 py-2 text-base border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
              onClick={() => (window.location.href = '/contact-us')}
            >
              Assessment
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {[
                { href: '/', label: 'Home' },
                { href: '/aboutUs', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/immigration-appeals', label: 'Immigration Appeals' },
                { href: '/refugee-claims', label: 'Refugee Claims' },
                { href: '/contact-us', label: 'Contact Us' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-bold text-lg px-4 py-2 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <button
                  className="w-full px-4 py-3 text-base border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-bold"
                  onClick={() => {
                    window.location.href = '/contact-us';
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Assessment
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
