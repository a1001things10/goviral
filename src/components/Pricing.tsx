import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$9',
    period: '/month',
    features: [
      '5 video projects',
      'AI script generation',
      'Basic avatars',
      'Social media publishing',
      'Analytics dashboard'
    ],
    popular: false
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    features: [
      'Unlimited video projects',
      'Advanced AI features',
      'Premium avatars',
      'Multi-platform publishing',
      'Advanced analytics',
      'Priority support'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    features: [
      'Everything in Pro',
      'Custom branding',
      'API access',
      'White-label solution',
      'Dedicated account manager',
      'Custom integrations'
    ],
    popular: false
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-lg p-8 ${
                plan.popular ? 'border-purple-500 shadow-lg scale-105' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="bg-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600 ml-1">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-purple-600 hover:bg-purple-700'
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}