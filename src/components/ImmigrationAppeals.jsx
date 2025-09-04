'use client';

import { 
  Scale, 
  FileText, 
  Clock, 
  CheckCircle,
  Users,
  Award,
  Shield,
  Globe,
  MapPin,
  Heart,
  Home
} from "lucide-react";

const ImmigrationAppeals = () => {
  const appealTypes = [
    {
      title: "Sponsorship Appeals",
      description: "Failed sponsorship applications may be appealed by permanent residents or Canadian citizens within 30 days of refusal.",
      icon: Heart
    },
    {
      title: "Removal Order Appeals",
      description: "Canadian permanent residents or protected persons may appeal removal orders within 30 days of receipt.",
      icon: Shield
    },
    {
      title: "Residency Obligation Appeals",
      description: "Appeals for residency obligation decisions affecting permanent resident status.",
      icon: Home
    }
  ];

  const appealProcess = [
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
    <section id="appeals" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-md">
            Immigration Appeals
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-snug">
            Don't Lose Hope – Appeal Your Immigration Decision
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            If your immigration application to Canada has been refused or you have been found inadmissible, don’t lose hope. The Immigration Appeal Division hears appeals on issues such as failed sponsorships, removal orders, and residency obligations.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            Schedule Free Consultation
          </button>
        </div>

        {/* Appeal Types */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-14">
            Types of Appeals We Handle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {appealTypes.map((appeal, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <appeal.icon className="h-14 w-14 text-blue-600 mx-auto mb-5" />
                <h3 className="text-xl font-bold text-blue-900 mb-3">{appeal.title}</h3>
                <p className="text-gray-600">{appeal.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Appeal Process */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-14">
            Our Appeal Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {appealProcess.map((item, index) => (
              <div 
                key={index} 
                className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-5 shadow-md">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Appeal Types */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-14">
            Detailed Information on Appeal Types
          </h2>
          
          {/* Sponsorship Appeals */}
          <div className="bg-white rounded-2xl shadow-lg p-10 mb-10 hover:shadow-2xl transition-all">
            <div className="flex items-center space-x-4 mb-6">
              <Heart className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-blue-900">Sponsorship Appeals</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Failed sponsorship applications may be appealed by the permanent resident or Canadian citizen who supplied the application. The Notice of Appeal must be filed to the IAD within 30 days of refusal.
            </p>
            <div className="bg-blue-50 p-5 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-2">Important Timeline:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Notice of Appeal must be filed within 30 days of refusal letter</li>
                <li>• Appeal Record produced by Minister within 60 days</li>
                <li>• Appellant must produce supporting documents within 60 days after receiving Appeal Record</li>
              </ul>
            </div>
          </div>

          {/* Removal Order Appeals */}
          <div className="bg-white rounded-2xl shadow-lg p-10 mb-10 hover:shadow-2xl transition-all">
            <div className="flex items-center space-x-4 mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-blue-900">Removal Order Appeals</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Canadian permanent residents, PR card holders, and Protected Persons may appeal a removal order. Notice of Appeal must be filed within 30 days of receiving the order.
            </p>
            <div className="bg-blue-50 p-5 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-2">Process Details:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 30-day deadline to file Notice of Appeal</li>
                <li>• Minister must provide record within 30 days</li>
                <li>• Alternative Dispute Resolution may be suggested</li>
                <li>• Early resolution mechanisms available</li>
              </ul>
            </div>
          </div>

          {/* Residency Obligation Appeals */}
          <div className="bg-white rounded-2xl shadow-lg p-10 mb-10 hover:shadow-2xl transition-all">
            <div className="flex items-center space-x-4 mb-6">
              <Home className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-blue-900">Residency Obligation Appeals</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Permanent residents must be physically present in Canada for 730 days in every 5 years. Exceptions exist such as accompanying a Canadian citizen spouse or working for a Canadian business abroad.
            </p>
            <div className="bg-blue-50 p-5 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-2">Key Requirements & Deadlines:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 730 days physical presence required in every 5-year period</li>
                <li>• 30 days to file appeal if decision issued in Canada</li>
                <li>• 60 days to file appeal if decision made overseas</li>
                <li>• Appeal record produced by Minister within 60 days</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl shadow-xl p-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Summit Immigration Group?</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-yellow-400" />
                  <span>Expert representation at all stages of the appeal process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400" />
                  <span>Preparation of notice of appeal and evidence gathering</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Scale className="h-5 w-5 text-yellow-400" />
                  <span>Legal representation at appeal hearings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-yellow-400" />
                  <span>Comprehensive case assessment and strategy</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Appeal?</h3>
              <p className="mb-6 text-gray-100">Contact us today to discuss your best options for a successful outcome.</p>
              <button className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all">
                Contact Us Today
              </button>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-14">
            Our Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <Award className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-900">Federal Court Victory</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Successfully overturned a negative refugee decision through Federal Court judicial review, allowing our client to remain in Canada and pursue permanent residency.
              </p>
              <div className="text-sm text-blue-600 font-semibold">Case Result: Approved</div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <Users className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-900">Family Sponsorship Appeal</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Won an IAD appeal for a family sponsorship refusal, reuniting a family after demonstrating the genuine nature of their relationship and financial stability.
              </p>
              <div className="text-sm text-blue-600 font-semibold">Case Result: Approved</div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Need Help with Your Appeal?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Our experienced team is ready to help you navigate the appeals process and fight for your immigration rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all">
              Call Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmigrationAppeals;
