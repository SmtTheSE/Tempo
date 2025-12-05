import { ArrowRight, Waves, Ship, Award, Users } from 'lucide-react';

export default function Home() {
  return (
    <section id="home" className="pt-16">
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover Your Next
            <span className="block text-cyan-200">Ocean Adventure</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-50 max-w-2xl mx-auto">
            Experience the beauty of pristine beaches, crystal-clear waters, and unforgettable coastal journeys with Marina Travel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector('#tours')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              Explore Tours <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Waves className="h-8 w-8 text-white opacity-75" />
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Ship, title: '50+ Tours', description: 'Curated ocean experiences' },
              { icon: Award, title: '10 Years', description: 'Industry excellence' },
              { icon: Users, title: '10,000+', description: 'Happy travelers' },
              { icon: Waves, title: '100%', description: 'Satisfaction guaranteed' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Marina Travel?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional ocean experiences that create lasting memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Guides',
                description: 'Our experienced team ensures your safety and enjoyment throughout every journey',
                color: 'bg-blue-500'
              },
              {
                title: 'Premium Service',
                description: 'Comfortable accommodations, quality equipment, and personalized attention',
                color: 'bg-cyan-500'
              },
              {
                title: 'Sustainable Tourism',
                description: 'We protect marine environments while showcasing their natural beauty',
                color: 'bg-teal-500'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className={`w-12 h-12 ${feature.color} rounded-lg mb-4`}></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}