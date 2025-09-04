'use client';

import { ArrowRight, Users, Globe, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[700px] flex items-center bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(/homepic.jpg)` }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-8 sm:px-16 md:px-24 py-20 relative z-10">
        <div className="max-w-4xl space-y-8">
          
          {/* Small intro with blue line */}
          <div className="flex items-center gap-3">
            <div className="w-1 h-10 bg-blue-400"></div>
            <p className="text-xl md:text-2xl font-bold text-white tracking-wide">
              Welcome to Summit Immigration Consulting Group
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
            Your #1 Provider for Canadian Immigration Services!
          </h2>

          {/* Description */}
          <p className="text-gray-200 leading-relaxed text-lg max-w-3xl">
            Summit Immigration Consulting Group engages exclusively in the practice of UK, Canadian 
            and American immigration law. Our lawyers and certified immigration consultants are 
            based in all three locations, however the head office is in Toronto, Canada. 
            The firm deals with all matters that are dealt with by the Adjudication Division, 
            the Appeal Division, Federal Court, and the Refugee Protection Division of the 
            Immigration and Refugee Board.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group">
              Start Your Application
              <ArrowRight className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Free Assessment
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 text-white p-3 rounded-lg">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">4M+</div>
                <div className="text-gray-300 text-sm">Expected New Immigrants (2019-2035)</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-400 text-blue-900 p-3 rounded-lg">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">3</div>
                <div className="text-gray-300 text-sm">Countries Served</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-blue-900 text-white p-3 rounded-lg">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">#14</div>
                <div className="text-gray-300 text-sm">Canada Global Retirement Ranking</div>
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
