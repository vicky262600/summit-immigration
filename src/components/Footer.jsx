import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone, MapPin, Twitter } from 'lucide-react';

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
                  className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full transition-colors flex items-center justify-center"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/summit_immigration416"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-700 w-10 h-10 rounded-full transition-colors flex items-center justify-center"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              <a
                href="https://x.com/summitgroup416"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 w-10 h-10 rounded-full transition-colors flex items-center justify-center"
              >
                <span className="text-white text-2xl font-bold">𝕏</span>
              </a>
            </div>
            
            {/* CICC Logo */}
            <div className="mt-6">
              <Image
                src="/CICC2.jpeg"
                alt="CICC - College of Immigration and Citizenship Consultants"
                width={180}
                height={90}
                className="h-16 w-auto"
              />
            </div>
            
            {/* Law Logo */}
            <div className="mt-4">
              <Image
                src="/law2.jpg"
                alt="Legal Services"
                width={180}
                height={90}
                className="h-16 w-auto"
              />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/work-permits" className="hover:text-white transition-colors">Work Permits</a></li>
              <li><a href="/express-entry" className="hover:text-white transition-colors">Express Entry</a></li>
              <li><a href="/provincial-nominee-programs" className="hover:text-white transition-colors">Provincial Nominee Programs</a></li>
              <li><a href="/student-permit" className="hover:text-white transition-colors">Study Permits</a></li>
              <li><a href="/visitor-visa" className="hover:text-white transition-colors">Visitor Visas</a></li>
              <li><a href="/super-visa" className="hover:text-white transition-colors">Super Visas</a></li>
              <li><a href="/business-immigration" className="hover:text-white transition-colors">Business Immigration</a></li>
              <li><a href="/spousal-sponsorship" className="hover:text-white transition-colors">Spousal Sponsorship</a></li>
              <li><a href="/citizenship-applications" className="hover:text-white transition-colors">Citizenship Applications</a></li>
              <li><a href="/us-waivers" className="hover:text-white transition-colors">US Waivers</a></li>
              <li><a href="/judicial-review" className="hover:text-white transition-colors">Judicial Review</a></li>
              <li><a href="/international-recruitment" className="hover:text-white transition-colors">International Recruitment</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/aboutUs" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/aboutUs" className="hover:text-white transition-colors">Our Legal Team</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/immigration-appeals" className="hover:text-white transition-colors">Immigration Appeals</a></li>
              <li><a href="/refugee-claims" className="hover:text-white transition-colors">Refugee Claims</a></li>
              <li><a href="/contact-us" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-semibold">Main branch:</p>
                  <p>30 Quarry Ridge Road</p>
                  <p>Barrie, ON L4M 7G1, Canada</p>
                  <p className="font-semibold mt-3">Sub-branch:</p>
                  <p>30 Eglinton Ave W</p>
                  <p>Mississauga, ON L5R 3E7, Canada</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <p>+1 (647) 854-3513</p>
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
