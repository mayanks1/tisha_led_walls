import { useEffect, useRef, useState } from 'react';
import { Monitor, Heart, Briefcase, Music, PartyPopper, Building2, Check, Zap } from 'lucide-react';

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold });
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Services() {
  const { ref, inView } = useInView();

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
      description: 'LED Screen on rent',
      price: 'Book Now',
      badge: 'Most Popular',
    },
    {
      img: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1776421304/Sound_system_on_rent_zqtd1u.png',
      description: 'Sound System on rent',
      price: 'Book Now',
      badge: null,
    },
    {
      img: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1776421306/pa_system_on_rent_crlkuo.png',
      description: 'PA System on rent',
      price: 'Book Now',
      badge: null,
    },
    {
      img: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1776421306/av_system_on_rent_m3zqd8.png',
      description: 'AV System on rent',
      price: 'Book Now',
      badge: null,
    },
    {
      img: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1776421303/projector_on_rent_f3w2tk.png',
      description: 'Projector on rent',
      price: 'Book Now',
      badge: null,
    },
    {
      img: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1776422241/PLASMA_TV_uregnc.jpg',
      description: 'LED TV on rent',
      price: 'Book Now',
      badge: null,
    },
    {
      img: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1776422240/stage_on_rent_rl6yc0.jpg',
      description: 'Stage on rent',
      price: 'Book Now',
      badge: null,
    },
  ];

  const eventTypes = [
    { icon: Heart, name: 'Weddings', gradient: 'linear-gradient(135deg, #EC4899, #F43F5E)' },
    { icon: Briefcase, name: 'Corporate', gradient: 'linear-gradient(135deg, #3B82F6, #06B6D4)' },
    { icon: Music, name: 'Concerts', gradient: 'linear-gradient(135deg, #8B5CF6, #EC4899)' },
    { icon: PartyPopper, name: 'Parties', gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)' },
    { icon: Building2, name: 'Conferences', gradient: 'linear-gradient(135deg, #10B981, #06B6D4)' },
    { icon: Monitor, name: 'Launches', gradient: 'linear-gradient(135deg, #6366F1, #8B5CF6)' },
  ];

  const rentalIncludes = [
    'Professional installation and setup',
    'High-resolution 4K display quality',
    'On-site technical support',
    'Custom content management',
    'Complete dismantling service',
    'Backup equipment included',
  ];

  return (
    <section
      id="services"
      className="relative py-20 overflow-hidden"
      style={{ background: '#050508' }}
    >
      {/* Ambient orb */}
      <div
        className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)', filter: 'blur(100px)' }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div
          className="text-center mb-16"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease-out' }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold uppercase tracking-widest text-amber-400"
            style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)' }}
          >
            <Zap className="w-3.5 h-3.5" />
            Our Services
          </div>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Flexible Solutions for{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #F59E0B, #FCD34D)' }}
            >
              Every Occasion
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations — we have the perfect setup for you.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4 mb-20">
          {ledSizes.map((item, index) => (
            <button
              key={index}
              id={getServiceId(item.description)}
              type="button"
              onClick={() => handleServiceClick(item.description)}
              aria-label={`Book ${item.description}`}
              className="group relative w-full text-left rounded-2xl overflow-hidden cursor-pointer scroll-mt-24"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease-out ${0.05 * index}s`,
              }}
            >
              {/* Popular badge */}
              {item.badge && (
                <div
                  className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full text-[10px] font-bold text-black"
                  style={{ background: 'linear-gradient(135deg, #F59E0B, #FCD34D)' }}
                >
                  {item.badge}
                </div>
              )}

              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.img.replace('/upload/', '/upload/f_auto,q_auto,w_600/')}
                  alt={item.description}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                {/* Image overlay on hover */}
                {/* <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(245,158,11,0.4) 0%, transparent 60%)' }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div
                    className="px-5 py-2 rounded-full font-bold text-black text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                    style={{ background: 'linear-gradient(135deg, #F59E0B, #FCD34D)' }}
                  >
                    Book Now →
                  </div>
                </div> */}
              </div>

              {/* Card content */}
              <div className="p-4">
                <p className="text-sm md:text-base font-medium text-white mb-3 leading-snug group-hover:text-amber-300 transition-colors">
                  {item.description}
                </p>
                <div
                  className="flex items-center justify-between pt-3"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <span className="text-amber-400 text-sm font-bold">{item.price}</span>
                  {/* <span className="text-xs text-gray-600 group-hover:text-amber-500/60 transition-colors">via WhatsApp →</span> */}
                </div>
              </div>

              {/* Border glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(245,158,11,0.5)' }}
              />
            </button>
          ))}
        </div>

        {/* Pricing disclaimer */}
        <p className="text-center text-gray-600 -mt-14 mb-20 text-xs">
          *Prices vary based on duration, location, and additional requirements. Contact us for a detailed quote.
        </p>

        {/* Events We Serve */}
        <div
          className="mb-20"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease-out 0.3s' }}
        >
          <h3
            className="text-2xl font-bold text-white text-center mb-10"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Events We{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F59E0B, #FCD34D)' }}>
              Serve
            </span>
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {eventTypes.map((event, index) => {
              const Icon = event.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center gap-3 p-5 rounded-2xl cursor-default transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px) scale(1.03)';
                    (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(245,158,11,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0) scale(1)';
                    (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(255,255,255,0.07)';
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: event.gradient }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white text-xs font-semibold text-center leading-tight">{event.name}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* What's Included */}
        <div
          className="relative rounded-3xl overflow-hidden p-8 md:p-12"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(245,158,11,0.2)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease-out 0.4s',
          }}
        >
          {/* Top glow */}
          <div
            className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.1) 0%, transparent 70%)' }}
          />

          <h3
            className="text-2xl md:text-3xl font-bold text-white text-center mb-10 relative z-10"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            What's Included in{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F59E0B, #FCD34D)' }}>
              Every Rental
            </span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
            {rentalIncludes.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(245,158,11,0.05)';
                  (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(245,158,11,0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.02)';
                  (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(255,255,255,0.05)';
                }}
              >
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center mt-0.5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, #F59E0B, #FCD34D)' }}
                >
                  <Check className="w-4 h-4 text-black font-bold" strokeWidth={3} />
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
