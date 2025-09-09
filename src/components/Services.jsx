'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

const Services = () => {
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
      category: "Employment"
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Express Entry",
      description: "Expert guidance through the Express Entry system for skilled worker immigration to Canada.",
      category: "Permanent Residence"
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Provincial Nominee Programs",
      description: "Specialized assistance with provincial nomination programs across Canada.",
      category: "Provincial"
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Study Permits",
      description: "Complete guidance for international students seeking educational opportunities in Canada.",
      category: "Education"
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Visitor Visas",
      description: "Professional support for temporary visitor visa applications to Canada.",
      category: "Temporary"
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Super Visas",
      description: "Specialized services for parent and grandparent super visa applications.",
      category: "Family"
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Business Immigration",
      description: "Comprehensive support for entrepreneurs and business investors seeking Canadian residency.",
      category: "Business"
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Spousal Sponsorship",
      description: "Expert assistance with spousal and common-law partner sponsorship applications.",
      category: "Family"
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Citizenship Applications",
      description: "Professional guidance through the Canadian citizenship application process.",
      category: "Citizenship"
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "US Waivers",
      description: "Specialized legal services for US entry waivers and inadmissibility issues.",
      category: "Legal"
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Judicial Review",
      description: "Expert legal representation for judicial review of immigration decisions.",
      category: "Legal"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/immpic1.jpg')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Immigration Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-blue-200 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive immigration solutions for Canada, United Kingdom, and United States. 
            Our expert team provides professional guidance at every step of your journey.
          </p>
        </div>

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
              <button className="text-blue-600 hover:text-yellow-500 font-medium transition-colors duration-300 group-hover:translate-x-1">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div 
          className={`text-center mt-12 transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '1.2s' }}
        >
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Get Detailed Assessment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
