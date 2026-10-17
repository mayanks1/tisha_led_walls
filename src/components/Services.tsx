import {
  ArrowUpRight,
  AudioLines,
  Briefcase,
  Building2,
  Check,
  CheckCircle2,
  Heart,
  MessageCircle,
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
      img: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1776421303/Led_screen_on_rent.jpg_adu3dq.jpg',
      description: 'LED Screen on Rent',
      badge: 'P3 / P4 4K Ultra HD',
      subtitle: 'Modular indoor & outdoor screens with high-refresh video processors.',
      price: 'Enquire on WhatsApp'
    },
    {
      img: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1776421304/Sound_system_on_rent_zqtd1u.png',
      description: 'Sound System on Rent',
      badge: 'Line Array & Heavy Bass',
      subtitle: 'Concert-grade line array towers, dual subwoofers & live digital mixing.',
      price: 'Enquire on WhatsApp'
    },
    {
      img: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1776421306/pa_system_on_rent_crlkuo.png',
      description: 'PA System on Rent',
      badge: 'Wireless Speech Audio',
      subtitle: 'Conference podium microphones, wireless lapels & crystal-clear PA audio.',
      price: 'Enquire on WhatsApp'
    },
    {
      img: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1776421306/av_system_on_rent_m3zqd8.png',
      description: 'AV System on Rent',
      badge: 'Seamless 4K Switching',
      subtitle: 'Multi-camera feeds, presentation consoles & zero-latency video switching.',
      price: 'Enquire on WhatsApp'
    },
    {
      img: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1776421303/projector_on_rent_f3w2tk.png',
      description: 'Projector on Rent',
      badge: 'High-Lumen Laser Display',
      subtitle: 'High-brightness laser projectors with large motorized dropdown screens.',
      price: 'Enquire on WhatsApp'
    },
    {
      img: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1776422241/PLASMA_TV_uregnc.jpg',
      id: 'service-led-tv-on-rent',
      description: 'LED TV & Standee on Rent',
      badge: '55"–75" Ultra HD Displays',
      subtitle: 'Chrome floor standees for entrance branding, lobbies & executive booths.',
      price: 'Enquire on WhatsApp'
    },
    {
      img: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1776422240/stage_on_rent_rl6yc0.jpg',
      description: 'Stage Setup on Rent',
      badge: 'Heavy-Duty Modular Stage',
      subtitle: 'Carpeted stage risers, aluminum trussing, safety stairs & masking.',
      price: 'Enquire on WhatsApp'
    },
    {
      img: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763472330/IMG_4809_rc8kcm.jpg',
      description: 'DJ & Sound Setup on Rent',
      badge: 'Pioneer Console & Party Rig',
      subtitle: 'Pro DJ console, high-bass club speakers, moving lights & smoke effects.',
      price: 'Enquire on WhatsApp'
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
    <section id="services" className="relative overflow-hidden bg-[#080a09] pt-10 pb-12 sm:pt-12 sm:pb-16">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-yellow-500 blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/[0.07] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300">Event rentals &amp; production</span>
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              LED Wall Rental in Gurgaon
              <span className="mt-1 block bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent pb-1">
                Build the rest around it.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-gray-400 md:pb-1">
            LED wall rental is our speciality. Add the stage, sound or event support your occasion needs.
          </p>
        </div>

        <nav aria-label="Event services" className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
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

        {/* Royal Equipment for Your Event Section */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-white/10 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/[0.07] px-3 py-1 mb-2">
              <Sparkles className="h-3 w-3 text-yellow-400" />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-yellow-300">
                Premium Event Gear Inventory
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Popular Event Gear on{' '}
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent pb-1 inline-block">
                Rent in Gurgaon
              </span>
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-emerald-300 font-medium">
              <CheckCircle2 className="h-3.5 w-3.5" />
              2-Hour Early Setup
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-yellow-300 font-medium">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Dedicated On-Site Crew
            </span>
          </div>
        </div>

        <div className="mb-14 sm:mb-16">
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {ledSizes.map((item, index) => (
              <div
                key={index}
                id={item.id ?? getServiceId(item.description)}
                onClick={() => handleServiceClick(item.description)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleServiceClick(item.description);
                  }
                }}
                aria-label={`Book ${item.description}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl md:rounded-3xl border border-yellow-500/20 bg-gradient-to-b from-[#141715] via-[#0d100e] to-black p-3 sm:p-4 shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/50 hover:shadow-[0_20px_45px_rgba(250,204,21,0.14)] cursor-pointer"
              >
                {/* Royal Ambient Glow Accent */}
                <div className="pointer-events-none absolute -top-12 -right-12 h-28 w-28 rounded-full bg-yellow-400/[0.08] blur-2xl transition duration-500 group-hover:bg-yellow-400/[0.22]" />

                {/* Clean Unobstructed Media Graphic Container */}
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl border border-white/10 aspect-[16/11] mb-3 bg-black/50">
                  <img
                    src={item.img.replace('/upload/', '/upload/f_auto,q_auto,w_800,c_limit/')}
                    alt={item.description}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Card Content with Unobscured Badge */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="mb-2">
                      <span className="inline-flex items-center gap-1 rounded-md border border-yellow-400/25 bg-yellow-400/[0.08] px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-yellow-300">
                        <Sparkles className="h-2.5 w-2.5 text-yellow-400" />
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-white transition duration-300 group-hover:text-yellow-200">
                      {item.description}
                    </h4>
                    <p className="mt-1 text-xs text-gray-400 leading-relaxed line-clamp-2 hidden sm:block">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Royal Action CTA Bar */}
                  <div className="mt-3 pt-2.5 sm:mt-4 sm:pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs font-semibold text-yellow-400 group-hover:text-yellow-300 transition flex items-center gap-1">
                      <MessageCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-400" />
                      Instant Quote
                    </span>
                    <span className="flex h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-[0_0_12px_rgba(250,204,21,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.55)]">
                      <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 text-xs text-gray-400">
            <span className="flex items-center gap-2 text-center sm:text-left">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Need custom trussing or multi-screen synchronized video? We customize to venue blueprints.
            </span>
            <a
              href="https://wa.me/917703948857?text=Hi%20Tisha%20LED%20Walls%2C%20I%20need%20a%20custom%20setup%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-yellow-400 hover:text-yellow-300 underline underline-offset-4 shrink-0"
            >
              Consult Event Engineer →
            </a>
          </div>
        </div>

        <div id="events-we-serve" className="mb-12 sm:mb-14 scroll-mt-24">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Events We Serve</h3>
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
