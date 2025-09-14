'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, BookOpen, DollarSign, FileText, Shield, Globe, Users, Award, Briefcase, Clock, TrendingUp, GraduationCap } from 'lucide-react';

const StudentPermitPage = () => {
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

    const section = document.getElementById('student-permit-info');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Set initial visibility for hero section
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const eligibilityRequirements = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Enrolled at a DLI",
      description: "You must be enrolled at a Designated Learning Institution (DLI) in Canada to apply for a study permit.",
      details: [
        "Acceptance letter from an accredited college or university",
        "Valid enrollment at a DLI recognized by the Canadian government"
      ]
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      title: "Proof of Financial Support",
      description: "You must demonstrate that you have sufficient funds to cover tuition fees and living expenses.",
      details: [
        "Minimum $20,635 CAD available for living expenses",
        "Guaranteed Investment Certificate (GIC) is the most common way",
        "Bank statements showing sufficient funds"
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Clean Background",
      description: "You must have no criminal record and be in good health to study in Canada.",
      details: [
        "No criminal record",
        "Police certificate (if required)",
        "Medical examination if required",
        "Good health status"
      ]
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: "Intent to Leave Canada",
      description: "You must convince an immigration officer that you will leave Canada when your study permit expires.",
      details: [
        "Ties to your home country",
        "Clear study plan and career goals",
        "Evidence of return intentions"
      ]
    }
  ];

  const requiredDocuments = [
    {
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      title: "Acceptance Letter",
      description: "Official letter from an accredited Canadian college or university"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-green-500" />,
      title: "Provincial Attestation Letter",
      description: "Required letter from the province where you'll be studying (Quebec Acceptance Certificate in Quebec)"
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      title: "Proof of Identity",
      description: "Valid passport copy and other identity documents"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-orange-500" />,
      title: "Proof of Funding",
      description: "Evidence of at least $20,635 CAD for living expenses"
    }
  ];

  const additionalDocuments = [
    {
      title: "Letter of Explanation",
      description: "Detailed explanation of your study plans and career goals"
    },
    {
      title: "Medical Examination",
      description: "Proof of medical exam if required for your country of origin"
    },
    {
      title: "Custodial Declaration",
      description: "Required for minor students (under 18 years old)"
    },
    {
      title: "Language Proficiency",
      description: "IELTS, TOEFL, or other language test results if required"
    }
  ];

  const prPathways = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Express Entry",
      description: "Former international students are well-positioned for Express Entry, especially the Canadian Experience Class (CEC).",
      benefits: [
        "Canadian education and work experience highly valued",
        "CRS points for Canadian education",
        "Access to Canadian Experience Class program",
        "Fast-track to permanent residence"
      ]
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Provincial Nominee Program (PNP)",
      description: "Many PNP streams specifically target former international students or reward Canadian education.",
      benefits: [
        "Province-specific programs for graduates",
        "Priority processing for Canadian graduates",
        "Additional pathways to permanent residence",
        "Regional opportunities across Canada"
      ]
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Post-Graduation Work Permit (PGWP)",
      description: "Work in Canada for up to three years after graduation, gaining valuable Canadian work experience.",
      benefits: [
        "Up to 3 years of work authorization",
        "No job offer required initially",
        "Open work permit - work for any employer",
        "Bridge to permanent residence programs"
      ]
    },
    {
      icon: <Briefcase className="h-8 w-8 text-orange-600" />,
      title: "Quebec Immigration",
      description: "Quebec operates its own immigration system with programs specifically for international students.",
      benefits: [
        "Quebec-specific immigration programs",
        "Popular destination for international students",
        "Montreal as a major educational hub",
        "Specialized immigration pilot programs"
      ]
    }
  ];

  const studyPermitUpdates = [
    {
      icon: <TrendingUp className="h-6 w-6 text-red-500" />,
      title: "2025 Study Permit Cap",
      description: "Study permit cap revised to 437,000 permits, including master's and PhD students."
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      title: "Provincial Allocation",
      description: "IRCC allocates portions of the cap to provincial and territorial governments."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-green-500" />,
      title: "DLI Distribution",
      description: "Provinces distribute allocations among Designated Learning Institutions."
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-purple-500" />,
      title: "Advanced Degree Priority",
      description: "Master's and PhD students included in the overall cap allocation."
    }
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url('/stu.jpg')`, backgroundPosition: 'center 20%' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Study Permits
          </h1>

          <p
            className={`text-xl text-white/90 mb-8 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            Are you interested in studying in Canada? Summit Immigration Consulting Group can assist you in obtaining your Study Permit. 
            The study permit is a document issued by the Government of Canada that allows foreign nationals to study at designated learning institutions (DLIs) in Canada.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              About Study Permits
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Most foreign nationals need a study permit to study in Canada. Most students require a study permit, but not all. 
              We will assess your goals and study plans to determine your eligibility and the best options for your educational journey in Canada.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700">
                <strong>Important:</strong> A study permit is a document that allows you to study at designated learning institutions (DLIs) in Canada. 
                It's not a visa - you may also need a visitor visa or an Electronic Travel Authorization (eTA) to enter Canada.
              </p>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Our experienced team will guide you through the entire process, from initial assessment to obtaining your study permit 
              and preparing for your educational journey in Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Requirements
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Eligibility Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Once we assess your file, we always let clients know that they can come to Canada to study once they meet these requirements:
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {eligibilityRequirements.map((requirement, index) => (
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
                    {requirement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {requirement.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{requirement.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Points:</h4>
                      <ul className="space-y-1">
                        {requirement.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
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

      {/* Required Documents */}
      <section id="student-permit-info" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Documentation
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Required Documents
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              You'll need several documents as part of your application for a study permit. Don't apply for a permit without these documents:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {requiredDocuments.map((document, index) => (
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
                  {document.icon}
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {document.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{document.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Documents */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Other Documents That May Be Needed</h3>
              <p className="text-gray-600 mb-6 text-center">
                You may be asked for additional documents, like a letter of explanation, proof of a medical exam, or a custodial declaration for minor students. 
                You'll find all the details on the Immigration, Refugees, and Citizenship Canada (IRCC) website.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {additionalDocuments.map((doc, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-yellow-200">
                    <h4 className="font-semibold text-blue-900 mb-2">{doc.title}</h4>
                    <p className="text-sm text-gray-600">{doc.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Study Permit Updates */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Recent Updates
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              2025 Study Permit Cap Updates
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Important changes to the study permit system for 2025:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {studyPermitUpdates.map((update, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-200 shadow-lg ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                  transitionDuration: '0.8s',
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {update.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {update.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{update.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200 text-center">
              <p className="text-lg text-gray-700">
                <strong>In 2025, the study permit cap was revised to 437,000 study permits, which will include master's and PhD students as well.</strong> 
                IRCC will allocate a portion of the overall study permit cap to provincial and territorial governments, who will then distribute 
                this allocation among DLIs in their jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Study Pathways to PR */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Future Opportunities
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Study Pathways to Permanent Residence (PR)
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              International students who complete post-secondary education in Canada have many opportunities to extend their stay and acquire permanent residency. 
              Many federal and provincial immigration programs value candidates with Canadian education and work experience.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {prPathways.map((pathway, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-100 shadow-lg ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 0.2}s`,
                  transitionDuration: '0.8s',
                }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {pathway.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {pathway.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{pathway.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {pathway.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Post-Graduation Work Permit (PGWP)</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                After completing your education in Canada, you can gain Canadian work experience by obtaining a Post-Graduation Work Permit (PGWP) which, 
                depending on your Canadian academic program, may enable you to work in Canada for up to three years. With a PGWP, you can pursue a number of 
                federal and provincial permanent residence avenues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Canadian Education Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Summit Immigration Consulting Group is a recognized name in Canadian immigration. Our legal team has the 
            expertise to handle your study permit application from start to finish. Get started with a consultation today 
            to discuss your educational goals and eligibility for studying in Canada.
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

export default StudentPermitPage;
