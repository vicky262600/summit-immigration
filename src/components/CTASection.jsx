import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  FileText
} from "lucide-react";

const CTASection = () => {
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
    <section id="cta" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[hsl(var(--primary-navy))] mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-[hsl(var(--text-light))] max-w-3xl mx-auto">
            Ready to begin your immigration journey? Contact our experienced team for 
            personalized guidance and professional legal assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[hsl(var(--primary-navy))] mb-6">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className="hover:shadow-[var(--shadow-card)] transition-all duration-300 border-0 shadow-sm"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-to-br from-[hsl(var(--primary-blue))] to-[hsl(var(--accent-gold))] text-white rounded-lg">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-[hsl(var(--primary-navy))] mb-1">
                            {info.title}
                          </h4>
                          <p className="text-sm text-[hsl(var(--text-light))] mb-2">
                            {info.description}
                          </p>
                          <p className="text-[hsl(var(--primary-blue))] font-medium">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-[hsl(var(--primary-navy))] to-[hsl(var(--primary-blue))] text-white border-0">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <FileText className="h-6 w-6" />
                  <span>Free Immigration Assessment</span>
                </CardTitle>
                <CardDescription className="text-white/90">
                  Get a detailed evaluation of your immigration options at no cost.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="accent" size="lg" className="w-full">
                  Start Free Assessment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-[var(--shadow-elegant)] border-0">
              <CardHeader>
                <CardTitle className="text-[hsl(var(--primary-navy))]">
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-[hsl(var(--text-dark))] mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[hsl(var(--text-dark))] mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-[hsl(var(--text-dark))] mb-2 block">
                    Email Address
                  </label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label className="text-sm font-medium text-[hsl(var(--text-dark))] mb-2 block">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div>
                  <label className="text-sm font-medium text-[hsl(var(--text-dark))] mb-2 block">
                    Immigration Service
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900">
                    <option>Select a service</option>
                    <option>Work Permit</option>
                    <option>Study Permit</option>
                    <option>Federal Skilled Worker</option>
                    <option>Family Sponsorship</option>
                    <option>Business Immigration</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-[hsl(var(--text-dark))] mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your immigration goals and any specific questions you have..."
                    rows={4}
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full group">
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
