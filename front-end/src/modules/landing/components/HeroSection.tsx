import { 
  Brain,  
  Zap,
  ArrowRight
} from 'lucide-react';
const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200 mb-8">
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered Quiz Generation
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Generate Intelligent
            </span>
            <br />
            <span className="text-gray-900">Quizzes Instantly</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Create personalized quizzes with AI, track your progress, and compete with friends. 
            Transform learning into an engaging experience with GIQ.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 py-2 text-base">
              Start Creating Quizzes
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-8 py-2 text-base">
              <Brain className="mr-2 h-5 w-5" />
              View Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-sm text-gray-600">Quizzes Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">1M+</div>
              <div className="text-sm text-gray-600">Questions Answered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">25K+</div>
              <div className="text-sm text-gray-600">Active Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection