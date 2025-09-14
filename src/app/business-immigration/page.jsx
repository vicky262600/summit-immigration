'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Briefcase, DollarSign, Users, FileText, Globe, Building, TrendingUp } from 'lucide-react';

const BusinessImmigrationPage = () => {
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

    const section = document.getElementById('business-info');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Set initial visibility for hero section
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const businessPrograms = [
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "Start-up Visa Program",
      description: "Targets immigrant entrepreneurs with skills to build innovative businesses that create jobs and compete globally."
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Provincial Nominee Programs",
      description: "Each province has business immigration programs with specific criteria for entrepreneurs and investors."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-purple-600" />,
      title: "Quebec Investor Program",
      description: "Specialized program for investors looking to establish businesses in Quebec."
    }
  ];

  const provincialPrograms = [
    {
      province: "British Columbia",
      icon: <Building className="h-5 w-5 text-blue-500" />
    },
    {
      province: "Manitoba",
      icon: <Building className="h-5 w-5 text-green-500" />
    },
    {
      province: "New Brunswick",
      icon: <Building className="h-5 w-5 text-purple-500" />
    },
    {
      province: "Ontario",
      icon: <Building className="h-5 w-5 text-orange-500" />
    },
    {
      province: "Prince Edward Island",
      icon: <Building className="h-5 w-5 text-red-500" />
    },
    {
      province: "Saskatchewan",
      icon: <Building className="h-5 w-5 text-yellow-500" />
    },
    {
      province: "Nova Scotia",
      icon: <Building className="h-5 w-5 text-indigo-500" />
    },
    {
      province: "North West Territories",
      icon: <Building className="h-5 w-5 text-gray-500" />
    }
  ];

  const businessVisitorActivities = [
    {
      icon: <Briefcase className="h-6 w-6 text-blue-500" />,
      title: "Business Meetings & Conferences",
      description: "Attending business meetings, conferences, conventions, fairs, etc."
    },
    {
      icon: <DollarSign className="h-6 w-6 text-green-500" />,
      title: "Buying Canadian Goods/Services",
      description: "Buying Canadian goods or services on behalf of a foreign entity"
    },
    {
      icon: <FileText className="h-6 w-6 text-purple-500" />,
      title: "Taking Orders",
      description: "Taking orders for goods or services"
    },
    {
      icon: <Users className="h-6 w-6 text-orange-500" />,
      title: "After-Sales Service",
      description: "Providing after-sales service, excluding hands-on work in construction trades"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-red-500" />,
      title: "Training Programs",
      description: "Being trained by a Canadian parent company for work outside of Canada"
    }
  ];

  const eligibilityRequirements = [
    {
      icon: <Briefcase className="h-6 w-6 text-blue-500" />,
      title: "Business Experience",
      description: "A proven record in business or senior management is often required."
    },
    {
      icon: <FileText className="h-6 w-6 text-green-500" />,
      title: "Designated Support",
      description: "For programs like the Start-up Visa, you must obtain a Letter of Support from a designated organization."
    },
    {
      icon: <DollarSign className="h-6 w-6 text-purple-500" />,
      title: "Net Worth",
      description: "A minimum personal net worth is usually specified by provincial programs."
    },
    {
      icon: <Users className="h-6 w-6 text-orange-500" />,
      title: "Investment & Job Creation",
      description: "You must commit to investing a certain amount and creating jobs for Canadians."
    },
    {
      icon: <Globe className="h-6 w-6 text-red-500" />,
      title: "Language Proficiency",
      description: "You must demonstrate a certain level of skill in English or French by providing official test results."
    },
    {
      icon: <DollarSign className="h-6 w-6 text-yellow-500" />,
      title: "Settlement Funds",
      description: "You need to prove you have sufficient personal funds to support yourself and your family."
    },
    {
      icon: <FileText className="h-6 w-6 text-indigo-500" />,
      title: "Business Plan",
      description: "A comprehensive business plan outlining your proposed venture is typically required."
    }
  ];

  const startupVisaRequirements = [
    {
      title: "Designated Organization Support",
      description: "You must pitch your qualifying start-up to a designated organization and get their support."
    },
    {
      title: "Language Requirements",
      description: "You must meet the language requirements in English or French."
    },
    {
      title: "Settlement Funds",
      description: "You must bring enough money to settle in Canada."
    },
    {
      title: "Work Authorization",
      description: "You might be able to work in Canada while waiting if your business provides significant economic benefit."
    }
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/business1.jpg')` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Business Immigration
          </h1>

          <p
            className={`text-xl text-white/90 mb-8 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            Business immigration allows entrepreneurs, investors, and self-employed individuals to immigrate by investing in 
            or starting a business in Canada. The main reason for this Immigration Pathway is the contribution to economic 
            development and job creation.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Economic Development Through Business Immigration
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Business Immigration programs main aim is to attract individuals with venture capital and business acumen, 
              fostering Canada's economic growth and improving access to international markets. Key programs include Canada's 
              federal Start-up Visa Program and Provincial Nominee Programs (PNPs).
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700">
                <strong>Provincial Programs:</strong> Each of Canada's provinces has its own small immigration program whereby 
                the provincial government can nominate individuals for immigration to their province based on their own specific criteria. 
                Once nominated by a province, the individual can apply for permanent residence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Programs */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Key Programs
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Main Business Immigration Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Canada offers several pathways for business immigration:
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {businessPrograms.map((program, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-100 shadow-lg text-center ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 0.2}s`,
                  transitionDuration: '0.8s',
                }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provincial Programs */}
      <section id="business-info" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Provincial Programs
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Provincial Nominee Programs (PNPs)
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Different Business Immigration programs are currently available by each province:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {provincialPrograms.map((program, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-200 shadow-lg text-center ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                  transitionDuration: '0.8s',
                }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {program.icon}
                </div>
                <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                  {program.province}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start-up Visa Program */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Start-up Visa
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Start-up Visa Program
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Canada's Start-up Visa Program targets immigrant entrepreneurs with the skills and potential to build businesses 
              in Canada (outside Quebec) that are innovative, creates jobs for Canadians and can compete on a global scale.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {startupVisaRequirements.map((requirement, index) => (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-200 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 0.2}s`,
                    transitionDuration: '0.8s',
                  }}
                >
                  <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {requirement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{requirement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Visitors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Business Visitors
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Business Visitor Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              There are a number of reasons why an individual may come to Canada as a business visitor:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {businessVisitorActivities.map((activity, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-200 shadow-lg ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                  transitionDuration: '0.8s',
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Important Note</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Business Visitor category facilitates entry for individuals (without a work permit) who engage in business 
                  or trade activities in Canada but will not enter the Canadian labour market. Individuals who plan to enter the 
                  Canadian labour market may require a Temporary Work Permit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Requirements
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              General Eligibility Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To be eligible for business immigration, applicants typically must meet several criteria:
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eligibilityRequirements.map((requirement, index) => (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-200 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 0.1}s`,
                    transitionDuration: '0.8s',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {requirement.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                        {requirement.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{requirement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Business in Canada?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Contact Summit Immigration Consulting Group to set up an appointment so we can discuss your business goals 
            and options for expanding into Canada.
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

export default BusinessImmigrationPage;
