import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  FileText
} from "lucide-react";

const ContactUsPage = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      description: "Speak with our immigration experts",
      value: "+1 (416) 123-4567",
      action: "tel:+14161234567"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us", 
      description: "Get detailed information via email",
      value: "info@summitimmigration.com",
      action: "mailto:info@summitimmigration.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Our Offices",
      description: "Toronto • London • New York",
      value: "Multiple Locations",
      action: "#"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      description: "Monday - Friday: 9:00 AM - 6:00 PM",
      value: "EST/GMT Time Zones",
      action: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to begin your immigration journey? Contact our experienced team for 
              personalized guidance and professional legal assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index} 
                      className="bg-white hover:shadow-lg transition-all duration-300 border-0 shadow-sm p-6 rounded-lg"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-to-br from-blue-600 to-yellow-400 text-white rounded-lg">
                          {info.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-blue-900 mb-1">
                            {info.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {info.description}
                          </p>
                          <p className="text-blue-600 font-medium break-words">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-600 text-white border-0 p-8 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Free Immigration Assessment</h3>
                </div>
                <p className="text-white/90 mb-6">
                  Get a detailed evaluation of your immigration options at no cost.
                </p>
                <p className="text-white text-center font-semibold">
                  Fill out the form to get started
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="shadow-lg border-0 bg-white p-8 rounded-lg">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        First Name
                      </label>
                      <input 
                        type="text" 
                        placeholder="Your first name"
                        className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        placeholder="Your last name"
                        className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      placeholder="your.email@example.com"
                      className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 123-4567"
                      className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Immigration Service
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>Select a service</option>
                      <option>Work Permit</option>
                      <option>Study Permit</option>
                      <option>Express Entry</option>
                      <option>Provincial Nominee Program</option>
                      <option>Family Sponsorship</option>
                      <option>Refugee Claims</option>
                      <option>Immigration Appeals</option>
                      <option>Business Immigration</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Message
                    </label>
                    <textarea 
                      placeholder="Tell us about your immigration goals and any specific questions you have..."
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full group">
                    Send Message
                    <Send className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactUsPage;