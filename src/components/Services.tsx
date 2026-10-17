import { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Briefcase,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Heart,
  MapPin,
  MessageCircle,
  Monitor,
  Music,
  PartyPopper,
  Phone,
  ShieldCheck,
  Sparkles,
  Tv,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getHighQualityImageUrl } from '../data/seoPages';

export default function Services() {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [isEventAutoPlaying, setIsEventAutoPlaying] = useState(false);

  useEffect(() => {
    if (!isEventAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveEventIndex((prev) => (prev + 1) % 6);
    }, 5500);
    return () => clearInterval(interval);
  }, [isEventAutoPlaying]);

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
      label: 'LED Screen on Rent in Gurgaon',
      description: 'Ultra-clear P2, P3 & P4 displays for corporate conferences & live streaming.',
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
      badge: 'P2 / P3 / P4 4K Ultra HD',
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

  const eventsData = [
    {
      id: 'weddings',
      name: 'Weddings & Sangeet',
      shortName: 'Weddings',
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
      glow: 'rgba(244,63,94,0.35)',
      borderColor: 'border-pink-500/40',
      activeGradient: 'from-pink-500/20 via-rose-500/10 to-transparent',
      tag: 'Wedding Stage & Sangeet LED Wall',
      tagline: 'P2 & P3 Wedding LED Wall on Rent in Gurgaon & Sohna Road',
      description: 'High-refresh (3840Hz) flicker-free stage backdrops for varmala entries, live sangeet choreography, and pre-wedding reels. Calibrated for professional 4K wedding videography with zero camera scanlines or moiré bars.',
      image: 'https://res.cloudinary.com/dcfouzaii/image/upload/f_auto,q_auto,w_1000/v1763360996/IMG_4793_gxxuqc.jpg',
      location: 'Sohna Road Farmhouses & Grand Banquets, Gurugram',
      screenSpec: 'P2 / P3 Ultra HD · 3840Hz Zero-Scanline IC',
      audioSpec: 'JBL Dual Line-Array Sound & Shure Wireless Mics',
      setupTime: 'Handed Over 3 Hours Before Baarat with Live Tech',
      badge: 'Gurgaon Wedding Industry Benchmark'
    },
    {
      id: 'corporate',
      name: 'Corporate Summits',
      shortName: 'Corporate',
      icon: Briefcase,
      color: 'from-blue-500 to-indigo-600',
      glow: 'rgba(59,130,246,0.35)',
      borderColor: 'border-blue-500/40',
      activeGradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
      tag: 'Corporate Event AV & Presentation Screens',
      tagline: 'Corporate P2 & P3 LED Screen & Dual Presentation Walls on Rent',
      description: 'Zero-latency video switching for keynote decks, live hybrid conferences, and AGM summits across Cyber City, Golf Course Road, and Udyog Vihar. Instant HDMI/Type-C presenter switching with zero freeze.',
      image: 'https://res.cloudinary.com/dcfouzaii/image/upload/f_auto,q_auto,w_1000/v1763473380/IMG_4648_ic3pjf.jpg',
      location: 'DLF Cyber City, Golf Course Road & Aerocity',
      screenSpec: 'Dual P2 / P3 Seamless Video Walls & NovaStar VX1000',
      audioSpec: 'Podium Gooseneck, Shure Wireless Lapels & Digital Mixer',
      setupTime: 'Rehearsal-Ready 4 Hours Early with On-Site Engineer',
      badge: 'Cyber Hub & Aerocity Corporate Choice'
    },
    {
      id: 'concerts',
      name: 'Concerts & Live Shows',
      shortName: 'Concerts',
      icon: Music,
      color: 'from-purple-500 to-violet-600',
      glow: 'rgba(168,85,247,0.35)',
      borderColor: 'border-purple-500/40',
      activeGradient: 'from-purple-500/20 via-violet-500/10 to-transparent',
      tag: 'Outdoor Concert & Live Music Stage',
      tagline: 'Outdoor P3 & P4 LED Wall & Heavy-Duty Stage Truss Rental in NCR Arenas',
      description: 'High-brightness 5,500+ nit daylight-visible outdoor LED screens built on heavy-duty aluminum box trussing. Engineered for college fests, live band concerts, and Punjabi music nights across Leisure Valley and NCR open grounds.',
      image: 'https://res.cloudinary.com/dcfouzaii/image/upload/f_auto,q_auto,w_1000/v1763361199/IMG_4794_ipv4ds.jpg',
      location: 'Leisure Valley, Expocentre & Open Arenas, NCR',
      screenSpec: 'P3 / P4 Outdoor IP65 Waterproof · 5,500 Nit High-Bright',
      audioSpec: 'JBL VRX Line-Array Towers, Dual 18" Subs & Stage Monitors',
      setupTime: 'Engineered Truss Rigging & Sound Check 5 Hours Prior',
      badge: 'Festivals, Live Bands & Open Arenas'
    },
    {
      id: 'parties',
      name: 'Private Galas & Parties',
      shortName: 'Parties',
      icon: PartyPopper,
      color: 'from-amber-400 to-yellow-600',
      glow: 'rgba(250,204,21,0.35)',
      borderColor: 'border-yellow-500/40',
      activeGradient: 'from-amber-500/20 via-yellow-500/10 to-transparent',
      tag: 'Cocktail Parties & Farmhouse DJ Setup',
      tagline: 'DJ LED Backdrop & Club Lighting Setup for Farmhouse Galas',
      description: 'Custom curved and modular LED screen backdrops wrapped behind DJ booths, paired with high-bass club sound and beam moving heads. Tailored for milestone birthdays, cocktail bashes, and anniversary parties in DLF Phase 1-5 and Chattarpur/Sohna Road farmhouses.',
      image: 'https://res.cloudinary.com/dcfouzaii/image/upload/f_auto,q_auto,w_1000/v1763445163/1_rydru9.jpg',
      location: 'DLF Phase 1-5, Chattarpur & Sohna Rd Farmhouses',
      screenSpec: 'P3 & P4 Curved LED DJ Backdrop · Sound-Synced Visuals',
      audioSpec: 'High-Bass Club Sound Rig, Moving Heads & Smoke Blasters',
      setupTime: 'Discreet Fast Setup with Dedicated Console Operator',
      badge: 'Boutique Farmhouses & Private Galas'
    },
    {
      id: 'conferences',
      name: 'Conferences & Seminars',
      shortName: 'Conferences',
      icon: Building2,
      color: 'from-emerald-500 to-teal-600',
      glow: 'rgba(16,185,129,0.35)',
      borderColor: 'border-emerald-500/40',
      activeGradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      tag: 'Auditorium Seminars & Annual Meets',
      tagline: 'High-Resolution Conference P2 & P3 LED Screen on Rent for Auditoriums',
      description: 'Fine-pitch LED screens calibrated for financial spreadsheets, medical charts, and speaker decks. Every attendee in the last row of hotel ballrooms and convention centers reads numbers and fine text with 1080p/4K sharpness.',
      image: 'https://res.cloudinary.com/dcfouzaii/image/upload/f_auto,q_auto,w_1000/v1763474549/IMG_4815_ypgfxe.jpg',
      location: 'Hotel Ballrooms & Convention Auditoriums, Gurugram',
      screenSpec: 'P2 / P3 High-Clarity Display · True 16:9 Slide Ratio',
      audioSpec: 'Roving Audience Q&A Mics, Stage Monitors & Line Out',
      setupTime: 'Morning Dry Run Completed with Backup Switcher Live',
      badge: '5-Star Ballrooms & Convention Centers'
    },
    {
      id: 'launches',
      name: 'Product Launches',
      shortName: 'Product Launches',
      icon: Monitor,
      color: 'from-cyan-500 to-blue-600',
      glow: 'rgba(6,182,212,0.35)',
      borderColor: 'border-cyan-500/40',
      activeGradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
      tag: 'Brand Unveiling & Expo Stage Rig',
      tagline: 'Flagship P2, P3 & P4 Product Launch LED Screen & Stage Production in Gurgaon',
      description: 'Large-format curved and flat video backdrops for automobile unveilings, luxury real estate launches, and tech expos. Synchronized reveal countdown graphics, cue-to-cue stage lighting drops, and multi-camera live video relays.',
      image: 'https://res.cloudinary.com/dcfouzaii/image/upload/f_auto,q_90,w_1600/v1763473380/IMG_5370_eyb8qp.jpg',
      location: 'Tech Hubs, Luxury Malls & Automotive Corridors',
      screenSpec: 'P2, P3 & P4 Curved & Flat Stage Wall · Ultra-Wide Aspect',
      audioSpec: 'Concert-Grade PA, Boom Bass Drops & Redundant Video Feed',
      setupTime: 'Full Show Cue Rehearsal Handled with Director Console',
      badge: 'Automotive Unveilings & Tech Launches'
    }
  ];

  useEffect(() => {
    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent<string | number>;
      if (typeof customEvent.detail === 'number' && customEvent.detail >= 0 && customEvent.detail < eventsData.length) {
        setActiveEventIndex(customEvent.detail);
      } else if (typeof customEvent.detail === 'string') {
        const found = eventsData.findIndex((item) => item.id === customEvent.detail);
        if (found !== -1) setActiveEventIndex(found);
      }
    };
    window.addEventListener('select-service', handleSelectService);
    return () => window.removeEventListener('select-service', handleSelectService);
  }, [eventsData.length]);

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
              LED Wall on Rent in Gurgaon
              <span className="mt-1 block bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent pb-1">
                Bigger Screens, Brighter Moments.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-gray-400 md:pb-1">
            Top-rated LED screen on rent and LED wall rental in Gurgaon &amp; Delhi NCR. Backed by complete audio-visual engineering, sound systems, and stage trussing.
          </p>
        </div>

        <nav aria-label="Event services" className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          <Link
            to={featuredService.href}
            className="group relative isolate flex min-h-[360px] flex-col justify-between overflow-hidden rounded-3xl border border-yellow-300/30 bg-[#11120f] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-1 hover:border-yellow-300/60 hover:shadow-[0_30px_90px_rgba(234,179,8,0.13)] sm:col-span-2 sm:p-8 lg:min-h-[400px] lg:col-span-2"
          >
            <img
              src={featuredService.img}
              alt="LED wall on rent in Gurgaon"
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
                Featured Service
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition group-hover:border-yellow-300 group-hover:bg-yellow-400 group-hover:text-black">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>

            <div className="relative z-20 max-w-xl">
              <p className="mb-3 text-sm font-medium text-yellow-200">For luxury weddings, corporate summits &amp; live concerts</p>
              <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                LED Wall on Rent
                <span className="mt-1 block text-yellow-300">in Gurgaon &amp; Delhi NCR</span>
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-6 text-gray-200 sm:text-base">
                High-definition P2, P3 &amp; P4 event displays with zero-flicker 3840Hz refresh rates, on-site live switching, and doorstep setup.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-white">
                Explore LED Wall on Rent in Gurgaon
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

        {/* Interactive & Animated Events We Serve Section */}
        <div id="events-we-serve" className="mb-14 sm:mb-16 scroll-mt-24">
          {/* Section Header */}
          <div className="text-center mb-5 sm:mb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-yellow-400/25 bg-yellow-400/[0.08] px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300 backdrop-blur-md mb-2 sm:mb-3">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-yellow-400 animate-pulse" />
              Event LED Wall &amp; AV Rentals in Gurgaon
            </div>
            <h3 className="text-2xl font-extrabold text-white sm:text-4xl md:text-5xl tracking-tight">
              Turnkey LED Displays for{' '}
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent inline-block pb-1">
                Every Occasion
              </span>
            </h3>
            <p className="mt-1.5 text-xs sm:text-base text-gray-300 max-w-2xl mx-auto hidden sm:block">
              Choose your event type to view tested screen dimensions, audio configurations, and on-site engineering across Gurugram and Delhi NCR.
            </p>
          </div>

          {/* ======================================================== */}
          {/* MOBILE & TABLET LAYOUT (lg:hidden): Interactive Accordion */}
          {/* ======================================================== */}
          <div className="lg:hidden space-y-3">
            {eventsData.map((event, index) => {
              const Icon = event.icon;
              const isExpanded = activeEventIndex === index;
              return (
                <div
                  key={event.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${isExpanded
                      ? 'border-yellow-400/90 bg-[#141713] ring-1 ring-yellow-400/60 shadow-[0_0_20px_rgba(250,204,21,0.22)]'
                      : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                    }`}
                >
                  {/* Accordion Header Row */}
                  <button
                    type="button"
                    onClick={(e) => {
                      setIsEventAutoPlaying(false);
                      setActiveEventIndex(isExpanded ? -1 : index);
                      if (!isExpanded) {
                        setTimeout(() => {
                          e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }, 50);
                      }
                    }}
                    className="w-full flex items-center justify-between p-3.5 sm:p-4 text-left transition active:scale-[0.99] duration-150"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center shadow-md transition-all duration-200 ${isExpanded ? 'scale-105 shadow-[0_0_12px_rgba(250,204,21,0.4)]' : ''
                          }`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h4 className={`text-sm sm:text-base font-bold transition-colors duration-150 ${isExpanded ? 'text-yellow-300' : 'text-white'}`}>
                          {event.name}
                        </h4>
                        <p className="text-[11px] text-gray-400 truncate">
                          {event.tag}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-200 ${isExpanded
                            ? 'border-yellow-400 bg-yellow-400 text-black rotate-180 shadow-[0_0_10px_rgba(250,204,21,0.5)]'
                            : 'border-white/10 bg-white/5 text-gray-300'
                          }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </div>
                  </button>

                  {/* Expanded Accordion Body directly inline */}
                  {isExpanded && (
                    <div className="px-3.5 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-white/10 space-y-4 animate-fast-in">
                      {/* Media Graphic with Badges */}
                      <div className="group relative overflow-hidden rounded-xl border border-white/15 aspect-[16/10] bg-black/60 shadow-lg mt-1">
                        <img
                          src={event.image}
                          alt={event.name}
                          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-400/40 bg-black/85 px-2.5 py-0.5 text-[11px] font-bold text-yellow-300 backdrop-blur-md shadow-md">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                            {event.badge}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/60 px-2 py-0.5 text-[10px] font-medium text-gray-300 backdrop-blur-md">
                            <MapPin className="h-3 w-3 text-yellow-400" />
                            NCR
                          </span>
                        </div>

                        <div className="absolute bottom-2.5 left-2.5 right-2.5">
                          <div className="flex items-center gap-1 text-[11px] text-yellow-400/90 font-medium mb-0.5">
                            <MapPin className="h-3 w-3 text-yellow-400" />
                            <span>{event.location}</span>
                          </div>
                          <div className="text-xs sm:text-sm font-bold text-white">
                            {event.tag}
                          </div>
                        </div>
                      </div>

                      {/* Headline and Description */}
                      <div>
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-yellow-400/20 bg-yellow-400/[0.08] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-yellow-300 mb-1.5">
                          <Icon className="h-3 w-3" />
                          {event.shortName} Setup Configuration
                        </div>
                        <h5 className="text-base sm:text-lg font-bold text-white leading-snug">
                          {event.tagline}
                        </h5>
                        <p className="mt-1 text-xs text-gray-300 leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      {/* Compact Spec Chips */}
                      <div className="space-y-2 pt-0.5">
                        <div className="flex items-start gap-2.5 rounded-lg border border-white/10 bg-white/[0.025] p-2.5">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mt-0.5">
                            <Tv className="h-3.5 w-3.5" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[10px] font-bold uppercase tracking-wider text-yellow-300">
                              Screen Specification
                            </div>
                            <div className="text-xs font-semibold text-white">
                              {event.screenSpec}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 rounded-lg border border-white/10 bg-white/[0.025] p-2.5">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mt-0.5">
                            <AudioLines className="h-3.5 w-3.5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-[10px] font-bold uppercase tracking-wider text-yellow-300">
                              Sound &amp; Audio Visuals
                            </div>
                            <div className="text-xs font-semibold text-white">
                              {event.audioSpec}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 rounded-lg border border-white/10 bg-white/[0.025] p-2.5">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 mt-0.5">
                            <Clock className="h-3.5 w-3.5" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                              Execution &amp; Crew
                            </div>
                            <div className="text-xs font-semibold text-white">
                              {event.setupTime}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Direct WhatsApp & Call Action Bar */}
                      <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
                        <a
                          href={`https://wa.me/917703948857?text=${encodeURIComponent(
                            `Hi Tisha LED Walls, I need an LED wall rental quote for ${event.name} in Gurgaon (${event.screenSpec}). Please share package rates and availability.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 px-4 py-2.5 text-xs font-bold text-black shadow-[0_0_15px_rgba(250,204,21,0.3)] transition active:scale-95"
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span>Get {event.shortName} LED Wall Quote</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>

                        <a
                          href="tel:+917703948857"
                          className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-300 active:scale-95"
                        >
                          <Phone className="h-3.5 w-3.5 text-yellow-400" />
                          <span>Call +91 7703948857</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ======================================================== */}
          {/* DESKTOP LAYOUT (lg:block): 6-Col Selector & Showcase Panel */}
          {/* ======================================================== */}
          <div className="hidden lg:block">
            {/* Interactive 6-Card Category Selector Tabs */}
            <div className="grid grid-cols-6 gap-3.5 mb-6">
              {eventsData.map((event, index) => {
                const Icon = event.icon;
                const isActive = activeEventIndex === index;
                return (
                  <button
                    key={event.id}
                    type="button"
                    onClick={() => {
                      setIsEventAutoPlaying(false);
                      setActiveEventIndex(index);
                    }}
                    className={`group relative flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all duration-150 active:scale-95 ${isActive
                      ? 'border-yellow-400/90 bg-[#151914] ring-1 ring-yellow-400/70 shadow-[0_0_22px_rgba(250,204,21,0.28)] -translate-y-1'
                      : 'border-white/10 bg-white/[0.025] hover:border-yellow-400/40 hover:bg-white/[0.05] hover:-translate-y-0.5'
                      }`}
                    aria-pressed={isActive}
                  >
                    {/* Active Indicator Top Light Bar */}
                    {isActive && (
                      <span className="absolute -top-px left-1/2 -translate-x-1/2 w-14 h-1 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.9)]" />
                    )}

                    {/* Icon with Glowing Gradient Frame */}
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${event.color} rounded-2xl flex items-center justify-center mb-2 shadow-md transition-transform duration-150 ${isActive ? 'scale-110 shadow-[0_0_16px_rgba(250,204,21,0.4)]' : 'group-hover:scale-105'
                        }`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h4
                      className={`text-sm font-bold transition-colors duration-150 ${isActive ? 'text-yellow-300' : 'text-gray-200 group-hover:text-white'
                        }`}
                    >
                      {event.name}
                    </h4>

                    <span className="mt-0.5 text-[10px] text-gray-400 truncate max-w-[120px]">
                      {event.tag}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Desktop Dynamic Showcase Panel */}
            {(() => {
              const currentEvent = eventsData[activeEventIndex >= 0 ? activeEventIndex : 0];
              const EventIcon = currentEvent.icon;
              return (
                <div
                  className="relative overflow-hidden rounded-3xl border border-yellow-500/30 bg-gradient-to-b from-[#141715] via-[#0d100e] to-black p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl transition-all duration-300"
                  onMouseEnter={() => setIsEventAutoPlaying(false)}
                >
                  {/* Ambient Radial Spotlight */}
                  <div
                    className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full blur-[140px] opacity-40 transition-colors duration-500"
                    style={{ backgroundColor: currentEvent.glow }}
                  />

                  {/* Fast Snappy Entry Wrapper on Selected Product Change */}
                  <div key={currentEvent.id} className="animate-fast-in grid grid-cols-12 gap-8 items-center relative z-10">
                    {/* Left Column: Cinematic Visual Stage Display */}
                    <div className="col-span-6">
                      <div className="group relative overflow-hidden rounded-2xl border border-white/15 aspect-[16/9] bg-black/60 shadow-2xl">
                        <img
                          src={currentEvent.image}
                          alt={currentEvent.name}
                          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Top Badges with Live Beacon */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-400/40 bg-black/85 px-3 py-1 text-xs font-bold text-yellow-300 backdrop-blur-md shadow-md">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                            {currentEvent.badge}
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 text-[11px] font-medium text-gray-300 backdrop-blur-md">
                            <MapPin className="h-3 w-3 text-yellow-400" />
                            NCR
                          </span>
                        </div>

                        {/* Bottom Image Caption */}
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="flex items-center gap-1.5 text-xs text-yellow-400/90 font-medium mb-0.5">
                            <MapPin className="h-3.5 w-3.5 text-yellow-400" />
                            <span>{currentEvent.location}</span>
                          </div>
                          <div className="text-base font-bold text-white">
                            {currentEvent.tag}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Royal Solution Specs & Direct CTA */}
                    <div className="col-span-6 space-y-5">
                      <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/[0.08] px-3 py-1 text-xs font-bold uppercase tracking-wider text-yellow-300 mb-2.5">
                          <EventIcon className="h-3.5 w-3.5" />
                          {currentEvent.shortName} Setup Configuration
                        </div>
                        <h4 className="text-3xl font-extrabold text-white tracking-tight leading-snug">
                          {currentEvent.tagline}
                        </h4>
                        <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                          {currentEvent.description}
                        </p>
                      </div>

                      {/* 3 Interactive Spec Rows */}
                      <div className="space-y-2.5 pt-1">
                        <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition duration-150 hover:border-yellow-400/40 hover:bg-white/[0.06]">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mt-0.5">
                            <Tv className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-yellow-300">
                              Screen Specification
                            </div>
                            <div className="text-sm font-semibold text-white">
                              {currentEvent.screenSpec}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition duration-150 hover:border-yellow-400/40 hover:bg-white/[0.06]">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mt-0.5">
                            <AudioLines className="h-4 w-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-yellow-300">
                              Sound &amp; Audio Visuals
                            </div>
                            <div className="text-sm font-semibold text-white">
                              {currentEvent.audioSpec}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition duration-150 hover:border-yellow-400/40 hover:bg-white/[0.06]">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 mt-0.5">
                            <Clock className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                              Execution &amp; Crew
                            </div>
                            <div className="text-sm font-semibold text-white">
                              {currentEvent.setupTime}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Direct WhatsApp & Call Action Bar */}
                      <div className="flex items-center gap-3 pt-2">
                        <a
                          href={`https://wa.me/917703948857?text=${encodeURIComponent(
                            `Hi Tisha LED Walls, I need an LED wall rental quote for ${currentEvent.name} in Gurgaon (${currentEvent.screenSpec}). Please share package rates and availability.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 px-6 py-3 text-sm font-bold text-black shadow-[0_0_20px_rgba(250,204,21,0.35)] transition-all duration-150 hover:brightness-110 active:scale-95"
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span>Get {currentEvent.shortName} LED Wall Quote</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>

                        <a
                          href="tel:+917703948857"
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-300 active:scale-95 duration-150"
                        >
                          <Phone className="h-3.5 w-3.5 text-yellow-400" />
                          <span>Call +91 7703948857</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Segmented Progress Dots for Navigation */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-gray-400 font-medium">
                      Showing {(activeEventIndex >= 0 ? activeEventIndex : 0) + 1} of {eventsData.length} occasions
                    </span>

                    <div className="flex items-center gap-1.5" aria-label="Event slides">
                      {eventsData.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          type="button"
                          onClick={() => {
                            setIsEventAutoPlaying(false);
                            setActiveEventIndex(dotIdx);
                          }}
                          className={`h-2 rounded-full transition-all duration-300 ${activeEventIndex === dotIdx
                            ? 'w-7 bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]'
                            : 'w-2 bg-white/20 hover:bg-white/40'
                            }`}
                          aria-label={`Jump to event ${dotIdx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
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
