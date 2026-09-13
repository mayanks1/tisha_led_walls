import { Monitor, Heart, Briefcase, Music, PartyPopper, Building2, Check } from 'lucide-react';

export default function Services() {
  const handleServiceClick = (serviceName: string) => {
    const message = encodeURIComponent(
      `Hi Tisha LED Walls, I want to book ${serviceName.replace(/\s+on\s+rent/i, '')}.`
    );
    window.open(`https://wa.me/917703948857?text=${message}`, '_blank');
  };

  const getServiceId = (serviceName: string) =>
    `service-${serviceName.toLowerCase().replace(/\s+/g, '-')}`;

  const ledSizes = [
    {
      // size: 'LED Screen on rent',
      img: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1776421303/Led_screen_on_rent.jpg_adu3dq.jpg',
      description: 'LED Screen on rent',
      price: 'Book Now'
    },
    {
      // size: '16ft x 10ft',
      img: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1776421304/Sound_system_on_rent_zqtd1u.png',
      description: 'Sound System on rent',
      price: 'Book Now'
    },
    {
      // size: '24ft x 12ft',
      img: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1776421306/pa_system_on_rent_crlkuo.png',
      description: 'PA System on rent',
      price: 'Book Now'
    },
    {
      // size: 'custom sizes',
      img: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1776421306/av_system_on_rent_m3zqd8.png',
      description: 'AV System on rent',
      price: 'Book Now'
    },
    {
      // size: 'custom sizes',
      img:'https://res.cloudinary.com/dcfouzaii/image/upload/v1776421303/projector_on_rent_f3w2tk.png',
      description: 'Projector on rent',
      price: 'Book Now'
    },
    {
      // size: 'custom sizes',
      img:'https://res.cloudinary.com/dcfouzaii/image/upload/v1776422241/PLASMA_TV_uregnc.jpg',
      description: 'LED TV on rent',
      price: 'Book Now'
    },
    {
      // size: 'custom sizes',
      img:'https://res.cloudinary.com/dcfouzaii/image/upload/v1776422240/stage_on_rent_rl6yc0.jpg',
      description: 'Stage on rent',
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
            Flexible Solutions for
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text"> Every Occasion</span>
          </h2>
        </div>

        <div className="mb-20">
          {/* <h3 className="text-3xl font-bold text-white text-center mb-12">Available Services</h3> */}
          <div className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
            {ledSizes.map((item, index) => (
              <button
                key={index}
                id={getServiceId(item.description)}
                type="button"
                onClick={() => handleServiceClick(item.description)}
                aria-label={`Book ${item.description}`}
                className="w-full min-w-0 scroll-mt-24 p-3 md:p-6 text-left bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-yellow-500/20 rounded-xl md:rounded-2xl hover:border-yellow-500/50 transition-all duration-300 group hover:scale-105 cursor-pointer"
              >
                <div className="text-3xl font-bold text-yellow-400 mb-3">
                  <img
                    src={item.img.replace('/upload/', '/upload/f_auto,q_auto,w_800/')}
                    alt={item.description}
                    className="w-full h-28 sm:h-36 md:h-48 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="text-sm md:text-base text-gray-300 mb-4">{item.description}</p>
                <div className="pt-4 border-t border-gray-700">
                  <span className="text-yellow-500 font-semibold transition-all duration-200 group-hover:text-yellow-400">
                    {item.price}
                  </span>
                </div>
              </button>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-6 text-sm">
            *Prices may vary based on duration, location, and additional requirements. Contact us for a detailed quote.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Events We Serve</h3>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
