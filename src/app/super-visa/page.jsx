'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, FileText, Shield, Calendar, Users, AlertCircle } from 'lucide-react';

const SuperVisaPage = () => {
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

    const section = document.getElementById('super-visa-info');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Set initial visibility for hero section
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const superVisaBenefits = [
    {
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      title: "Extended Stay",
      description: "Visit Canada for up to 5 years without having to renew your status."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Family Reunification",
      description: "Perfect for parents and grandparents to spend extended time with their Canadian family."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Multiple Entries",
      description: "Provides multiple entries for a period of up to 10 years."
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Extension Available",
      description: "Apply for an extension of 2 years, enabling up to 7 years on a single stay."
    }
  ];

  const requiredDocuments = [
    {
      title: "Letter of Invitation",
      description: "A letter of invitation from the child or grandchild residing in Canada."
    },
    {
      title: "LICO Documentation",
      description: "Documents that prove the child or grandchild meets the Low Income Cut-Off (LICO) minimum income requirements."
    },
    {
      title: "Proof of Relationship",
      description: "Proof of parental relationship with child or grandchild, such as a birth certificate that names him or her as a parent."
    },
    {
      title: "Medical Insurance",
      description: "Proof of medical insurance coverage for at least one year with a Canadian insurance company."
    }
  ];

  const applicationProcess = [
    {
      step: "1",
      title: "Gather Documentation",
      description: "Collect all required documents including invitation letter, LICO proof, relationship documents, and medical insurance."
    },
    {
      step: "2",
      title: "Submit Application",
      description: "Submit your application to the Canadian visa office responsible for your place of residence outside of Canada."
    },
    {
      step: "3",
      title: "Medical Examination",
      description: "Undergo a medical examination. Forms and instructions will be issued by the visa office after application submission."
    },
    {
      step: "4",
      title: "Assessment & Decision",
      description: "Your application will be assessed for visit purpose, ties to home country, and other factors."
    }
  ];

  const importantNotes = [
    "All Super Visa applicants will be required to undergo a medical examination",
    "You must have valid health insurance policy while in Canada",
    "If your health insurance expires before you leave Canada, you may need to renew it during your stay",
    "Private health insurance must be valid for each entry to Canada",
    "Be prepared to show proof of paid insurance to an Immigration officer upon entry to Canada"
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/svisa.webp')` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Super Visa
          </h1>

          <p
            className={`text-xl text-white/90 mb-8 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            Do you need Super Visa assistance? Summit Immigration Consulting Group can help. We have the expertise to 
            represent your best interests regarding the submission of your application to the Canadian government.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              What is a Super Visa?
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              This type of visa will allow eligible parents and grandparents of Canadian citizens, permanent residents 
              or registered Indians to visit their family in Canada for up to 5 years without having to renew their status.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Those with a Super Visa already will also be able to apply for an extension of 2 years that may enable 
              them to remain in Canada as a visitor for up to 7 years on a single stay. It provides multiple entries 
              for a period of up to 10 years.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Super Visa Benefits
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {superVisaBenefits.map((benefit, index) => (
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

      {/* Required Documents */}
      <section id="super-visa-info" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Required Documentation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The application process is similar to that for a regular TRV. However, additional documentation is required 
              to ensure that the parents and grandparents will be well supported during their time in Canada.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {requiredDocuments.map((doc, index) => (
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
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600">{doc.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Application Process
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {applicationProcess.map((step, index) => (
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
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Factors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Application Assessment
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The complete application will be assessed with regard to a number of factors. The purpose of the visit 
              to Canada will be examined, as well as whether the parents or grandparents will maintain sufficient 
              ties to their home country.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700">
                This can be illustrated by showing family ties, finances, and other connections that lie outside of Canada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Important Notes
              </h2>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <ul className="space-y-4">
                {importantNotes.map((note, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <AlertCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Apply for Your Super Visa?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Contact us to receive a free telephone consultation on the Super Visa. Let Summit Immigration Group 
            help you reunite with your family in Canada.
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

export default SuperVisaPage;
