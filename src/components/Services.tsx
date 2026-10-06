import {
  ArrowUpRight,
  AudioLines,
  Briefcase,
  Building2,
  Check,
  Heart,
  Monitor,
  Music,
  PartyPopper,
  Sparkles,
  Tv,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getHighQualityImageUrl } from '../data/seoPages';

export default function Services() {
  const featuredService = {
    href: '/led-wall-rental-gurgaon',
    img: getHighQualityImageUrl(
      'https://res.cloudinary.com/dcfouzaii/image/upload/v1763445163/1_rydru9.jpg',
      1600
    ),
  };

  const serviceLinks = [
    {
      href: '/led-screen-rental-gurgaon',
      label: 'LED Screen on Rent',
      description: 'Screens for presentations and live event viewing.',
      icon: Tv,
      accent: 'text-sky-300 bg-sky-400/10 border-sky-300/15',
    },
    {
      href: '/led-tv-standee-rental-gurgaon',
      label: 'LED TV & Standee Rental',
      description: 'Standalone displays for event and presentation use.',
      icon: Tv,
      accent: 'text-cyan-300 bg-cyan-400/10 border-cyan-300/15',
    },
    {
      href: '/stage-setup-gurgaon',
      label: 'Stage Setup',
      description: 'Stage rentals planned around your venue and event.',
      icon: Sparkles,
      accent: 'text-amber-300 bg-amber-400/10 border-amber-300/15',
    },
    {
      href: '/dj-services-gurgaon',
      label: 'DJ Services',
      description: 'Music and sound requirements for your celebration.',
      icon: AudioLines,
      accent: 'text-fuchsia-300 bg-fuchsia-400/10 border-fuchsia-300/15',
    },
    {
      href: '/live-band-gurgaon',
      label: 'Live Band',
      description: 'Live music for weddings and event programmes.',
      icon: Music,
      accent: 'text-rose-300 bg-rose-400/10 border-rose-300/15',
    },
    {
      href: '/event-decoration-gurgaon',
      label: 'Event Decoration',
      description: 'Discuss the stage, backdrop and event setting.',
      icon: PartyPopper,
      accent: 'text-emerald-300 bg-emerald-400/10 border-emerald-300/15',
    },
    {
      href: '/event-services-gurgaon',
      label: 'All Event Services',
      description: 'Bring event equipment and services together.',
      icon: Building2,
      accent: 'text-violet-300 bg-violet-400/10 border-violet-300/15',
    },
  ];

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
      description: 'LED TV / Standee on rent',
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
    <section id="services" className="relative overflow-hidden bg-[#080a09] py-20 sm:py-24">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-yellow-500 blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/[0.07] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300">Event rentals &amp; production</span>
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              LED Wall Rental in Gurgaon
              <span className="mt-1 block bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Build the rest around it.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-gray-400 md:pb-1">
            LED wall rental is our speciality. Add the stage, sound or event support your occasion needs.
          </p>
        </div>

        <nav aria-label="Event services" className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          <Link
            to={featuredService.href}
            className="group relative isolate flex min-h-[360px] flex-col justify-between overflow-hidden rounded-3xl border border-yellow-300/30 bg-[#11120f] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-1 hover:border-yellow-300/60 hover:shadow-[0_30px_90px_rgba(234,179,8,0.13)] sm:col-span-2 sm:p-8 lg:min-h-[400px] lg:col-span-2"
          >
            <img
              src={featuredService.img}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 z-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />

            <div className="relative z-20 flex items-start justify-between gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-200/20 bg-black/35 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-yellow-200 backdrop-blur-md">
                <Monitor className="h-4 w-4" />
                Our primary service
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition group-hover:border-yellow-300 group-hover:bg-yellow-400 group-hover:text-black">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>

            <div className="relative z-20 max-w-xl">
              <p className="mb-3 text-sm font-medium text-yellow-200">For weddings, corporate events &amp; live shows</p>
              <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Make the screen
                <span className="mt-1 block text-yellow-300">the moment.</span>
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-6 text-gray-200 sm:text-base">
                Event-ready displays, professional installation and on-site technical support.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-white">
                Explore LED wall rentals
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
          </Link>

          <div className="grid gap-4 sm:col-span-2 sm:grid-cols-2 lg:grid-rows-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-5">
            {serviceLinks
              .filter((service) =>
                ['/led-screen-rental-gurgaon', '/led-tv-standee-rental-gurgaon'].includes(service.href)
              )
              .map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="group relative flex min-h-[172px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-br from-white/[0.065] to-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-300/35 hover:bg-white/[0.07] sm:min-h-[190px] sm:p-6 lg:min-h-0"
                  >
                    <span className={`flex h-11 w-11 items-center justify-center rounded-xl border ${service.accent}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="mt-5 flex items-end justify-between gap-3">
                      <span>
                        <span className="block text-lg font-semibold text-white">{service.label}</span>
                        <span className="mt-1.5 block text-sm leading-5 text-gray-400">{service.description}</span>
                      </span>
                      <ArrowUpRight className="mb-0.5 h-4 w-4 shrink-0 text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-yellow-300" />
                    </span>
                  </Link>
                );
              })}
            {serviceLinks
              .filter((service) => service.href === '/stage-setup-gurgaon')
              .map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="group relative flex min-h-[172px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-br from-white/[0.065] to-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-300/35 hover:bg-white/[0.07] sm:col-span-2 sm:min-h-[190px] sm:flex-row sm:items-center sm:justify-start sm:gap-6 sm:p-6 lg:min-h-0"
                  >
                    <span className={`flex h-11 w-11 items-center justify-center rounded-xl border ${service.accent}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="mt-5 flex items-end justify-between gap-3 sm:mt-0 sm:flex-1">
                      <span>
                        <span className="block text-lg font-semibold text-white">{service.label}</span>
                        <span className="mt-1.5 block text-sm leading-5 text-gray-400">{service.description}</span>
                      </span>
                      <ArrowUpRight className="mb-0.5 h-4 w-4 shrink-0 text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-yellow-300" />
                    </span>
                  </Link>
                );
              })}
          </div>

          <div className="grid items-start gap-4 sm:col-span-2 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-4 lg:gap-5">
          {serviceLinks
            .filter((service) =>
              ![
                '/led-screen-rental-gurgaon',
                '/led-tv-standee-rental-gurgaon',
                '/stage-setup-gurgaon',
              ].includes(service.href)
            )
            .map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                to={service.href}
                className="group relative flex min-h-[172px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-br from-white/[0.065] to-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-300/35 hover:bg-white/[0.07] sm:min-h-[190px] sm:p-6"
              >
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl border ${service.accent}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="mt-5 flex items-end justify-between gap-3">
                  <span>
                    <span className="block text-lg font-semibold text-white">{service.label}</span>
                    <span className="mt-1.5 block text-sm leading-5 text-gray-400">{service.description}</span>
                  </span>
                  <ArrowUpRight className="mb-0.5 h-4 w-4 shrink-0 text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-yellow-300" />
                </span>
              </Link>
            );
          })}
          </div>
        </nav>

        <div className="mb-12 flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yellow-400">Equipment for your event</p>
            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Popular rentals</h3>
          </div>
          <p className="max-w-md text-sm leading-6 text-gray-400">Select an item to enquire. We’ll help you check the details for your event.</p>
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
                    src={item.img.replace('/upload/', '/upload/f_auto,q_90,w_1000,c_limit/')}
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

        <div id="events-we-serve" className="mb-20 scroll-mt-24">
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
