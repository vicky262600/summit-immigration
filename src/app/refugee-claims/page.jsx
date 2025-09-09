'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { 
  Shield, 
  Users, 
  FileText, 
  Clock, 
  CheckCircle, 
  Globe,
  Heart,
  Home,
  ArrowRight,
  Scale
} from "lucide-react";
import { useEffect, useState } from "react";

const RefugeeClaimsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClaimsVisible, setIsClaimsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('refugee-claims');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const claimsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsClaimsVisible(true);
      },
      { threshold: 0.1 }
    );

    const claimsSection = document.getElementById('claims-types');
    if (claimsSection) claimsObserver.observe(claimsSection);

    return () => claimsObserver.disconnect();
  }, []);

  const claimTypes = [
    {
      title: "Government Assisted Refugees (GARs)",
      description: "Support for refugees selected by the government for resettlement in Canada. These refugees are identified by the United Nations High Commissioner for Refugees (UNHCR) and other referral organizations.",
      icon: Globe,
      details: [
        "Refugees selected abroad by Canadian government",
        "Comprehensive settlement support provided",
        "Medical and security screening completed overseas",
        "Direct pathway to permanent residence upon arrival"
      ]
    },
    {
      title: "Privately Sponsored Refugees (PSRs)",
      description: "Assistance with private sponsorship applications where Canadian citizens or permanent residents sponsor refugees directly. This program allows communities to take an active role in refugee resettlement.",
      icon: Heart,
      details: [
        "Private sponsorship by Canadian citizens or PRs",
        "Sponsors provide financial and settlement support",
        "12-month sponsorship commitment required",
        "Combined with government assistance programs"
      ]
    },
    {
      title: "Protected Persons in Canada",
      description: "Help for those seeking protection while already in Canada. This includes refugee claimants who have made claims from within Canada and are awaiting decisions on their protection status.",
      icon: Shield,
      details: [
        "In-Canada refugee claims",
        "Pre-Removal Risk Assessment (PRRA)",
        "Work permits available during processing",
        "Access to healthcare and social services"
      ]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Assessment of your situation and eligibility for refugee protection."
    },
    {
      step: "2", 
      title: "Documentation",
      description: "Gather and prepare all required documents and evidence."
    },
    {
      step: "3",
      title: "Application Filing",
      description: "Submit your refugee claim application to the appropriate authority."
    },
    {
      step: "4",
      title: "Hearing Preparation",
      description: "Prepare for your refugee hearing with expert legal representation."
    },
    {
      step: "5",
      title: "Decision & Follow-up",
      description: "Support through the decision process and next steps."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section id="refugee-claims" className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative min-h-[500px] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/refugeeBG.jpg')` }}
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
                Refugee Claims & Protection
              </div>
              <h1 
                className={`text-4xl md:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '0.4s' }}
              >
                Don't Lose Hope – Seek Protection in Canada
              </h1>
              <p 
                className={`text-xl text-white/90 mb-8 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '0.6s' }}
              >
                If you fear persecution in your home country based on your race, religion, political opinion, nationality, or membership in a particular social group, Canada offers protection. The Refugee Protection Division (RPD) hears refugee claims and determines if you qualify for protection in Canada.
              </p>
              <button 
                className={`bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5`}
                style={{ transitionDelay: '0.8s' }}
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Our Expertise Section */}
        <div id="claims-types" className="py-20 relative">
          {/* Sticky Background Image */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('/refugeeSticky.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              backgroundRepeat: 'no-repeat'
            }}
          />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Our Expertise
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">
                Types of Refugee Claims We Handle
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Summit Immigration Consulting Group assists all clients with the following types of refugee claims and protection applications.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {claimTypes.map((claim, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 ${
                    isClaimsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <claim.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">{claim.title}</h3>
                    <p className="text-gray-600 mb-6">{claim.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-blue-900 mb-3">Key Features:</h4>
                    {claim.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Our Refugee Claim Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We guide you through every step of the refugee claim process with expert legal representation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Refugee Protection Division & PRRA */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Refugee Protection Division */}
              <div className="space-y-6">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/refugee1.jpg"
                    alt="Refugee Protection Division Process"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    Refugee Protection Division (RPD)
                  </h3>
                  <p className="text-gray-600 mb-4">
                    The Refugee Protection Division, usually at a hearing, will decide whether the ground referred to is genuine or not, or whether there are other grounds of persecution.
                  </p>
                  <p className="text-gray-600">
                    In Canada, refugee claimants are allowed to work and earn their own living until their case is heard by the Refugee Protection Division. If their case is approved, they are allowed to apply for permanent resident status.
                  </p>
                </div>
              </div>

              {/* PRRA */}
              <div className="space-y-6">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/refugee2.jpg"
                    alt="Pre-Removal Risk Assessment Process"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    Pre-Removal Risk Assessment (PRRA)
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A pre-removal risk assessment or PRRA is a paper-based application where a person can make a claim for protection. These applications are available to individuals who are either precluded from making a refugee claim or who have already made a refugee claim, but more than a year has passed since their refugee claim was decided.
                  </p>
                  <p className="text-gray-600">
                    With a few exceptions, the decision maker will take into consideration the same kinds of factors to determine if a person is at risk in their country of origin that a member of the Refugee Protection Division (RPD) would take into consideration at a refugee hearing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-20 bg-gradient-to-r from-blue-900 to-blue-600">
          <div className="container mx-auto px-6">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Help with Your Refugee Claim?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                If you would like to find out more information about your pre-removal risk assessment application, you can set up a consultation. Summit Immigration consulting group deals with all cases that may fall within the Refugee Protection Division guidelines.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="flex items-center justify-center space-x-3">
                  <Clock className="h-6 w-6 text-yellow-400" />
                  <span className="font-semibold">24/7 Urgent Support</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400" />
                  <span className="font-semibold">Multilingual Support</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Shield className="h-6 w-6 text-yellow-400" />
                  <span className="font-semibold">Confidential Service</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Users className="h-6 w-6 text-yellow-400" />
                  <span className="font-semibold">Expert Legal Team</span>
                </div>
              </div>

              <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default RefugeeClaimsPage;