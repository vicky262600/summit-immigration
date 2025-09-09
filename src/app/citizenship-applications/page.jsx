'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, AlertCircle } from 'lucide-react';

const CitizenshipApplicationsPage = () => {
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

    const section = document.getElementById('citizenship-info');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Set initial visibility for hero section
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const citizenshipInfo = [
    {
      title: "Canadian Citizenship Requirements",
      description: "As a general rule, individuals who are applying for Canadian citizenship must meet the following requirements:",
      requirements: [
        "Be 18 years of age or older",
        "Be a permanent resident of Canada",
        "Meet residency obligations (reside in Canada for 1095 days within last 1460 days – three out of four years)",
        "Meet language requirement (be able to understand and speak basic English or French)",
        "Meet knowledge about Canada requirement (Canada's history, geography, government, and the rights and responsibilities of citizenship)",
        "Must not be involved in an immigration investigation, inquiry or a removal order"
      ]
    },
    {
      title: "Children Under 18 Requirements",
      description: "If the applicant is a child under the age of 18, different requirements apply:",
      requirements: [
        "Must be a permanent resident",
        "It is not necessary that the child lived in Canada for three years",
        "One of the parents must be already a Canadian citizen or is in the process of applying to become a citizen",
        "This applies to adoptive parents also",
        "Language and knowledge requirements do not apply to children"
      ]
    },
    {
      title: "Age Exemptions",
      description: "Certain age groups are exempt from specific requirements:",
      requirements: [
        "Persons 55 years of age and over are exempt from language requirements",
        "Persons 55 years of age and over are exempt from knowledge about Canada requirements",
        "Children under 18 are exempt from language and knowledge requirements"
      ]
    },
    {
      title: "Prohibitions - Criminal History",
      description: "There are prohibitions on an individual applying for Canadian citizenship if criminal history is present:",
      requirements: [
        "In the three years prior to applying, one has been convicted of a criminal offence under the Citizenship Act",
        "Is presently accused of a criminal offence under the Citizenship Act",
        "Is currently, or has been in the last 4 years, in prison, parole, or probation",
        "Has been asked by Canadian officials to leave Canada (under removal order)",
        "Is being investigated for, accused of, or convicted of a war crime or a crime against humanity",
        "Has had their Canadian citizenship removed in the past five years"
      ]
    }
  ];

  const citizenshipTypes = [
    {
      title: "Citizenship by Birth",
      description: "Anyone who is born in Canada is automatically a Canadian citizen.",
      details: "This is the most straightforward path to Canadian citizenship."
    },
    {
      title: "Citizenship by Descent",
      description: "People seeking to acquire Canadian citizenship can do so through descent from Canadian parents.",
      details: "Children born to Canadian parents in the first generation outside Canada can only be Canadian citizens at birth if one parent was born in Canada or one parent became a citizen by immigrating and was later granted citizenship (naturalization)."
    },
    {
      title: "Citizenship by Naturalization",
      description: "Permanent residents can apply for Canadian citizenship through the naturalization process.",
      details: "This requires meeting residency obligations, language requirements, and passing citizenship tests."
    }
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/citizn2.jpeg')` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Canadian Citizenship Applications
          </h1>

          <p
            className={`text-xl text-white/90 mb-8 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            Our team of citizenship experts can help you determine if you are eligible to apply for Canadian citizenship, 
            assist you with your citizenship application, and advise you on the steps you should take to obtain Canadian citizenship.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              How to Become a Canadian Citizen
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Anyone who is born in Canada is automatically a Canadian citizen. However, people seeking to acquire Canadian citizenship 
              can do so in a number of ways. In certain situations, a person who was not born in Canada can apply for a certificate of 
              citizenship showing that he or she derived citizenship at birth from a Canadian citizen living abroad.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Children born to Canadian parents in the first generation outside Canada can only be Canadian citizens at birth if one parent 
              was born in Canada or one parent became a citizen by immigrating and was later granted citizenship (naturalization).
            </p>
          </div>
        </div>
      </section>

      {/* Types of Citizenship */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Ways to Obtain Canadian Citizenship
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {citizenshipTypes.map((type, index) => (
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
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <p className="text-sm text-gray-500">{type.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citizenship Requirements */}
      <section id="citizenship-info" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Citizenship Requirements and Information
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {citizenshipInfo.map((info, index) => (
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
                      {info.title.includes('Prohibitions') ? (
                        <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      )}
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Additional Citizenship Services
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Summit Immigration Group handles all citizenship matters for our clients that also include citizenship refusals, 
              citizenship revocation, passport refusals and passport applications. Schedule a consultation with our Citizenship 
              and Immigration specialist anytime.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Citizenship Appeals</h3>
                <p className="text-gray-600">We help with citizenship refusals and appeals to ensure your rights are protected.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Passport Services</h3>
                <p className="text-gray-600">Assistance with passport applications and handling passport refusals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Apply for Canadian Citizenship?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Reach out to Summit Immigration Group today and let our citizenship experts help you with your application.
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

export default CitizenshipApplicationsPage;
