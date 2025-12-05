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
    highlights: ['Snorkeling equipment included', 'Professional guide', 'Lunch & refreshments', 'Photo opportunities'],
    image: '/dist/images/hon-ba-7.jpg'
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
    highlights: ['Welcome drinks', 'Live music', 'Sunset photography', 'Onboard dining'],
    image: '/images/sunset.jpg'
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
    highlights: ['PADI certified instructors', 'All equipment provided', 'Safety briefing', 'Underwater photos'],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
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
    highlights: ['Private beach area', 'Complimentary drinks', 'Beach activities', 'Changing facilities'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
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
    highlights: ['Multiple activities', 'Safety equipment', 'Experienced operators', 'Action photos'],
    image: '/images/Water-activities-6-1.png'
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
    highlights: ['Fishing equipment', 'Local guide', 'Fresh seafood meal', 'Cultural experience'],
    image: '/images/positano-fishing-experience-2.jpg'
  }
];

export default function Tours() {
  return (
    <div className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Tours & Experiences</h2>
          <p className="text-xl text-accent max-w-3xl mx-auto">
            Choose from our carefully curated selection of ocean adventures designed for every type of traveler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="apple-card flex flex-col"
            >
              <div className="h-48 relative overflow-hidden rounded-t-2xl">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-apple">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-semibold text-sm">{tour.rating}</span>
                  <span className="text-gray-500 text-sm">({tour.reviews})</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-primary mb-2">{tour.title}</h3>
                <p className="text-accent mb-4 flex-1">{tour.description}</p>

                <div className="space-y-2 mb-4 text-sm text-accent">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{tour.location}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-4">
                  <p className="text-sm font-semibold text-primary mb-2">Tour Highlights:</p>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-accent">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-1">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-sm text-accent">From</p>
                    <p className="text-2xl font-bold text-primary">{tour.price} VND</p>
                  </div>
                  <a
                    href="/contact"
                    className="apple-btn flex items-center gap-2"
                  >
                    Book Now
                    <Calendar className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 apple-card p-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">Can't find what you're looking for?</h3>
          <p className="text-accent mb-6">
            We offer custom tour packages tailored to your preferences. Contact us to create your perfect ocean adventure.
          </p>
          <a
            href="/contact"
            className="apple-btn"
          >
            Request Custom Tour
          </a>
        </div>
      </div>
    </div>
  );
}