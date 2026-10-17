import { useState } from 'react';
import {
  Award,
  Users,
  Zap,
  Shield,
  CheckCircle2,
  MapPin,
  Sparkles,
  Clock,
  Sliders,
  Tv,
  ArrowRight,
  MessageCircle
} from 'lucide-react';

interface EventType {
  id: string;
  label: string;
  title: string;
  description: string;
  specs: string;
  image: string;
  badge: string;
}

const eventTypes: EventType[] = [
  {
    id: 'wedding',
    label: 'Weddings & Sangeet',
    title: 'Royal Stage & Phera Backdrops',
    description: 'Immersive P3 LED walls tailored for grand wedding entries, live sangeet visuals, and varmala backdrops with crystal clarity.',
    specs: 'P3 / P4 Outdoor LED · High Refresh Rate · Line-Array Audio',
    image: 'https://res.cloudinary.com/dcfouzaii/image/upload/f_auto,q_auto,w_900/v1763360996/IMG_4793_gxxuqc.jpg',
    badge: 'Most Popular for NCR Weddings'
  },
  {
    id: 'corporate',
    label: 'Corporate Summits',
    title: 'Executive Conferences & Product Launches',
    description: 'Dual seamless presentation screens, podium AV integration, wireless lapel mics, and zero-latency video switching for leadership meets.',
    specs: 'Seamless 4K Display · Multi-Screen AV · Zero Glitch Backup',
    image: 'https://res.cloudinary.com/dcfouzaii/image/upload/f_auto,q_auto,w_900/v1763361199/IMG_4794_ipv4ds.jpg',
    badge: 'Trusted by Cyber City Enterprises'
  },
  {
    id: 'concert',
    label: 'Live Concerts',
    title: 'High-Brightness Outdoor Stage Screens',
    description: 'Daylight-visible outdoor LED screens with line-array sound towers, DJ booth wraps, and synchronized visual effects for musical crowds.',
    specs: 'Daylight 6500 Nits · Heavy Duty Trussing · Bass Line-Array',
    image: 'https://res.cloudinary.com/dcfouzaii/image/upload/f_auto,q_auto,w_900/v1763472679/IMG_4812_umt7jh.jpg',
    badge: 'Live Shows & Music Festivals'
  },
  {
    id: 'private',
    label: 'Private Galas',
    title: 'Award Nights & Private Celebrations',
    description: 'Custom curved and modular stage setups with dynamic ambient mood lighting, live camera feeds, and crystal-clear presentation audio.',
    specs: 'Custom Modular Sizing · Audio Visual Sync · On-Site Engineer',
    image: 'https://res.cloudinary.com/dcfouzaii/image/upload/f_auto,q_auto,w_900/v1763473380/IMG_5370_eyb8qp.jpg',
    badge: 'Luxury Private Parties'
  }
];

const reasons = [
  {
    title: 'Ultra HD 4K Clarity',
    desc: 'P2.9, P3 & P4 high-refresh rate displays that look crisp to guests and flicker-free on cameras.'
  },
  {
    title: '2-Hour Early Setup',
    desc: 'Our certified engineers deliver and test all visual and audio feeds 3 hours before guests arrive.'
  },
  {
    title: 'Full Redundant Backup',
    desc: 'Standby video processors, power distribution, and backup cabling on site for zero downtime.'
  },
  {
    title: 'Complete AV & Sound Rental',
    desc: 'Get LED screens, line array sound, PA systems, stage trussing, and stage lighting under one roof.'
  }
];

const areas = [
  'Cyber City & DLF (Phase 1–5)',
  'Golf Course Road & Extension',
  'MG Road & Ambience Island',
  'Sohna Road & Subhash Chowk',
  'Sector 29 & Leisure Valley',
  'Gwal Pahari & Wedding Farmhouses',
  'Dwarka Expressway (Sec 80–95)',
  'Udyog Vihar & Manesar',
  'Aerocity & South Delhi',
  'Noida & Greater Noida',
  'Faridabad & Delhi NCR'
];

export default function About() {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const activeEvent = eventTypes[activeEventIndex];

  const features = [
    {
      icon: Award,
      title: 'Industry Leaders',
      metric: '500+ Setups',
      description: 'Years of proven expertise in LED display engineering and stage production across Delhi NCR.'
    },
    {
      icon: Users,
      title: 'Dedicated Crew',
      metric: 'On-Site 24/7',
      description: 'Experienced technicians present throughout your entire event to handle feeds and live switching.'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Gear',
      metric: '4K Ultra HD',
      description: 'Latest high-refresh rate LED modules with true-to-life colors and daylight viewing brightness.'
    },
    {
      icon: Shield,
      title: 'Zero Downtime',
      metric: '100% Guaranteed',
      description: 'Dual processors and standby backup systems ensuring seamless performance from start to finish.'
    }
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-black via-[#080b0a] to-black pt-12 pb-10 sm:pt-16 sm:pb-12">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-yellow-500/[0.06] blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-amber-500/[0.05] blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-yellow-400" />
            About Tisha LED Walls
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Elevating Events with{' '}
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Premier LED &amp; AV Setups
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-300 sm:text-lg">
            We are Gurgaon and Delhi NCR's premier event technology partner, delivering ultra-high-definition LED screens, stage backdrops, and complete audio visual rental services for unforgettable moments.
          </p>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center mb-12 sm:mb-14">
          {/* Left Column: Why Choose Highlights (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
                The Tisha Advantage
              </span>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
                Why Event Planners &amp; Families Choose Us
              </h3>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-gray-300">
              From intimate ring ceremonies to 500+ delegate leadership summits, we don't just rent screens — we manage the complete visual experience with precision timing and technical perfection.
            </p>

            {/* Checklist of Core Strengths */}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 pt-2">
              {reasons.map((reason, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-yellow-400/40 hover:bg-white/[0.06]"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white">{reason.title}</h4>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-gray-400">{reason.desc}</p>
                </div>
              ))}
            </div>

            {/* Areas We Serve Interactive Pills */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.03] via-yellow-400/[0.02] to-transparent p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-yellow-400">
                  <MapPin className="h-4 w-4 text-yellow-400" />
                  <span>Prime Gurugram &amp; NCR Locations</span>
                </div>
                <span className="text-[11px] font-medium text-emerald-400/90">● On-Site Setup &amp; AV Crew</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {areas.map((area, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-gray-300 transition-all duration-200 hover:border-yellow-400/60 hover:bg-yellow-400/10 hover:text-yellow-200 hover:scale-105 cursor-default"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Event Stage Showcase Card (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl border border-yellow-500/30 bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-black p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl">
              {/* Event Type Interactive Switcher Tabs */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 mb-5">
                {eventTypes.map((evt, idx) => (
                  <button
                    key={evt.id}
                    type="button"
                    onClick={() => setActiveEventIndex(idx)}
                    className={`rounded-xl px-2.5 py-2 text-xs font-semibold transition-all duration-300 text-center ${activeEventIndex === idx
                      ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold shadow-[0_0_15px_rgba(250,204,21,0.35)]'
                      : 'border border-white/10 bg-white/[0.03] text-gray-400 hover:border-yellow-400/40 hover:text-white'
                      }`}
                  >
                    {evt.label}
                  </button>
                ))}
              </div>

              {/* Dynamic Visual Stage Screen */}
              <div className="group relative isolate overflow-hidden rounded-2xl border border-white/15 aspect-[16/10] sm:aspect-[16/9]">
                <img
                  src={activeEvent.image}
                  alt={activeEvent.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Ambient vignette gradients */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-400/30 bg-black/60 px-3 py-1 text-xs font-bold text-yellow-300 backdrop-blur-md">
                    <Sparkles className="h-3 w-3 text-yellow-400" />
                    {activeEvent.badge}
                  </span>

                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-500/20 px-2.5 py-1 text-[11px] font-semibold text-emerald-300 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Setup
                  </span>
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <h4 className="text-lg font-bold text-white sm:text-xl leading-snug">
                    {activeEvent.title}
                  </h4>
                  <p className="mt-1 text-xs text-gray-300 line-clamp-2">
                    {activeEvent.description}
                  </p>
                </div>
              </div>

              {/* Specs & Booking Strip */}
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-white/10 pt-4">
                <div className="text-xs text-gray-300">
                  <span className="font-semibold text-yellow-400">Setup Specs: </span>
                  <span>{activeEvent.specs}</span>
                </div>

                <a
                  href={`https://wa.me/917703948857?text=${encodeURIComponent(
                    `Hi Tisha LED Walls, I am planning a "${activeEvent.label}" in Gurgaon/NCR and would like a quote and availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-4 py-2 text-xs font-bold text-black shadow-[0_0_15px_rgba(250,204,21,0.3)] transition hover:scale-105 shrink-0"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>Enquire on WhatsApp</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Metric Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-[0_15px_35px_rgba(250,204,21,0.1)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-black shadow-md transition group-hover:scale-110">
                    <Icon className="h-6 w-6 text-black" />
                  </div>
                  <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-2.5 py-0.5 text-xs font-bold text-yellow-300">
                    {feature.metric}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white group-hover:text-yellow-200 transition">
                  {feature.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

