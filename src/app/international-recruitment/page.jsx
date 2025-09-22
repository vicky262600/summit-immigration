'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const InternationalRecruitmentPage = () => {
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

    const section = document.getElementById('main-content');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const tfwpProcess = [
    {
      step: "1",
      title: "Labour Market Impact Assessment (LMIA)",
      description: "Obtain a Labour Market Impact Assessment (LMIA) from Employment and Social Development Canada (ESDC) that proves there is a need for a foreign worker and that no qualified Canadian is available for the job."
    },
    {
      step: "2", 
      title: "Conduct Recruitment",
      description: "Before applying for an LMIA, employers must advertise the position in Canada for a minimum of four weeks and show proof of genuine recruitment efforts."
    },
    {
      step: "3",
      title: "LMIA Application",
      description: "Employers must submit a detailed LMIA application online through the LMIA Online portal."
    },
    {
      step: "4",
      title: "Apply for Work Permit",
      description: "Once the LMIA is approved, the employer gives a copy of the confirmation letter to the foreign worker, who can then apply for their work permit."
    },
    {
      step: "5",
      title: "Employment Contract",
      description: "Employers must provide the foreign worker with a signed employment contract in either English or French on or before their first day of work."
    }
  ];

  const impProcess = [
    {
      step: "1",
      title: "Determine LMIA Exemption",
      description: "Employers must confirm that their job offer qualifies for an LMIA exemption. Common exemptions include intra-company transfers, international trade agreements, and some co-op or internship programs."
    },
    {
      step: "2",
      title: "Submit Offer of Employment",
      description: "For most positions, the employer must submit the job offer and pay a compliance fee through the Employer Portal."
    },
    {
      step: "3",
      title: "Worker Applies for Work Permit",
      description: "After the employer submits the offer, the foreign worker can apply for their work permit using the offer of employment number."
    }
  ];

  const focusIndustries = [
    "Construction",
    "Education", 
    "Home Support Workers",
    "Agriculture",
    "Manufacturing",
    "Skilled Trades"
  ];

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{ 
            backgroundImage: `url('/recruit.jpg')`,
            backgroundPosition: 'center 20%'
          }}
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
              International Recruitment
            </div>
            
            <h1 
              className={`text-4xl md:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              International Recruitment Services
            </h1>
            
            <p 
              className={`text-xl text-white/90 mb-8 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              Connecting global talent with Canadian employers through specialized recruitment solutions and immigration expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="main-content" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div 
              className={`transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Comprehensive Recruitment Solutions</h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Our firm goes beyond just Canadian Immigration services. Summit Immigration Group also specializes in international recruitment for foreign workers. We source and match skilled workers with employers that are looking for overseas candidates to fill jobs. This may be due to the lack of general labour locally and the urgent need to get a person to start the position quickly.
                </p>
                
                <p>
                  Employers across Canada are struggling to find enough skilled workers, pushing them to seek new hiring solutions. By leveraging our extensive international network, we connect top global talent to meet business needs and enhance productivity.
                </p>
                
                <p>
                  The main industries that we focus on are:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  {focusIndustries.map((industry, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Image src="/finalMark.png" alt="Checkmark" width={20} height={20} className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{industry}</span>
                    </li>
                  ))}
                </ul>
                
                <p>
                  For Canadian employers, recruiting foreign workers involves two main federal programs: the Temporary Foreign Worker Program (TFWP) and the International Mobility Program (IMP). Many companies use immigration lawyers or specialized recruitment agencies to navigate the complex process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TFWP Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div 
              className={`transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Temporary Foreign Worker Program (TFWP)</h2>
              
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  The TFWP is designed for employers who cannot find Canadian citizens or permanent residents to fill temporary labor shortages.
                </p>
                
                <h3 className="text-xl font-semibold text-blue-900 mb-6">Process Overview</h3>
                
                <div className="space-y-6">
                  {tfwpProcess.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-gray-700 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMP Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div 
              className={`transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">International Mobility Program (IMP)</h2>
              
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  The IMP allows employers to hire temporary foreign workers without an LMIA, typically when there is a significant Canadian economic, social, or cultural benefit.
                </p>
                
                <h3 className="text-xl font-semibold text-blue-900 mb-6">Process Overview</h3>
                
                <div className="space-y-6">
                  {impProcess.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-gray-700 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Next Great Employee?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Let our experienced recruitment team help you find the perfect international talent for your business needs. 
              We handle the entire process from sourcing to immigration.
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

export default InternationalRecruitmentPage;
