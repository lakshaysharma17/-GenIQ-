import { 
  Check, 
  Star, 
  ArrowRight,
  Crown,
  Target,
  BookOpen
} from 'lucide-react';
const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "5 quizzes per month",
        "Basic AI generation",
        "Community support",
        "Public quiz sharing"
      ],
      cta: "Get Started",
      popular: false,
      icon: BookOpen
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      description: "For serious learners and educators",
      features: [
        "Unlimited quizzes",
        "Advanced AI generation",
        "Priority support",
        "Private quiz creation",
        "Analytics dashboard",
        "Custom branding"
      ],
      cta: "Start Free Trial",
      popular: true,
      icon: Target
    },
    {
      name: "Enterprise",
      price: "$29",
      period: "per month",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Advanced analytics",
        "API access",
        "Custom integrations",
        "Dedicated support",
        "White-label solution"
      ],
      cta: "Contact Sales",
      popular: false,
      icon: Crown
    }
  ];

  return (
    <section id="pricing" className="py-20 sm:py-32 bg-gray-50">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include core features with no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl border bg-white p-8 shadow-sm transition-all hover:shadow-lg ${
                  plan.popular
                    ? 'border-primary scale-105 shadow-lg'
                    : 'border-gray-200'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-100 to-purple-100' 
                      : 'bg-gray-100'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${
                      plan.popular ? 'text-blue-600' : 'text-gray-600'
                    }`} />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">
                      {plan.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-8">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ${
                      plan.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We're here to help.
          </p>
          <button className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
            Contact our sales team
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;