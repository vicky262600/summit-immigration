'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Shield, FileText, AlertTriangle, Clock, Users } from 'lucide-react';

const USWaiversPage = () => {
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

    const section = document.getElementById('us-waivers-info');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Set initial visibility for hero section
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const waiverBenefits = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Peace of Mind Travel",
      description: "Experience peace-of-mind travel when going for a vacation to see friends or family in any state of the USA."
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Advance Permission",
      description: "Grants you advance permission to enter as a non-immigrant when you have criminal charges."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Fast Processing",
      description: "We offer our clients convenience and fast processing with complete documentation."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Personalized Service",
      description: "Our senior case manager will be assigned to your file for personalized attention."
    }
  ];

  const waiverRequirements = [
    {
      title: "Criminal Record",
      description: "Have a criminal record for crimes of moral turpitude"
    },
    {
      title: "Previous Removal",
      description: "Have been previously removed (deported)"
    },
    {
      title: "Overstayed Admission",
      description: "Overstayed a previous period of admission into the United States"
    },
    {
      title: "Controlled Substances",
      description: "Are in possession of or trafficking in a controlled substance"
    },
    {
      title: "Human Trafficking",
      description: "Have been charged for human trafficking"
    },
    {
      title: "Money Laundering",
      description: "Have been involved in money laundering"
    },
    {
      title: "Expired Waiver",
      description: "Have not renewed your previous US Waiver"
    }
  ];

  const importantFacts = [
    {
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
      title: "Serious Consequences",
      description: "If you are inadmissible to the United States and attempt to cross the border, this is a serious offence, which can result in the confiscation of your vehicle, criminal charges and even immigration detention by the US Customs Border Patrol."
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      title: "Pardon Not Recognized",
      description: "Even if you have obtained a Record Suspension/Pardon, it is not recognized by the United States and for this reason a US Entry Waiver is required."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Complete Documentation",
      description: "We help ensure all your documentation is compiled and complete plus ready to be submitted online."
    }
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/uswvr.jfif')` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            US Entry Waivers
          </h1>

          <p
            className={`text-xl text-white/90 mb-8 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            Our firm specializes in obtaining US waivers and Canadian Pardons for clients all across Canada. 
            Overcome your past mistakes and experience peace-of-mind travel when going for a vacation to see friends or family in any state of the USA.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              What is a US Entry Waiver?
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              You will need a US Entry Waiver to enter the United States if you have a criminal record or have overstayed 
              your approved time in the United States. This grants you advance permission to enter as a non-immigrant 
              when you have criminal charges.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Even if you have obtained a Record Suspension/Pardon, it is not recognized by the United States and for 
              this reason a US Entry Waiver is required.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Why Choose Our US Waiver Services?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {waiverBenefits.map((benefit, index) => (
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
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="us-waivers-info" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              US Entry Waiver Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You require a US Entry Waiver I-192 Application if you meet any of the following criteria:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {waiverRequirements.map((requirement, index) => (
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
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">!</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      {requirement.title}
                    </h3>
                    <p className="text-gray-600">{requirement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Facts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Important Information
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {importantFacts.map((fact, index) => (
              <div
                key={index}
                className={`flex items-start gap-6 bg-white rounded-lg p-6 shadow-md transition-all duration-500 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 0.2}s`,
                  transitionDuration: '0.8s',
                }}
              >
                <div className="flex-shrink-0">
                  {fact.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {fact.title}
                  </h3>
                  <p className="text-gray-600">{fact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Our Comprehensive Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">US Waivers</h3>
                <p className="text-gray-600">
                  Specialized assistance with US Entry Waiver applications for individuals with criminal records or immigration violations.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Canadian Pardons</h3>
                <p className="text-gray-600">
                  Complete support for Canadian Record Suspension/Pardon applications to help clear your criminal record.
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Summit Immigration Consulting Group will take the time to understand your individual situation and guide you 
              in the right direction, giving you the peace of mind you need to travel to the USA without interference from your past.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Apply for Your US Entry Waiver?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Don't let your past prevent you from visiting friends and family in the USA. Let our experienced team help you 
            obtain the waiver you need for peace-of-mind travel.
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

export default USWaiversPage;
