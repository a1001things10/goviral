import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Turn Ideas Into
          <span className="text-purple-600 block">Viral Videos</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Create faceless videos & AI avatars fast and cheap with GoViral!
          Find viral content ideas, write scripts, edit, & publish to social media.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
            Start Creating Free
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-3">
            Watch Demo
          </Button>
        </div>
        <div className="mt-12">
          <p className="text-sm text-gray-500 mb-4">Trusted by creators worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {/* Placeholder for logos */}
            <div className="w-20 h-8 bg-gray-200 rounded"></div>
            <div className="w-20 h-8 bg-gray-200 rounded"></div>
            <div className="w-20 h-8 bg-gray-200 rounded"></div>
            <div className="w-20 h-8 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  )
}