'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, AlertTriangle, Heart, Users, FileText, Shield, DollarSign, Clock } from 'lucide-react';

const SpousalSponsorshipPage = () => {
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

    const section = document.getElementById('sponsorship-info');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Set initial visibility for hero section
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const eligibleSponsors = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Canadian Citizens",
      description: "Full Canadian citizens can sponsor their family members"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Permanent Residents",
      description: "Permanent residents of Canada can sponsor eligible relatives"
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Registered Native Indians",
      description: "Registered Native Indians can sponsor family members"
    }
  ];

  const eligibleRelatives = [
    {
      icon: <Heart className="h-6 w-6 text-pink-500" />,
      title: "Spouse",
      description: "Your legally married spouse"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Common-law Partner",
      description: "Partner you've lived with for at least 12 months"
    },
    {
      icon: <Heart className="h-6 w-6 text-purple-500" />,
      title: "Conjugal Partner",
      description: "Partner in a committed relationship but cannot live together"
    },
    {
      icon: <Users className="h-6 w-6 text-green-500" />,
      title: "Dependent Children",
      description: "Children under 22 or dependent children of any age"
    },
    {
      icon: <Users className="h-6 w-6 text-orange-500" />,
      title: "Parents & Grandparents",
      description: "Parents and grandparents under specific programs"
    },
    {
      icon: <Users className="h-6 w-6 text-red-500" />,
      title: "Orphaned Relatives",
      description: "Orphaned siblings, nephews, nieces, or grandchildren under 18"
    }
  ];

  const sponsorshipRestrictions = [
    {
      icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
      title: "Currently Incarcerated",
      description: "Cannot sponsor while in prison"
    },
    {
      icon: <DollarSign className="h-5 w-5 text-red-500" />,
      title: "Bankruptcy",
      description: "Cannot sponsor if declared bankruptcy and not discharged"
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
      title: "Social Assistance",
      description: "Cannot sponsor if receiving social assistance (except for disability)"
    },
    {
      icon: <DollarSign className="h-5 w-5 text-red-500" />,
      title: "Immigration Loan",
      description: "Cannot sponsor if behind on immigration loan payments"
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
      title: "Family Support",
      description: "Cannot sponsor if behind on alimony or child support (except Quebec)"
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
      title: "Previous Sponsorship",
      description: "Cannot sponsor if previous sponsorship agreement was not met"
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
      title: "Criminal Convictions",
      description: "Cannot sponsor if convicted of violent crimes or sexual offences"
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
      title: "Removal Order",
      description: "Cannot sponsor if under a removal order"
    }
  ];

  const sponsorshipProcesses = [
    {
      title: "Spouse/Partner Sponsorship",
      description: "Used for sponsoring your spouse, conjugal or common-law partner and/or dependent children",
      icon: <Heart className="h-8 w-8 text-pink-500" />
    },
    {
      title: "Other Relatives Sponsorship",
      description: "Used to sponsor other eligible relatives such as parents, grandparents, or orphaned relatives",
      icon: <Users className="h-8 w-8 text-blue-500" />
    }
  ];

  const financialResponsibilities = [
    {
      icon: <DollarSign className="h-6 w-6 text-green-500" />,
      title: "Financial Support",
      description: "You must commit to financially supporting them for up to 20 years"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Government Assistance",
      description: "Ensure your relative doesn't need to seek financial assistance from the government"
    },
    {
      icon: <FileText className="h-6 w-6 text-purple-500" />,
      title: "Withdrawal Rights",
      description: "You can withdraw your sponsorship application before they become permanent residents"
    }
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{ 
            backgroundImage: `url('/spo2.jpg')`,
            backgroundPosition: 'center top 40%'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Spousal Sponsorship
          </h1>

          <p
            className={`text-xl text-white/90 mb-8 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            Summit Immigration Consulting Group realizes the need for the reunification of family. 
            If you are a Canadian citizen, registered Native Indian or a permanent resident of Canada, 
            you can sponsor your spouse and family to become permanent residents.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Family Reunification Through Sponsorship
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Family sponsorship is one of the most important immigration programs in Canada, allowing Canadian citizens, 
              permanent residents, and registered Native Indians to reunite with their loved ones by sponsoring them 
              to become permanent residents of Canada.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700">
                <strong>Quebec Residents:</strong> If you live in Quebec, you must meet Quebec's eligibility requirements 
                for sponsoring another relative and complete an undertaking with the Government of Quebec.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Sponsor */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Eligibility
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Who Can Sponsor?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              You can sponsor your family members if you meet the following criteria:
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {eligibleSponsors.map((sponsor, index) => (
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
                  {sponsor.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {sponsor.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{sponsor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligible Relatives */}
      <section id="sponsorship-info" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Family Members
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Who Can Be Sponsored?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              You can sponsor the following family members to become permanent residents:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {eligibleRelatives.map((relative, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200 shadow-lg ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                  transitionDuration: '0.8s',
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {relative.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {relative.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{relative.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Special Case: Orphaned Relatives</h3>
                <p className="text-gray-700 leading-relaxed">
                  You can sponsor an orphaned brother, sister, nephew, niece or grandchild only if they are related to you by blood or adoption, 
                  under 18 years old, both their parents have passed away and they're single (not married or in a common-law relationship).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Restrictions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Restrictions
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Who Cannot Sponsor?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              You cannot sponsor a relative if you meet any of the following conditions:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {sponsorshipRestrictions.map((restriction, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 border border-red-200 shadow-lg ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                  transitionDuration: '0.8s',
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {restriction.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-red-900 mb-2">
                      {restriction.title}
                    </h3>
                    <p className="text-gray-600">{restriction.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Responsibilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Financial Commitment
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Financial Responsibilities
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              As a sponsor, you have important financial obligations to fulfill:
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {financialResponsibilities.map((responsibility, index) => (
                <div
                  key={index}
                  className={`group bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-green-200 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 0.2}s`,
                    transitionDuration: '0.8s',
                  }}
                >
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {responsibility.icon}
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {responsibility.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{responsibility.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">20-Year Commitment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Important:</strong> When sponsoring a relative to come to Canada as a permanent resident, 
                    you are responsible for supporting your relative financially when they arrive. You must commit to 
                    financially supporting them and their accompanying family members beginning on the date they become 
                    a permanent resident for up to 20 years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Different Processes */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Application Process
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Two Different Processes
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              There are two different processes for sponsoring your family:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {sponsorshipProcesses.map((process, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-100 shadow-lg text-center ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 0.3}s`,
                  transitionDuration: '0.8s',
                }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {process.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Reunite with Your Family?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            The process to sponsor your family can begin today by contacting us. Arrange a consultation with 
            Summit Immigration Consulting Group so we can start the process and reunite you with your spouse or family.
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

export default SpousalSponsorshipPage;
