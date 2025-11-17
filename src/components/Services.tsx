import { Monitor, Heart, Briefcase, Music, PartyPopper, Building2, Check } from 'lucide-react';

export default function Services() {
  const ledSizes = [
    {
      size: '12ft x 8ft',
      description: 'Perfect for small gatherings and intimate events',
      price: 'Book Now'
    },
    {
      size: '16ft x 10ft',
      description: 'Ideal for medium-sized events and parties',
      price: 'Book Now'
    },
    {
      size: '24ft x 12ft',
      description: 'Great for weddings and corporate events',
      price: 'Book Now'
    },
    {
      size: 'custom sizes',
      description: 'Premium choice for large-scale productions',
      price: 'Book Now'
    }
  ];

  const eventTypes = [
    { icon: Heart, name: 'Weddings', color: 'from-pink-500 to-red-500' },
    { icon: Briefcase, name: 'Corporate Events', color: 'from-blue-500 to-cyan-500' },
    { icon: Music, name: 'Concerts', color: 'from-purple-500 to-pink-500' },
    { icon: PartyPopper, name: 'Parties', color: 'from-yellow-500 to-orange-500' },
    { icon: Building2, name: 'Conferences', color: 'from-green-500 to-teal-500' },
    { icon: Monitor, name: 'Product Launches', color: 'from-indigo-500 to-purple-500' }
  ];

  const rentalIncludes = [
    'Professional installation and setup',
    'High-resolution 4K display quality',
    'On-site technical support',
    'Custom content management',
    'Complete dismantling service',
    'Backup equipment included'
  ];

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-yellow-500 rounded-full filter blur-[150px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-4">
            <span className="text-yellow-400 text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Flexible LED Solutions for
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text"> Every Occasion</span>
          </h2>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Available LED Wall Sizes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ledSizes.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-yellow-500/20 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 group hover:scale-105"
              >
                <div className="text-3xl font-bold text-yellow-400 mb-3">{item.size}</div>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="pt-4 border-t border-gray-700">
                  {/* <p className="text-yellow-500 font-semibold">{item.price}</p> */}
                  <a href="tel:+917703948857">
                    <p className="text-yellow-500 font-semibold cursor-pointer transition-all duration-200 hover:text-yellow-400 hover:scale-105">
                      {item.price}
                    </p>
                  </a>
                  

                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-6 text-sm">
            *Prices may vary based on duration, location, and additional requirements. Contact us for a detailed quote.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Events We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {eventTypes.map((event, index) => {
              const Icon = event.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 group text-center hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white font-semibold">{event.name}</h4>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white text-center mb-8">What's Included in Our Rental</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rentalIncludes.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <p className="text-gray-200 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
