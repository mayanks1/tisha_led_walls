import { useEffect, useRef, useState } from 'react';
import { Award, Users, Zap, Shield, MapPin } from 'lucide-react';

function useInView(threshold = 0.15) {
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

export default function About() {
  const { ref, inView } = useInView();

  const features = [
    {
      icon: Award,
      title: 'Industry Leaders',
      description: 'Years of expertise in LED screen technology and event solutions across Delhi NCR.',
      color: 'from-amber-500 to-yellow-400',
      glow: 'rgba(245,158,11,0.3)',
    },
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Dedicated technicians ensuring flawless setup, calibration, and on-site support.',
      color: 'from-cyan-500 to-blue-400',
      glow: 'rgba(6,182,212,0.3)',
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Tech',
      description: 'Latest 4K LED displays delivering breathtaking visual quality for every audience.',
      color: 'from-violet-500 to-purple-400',
      glow: 'rgba(139,92,246,0.3)',
    },
    {
      icon: Shield,
      title: 'Reliable Service',
      description: '24/7 support and backup equipment for absolute peace of mind at your event.',
      color: 'from-emerald-500 to-green-400',
      glow: 'rgba(16,185,129,0.3)',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050508 0%, #080810 50%, #050508 100%)' }}
    >
      {/* Ambient orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div
          className="text-center mb-16"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease-out' }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold uppercase tracking-widest text-amber-400"
            style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)' }}
          >
            About Us
          </div>
          <h2
            className="font-bold text-white mb-6"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Elevating Events with{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #F59E0B, #FCD34D)' }}
            >
              Premium LED Tech
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Tisha LED Walls specializes in state-of-the-art LED screen rentals for all types of events — transforming spaces into immersive visual experiences.
          </p>
        </div>

        {/* Two-column content */}
        <div
          className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-20"
        >
          {/* Text column */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.7s ease-out 0.2s',
            }}
          >
            <h3
              className="text-2xl md:text-3xl font-bold text-white mb-6"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Why Choose Tisha LED Walls?
            </h3>
            <div className="space-y-5 text-gray-400 text-base leading-relaxed">
              <p>
                We pride ourselves on delivering exceptional visual experiences that captivate audiences and elevate every event. Our commitment to quality, reliability, and customer satisfaction sets us apart in the industry.
              </p>
              <p>
                Whether you're hosting a wedding, corporate event, concert, or private celebration, our team works closely with you to ensure your vision comes to life with stunning clarity and impact.
              </p>
            </div>

            {/* Service area pill */}
            <div
              className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-2xl"
              style={{
                background: 'rgba(245,158,11,0.07)',
                border: '1px solid rgba(245,158,11,0.2)',
              }}
            >
              <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <div>
                <span className="text-xs text-amber-400/70 uppercase tracking-wider font-semibold block">Service Areas</span>
                <span className="text-white font-medium">Gurgaon · Delhi · Noida · Delhi NCR</span>
              </div>
            </div>
          </div>

          {/* Stats glass panel */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.7s ease-out 0.35s',
            }}
          >
            <div
              className="relative rounded-3xl p-8 overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(245,158,11,0.2)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
            >
              {/* Inner glow */}
              <div
                className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.12) 0%, transparent 70%)' }}
              />

              <div className="relative z-10">
                <div className="text-5xl mb-4 text-center">🎭</div>
                <h4
                  className="text-xl font-bold text-white text-center mb-3"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Making Every Event Memorable
                </h4>
                <p className="text-gray-400 text-center text-sm mb-8">
                  Cutting-edge technology paired with personalized service — we bring your events to life.
                </p>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-4 pt-6" style={{ borderTop: '1px solid rgba(245,158,11,0.15)' }}>
                  {[
                    { num: '500+', label: 'Events' },
                    { num: '4K', label: 'Ultra HD' },
                    { num: '4.9★', label: 'Rating' },
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <div
                        className="text-xl font-black text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(135deg, #F59E0B, #FCD34D)', fontFamily: 'Outfit, sans-serif' }}
                      >
                        {s.num}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards — bento grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl overflow-hidden cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease-out ${0.1 + index * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border = `1px solid ${feature.glow}`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 48px rgba(0,0,0,0.4), 0 0 40px ${feature.glow.replace('0.3', '0.15')}`;
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Radial inner glow */}
                <div
                  className="absolute top-0 left-0 right-0 h-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${feature.glow.replace('0.3', '0.1')} 0%, transparent 70%)` }}
                />

                <div
                  className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${feature.color.replace('from-', '').split(' ')[0].replace('from-', '')} 0%, transparent 100%)`, backgroundImage: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${feature.color.includes('amber') ? '#F59E0B, #FCD34D' : feature.color.includes('cyan') ? '#06B6D4, #3B82F6' : feature.color.includes('violet') ? '#8B5CF6, #A78BFA' : '#10B981, #34D399'})` }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h4
                  className="text-base font-bold text-white mb-2 relative z-10"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed relative z-10">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
