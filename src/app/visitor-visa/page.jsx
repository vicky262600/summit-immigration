'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

const VisitorVisaPage = () => {
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

    const section = document.getElementById('visitor-visa-info');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Set initial visibility for hero section
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const visaInfo = [
    {
      title: "Visitor Visa Requirements",
      description: "To qualify for a visitor visa, you must satisfy an immigration officer that you meet several requirements:",
      requirements: [
        "Have a valid travel document, such as a passport.",
        "Be in good health and have no medical issue",
        "No criminal or immigration-related convictions.",
        "Your intention is to return to your home country and you will leave Canada at the end of your stay",
        "Have enough money in your bank account to cover your expenses during your stay."
      ]
    },
    {
      title: "Inadmissibility to Canada",
      description: "There are instances where an individual is inadmissible to Canada, which means they are not allowed to enter the country. This can be for several reasons, including:",
      requirements: [
        "Being involved in criminal activity",
        "Human rights violation and organized crime",
        "Security reasons",
        "Health reasons", 
        "Financial reasons"
      ]
    }
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{ 
            backgroundImage: `url('/visvisa2.jpg')`,
            backgroundPosition: 'center top 15%'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Visitor Visa
          </h1>

          <p
            className={`text-xl text-white/90 mb-8 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            Summit Immigration Consulting Group specializes in Visitor and Tourist Visa applications for our clients. 
            A visitor visa is an official document placed in your passport that allows foreign nationals to enter Canada for a temporary stay.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              What is a Visitor Visa?
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              A visitor visa is an official document placed in your passport that allows foreign nationals to enter Canada for a temporary stay. 
              It is also known as a Temporary Resident Visa. Most visitors are allowed to stay for up to six months.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Note that visitors are persons who are not Canadian citizens or permanent residents of Canada, and are legally authorized to enter 
              Canada to visit Canada on holiday as a tourist, visit family members or conduct business affairs. You need a visitor visa unless you are from a 
              visa-exempt country. An Electronic Travel Authorization (eTA) is required for most visa-exempt travelers arriving in Canada by air.
            </p>
          </div>
        </div>
      </section>

      {/* Visitor Visa Information */}
      <section id="visitor-visa-info" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Visitor Visa Information
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {visaInfo.map((info, index) => (
              <div
                key={index}
                className={`group bg-white rounded-lg p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-100 shadow-md ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 0.2}s`,
                  transitionDuration: '0.8s',
                }}
              >
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-600 mb-6">{info.description}</p>

                <ul className="space-y-2">
                  {info.requirements.map((req, reqIndex) => (
                    <li
                      key={reqIndex}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Apply for Your Visitor Visa?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Reach out to Summit Immigration Group today and let us help you to get a visitor visa.
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

export default VisitorVisaPage;
