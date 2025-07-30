import React from 'react';
import { 
  Edit3, 
  Trophy, 
  Users, 
  Zap, 
  Check, 
  Star, 
  ArrowRight,
  Clock,
  Target,
  BookOpen,
  BarChart3,
  Award,
  Play,
  Settings,
  Eye
} from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: <Edit3 className="w-8 h-8" />,
      title: "Easy Quiz Creation",
      description: "Create engaging quizzes in minutes with our intuitive drag-and-drop interface. No technical skills required.",
      color: "bg-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timed Assessments",
      description: "Set time limits for quizzes to create urgency and simulate real exam conditions.",
      color: "bg-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Instant Analytics",
      description: "Get detailed insights into quiz performance, question difficulty, and participant engagement.",
      color: "bg-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Score Tracking",
      description: "Automatically calculate and display scores with percentage breakdowns and performance metrics.",
      color: "bg-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Multiple Choice Questions",
      description: "Support for various question types including multiple choice, true/false, and custom formats.",
      color: "bg-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Real-time Results",
      description: "View quiz results instantly with detailed breakdowns of correct and incorrect answers.",
      color: "bg-teal-600",
      bgColor: "bg-teal-50"
    }
  ];

  return (
    <section id="features" className="py-20 sm:py-32 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6 border border-blue-200">
            <Star className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Create
            <span className="block text-blue-600">
              Amazing Quizzes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From simple assessments to complex evaluations, our platform provides all the tools you need to create engaging learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className={`${feature.bgColor} rounded-xl p-8 h-full border border-gray-200 hover:shadow-lg transition-shadow duration-300`}>
                <div className={`w-16 h-16 ${feature.color} rounded-lg flex items-center justify-center text-white mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quiz Demo Section */}
        <div className="mt-20 bg-gray-50 rounded-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                See QuizMaster in Action
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Experience the smooth, intuitive interface that makes quiz creation and taking a breeze. From creation to completion, every step is designed for excellence.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700">Create quizzes in under 5 minutes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700">Real-time scoring and analytics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700">Mobile-responsive design</span>
                </div>
              </div>

              <button className="mt-8 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                <Play className="w-5 h-5 mr-2" />
                Try Demo Quiz
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Edit3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Sample Quiz</h4>
                      <p className="text-xs text-gray-500">Question 3 of 10</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">30%</div>
                    <div className="text-xs text-gray-500">Complete</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-3">
                    Which programming language is known as the "language of the web"?
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center p-2 bg-white rounded border-2 border-green-200">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-xs">JavaScript</span>
                    </div>
                    <div className="flex items-center p-2 bg-white rounded border border-gray-200">
                      <div className="w-3 h-3 bg-gray-300 rounded-full mr-3"></div>
                      <span className="text-xs">Python</span>
                    </div>
                    <div className="flex items-center p-2 bg-white rounded border border-gray-200">
                      <div className="w-3 h-3 bg-gray-300 rounded-full mr-3"></div>
                      <span className="text-xs">Java</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Time: 1:45</span>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700">
                    Next Question
                  </button>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-md p-3 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;