const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Content Creator',
    content: 'GoViral transformed my content creation process. I went from struggling to create one video a week to producing viral content daily!',
    avatar: '/placeholder-avatar.jpg'
  },
  {
    name: 'Mike Chen',
    role: 'Marketing Director',
    content: 'The AI avatars are incredibly realistic. Our engagement rates increased by 300% after switching to faceless videos.',
    avatar: '/placeholder-avatar.jpg'
  },
  {
    name: 'Emma Davis',
    role: 'Social Media Manager',
    content: 'Easy to use, powerful features, and the results speak for themselves. GoViral is a game-changer for social media marketing.',
    avatar: '/placeholder-avatar.jpg'
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by Creators Worldwide
          </h2>
          <p className="text-xl text-gray-600">
            See what our users have to say about their experience with GoViral.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}