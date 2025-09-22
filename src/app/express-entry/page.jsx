'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ExpressEntryPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('express-entry-info');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Set initial visibility for hero section
  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/canadaflages.jpg')` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Express Entry
          </h1>

          <p
            className={`text-xl text-white/90 mb-8 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            Express Entry is Canada's online application management system for three immigration programs: 
            the Federal Skilled Worker Program (FSWP), Canadian Experience Class (CEC), and Federal Skilled Trades Program (FSTP).
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Express Entry System
            </div>
            
            <h2 className="text-4xl font-bold text-blue-900 mb-8">
              How Express Entry Works
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Express Entry is Canada's online application management system for three immigration programs: 
              the Federal Skilled Worker Program (FSWP); Canadian Experience Class (CEC); and, Federal Skilled Trades Program (FSTP).
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The system creates a pool of eligible candidates and ranks them using a points-based system called the 
              Comprehensive Ranking System (CRS) based on criteria such as their age, education, work experience, and language skills. 
              The highest-ranking candidates are regularly invited to apply for permanent residence.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700">
                <strong>Important:</strong> Upon receiving an Invitation to Apply (ITA), you have 90 days to submit an 
                application for permanent residence with all necessary accompanying documents. All required documents must be 
                submitted within this timeline. After completing the process, you and your dependents (spouse and children) can land in Canada as 
                Permanent Residents and be on your way to becoming Canadian Citizens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Eligibility Requirements
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              To be eligible for the Express Entry pool, you must qualify for one of three federal economic immigration programs:
            </p>

            <div className="space-y-8 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Federal Skilled Worker Program</h3>
                <p className="text-gray-600 mb-4">
                  For skilled workers with foreign work experience. Requirements include at least one year of continuous, full-time skilled work 
                  experience in the last 10 years, minimum language proficiency, completed post-secondary education assessed against Canadian standards.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Canadian Experience Class</h3>
                <p className="text-gray-600 mb-4">
                  For skilled workers with Canadian work experience. Requires at least one year of skilled work experience in Canada within the last three 
                  years and meeting minimum language proficiency for the job's skill level.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Federal Skilled Trades Program</h3>
                <p className="text-gray-600 mb-4">
                  For skilled workers with a certificate of qualification in a skilled trade. Requires at least two years of full-time work experience in a skilled 
                  trade within the last five years, meeting language requirements, and having either a valid job offer for at least one year or a certificate of 
                  qualification from a Canadian province or territory.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Provincial Nominee Program (PNP)</h3>
              <p className="text-gray-700">
                If you're eligible for one of these programs, you can also apply through Express Entry for the Provincial Nominee Program. 
                Some PNPs work with Express Entry. A provincial nomination adds 600 CRS points.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Changes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Recent Changes to Express Entry
            </h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-gray-700">
                Recent changes to Canada's Express Entry include the removal of points for job offers, effective March 25, 2025, to reduce fraud. 
                For 2025, invitation rounds are focusing on candidates with Canadian work experience, French-language speakers, and those in specific 
                categories like Healthcare, Trades, and a newly introduced Education category.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Apply Through Express Entry?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Summit Immigration Consulting Group is a recognized name in Canadian immigration. Our legal team has the 
            expertise to handle your Express Entry case from start to finish. Get started with a consultation today 
            to discuss if you are eligible for any of the Immigration programs.
          </p>
          <div className="flex justify-center">
            <a 
              href="/contact-us"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block"
            >
              Get Your Assessment
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExpressEntryPage;
