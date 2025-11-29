import { Zap, Video, Users, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'AI-Powered Content Creation',
    description: 'Generate viral video ideas and scripts instantly with advanced AI technology.'
  },
  {
    icon: Video,
    title: 'Faceless Video Production',
    description: 'Create engaging videos without showing your face using AI avatars and voice synthesis.'
  },
  {
    icon: Users,
    title: 'Multi-Platform Publishing',
    description: 'Automatically publish your content across all major social media platforms.'
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Optimization',
    description: 'Track performance and get insights to optimize your content for maximum reach.'
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Go Viral
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful tools designed to help creators produce high-quality content faster than ever.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}