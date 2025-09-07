'use client';

import { ArrowRight, Users, Globe, Award } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[700px] flex items-center bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(/globepicHome.jpg)` }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-8 sm:px-16 md:px-24 py-20 relative z-10">
        <div className="max-w-4xl space-y-8">
          
          {/* Small intro with blue line */}
          <div 
            className={`flex items-center gap-3 transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="w-1 h-10 bg-blue-400"></div>
            <p className="text-xl md:text-2xl font-bold text-white tracking-wide">
              Welcome to Summit Immigration Consulting Group
            </p>
          </div>

          {/* Main Heading */}
          <h2 
            className={`text-4xl md:text-5xl font-bold text-white leading-snug transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Your #1 Provider for Canadian Immigration Services!
          </h2>

          {/* Description */}
          <p 
            className={`text-gray-200 leading-relaxed text-lg max-w-3xl transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
Summit Immigration Consulting Group engages exclusively in the practice of Canadian Immigration law. We represent our clients in all cases that are dealt with by IRCC, the Immigration and Refugee Board as well as Federal Court.
          </p>

          {/* Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group">
              Start Your Application
              <ArrowRight className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Free Assessment
            </button>
          </div>

          {/* Three Key Words */}
          <div 
            className={`flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24 pt-20 transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '1s' }}
          >
            <div className="relative group">
              {/* Light effects on all four sides */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-transparent via-white to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-transparent via-white to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              <div className="text-3xl md:text-4xl font-extrabold text-white text-center tracking-wider bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl px-4 py-2">
                Experience
              </div>
            </div>
            
            <div className="relative group">
              {/* Light effects on all four sides */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-transparent via-white to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-transparent via-white to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              <div className="text-3xl md:text-4xl font-extrabold text-white text-center tracking-wider bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl px-4 py-2">
                Professionalism
              </div>
            </div>
            
            <div className="relative group">
              {/* Light effects on all four sides */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-transparent via-white to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-transparent via-white to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              <div className="text-3xl md:text-4xl font-extrabold text-white text-center tracking-wider bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl px-4 py-2">
                Results
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-600 to-yellow-400 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-900 rounded-full opacity-5 blur-3xl" />
    </section>
  );
};

export default Hero;
