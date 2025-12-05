import { Calendar, Users, Clock, MapPin, Star } from 'lucide-react';

const tours = [
  {
    id: 1,
    title: 'Island Hopping Adventure',
    description: 'Explore multiple pristine islands in one unforgettable day. Visit hidden beaches, snorkel in crystal-clear waters, and enjoy a beachside BBQ lunch.',
    price: '1,200,000',
    duration: 'Full Day (8 hours)',
    groupSize: 'Up to 15 people',
    location: 'Con Dao Islands',
    rating: 4.9,
    reviews: 156,
    highlights: ['Snorkeling equipment included', 'Professional guide', 'Lunch & refreshments', 'Photo opportunities']
  },
  {
    id: 2,
    title: 'Sunset Cruise Experience',
    description: 'Sail along the stunning coastline as the sun sets over the ocean. Enjoy drinks, music, and breathtaking views in this romantic evening adventure.',
    price: '800,000',
    duration: '3 hours',
    groupSize: 'Up to 30 people',
    location: 'Vung Tau Bay',
    rating: 4.8,
    reviews: 203,
    highlights: ['Welcome drinks', 'Live music', 'Sunset photography', 'Onboard dining']
  },
  {
    id: 3,
    title: 'Diving Discovery Tour',
    description: 'Discover the underwater world with our certified diving instructors. Perfect for beginners and experienced divers alike.',
    price: '1,800,000',
    duration: 'Half Day (4 hours)',
    groupSize: 'Up to 8 people',
    location: 'Hon Cau',
    rating: 5.0,
    reviews: 89,
    highlights: ['PADI certified instructors', 'All equipment provided', 'Safety briefing', 'Underwater photos']
  },
  {
    id: 4,
    title: 'Beach Relaxation Package',
    description: 'Unwind on pristine beaches with premium amenities. Includes beach chairs, umbrella, and dedicated service throughout the day.',
    price: '500,000',
    duration: 'Full Day',
    groupSize: 'Up to 4 people',
    location: 'Long Hai Beach',
    rating: 4.7,
    reviews: 312,
    highlights: ['Private beach area', 'Complimentary drinks', 'Beach activities', 'Changing facilities']
  },
  {
    id: 5,
    title: 'Water Sports Adventure',
    description: 'Get your adrenaline pumping with jet skiing, parasailing, and banana boat rides. Perfect for thrill-seekers!',
    price: '1,500,000',
    duration: 'Half Day (4 hours)',
    groupSize: 'Up to 10 people',
    location: 'Back Beach',
    rating: 4.9,
    reviews: 178,
    highlights: ['Multiple activities', 'Safety equipment', 'Experienced operators', 'Action photos']
  },
  {
    id: 6,
    title: 'Fishing Expedition',
    description: 'Traditional fishing experience with local fishermen. Learn ancient techniques and enjoy your fresh catch cooked on board.',
    price: '900,000',
    duration: 'Half Day (5 hours)',
    groupSize: 'Up to 12 people',
    location: 'Open Sea',
    rating: 4.6,
    reviews: 94,
    highlights: ['Fishing equipment', 'Local guide', 'Fresh seafood meal', 'Cultural experience']
  }
];

export default function Tours() {
  return (
    <section id="tours" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Tours & Experiences</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated selection of ocean adventures designed for every type of traveler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="h-20 w-20 text-white opacity-50" />
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-semibold text-sm">{tour.rating}</span>
                  <span className="text-gray-500 text-sm">({tour.reviews})</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tour.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{tour.description}</p>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span>{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>{tour.location}</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Tour Highlights:</p>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-1">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="text-sm text-gray-500">From</p>
                    <p className="text-2xl font-bold text-blue-600">{tour.price} VND</p>
                  </div>
                  <button
                    onClick={() => {
                      const contactSection = document.querySelector('#contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                        setTimeout(() => {
                          const serviceSelect = document.querySelector('select[name="service_interest"]') as HTMLSelectElement;
                          if (serviceSelect) {
                            serviceSelect.value = tour.title;
                          }
                        }, 500);
                      }
                    }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    Book Now
                    <Calendar className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't find what you're looking for?</h3>
          <p className="text-gray-600 mb-6">
            We offer custom tour packages tailored to your preferences. Contact us to create your perfect ocean adventure.
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Request Custom Tour
          </button>
        </div>
      </div>
    </section>
  );
}