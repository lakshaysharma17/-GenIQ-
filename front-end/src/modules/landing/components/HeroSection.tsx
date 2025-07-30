import React from 'react';
import { 
  Edit3, 
  Trophy, 
  Users, 
  Zap, 
  Check, 
  Star, 
  ArrowRight,
  Play,
  Target,
  BookOpen,
  Clock,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-32">
      <div className="container px-4 mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6 border border-blue-200">
              <Trophy className="w-4 h-4 mr-2" />
              #1 Quiz Platform
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Create Engaging
              <span className="block text-blue-600">
                Quizzes Instantly
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Build interactive quizzes, track performance, and engage your audience with our simple yet powerful quiz platform.
            </p>

            {/* Quiz Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center text-sm text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Easy to create</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-5 h-5 text-blue-500 mr-2" />
                <span>Quick setup</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Award className="w-5 h-5 text-purple-500 mr-2" />
                <span>Instant results</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/register" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                <Play className="w-5 h-5 mr-2" />
                Start Creating Quizzes
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/login" className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors">
                Sign In
              </Link>
            </div>
          </div>

          {/* Right Content - Quiz Preview */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Edit3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">JavaScript Basics</h3>
                    <p className="text-sm text-gray-500">10 questions • 5 min</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">8/10</div>
                  <div className="text-sm text-gray-500">Score</div>
                </div>
              </div>

              {/* Question Preview */}
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-3">What is the correct way to declare a variable in JavaScript?</p>
                  <div className="space-y-2">
                    <div className="flex items-center p-3 bg-white rounded-lg border-2 border-green-200">
                      <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm">let myVariable = "value";</span>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                      <div className="w-4 h-4 bg-gray-300 rounded-full mr-3"></div>
                      <span className="text-sm">var myVariable = "value";</span>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                      <div className="w-4 h-4 bg-gray-300 rounded-full mr-3"></div>
                      <span className="text-sm">const myVariable = "value";</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>

                {/* Timer */}
                <div className="flex items-center justify-center bg-blue-50 rounded-lg p-3">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-blue-600">Time remaining: 2:30</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-md p-3 border border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Live</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-md p-3 border border-gray-200">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">1.2k users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;