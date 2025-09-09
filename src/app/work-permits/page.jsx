'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';

const WorkPermitsPage = () => {
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

    const section = document.getElementById('work-permits');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const permitTypes = [
    {
      title: "Employer-Specific Work Permit",
      description:
        "This is the most common type, linking you to a single employer, job, and location.",
      requirements: [
        "Requires a Labour Market Impact Assessment (LMIA): For most jobs, your Canadian employer must apply for a positive LMIA from Employment and Social Development Canada (ESDC). This confirms a need for a foreign worker because no Canadian citizen or permanent resident is available for the job.",
        "We always let clients know that this work permit requires an LMIA-exempt offer of employment: Some roles do not require an LMIA under programs like the International Mobility Program (IMP), which covers international agreements (such as CUSMA), intra-company transfers, or work that is in Canada's national interest.",
        "Quebec requirement: If you will be working in Quebec, your employer must also get a Quebec Acceptance Certificate (CAQ).",
      ],
    },
    {
      title: "Open Work Permit",
      description:
        "The Open Work permit is not tied to a specific employer, job, or location. While an Indvidual can work for nearly any employer, these permits are only available under specific circumstances.",
      requirements: [
        "Post-Graduation Work Permit (PGWP): For international students who have completed an eligible program at a designated Canadian learning institution.",
        "Spouse or common-law partner of a skilled worker or international student: Spouses of skilled workers may be eligible for an open work permit, subject to specific eligibility changes that took effect in January 2025.",
        "Bridging Open Work Permit (BOWP): For those already in Canada with an expiring work permit who have applied for permanent residence.",
        'International Experience Canada (IEC): A program for youth aged 18 to 35 from participating countries, offering "Working Holiday," "Young Professionals," and "International Co-op" options.',
        "Vulnerable workers: Certain workers experiencing abuse in their employment may apply.",
      ],
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/workprmt.jpg')` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Canadian Work Permits
          </h1>

          <p
            className={`text-xl text-white/90 mb-8 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            In order to work in Canada foreign nationals must obtain a work permit from Immigration, Refugees and Citizenship Canada (IRCC). 
            The two primary types are employer-specific work permits and open work permits, each with different eligibility requirements and conditions.
          </p>
        </div>
      </section>

      {/* Types of Work Permits */}
      <section id="work-permits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Types of Work Permits
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {permitTypes.map((permit, index) => (
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
                  {permit.title}
                </h3>
                <p className="text-gray-600 mb-6">{permit.description}</p>

                <ul className="space-y-2">
                  {permit.requirements.map((req, reqIndex) => (
                    <li
                      key={reqIndex}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white"> <div className="container mx-auto px-4 text-center"> <h2 className="text-3xl font-bold mb-6"> Ready to Apply for Your Canadian Work Permit? </h2> <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto"> Reach out to Summit Immigration Group today and let us help you to get a work permit. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"> Start Your Application </button> <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"> Schedule Free Consultation </button> </div> </div> </section>

      <Footer />
    </div>
  );
};

export default WorkPermitsPage;
