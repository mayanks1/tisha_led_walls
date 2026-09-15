import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

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

export default function Contact() {
  const { ref, inView } = useInView();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917703948857?text=Hi%20Tisha%20LED%20Walls%2C%20I%20want%20to%20book%20an%20LED%20wall.', '_blank');
  };

  const contactItems = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 77039 48857',
      href: 'tel:+917703948857',
      gradient: 'linear-gradient(135deg, #10B981, #06B6D4)',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Click to chat with us',
      href: 'https://wa.me/917703948857?text=Hi%20Tisha%20LED%20Walls%2C%20I%20want%20to%20book%20an%20LED%20wall.',
      gradient: 'linear-gradient(135deg, #25D366, #128C7E)',
      isButton: true,
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'tishaledwalls@gmail.com',
      href: 'mailto:tishaledwalls@gmail.com',
      gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
    },
    {
      icon: MapPin,
      label: 'Service Areas',
      value: 'Gurgaon · Delhi · Noida · Delhi NCR',
      href: null,
      gradient: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: '24/7 Support · Response within 2 hours',
      href: null,
      gradient: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden"
      style={{ background: '#050508' }}
    >
      {/* Ambient orbs */}
      <div
        className="absolute top-1/4 left-1/2 w-[600px] h-[600px] rounded-full pointer-events-none -translate-x-1/2"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)', filter: 'blur(100px)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)', filter: 'blur(100px)' }}
      />

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div
          className="text-center mb-14"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease-out' }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold uppercase tracking-widest text-amber-400"
            style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)' }}
          >
            Get In Touch
          </div>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Let's Make Your Event{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F59E0B, #FCD34D)' }}>
              Extraordinary
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to elevate your event? Get in touch with us for a personalized quote.
          </p>
        </div>

        {/* Contact cards grid */}
        <div
          className="grid sm:grid-cols-2 gap-4 mb-8"
          style={{ opacity: inView ? 1 : 0, transition: 'all 0.7s ease-out 0.2s' }}
        >
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const isButton = item.isButton;
            const content = (
              <>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: item.gradient }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-0.5">{item.label}</div>
                  <div className="text-white font-medium text-sm md:text-base truncate group-hover:text-amber-300 transition-colors">
                    {item.value}
                  </div>
                </div>
                {(item.href || isButton) && (
                  <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-amber-400 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0" />
                )}
              </>
            );

            const sharedStyle = {
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.5s ease-out ${index * 0.07}s`,
            };

            const sharedClass = 'group flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 text-left w-full';

            if (isButton || item.href) {
              return (
                <a
                  key={index}
                  href={item.href || '#'}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={sharedClass}
                  style={sharedStyle}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.border = '1px solid rgba(245,158,11,0.3)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(245,158,11,0.04)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.07)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.025)';
                  }}
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={index}
                className={sharedClass}
                style={sharedStyle}
              >
                {content}
              </div>
            );
          })}
        </div>

        {/* Main WhatsApp CTA */}
        <div
          style={{ opacity: inView ? 1 : 0, transition: 'all 0.7s ease-out 0.4s' }}
        >
          <button
            onClick={handleWhatsAppClick}
            id="contact-whatsapp-cta"
            className="group relative w-full flex items-center justify-center gap-4 px-8 py-6 font-bold text-black text-xl rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              boxShadow: '0 0 0 rgba(37,211,102,0)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 60px rgba(37,211,102,0.5), 0 0 120px rgba(37,211,102,0.2)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 0 rgba(37,211,102,0)';
            }}
          >
            {/* Shimmer */}
            <span className="absolute inset-0 bg-white/20 -translate-x-full skew-x-[-15deg] group-hover:translate-x-[300%] transition-transform duration-700" />

            {/* Ping rings */}
            <div className="relative flex-shrink-0">
              <MessageCircle className="w-7 h-7 relative z-10" />
              <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" style={{ animationDuration: '1.5s' }} />
            </div>

            <span className="relative z-10">Quick Chat on WhatsApp</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
