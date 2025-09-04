'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-xl sticky top-0 z-50 border-b border-gray-100">
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs">
            <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-6 mb-1 md:mb-0">
              <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors cursor-pointer">
                <Phone className="h-3 w-3 text-blue-300" />
                <span className="font-medium">+1 (416) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors cursor-pointer">
                <Mail className="h-3 w-3 text-blue-300" />
                <span className="font-medium">info@summitimmigration.com</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors cursor-pointer">
                <MapPin className="h-3 w-3 text-blue-300" />
                <span className="font-medium">
                  Toronto, Canada | London, UK | New York, USA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-8 py-4">
        <div className="grid grid-cols-[250px_1fr_150px] items-center">
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
                Summit Immigration
              </div>
              <div className="text-base font-medium text-gray-500 tracking-wide">
                Consulting Group
              </div>
            </div>
          </div>

          {/* Center: Navigation Links */}
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

          {/* Right: Action Button */}
          <div className="flex items-center justify-end">
            <button
              className="px-4 py-2 text-base border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
              onClick={() => (window.location.href = '/detailed-assessment')}
            >
              Assessment
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
