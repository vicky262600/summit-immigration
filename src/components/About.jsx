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

const About = () => {
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
      name: "Ken Van Horne",
      role: "Founding Member",
      description: "Law degree from UK, specialized in immigration law and consultancy for corporate immigration, temporary and permanent residence cases"
    },
    {
      name: "Robert Gertler",
      role: "Refugee Lawyer",
      description: "Specializes in Judicial Review and refugee law matters"
    },
    {
      name: "Fahreda Caissie",
      role: "Legal Specialist",
      description: "Handles Canadian Pardons and US Waivers for travel to the USA"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Mobile Hero Image */}
        <div className="lg:hidden mb-12">
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/Aboutuspic.jpg"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
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
                src="/Aboutuspic.jpg"
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

        {/* Feature Boxes - Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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

        {/* Team Members */}
        <div className="relative py-20 overflow-hidden w-full">
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
            <div className="text-center mb-12">
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
              className="bg-white text-center hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg shadow-lg p-8"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
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

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">
              Why Choose Summit Immigration?
            </h3>
            <p className="text-xl text-gray-600">
              Your trusted partner in immigration success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-blue-900 mb-2">60+</h4>
              <p className="text-gray-600">Immigration Programs Available</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-yellow-600" />
              </div>
              <h4 className="text-2xl font-bold text-blue-900 mb-2">Toronto</h4>
              <p className="text-gray-600">Head Office Location</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-blue-900 mb-2">3</h4>
              <p className="text-gray-600">Expert Legal Professionals</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-blue-900 mb-2">Federal</h4>
              <p className="text-gray-600">Court & IRB Cases</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;