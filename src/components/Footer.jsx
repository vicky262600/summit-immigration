import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info with Logo */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-20 h-20 relative bg-white rounded-full p-2">
                <Image
                  src="/summitLogo.png"
                  alt="Summit Immigration Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Summit Immigration</h3>
                <p className="text-sm text-gray-400">Consulting Group</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for Canadian immigration services. Expert legal representation for all immigration matters.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
                <a 
                  href="https://facebook.com/summitimmigration" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="https://instagram.com/summit_immigration416" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-700 p-2 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              <a 
                href="https://x.com/summitgroup416" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 p-2 rounded-lg transition-colors flex items-center justify-center"
              >
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/services" className="hover:text-white transition-colors">Express Entry</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Provincial Nominee Programs</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Study Permits</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Spousal Sponsorship</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Business Immigration</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/aboutUs" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/aboutUs" className="hover:text-white transition-colors">Our Legal Team</a></li>
              <li><a href="/immigration-appeals" className="hover:text-white transition-colors">Immigration Appeals</a></li>
              <li><a href="/refugee-claims" className="hover:text-white transition-colors">Refugee Claims</a></li>
              <li><a href="/contact-us" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <div>
                  <p>Toronto, Canada</p>
                  <p className="text-sm">London, UK | New York, USA</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <p>+1 (416) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <p>info@summitimmigration.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Summit Immigration Consulting Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
