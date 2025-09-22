'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ServicesPage = () => {
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

    const section = document.getElementById('services');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Work Permits",
      description: "Professional assistance with work permit applications for temporary employment opportunities in Canada.",
      category: "Employment",
      link: "/work-permits"
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Express Entry",
      description: "Expert guidance through the Express Entry system for skilled worker immigration to Canada.",
      category: "Permanent Residence",
      link: "/express-entry"
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Provincial Nominee Programs",
      description: "Specialized assistance with provincial nomination programs across Canada.",
      category: "Provincial",
      link: "/provincial-nominee-programs"
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Study Permits",
      description: "Complete guidance for international students seeking educational opportunities in Canada.",
      category: "Education",
      link: "/student-permit"
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Visitor Visas",
      description: "Professional support for temporary visitor visa applications to Canada.",
      category: "Temporary",
      link: "/visitor-visa"
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Super Visas",
      description: "Specialized services for parent and grandparent super visa applications.",
      category: "Family",
      link: "/super-visa"
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Business Immigration",
      description: "Comprehensive support for entrepreneurs and business investors seeking Canadian residency.",
      category: "Business",
      link: "/business-immigration"
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Spousal Sponsorship",
      description: "Expert assistance with spousal and common-law partner sponsorship applications.",
      category: "Family",
      link: "/spousal-sponsorship"
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Citizenship Applications",
      description: "Professional guidance through the Canadian citizenship application process.",
      category: "Citizenship",
      link: "/citizenship-applications"
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "US Waivers",
      description: "Specialized legal services for US entry waivers and inadmissibility issues.",
      category: "Legal",
      link: "/us-waivers"
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Judicial Review",
      description: "Expert legal representation for judicial review of immigration decisions.",
      category: "Legal",
      link: "/judicial-review"
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "International Recruitment",
      description: "Specialized recruitment services connecting global talent with Canadian employers.",
      category: "Recruitment",
      link: "/international-recruitment"
    }
  ];

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/immpic1.jpg')` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div 
              className={`inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              Our Services
            </div>
            
            <h1 
              className={`text-4xl md:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              Our Immigration Services
            </h1>
            
            <p 
              className={`text-xl text-white/90 mb-8 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              Comprehensive immigration solutions for Canada, United Kingdom, and United States. 
              Our expert team provides professional guidance at every step of your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`group bg-white rounded-lg p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-100 shadow-md ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  transitionDuration: '0.8s'
                }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <div className="text-xs text-blue-600 font-semibold mb-1">
                      {service.category}
                    </div>
                    <h3 className="text-blue-900 text-lg font-semibold">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <a 
                  href={service.link || '#'} 
                  className="text-blue-600 hover:text-yellow-500 font-medium transition-colors duration-300 group-hover:translate-x-1 inline-block"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Why Choose Summit Immigration?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With years of experience and a proven track record, we provide comprehensive immigration services 
              with personalized attention to each client's unique situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Legal Expertise</h3>
              <p className="text-gray-600">
                Our certified lawyers and immigration consultants have extensive experience in Canadian immigration law.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Personalized Service</h3>
              <p className="text-gray-600">
                Every case is unique. We provide tailored solutions based on your specific circumstances and goals.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Proven Success</h3>
              <p className="text-gray-600">
                Our track record speaks for itself with successful applications and satisfied clients across all immigration programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Just Above Footer */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Immigration Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Our experienced legal team is here to guide you through every step of your immigration process. 
              Get a detailed assessment of your case and discover the best path forward.
            </p>
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

export default ServicesPage;
