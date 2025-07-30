import React from 'react';
import { Users, Target, Award, CheckCircle, TrendingUp, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6 border border-blue-200">
            <Target className="w-4 h-4 mr-2" />
            About QuizMaster
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Built for Educators and
            <span className="block text-blue-600">
              Content Creators
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple and effective platform designed to make quiz creation and learning accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose QuizMaster?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              We focus on simplicity and effectiveness. Our platform provides the essential tools you need to create engaging quizzes without overwhelming complexity.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Easy to Use Interface</h4>
                  <p className="text-gray-600">Intuitive design that requires no technical skills. Create quizzes in minutes, not hours.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast Setup</h4>
                  <p className="text-gray-600">Get started in under 5 minutes. No complex configurations or steep learning curves.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Focus on Learning</h4>
                  <p className="text-gray-600">Every feature is designed to enhance the learning experience, not distract from it.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">QuizMaster Stats</h4>
                    <p className="text-sm text-gray-500">Platform Overview</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Quizzes Created</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">2.5k+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-md p-3 border border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Trusted</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-md p-3 border border-gray-200">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Growing Community</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide educators and content creators with a simple, powerful tool for creating engaging quizzes that enhance learning experiences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Who We Serve</h3>
              <p className="text-gray-600">
                Teachers, trainers, educators, and anyone who wants to create interactive quizzes for learning and assessment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Offer</h3>
              <p className="text-gray-600">
                An intuitive platform with essential features for quiz creation, management, and basic analytics to track learning progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 