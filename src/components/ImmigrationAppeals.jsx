'use client';

import { 
  Scale, 
  FileText, 
  Clock, 
  CheckCircle,
  Users,
  Award,
  Shield,
  Heart,
  Home,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImmigrationAppeals = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAppealsVisible, setIsAppealsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('appeals');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const appealsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsAppealsVisible(true);
      },
      { threshold: 0.1 }
    );

    const appealsSection = document.getElementById('appeals-types');
    if (appealsSection) appealsObserver.observe(appealsSection);

    return () => appealsObserver.disconnect();
  }, []);

  const appealTypes = [
    {
      title: "Sponsorship Appeals",
      description: "Failed sponsorship applications may be made by the permanent resident or Canadian citizen who supplied the application to sponsor in support of the foreign national’s application for permanent residence. If the application is unsuccessful, the sponsor can appeal the refusal to the IAD.",
      icon: Heart,
      details: [
        "Notice of Appeal must be filed to the IAD within 30 days of receipt of the refusal letter",
        "Appeal Record produced by the Minister within 60 days (reduced from 120 days under new IAD Rules)",
        "Appellant must produce supporting documents within 60 days after receiving the Appeal Record"
      ]
    },
    {
      title: "Removal Order Appeals",
      description: "Individuals who have received a removal order and who are Canadian permanent residents or permanent resident card holders may appeal their removal to the Immigration Appeal Division. Convention Refugees or Protected Persons may also seek a removal order appeal.",
      icon: Shield,
      details: [
        "Notice of Appeal must be filed to the IAD within 30 days after receipt of the removal order",
        "Minister or Immigration Division must provide the record within 30 days of a request",
        "Alternative Dispute Resolution may be suggested by the IAD",
        "Early resolution mechanisms exist and Summit Immigration Group examines each case for the best appellate remedy"
      ]
    },
    {
      title: "Residency Obligation Appeals",
      description: "Permanent residents must be physically present in Canada for at least 730 days in every five-year period to maintain status. Exceptions exist, such as working abroad for a Canadian business or accompanying a Canadian citizen spouse or parent. Failing to meet this obligation may result in loss of PR status or a removal order, though appeals are possible.",
      icon: Home,
      details: [
        "Decision issued in Canada: 30 days to file appeal to IAD",
        "Decision issued overseas: 60 days to file appeal to IAD",
        "Appeal record produced by Minister within 60 days",
        "Alternative Dispute Resolution may be suggested; if successful, hearing not required",
        "Hearing outcome: appeal allowed → PR status maintained, travel document issued if abroad",
        "Hearing outcome: appeal dismissed → PR status revoked, departure order issued if in Canada"
      ]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Case Assessment",
      description: "We review your case and determine appeal grounds."
    },
    {
      step: "2", 
      title: "Documentation",
      description: "Prepare and file all necessary appeal documents."
    },
    {
      step: "3",
      title: "Representation",
      description: "Expert representation at your appeal hearing."
    },
    {
      step: "4",
      title: "Resolution",
      description: "Work toward a successful appeal outcome."
    }
  ];

  return (
    <section id="appeals" className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative min-h-[500px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/ImmigrationAppeals1.jpg')` }}
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
              Immigration Appeals
            </div>
            <h1 
              className={`text-4xl md:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              Don't Lose Hope – Appeal Your Immigration Decision
            </h1>
            <p 
              className={`text-xl text-white/90 mb-8 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              If your immigration application to Canada has been refused or you have been found to be inadmissible, do not lose hope in your dream to migrate to Canada. The Immigration Appeal Division (IAD), one of four divisions of the Immigration and Refugee Board, hears appeals on issues such as failed sponsorship applications, removal orders, and residency obligations.
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

      {/* Appeal Types Section */}
      <div id="appeals-types" className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('/canadaflages.jpg')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div 
            className={`text-center mb-20 transition-all duration-1000 ease-out ${
              isAppealsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-md">
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Types of Appeals We Handle
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-blue-200 mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Summit Immigration Consulting Group assists all clients with the following types of appeals for negative decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {appealTypes.map((appeal, index) => (
    <div
      key={index}
      className={`group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 flex flex-col ${
        isAppealsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{
        transitionDelay: `${0.4 + index * 0.2}s`,
        transitionDuration: '0.8s'
      }}
    >
      {/* Top: Icon, Title, Description */}
      <div className="flex flex-col">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <appeal.icon className="h-10 w-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center group-hover:text-blue-700 transition-colors">
          {appeal.title}
        </h3>
        <p className="text-gray-600 text-center leading-relaxed">
          {appeal.description}
        </p>
      </div>

      {/* Bottom: Key Details */}
      <div className="space-y-3 bg-gray-50 p-6 rounded-xl mt-4">
        <h4 className="text-sm font-semibold text-blue-900 mb-3 text-center uppercase tracking-wide">
          Key Details
        </h4>
        {appeal.details.map((detail, idx) => (
          <div key={idx} className="flex items-start space-x-3">
            <div className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <CheckCircle className="h-3 w-3" />
            </div>
            <span className="text-sm text-gray-700 leading-relaxed">{detail}</span>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>


        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div 
              className={`transition-all duration-1000 ease-out ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.8s' }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Our Appeal Process
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We guide you through every step of the appeal process with expert legal representation and personalized attention.
              </p>
              
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div 
              className={`transition-all duration-1000 ease-out ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: '1s' }}
            >
              <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/ImmigrationAppeals3.jpg"
                  alt="Immigration Appeals Process"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div 
            className={`text-center max-w-3xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '2s' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Ready to Appeal Your Case?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Summit Immigration Group represents clients on appeals to the Immigration Appeal Division. We can assist at all stages, including preparation of the notice of appeal, gathering and filing of evidence, preparation of submissions, and providing legal representation at the hearing itself. Please contact us immediately if you require counsel, and we can discuss your best options and outcomes based on an assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                Call Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmigrationAppeals;
