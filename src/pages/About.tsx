import { Heart, Target, Eye, Award, Mountain, Leaf, Waves } from 'lucide-react';

export default function About() {
  return (
    <div className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Marina Travel</h2>
          <p className="text-xl text-accent max-w-3xl mx-auto">
            Connecting people with the ocean for over a decade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Our Story</h3>
            <div className="space-y-4 text-accent leading-relaxed text-lg">
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
            <div className="aspect-square rounded-3xl overflow-hidden shadow-apple">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                <Waves className="h-32 w-32 text-blue-300" />
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
            <div key={index} className="apple-card p-8 hover:shadow-apple-hover">
              <div className="bg-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-accent leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="apple-card p-12 text-center">
          <div className="flex justify-center mb-6">
            <Leaf className="h-12 w-12 text-green-500" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Commitment to Sustainability</h3>
          <p className="text-xl text-accent max-w-3xl mx-auto mb-8">
            We believe in protecting the ocean environments we love. Every tour includes education about marine conservation, and we partner with local organizations to support beach cleanups and coral reef restoration projects.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="bg-secondary rounded-full px-6 py-3">
              🌊 Zero Plastic Initiative
            </div>
            <div className="bg-secondary rounded-full px-6 py-3">
              🐠 Marine Life Protection
            </div>
            <div className="bg-secondary rounded-full px-6 py-3">
              ♻️ Eco-Friendly Practices
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}