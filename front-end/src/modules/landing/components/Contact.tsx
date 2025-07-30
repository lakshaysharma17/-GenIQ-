import React from 'react';
import { Mail, MessageSquare, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6 border border-blue-200">
            <MessageSquare className="w-4 h-4 mr-2" />
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Creating
            <span className="block text-blue-600">
              Amazing Quizzes?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about QuizMaster? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Send us a Message</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours</p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Feature Request</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                >
                  <Send className="w-5 h-5 inline mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Ready to get started with QuizMaster? We're here to help you create engaging quizzes for your audience.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h4>
                    <p className="text-gray-600 mb-1">support@quizmaster.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h4>
                    <p className="text-gray-600 mb-1">Available during business hours</p>
                    <p className="text-sm text-gray-500">Get instant help with your questions</p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h4>
                    <p className="text-gray-600 mb-1">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
              </div>

              {/* Quick Support */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Support</h4>
                <p className="text-gray-600 mb-6">
                  Need help getting started? Check out our documentation or reach out to our support team.
                </p>
                <div className="space-y-3">
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    View Documentation →
                  </a>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    FAQ →
                  </a>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Video Tutorials →
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-green-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">Response Time</h4>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-green-600">Email</div>
                    <div className="text-gray-600">Within 24 hours</div>
                  </div>
                  <div>
                    <div className="font-semibold text-green-600">Live Chat</div>
                    <div className="text-gray-600">Instant</div>
                  </div>
                  <div>
                    <div className="font-semibold text-green-600">Phone</div>
                    <div className="text-gray-600">Same day</div>
                  </div>
                  <div>
                    <div className="font-semibold text-green-600">Documentation</div>
                    <div className="text-gray-600">Always available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 