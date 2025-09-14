'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Users, Briefcase, Award, Globe, FileText, Clock, TrendingUp } from 'lucide-react';

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

  const expressEntryPrograms = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Federal Skilled Worker Program (FSWP)",
      description: "For skilled workers with foreign work experience. Requires at least one year of continuous, full-time skilled work experience in the last 10 years.",
      requirements: [
        "At least one year of continuous, full-time skilled work experience in the last 10 years",
        "Minimum language proficiency",
        "Completed post-secondary education assessed against Canadian standards"
      ]
    },
    {
      icon: <Briefcase className="h-8 w-8 text-green-600" />,
      title: "Canadian Experience Class (CEC)",
      description: "For skilled workers with Canadian work experience. Requires at least one year of skilled work experience in Canada within the last three years.",
      requirements: [
        "At least one year of skilled work experience in Canada within the last three years",
        "Meeting minimum language proficiency for the job's skill level"
      ]
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Federal Skilled Trades Program (FSTP)",
      description: "For skilled workers with a certificate of qualification in a skilled trade. Requires at least two years of full-time work experience in a skilled trade.",
      requirements: [
        "At least two years of full-time work experience in a skilled trade within the last five years",
        "Meeting language requirements",
        "Having either a valid job offer for at least one year or a certificate of qualification from a Canadian province or territory"
      ]
    }
  ];

  const crsFactors = [
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Age",
      description: "Younger candidates receive more points"
    },
    {
      icon: <Award className="h-6 w-6 text-green-500" />,
      title: "Education",
      description: "Higher education levels earn more points"
    },
    {
      icon: <Briefcase className="h-6 w-6 text-purple-500" />,
      title: "Work Experience",
      description: "More years of skilled work experience increase points"
    },
    {
      icon: <Globe className="h-6 w-6 text-orange-500" />,
      title: "Language Skills",
      description: "Proficiency in English and/or French is crucial"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Create Express Entry Profile",
      description: "Submit your profile online with your qualifications and skills."
    },
    {
      step: "2",
      title: "Receive CRS Score",
      description: "Get ranked using the Comprehensive Ranking System (CRS)."
    },
    {
      step: "3",
      title: "Wait for Invitation",
      description: "Highest-ranking candidates are invited to apply for permanent residence."
    },
    {
      step: "4",
      title: "Submit Application",
      description: "You have 90 days to submit your complete application with all documents."
    },
    {
      step: "5",
      title: "Become Permanent Resident",
      description: "After approval, you and your dependents can land in Canada as Permanent Residents."
    }
  ];

  const recentChanges = [
    {
      icon: <TrendingUp className="h-6 w-6 text-red-500" />,
      title: "Job Offer Points Removed",
      description: "Effective March 25, 2025, points for job offers have been removed to reduce fraud."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Focus on Canadian Experience",
      description: "2025 invitation rounds are focusing on candidates with Canadian work experience."
    },
    {
      icon: <Globe className="h-6 w-6 text-green-500" />,
      title: "French Language Priority",
      description: "French-language speakers are receiving priority in invitation rounds."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-purple-500" />,
      title: "Category-Based Draws",
      description: "Focus on specific categories like Healthcare, Trades, and newly introduced Education category."
    }
  ];

  const pnpIntegration = [
    {
      title: "Provincial Nominee Program (PNP)",
      description: "Some PNPs work with Express Entry. A provincial nomination adds 600 CRS points.",
      icon: <Globe className="h-8 w-8 text-blue-600" />
    }
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/Canada-Express.jpg')` }}
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

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              How Express Entry Works
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The system creates a pool of eligible candidates and ranks them using a points-based system called the 
              Comprehensive Ranking System (CRS) based on criteria such as their age, education, work experience, and language skills. 
              The highest-ranking candidates are regularly invited to apply for permanent residence.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700">
                <strong>Important:</strong> Upon receiving an Invitation to Apply (ITA), you have 90 days to submit an 
                application for permanent residence with all necessary accompanying documents. All required documents must be 
                submitted within this timeline.
              </p>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              After completing the process, you and your dependents (spouse and children) can land in Canada as 
              Permanent Residents and be on your way to becoming Canadian Citizens.
            </p>
          </div>
        </div>
      </section>

      {/* Express Entry Programs */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Three Programs
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Express Entry Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To be eligible for the Express Entry pool, you must qualify for one of three federal economic immigration programs:
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {expressEntryPrograms.map((program, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-100 shadow-lg ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 0.2}s`,
                  transitionDuration: '0.8s',
                }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {program.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{program.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {program.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRS Factors */}
      <section id="express-entry-info" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Ranking System
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Comprehensive Ranking System (CRS)
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The CRS ranks candidates based on several key factors:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {crsFactors.map((factor, index) => (
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
                  {factor.icon}
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {factor.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Application Process
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Express Entry Process
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Follow these steps to apply through Express Entry:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-6 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 0.2}s`,
                    transitionDuration: '0.8s',
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Changes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Recent Updates
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Recent Changes to Express Entry
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Important updates for 2025:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {recentChanges.map((change, index) => (
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
                    {change.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {change.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{change.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PNP Integration */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Provincial Integration
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Provincial Nominee Program Integration
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {pnpIntegration.map((pnp, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-200 text-center ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 0.2}s`,
                  transitionDuration: '0.8s',
                }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {pnp.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {pnp.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{pnp.description}</p>
              </div>
            ))}
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
