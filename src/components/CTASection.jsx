'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
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
  FileText,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const CTASection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_name: 'Summit Immigration Consulting Group'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
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
                <p className="text-white text-center font-semibold">
                  Fill out the form to get started
                </p>
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <p className="text-green-800">Message sent successfully! We'll get back to you within 24 hours.</p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <p className="text-red-800">Failed to send message. Please try again or contact us directly.</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-[hsl(var(--text-dark))] mb-2 block">
                        First Name *
                      </label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Your first name" 
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[hsl(var(--text-dark))] mb-2 block">
                        Last Name *
                      </label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Your last name" 
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[hsl(var(--text-dark))] mb-2 block">
                      Email Address *
                    </label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com" 
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[hsl(var(--text-dark))] mb-2 block">
                      Phone Number
                    </label>
                    <Input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567" 
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[hsl(var(--text-dark))] mb-2 block">
                      Immigration Service
                    </label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900"
                    >
                      <option value="">Select a service</option>
                      <option value="Work Permits">Work Permits</option>
                      <option value="Express Entry">Express Entry</option>
                      <option value="Provincial Nominee Programs">Provincial Nominee Programs</option>
                      <option value="Study Permits">Study Permits</option>
                      <option value="Visitor Visas">Visitor Visas</option>
                      <option value="Super Visas">Super Visas</option>
                      <option value="Business Immigration">Business Immigration</option>
                      <option value="Spousal Sponsorship">Spousal Sponsorship</option>
                      <option value="Citizenship Applications">Citizenship Applications</option>
                      <option value="US Waivers">US Waivers</option>
                      <option value="Judicial Review">Judicial Review</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[hsl(var(--text-dark))] mb-2 block">
                      Message *
                    </label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your immigration goals and any specific questions you have..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    variant="hero" 
                    size="lg" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
