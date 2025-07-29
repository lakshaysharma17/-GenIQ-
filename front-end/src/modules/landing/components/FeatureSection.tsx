import { 
Award,
  Brain, 
  BarChart3,
  Trophy, 
  Users, 
  Globe,
  Zap, 
  Star, 
  Smartphone,
  ArrowRight,
  Target,
  Upload,
  Database,
  Settings,
  RefreshCw,
  Palette,
  Shield,
  Clock,
  FileText
} from 'lucide-react';
const FeaturesSection = () => {
  const aiFeatures = [
    {
      icon: Brain,
      title: "Smart AI Generation",
      description: "Advanced algorithms create contextually relevant questions from any topic or content you provide.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Instant Creation",
      description: "Generate complete quizzes in seconds. No more hours of manual question writing.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Settings,
      title: "Customizable Difficulty",
      description: "Fine-tune question difficulty, types, and complexity to match your audience perfectly.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: RefreshCw,
      title: "Adaptive Learning",
      description: "AI learns from user responses to generate better, more targeted questions over time.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const adminFeatures = [
    {
      icon: Upload,
      title: "Bulk Quiz Upload",
      description: "Upload multiple quizzes at once with CSV, JSON, or Excel files. Streamline your content management.",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: Database,
      title: "Question Bank Management",
      description: "Organize questions into categories, tag for easy searching, and reuse across multiple quizzes.",
      color: "from-blue-500 to-green-500"
    },
    {
      icon: Palette,
      title: "Custom Branding",
      description: "Apply your organization's branding, colors, and logos to create a cohesive learning experience.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Shield,
      title: "Advanced Permissions",
      description: "Control who can create, edit, and access quizzes with granular permission settings.",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const sharedFeatures = [
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description: "Track performance, identify knowledge gaps, and measure learning progress with comprehensive reports.",
      highlight: true
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Perfect experience across all devices - desktop, tablet, and mobile. Learn anywhere, anytime."
    },
    {
      icon: Clock,
      title: "Real-time Results",
      description: "Instant feedback and scoring with detailed explanations for better learning outcomes."
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Create and take quizzes in multiple languages with automatic translation capabilities."
    },
    {
      icon: Trophy,
      title: "Gamification",
      description: "Leaderboards, badges, and achievements to make learning competitive and engaging."
    },
    {
      icon: Award,
      title: "Certification System",
      description: "Generate certificates and track completion rates for formal learning programs."
    }
  ];

  return (
    <section id="features" className="py-20 sm:py-32 bg-white">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200 mb-6">
            <Star className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Everything You Need for 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Quiz Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you prefer AI-powered generation or hands-on control, GIQ provides all the tools 
            you need to create engaging, effective quizzes.
          </p>
        </div>

        {/* AI Features */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3">
              <Brain className="w-5 h-5 text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold text-blue-900">AI-Powered Features</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" 
                       style={{backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`}}></div>
                  
                  <div className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Admin Features */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-6 py-3">
              <Users className="w-5 h-5 text-green-600 mr-3" />
              <h3 className="text-lg font-semibold text-green-900">Admin & Control Features</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adminFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" 
                       style={{backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`}}></div>
                  
                  <div className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Shared Features */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center bg-gradient-to-r from-gray-100 to-gray-200 rounded-full px-6 py-3">
              <Target className="w-5 h-5 text-gray-700 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Core Platform Features</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sharedFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className={`group relative ${feature.highlight ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                  {feature.highlight && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </div>
                    </div>
                  )}
                  
                  <div className={`relative bg-white rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                    feature.highlight 
                      ? 'border-yellow-200 shadow-lg hover:shadow-xl bg-gradient-to-br from-yellow-50 to-orange-50' 
                      : 'border-gray-200 shadow-sm hover:shadow-lg'
                  }`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      feature.highlight 
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500' 
                        : 'bg-gray-100 group-hover:bg-gray-200'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        feature.highlight ? 'text-white' : 'text-gray-600 group-hover:text-gray-700'
                      }`} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience All Features?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Start your free trial today and discover how GIQ can transform your quiz creation process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 h-10 px-6 py-2 transition-all">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-gray-300 bg-white hover:bg-gray-50 h-10 px-6 py-2 transition-all">
                Schedule Demo
                <FileText className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;