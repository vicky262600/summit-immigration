'use client';

import {
  Scale,
  Users,
  MapPin,
  Award,
  CheckCircle,
  Globe,
  Building,
  Shield
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTeamVisible, setIsTeamVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const teamObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTeamVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const teamSection = document.getElementById('team-section');
    if (teamSection) {
      teamObserver.observe(teamSection);
    }

    return () => teamObserver.disconnect();
  }, []);

  const achievements = [
    "Canadian Immigration law and International Recruitment",
    "Federal Court and Immigration and Refugee Board cases",
    "Corporate immigration and temporary residence cases",
    "Permanent residence applications",
    "Judicial Review and Refugee Law",
    "Canadian Pardons and US Waivers"
  ];

  const team = [
    {
      name: "Ken Van-Horne B.A. LLB",
      role: "Citizenship and Immigration Specialist",
      description: "Ken is the founder of Summit Immigration Consulting Group and focuses on all immigration matters, including study permits, visitor visas, Express Entry, Provincial Nominee Programs, LMIAs, corporate immigration, work permits, spousal sponsorship, citizenship and permanent residence applications"
    },
    {
      name: "Robert Gertler B.A. LLB",
      role: "Senior Immigration and Refugee Lawyer",
      description: "Robert mainly focuses on Refugee claims and Judicial Review matters that need to be handled at the Federal Court level. He is involved in all aspects of Immigration law, he devotes most of his practice to Immigration Appeals, Deportation, Refugee Claims, Stay Motions, Pre Removal Risk Assessments and Removal orders"
    },
    {
      name: "Rajender Singh B.A. LLB",
      role: "Immigration Lawyer",
      description: "Rajender primarily deals with Immigration Appeals, Judicial Review and litigation. His practice area handles Refugee Appeals, mandamus applications, fighting removal orders and deportations. He is also fluent in Hindi with a lot of experience in handling clients from India and Asia."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Mobile Hero Image */}
        <div 
          className={`lg:hidden mb-12 transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/aboutus2.jpg"
              alt="Summit Immigration Consulting Group"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent rounded-lg"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Summit Immigration</h3>
              <p className="text-white/90">Your trusted partner in Canadian immigration</p>
            </div>
          </div>
        </div>

        {/* Main About Section */}
        <div 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          <div>
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              About Our Firm
            </div>
            
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Leading Immigration Law Experts
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Summit Immigration Consulting Group engages exclusively in the practice of Canadian Immigration law and International Recruitment. Our lawyers and certified Immigration Specialists are based in Toronto, Canada.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ken Van Horne is the founding member of the Summit Immigration Consulting group and attained his law degree in the UK and relocated to Canada where he specialized in immigration law and consultancy for all areas of corporate immigration as well as temporary and permanent residence cases.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Other members of the consulting group are Robert Gertler who is our Refugee Lawyer that specializes in Judicial Review and Fahreda Caissie who handles matters pertaining to Canadian Pardons and US Waivers for travel to the USA. Our firm deals with any case that falls within Federal Court or the Immigration and Refugee Board.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Canada has over 60 different programs available to immigrate and become a Permanent Resident. Everyone's situation is different and choosing the right program for yourself will ensure a speedy and successful application. Summit Immigration Group can help you with this by drafting all legal arguments and preparing the submission of your file to IRCC.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/aboutus2.jpg"
                alt="Summit Immigration Consulting Group"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent rounded-lg"></div>
            
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Summit Immigration</h3>
              <p className="text-white/90">Your trusted partner in Canadian immigration</p>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div id="team-section" className="relative py-20 overflow-hidden w-full">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/homePic.jpg')",
              backgroundAttachment: 'fixed'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4">
            <div 
              className={`text-center mb-12 transition-all duration-1000 ease-out ${
                isTeamVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                Our Legal Team
              </h3>
              <p className="text-xl text-gray-200">
                Experienced professionals dedicated to your immigration success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
                                 <div
                       key={index}
                       className={`bg-white text-center hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg shadow-lg p-8 ${
                         isTeamVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                       }`}
                       style={{
                         transitionDelay: `${0.4 + index * 0.2}s`,
                         transitionDuration: '0.8s'
                       }}
                     >
                       {member.name === "Robert Gertler B.A. LLB" ? (
                         // Robert Gertler - use robert Gtlr.jpg
                         <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4">
                           <Image
                             src="/robert Gtlr.jpg"
                             alt={member.name}
                             width={112}
                             height={112}
                             className="object-cover w-full h-full"
                           />
                         </div>
                       ) : member.name === "Rajender Singh B.A. LLB" ? (
                         // Rajender Singh - use rajendr.jpg
                         <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                           <Image
                             src="/rajendr.jpg"
                             alt={member.name}
                             width={128}
                             height={128}
                             className="object-cover w-full h-full scale-110 translate-x-1 translate-y-1"
                           />
                         </div>
                       ) : member.name === "Ken Van-Horne B.A. LLB" ? (
                         // Ken Van-Horne - use ken.jpg
                         <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4">
                           <Image
                             src="/ken.jpg"
                             alt={member.name}
                             width={112}
                             height={112}
                             className="object-cover w-full h-full"
                           />
                         </div>
                       ) : (
                         // Other team members - use icon
                         <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                           <Users className="h-10 w-10 text-blue-600" />
                         </div>
                       )}
              <h4 className="text-xl font-bold text-blue-900 mb-2">
                {member.name}
              </h4>
              <p className="text-blue-600 font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
            </div>
          </div>
        </div>

        {/* Feature Boxes - After Team Section */}
        <div 
          className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-lg p-8 shadow-xl">
            <div className="flex items-center space-x-4 mb-4">
              <Scale className="h-8 w-8 text-yellow-400" />
              <h3 className="text-xl font-bold">Legal Excellence</h3>
            </div>
            <p className="text-white/90">
              Certified lawyers and consultants with expertise in Canadian immigration law.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-400 to-blue-600 text-white rounded-lg p-8 shadow-xl">
            <div className="flex items-center space-x-4 mb-4">
              <Globe className="h-8 w-8 text-blue-900" />
              <h3 className="text-xl font-bold">Federal Court</h3>
            </div>
            <p className="text-white/90">
              Specialized in Federal Court and Immigration and Refugee Board cases.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-blue-800 text-white rounded-lg p-8 shadow-xl">
            <div className="flex items-center space-x-4 mb-4">
              <Shield className="h-8 w-8 text-yellow-400" />
              <h3 className="text-xl font-bold">60+ Programs</h3>
            </div>
            <p className="text-white/90">
              Canada offers over 60 different immigration programs. We help you choose the right one.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;