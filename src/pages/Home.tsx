import { ArrowRight, Waves, Ship, Award, Users, Mountain, Sun, Camera } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center text-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="Ocean Adventure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Discover Your Next
            <span className="block text-cyan-300">Ocean Adventure</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-50 max-w-2xl mx-auto">
            Experience the beauty of pristine beaches, crystal-clear waters, and unforgettable coastal journeys with Marina Travel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tours"
              className="apple-btn flex items-center justify-center gap-2"
            >
              Explore Tours <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="apple-btn-secondary"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Waves className="h-8 w-8 text-white opacity-75" />
        </div>
      </div>

      {/* Stats Section */}
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
                <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.title}</h3>
                <p className="text-accent">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Marina Travel?</h2>
            <p className="text-xl text-accent max-w-2xl mx-auto">
              We're committed to providing exceptional ocean experiences that create lasting memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Mountain,
                title: 'Expert Guides',
                description: 'Our experienced team ensures your safety and enjoyment throughout every journey',
                color: 'bg-blue-100'
              },
              {
                icon: Sun,
                title: 'Premium Service',
                description: 'Comfortable accommodations, quality equipment, and personalized attention',
                color: 'bg-cyan-100'
              },
              {
                icon: Camera,
                title: 'Sustainable Tourism',
                description: 'We protect marine environments while showcasing their natural beauty',
                color: 'bg-teal-100'
              }
            ].map((feature, index) => (
              <div key={index} className="apple-card p-8">
                <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-accent leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}