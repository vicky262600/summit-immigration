'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, MapPin, Users, Briefcase } from 'lucide-react';

const ProvincialNomineeProgramsPage = () => {
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

    const section = document.getElementById('pnp-info');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Set initial visibility for hero section
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pnpProcess = [
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: "Eligibility",
      description: "You must meet the eligibility criteria for the specific PNP stream in the province or territory you wish to settle in, such as the Manitoba Provincial Nominee Program (MPNP)."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      title: "Application",
      description: "Apply for a nomination to the province or territory directly."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Permanent Residency",
      description: "If your application for nomination is approved, you will then apply to the federal government (IRCC) for permanent residence."
    }
  ];

  const provincialPrograms = [
    {
      province: "Alberta",
      program: "Alberta Advantage Immigration Program (AAIP)",
      streams: [
        "Alberta's Express Entry Stream",
        "Worker streams",
        "Entrepreneur streams"
      ]
    },
    {
      province: "British Columbia",
      program: "British Columbia Provincial Nominee Program (BC PNP)",
      streams: [
        "Skills Immigration",
        "Express Entry BC",
        "Entrepreneur Immigration"
      ]
    },
    {
      province: "Manitoba",
      program: "Manitoba Provincial Nominee Program (MPNP)",
      streams: [
        "Skilled Workers Overseas",
        "International Graduates"
      ]
    },
    {
      province: "Newfoundland and Labrador",
      program: "Newfoundland and Labrador Provincial Nominee Program (NLPNP)",
      streams: [
        "Economic immigration streams",
        "Skilled worker programs"
      ]
    },
    {
      province: "Ontario",
      program: "Ontario Immigrant Nominee Program (OINP)",
      streams: [
        "Human Capital Priorities Stream",
        "International Graduates programs"
      ]
    },
    {
      province: "Prince Edward Island",
      program: "Prince Edward Island Provincial Nominee Program (PEI PNP)",
      streams: [
        "PEI Workforce category",
        "International graduates streams"
      ]
    },
    {
      province: "Saskatchewan",
      program: "Saskatchewan Immigrant Nominee Program (SINP)",
      streams: [
        "International Skilled Worker Program",
        "Entrepreneur programs",
        "Farm owner and Operator category"
      ]
    },
    {
      province: "Nova Scotia",
      program: "Nova Scotia Nominee Program (NSNP)",
      streams: [
        "Nova Scotia International Graduate Entrepreneur",
        "Skilled worker streams"
      ]
    }
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/PNP.png')` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Provincial Nominee Programs
          </h1>

          <p
            className={`text-xl text-white/90 mb-8 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            Summit Immigration Consulting Group specializes in all the different Canadian provinces programs for selecting 
            international immigrants selectively. The Provincial Nominee Program (PNP) is a Canadian immigration pathway 
            for skilled and semi-skilled workers, international students, and entrepreneurs.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              What is the Provincial Nominee Program?
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The Provincial Nominee Program (PNP) is a Canadian immigration pathway for skilled and semi-skilled workers, 
              international students, and entrepreneurs who wish to live and work in a specific Canadian province or territory.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Through the PNP, each province and territory can nominate immigrants who meet their unique economic and labour 
              market needs. To apply, one must first get nominated by a province or territory, then submit a separate 
              application to the federal government for permanent residence.
            </p>
          </div>
        </div>
      </section>

      {/* How PNPs Work */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              How Canadian PNPs Work
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pnpProcess.map((step, index) => (
              <div
                key={index}
                className={`group bg-white rounded-lg p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-100 shadow-md text-center ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 0.2}s`,
                  transitionDuration: '0.8s',
                }}
              >
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provincial Programs */}
      <section id="pnp-info" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Different Provincial Nominee Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every province and territory offers a PNP, though the specific streams vary. Here are the main programs available:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {provincialPrograms.map((program, index) => (
              <div
                key={index}
                className={`group bg-white rounded-lg p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-100 shadow-md ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                  transitionDuration: '0.8s',
                }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      {program.province}
                    </h3>
                    <p className="text-sm text-blue-600 font-semibold mb-3">
                      {program.program}
                    </p>
                  </div>
                </div>

                <div className="ml-9">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Available Streams:</h4>
                  <ul className="space-y-1">
                    {program.streams.map((stream, streamIndex) => (
                      <li
                        key={streamIndex}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{stream}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Points System Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Points System and Eligibility
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Since each province sets their own eligibility requirements, they use different points systems to determine 
              who can apply or receive an invitation. Points are typically based on a combination of:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">👤</span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Age</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">💼</span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Work Experience</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🎓</span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Education</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🗣️</span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Language</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🔗</span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Provincial Connections</h3>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mt-8">
              Note: Not all nominee programs use a points system to rank their candidates.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Apply for Provincial Nomination?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let Summit Immigration Group help you navigate the Provincial Nominee Program and find the best province 
            for your immigration goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Start Your Application
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProvincialNomineeProgramsPage;
