import { Heart, Target, Eye, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Marina Travel</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting people with the ocean for over a decade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Founded in 2014, Marina Travel began with a simple mission: to share the breathtaking beauty of Vietnam's coastal regions with travelers from around the world.
              </p>
              <p>
                Starting from humble beginnings in Vung Tau, we've grown into one of the region's most trusted ocean tourism providers. Our passion for the sea and commitment to excellence has helped over 10,000 travelers discover the magic of coastal Vietnam.
              </p>
              <p>
                Today, we offer a wide range of ocean experiences, from peaceful beach getaways to thrilling water sports adventures, all while maintaining our commitment to sustainable tourism and environmental protection.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-white text-center p-8">
                <div>
                  <Award className="h-20 w-20 mx-auto mb-4" />
                  <h4 className="text-3xl font-bold mb-2">10+ Years</h4>
                  <p className="text-xl">of Excellence in Ocean Tourism</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              description: 'To provide safe, memorable, and sustainable ocean experiences that inspire appreciation for marine environments while supporting local coastal communities.'
            },
            {
              icon: Eye,
              title: 'Our Vision',
              description: 'To be the leading ocean tourism provider in Southeast Asia, recognized for exceptional service, environmental stewardship, and transformative travel experiences.'
            },
            {
              icon: Heart,
              title: 'Our Values',
              description: 'Safety first, environmental responsibility, cultural respect, customer satisfaction, and continuous improvement in everything we do.'
            }
          ].map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-all">
              <item.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Commitment to Sustainability</h3>
          <p className="text-xl text-blue-50 max-w-3xl mx-auto mb-8">
            We believe in protecting the ocean environments we love. Every tour includes education about marine conservation, and we partner with local organizations to support beach cleanups and coral reef restoration projects.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="bg-white bg-opacity-20 rounded-full px-6 py-3">
              🌊 Zero Plastic Initiative
            </div>
            <div className="bg-white bg-opacity-20 rounded-full px-6 py-3">
              🐠 Marine Life Protection
            </div>
            <div className="bg-white bg-opacity-20 rounded-full px-6 py-3">
              ♻️ Eco-Friendly Practices
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}