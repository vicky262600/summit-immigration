'use client';

import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  Heart, 
  Building, 
  Shield,
  FileText,
  Clock,
  UserCheck,
  Globe
} from "lucide-react";
import { useEffect, useState } from "react";

const Services = () => {
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

    const section = document.getElementById('services');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);
  const services = [
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Work Permits",
      description: "Professional assistance with work permit applications for temporary employment opportunities in Canada.",
      category: "Employment"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Express Entry",
      description: "Expert guidance through the Express Entry system for skilled worker immigration to Canada.",
      category: "Permanent Residence"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Provincial Nominee Programs",
      description: "Specialized assistance with provincial nomination programs across Canada.",
      category: "Provincial"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Study Permits",
      description: "Complete guidance for international students seeking educational opportunities in Canada.",
      category: "Education"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Visitor Visas",
      description: "Professional support for temporary visitor visa applications to Canada.",
      category: "Temporary"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Super Visas",
      description: "Specialized services for parent and grandparent super visa applications.",
      category: "Family"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Business Immigration",
      description: "Comprehensive support for entrepreneurs and business investors seeking Canadian residency.",
      category: "Business"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Spousal Sponsorship",
      description: "Expert assistance with spousal and common-law partner sponsorship applications.",
      category: "Family"
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Citizenship Applications",
      description: "Professional guidance through the Canadian citizenship application process.",
      category: "Citizenship"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "US Waivers",
      description: "Specialized legal services for US entry waivers and inadmissibility issues.",
      category: "Legal"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Judicial Review",
      description: "Expert legal representation for judicial review of immigration decisions.",
      category: "Legal"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Our Immigration Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive immigration solutions for Canada, United Kingdom, and United States. 
            Our expert team provides professional guidance at every step of your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-white rounded-lg p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-100 shadow-md ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                transitionDuration: '0.8s'
              }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-yellow-400 text-white rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div>
                  <div className="text-xs text-blue-600 font-semibold mb-1">
                    {service.category}
                  </div>
                  <h3 className="text-blue-900 text-lg font-semibold">
                    {service.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <button className="text-blue-600 hover:text-yellow-500 font-medium transition-colors duration-300 group-hover:translate-x-1">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div 
          className={`text-center mt-12 transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '1.2s' }}
        >
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Get Detailed Assessment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
