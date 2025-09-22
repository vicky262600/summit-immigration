'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, AlertTriangle, Clock, FileText, Scale, Users } from 'lucide-react';

const JudicialReviewPage = () => {
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

    const section = document.getElementById('judicial-review-info');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Set initial visibility for hero section
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const processStages = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Leave Stage",
      description: "You must first obtain 'leave,' or permission, from a Federal Court judge to proceed with the full judicial review. A judge reviews your written arguments to decide if your case has enough merit to be heard.",
      timeline: "45 days to seek leave"
    },
    {
      icon: <Scale className="h-8 w-8 text-blue-600" />,
      title: "Judicial Review Hearing",
      description: "If leave is granted, a hearing is scheduled. Your legal representative will argue your case before a judge, who will review the original decision to determine if an error was made.",
      timeline: "Hearing scheduled after leave granted"
    }
  ];

  const groundsForReview = [
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Error of Law",
      description: "The officer misinterpreted or misapplied a law or policy."
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Procedural Error",
      description: "The decision-maker failed to follow proper procedures, such as denying you a fair chance to present your case."
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Unreasonable Decision",
      description: "The decision was not logical, intelligible, or based on a rational analysis of the facts and law."
    },
    {
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />,
      title: "Breach of Natural Justice",
      description: "The officer acted with bias or a conflict of interest."
    }
  ];

  const importantFacts = [
    {
      title: "Time Limits",
      description: "You have 60 days to start the Judicial Review process for applications made outside Canada and 15 days for applications made inside Canada.",
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />
    },
    {
      title: "No New Evidence",
      description: "You cannot provide new documents or information during the Judicial Review process. You must rely on the materials provided in your application.",
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />
    },
    {
      title: "Process Duration",
      description: "Timeline can range between 2 - 8 months depending on how far you get into the appeal process and if an early resolution can be reached.",
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />
    },
    {
      title: "Success Rate",
      description: "Judicial Review cases can be tough to win and are only reserved for strong applications that have been unjustly refused.",
      icon: <Image src="/finalMark.png" alt="Checkmark" width={44} height={44} className="w-11 h-11" />
    }
  ];

  const specializedServices = [
    "Temporary visa refusals",
    "Permanent visa refusals", 
    "Misrepresentation cases",
    "Exclusion orders",
    "Judicial review seeking mandamus"
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/jreview.jfif')` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Judicial Review
          </h1>

          <p
            className={`text-xl text-white/90 mb-8 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            Judicial review in Canadian immigration is a legal process where the Federal Court of Canada reviews a decision 
            made by an immigration officer or tribunal to determine if it was unreasonable, unfair, or incorrect in law.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              What is Judicial Review?
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Judicial review is not a re-hearing of the original application, and no new evidence can be introduced 
              during the review. It is a legal process where the Federal Court examines whether the immigration officer 
              or tribunal made an error in their decision-making process.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700">
                To cancel your visa refusal, you must challenge the visa officer's decision by appealing to the Federal Court 
                of Canada and arguing that the visa officer did not assess your application correctly. If successful, your 
                application will be re-opened and processed by a different visa officer, with specific instructions not to 
                refuse the application for the same reasons – this is called "re-determination".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Stage Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Federal Court Process
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Two-Stage Process at the Federal Court
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The judicial review process begins with an "Application for Leave and Judicial Review" and consists of two critical stages.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 z-0"></div>
            
            <div className="grid lg:grid-cols-2 gap-8 relative z-10">
              {processStages.map((stage, index) => (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-100 shadow-lg ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 0.3}s`,
                    transitionDuration: '0.8s',
                  }}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stage.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      {stage.title}
                    </h3>
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                      {stage.timeline}
                    </div>
                  </div>
                  <p className="text-gray-600 text-center leading-relaxed">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grounds for Judicial Review */}
      <section id="judicial-review-info" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Legal Grounds
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Grounds for Judicial Review
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              You can seek a judicial review if you believe the immigration officer or tribunal made one of the following errors:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {groundsForReview.map((ground, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200 shadow-lg ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 0.2}s`,
                  transitionDuration: '0.8s',
                }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {ground.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {ground.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{ground.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Important Information
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              What You Need To Know
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {importantFacts.map((fact, index) => (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 0.2}s`,
                    transitionDuration: '0.8s',
                  }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {fact.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                        {fact.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{fact.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Expertise
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-8">
              Our Specialized Judicial Review Services
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto">
              Summit Immigration Consulting Group specializes in Judicial Review for various immigration matters:
            </p>
            
            <div className="max-w-4xl mx-auto">
              <ul className="space-y-4">
                {specializedServices.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                      <span className="text-blue-600 text-lg">•</span>
                    </div>
                    <span className="text-gray-700 font-medium">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-8 shadow-lg mt-12">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Important Notice</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Important:</strong> If there are any flaws in your application, then re-application is the better option. 
                    Judicial Review is only recommended for strong applications that have been unjustly refused.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Help with Judicial Review?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Don't let an unfair immigration decision stand. Let our experienced legal team help you challenge 
            the decision through judicial review and fight for your rights.
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

export default JudicialReviewPage;
