import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya & Rahul Sharma',
    role: 'Wedding Clients',
    initials: 'PR',
    gradient: 'linear-gradient(135deg, #EC4899, #F43F5E)',
    rating: 5,
    text: 'Tisha LED Walls transformed our wedding into a magical experience! The LED display was stunning, and the team was professional and attentive to every detail. Highly recommended!',
  },
  {
    name: 'Amit Patel',
    role: 'Corporate Event Manager',
    initials: 'AP',
    gradient: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
    rating: 5,
    text: 'Outstanding service for our product launch! The 4K quality was impressive, and the technical support throughout the event was exceptional. Will definitely book again.',
  },
  {
    name: 'Sneha Desai',
    role: 'Birthday Party Host',
    initials: 'SD',
    gradient: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
    rating: 5,
    text: 'Made my daughter\'s birthday party unforgettable! The LED wall added such a wow factor. Easy to work with and very professional. Thank you, Tisha LED Walls!',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Conference Organizer',
    initials: 'RK',
    gradient: 'linear-gradient(135deg, #10B981, #06B6D4)',
    rating: 5,
    text: 'Perfect setup for our annual conference. Crystal clear visuals, seamless installation, and excellent customer service. The backup equipment policy gave us peace of mind.',
  },
  {
    name: 'Meera & Vikram',
    role: 'Wedding Clients',
    initials: 'MV',
    gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
    rating: 5,
    text: 'The LED wall created the perfect backdrop for our wedding reception. Guests were amazed by the visual quality. Team Tisha made everything so smooth and stress-free!',
  },
  {
    name: 'Sanjay Mehta',
    role: 'Event Planner',
    initials: 'SM',
    gradient: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
    rating: 5,
    text: 'As an event planner, I\'ve worked with many LED rental companies. Tisha LED Walls stands out for their reliability, quality equipment, and exceptional service. My go-to choice!',
  },
];

function useAnimatedCounter(target: number, duration = 2000, start = false, decimals = 0) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const raw = eased * target;
      setCount(decimals > 0 ? Math.round(raw * 10) / 10 : Math.floor(raw));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration, decimals]);
  return count;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [counterStarted, setCounterStarted] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  const clientCount = useAnimatedCounter(500, 2000, counterStarted);
  const googleRating = useAnimatedCounter(49, 2000, counterStarted);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        setTimeout(() => setCounterStarted(true), 400);
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goTo = (index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setAnimating(false);
    }, 200);
  };

  const showPrevious = () => goTo(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);
  const showNext = () => goTo((activeIndex + 1) % testimonials.length);

  // Auto-rotate
  useEffect(() => {
    const rotation = setInterval(() => {
      goTo((activeIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(rotation);
  }, [activeIndex]);

  const active = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050508 0%, #080810 50%, #050508 100%)' }}
    >
      {/* Ambient orb */}
      <div
        className="absolute top-1/2 right-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)', filter: 'blur(100px)' }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div
          className="text-center mb-14"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease-out' }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold uppercase tracking-widest text-amber-400"
            style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)' }}
          >
            Testimonials
          </div>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            What Our{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F59E0B, #FCD34D)' }}>
              Clients Say
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from our satisfied clients.
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          className="relative max-w-4xl mx-auto mb-14"
          style={{ opacity: inView ? 1 : 0, transition: 'all 0.7s ease-out 0.2s' }}
          aria-live="polite"
        >
          {/* Background Quote */}
          <Quote
            className="absolute -top-6 -left-4 md:-left-8 text-amber-500/5 pointer-events-none"
            style={{ width: '120px', height: '120px' }}
          />

          <div
            className="relative rounded-3xl p-7 md:p-12 overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(245,158,11,0.15)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Inner top glow */}
            <div
              className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.07) 0%, transparent 70%)' }}
            />

            {/* Author */}
            <div className="flex items-start justify-between gap-4 mb-8 relative z-10">
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ background: active.gradient }}
                >
                  {active.initials}
                </div>
                <div>
                  <h4
                    className="text-white font-bold text-lg md:text-xl"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {active.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{active.role}</p>
                </div>
              </div>
              <Quote className="w-8 h-8 md:w-12 md:h-12 text-amber-500/20 flex-shrink-0" />
            </div>

            {/* Stars */}
            <div className="flex gap-1.5 mb-6 relative z-10">
              {[...Array(active.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Text */}
            <p
              className="text-gray-200 text-lg md:text-2xl leading-relaxed relative z-10 min-h-[7rem] md:min-h-[6rem]"
              style={{
                opacity: animating ? 0 : 1,
                transform: animating ? 'translateY(8px)' : 'translateY(0)',
                transition: 'all 0.2s ease',
              }}
            >
              &ldquo;{active.text}&rdquo;
            </p>

            {/* Controls */}
            <div className="flex items-center justify-between mt-10 relative z-10">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  borderColor: 'rgba(245,158,11,0.3)',
                  color: '#FCD34D',
                  background: 'rgba(245,158,11,0.04)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(135deg, #F59E0B, #FCD34D)';
                  (e.currentTarget as HTMLButtonElement).style.color = '#000';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'transparent';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(245,158,11,0.04)';
                  (e.currentTarget as HTMLButtonElement).style.color = '#FCD34D';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(245,158,11,0.3)';
                }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dot navigation */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Testimonial ${index + 1}`}
                    className="rounded-full transition-all duration-300"
                    style={{
                      height: '6px',
                      width: index === activeIndex ? '28px' : '6px',
                      background: index === activeIndex
                        ? 'linear-gradient(135deg, #F59E0B, #FCD34D)'
                        : 'rgba(245,158,11,0.25)',
                    }}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  borderColor: 'rgba(245,158,11,0.3)',
                  color: '#FCD34D',
                  background: 'rgba(245,158,11,0.04)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(135deg, #F59E0B, #FCD34D)';
                  (e.currentTarget as HTMLButtonElement).style.color = '#000';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'transparent';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(245,158,11,0.04)';
                  (e.currentTarget as HTMLButtonElement).style.color = '#FCD34D';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(245,158,11,0.3)';
                }}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Animated Stats Bar */}
        <div
          className="flex items-center justify-center gap-0"
          style={{ opacity: inView ? 1 : 0, transition: 'all 0.7s ease-out 0.5s' }}
        >
          <div
            className="flex items-stretch rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(245,158,11,0.15)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {[
              { value: `${clientCount}+`, label: 'Happy Clients' },
              { value: '4.9/5', label: 'Average Rating' },
              { value: `${(googleRating / 10).toFixed(1)}★`, label: 'Google Rating' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center">
                {i > 0 && <div className="w-px h-10 self-center" style={{ background: 'rgba(245,158,11,0.15)' }} />}
                <div className="px-8 py-5 text-center">
                  <div
                    className="font-black text-2xl md:text-3xl text-transparent bg-clip-text"
                    style={{ backgroundImage: 'linear-gradient(135deg, #F59E0B, #FCD34D)', fontFamily: 'Outfit, sans-serif' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-xs md:text-sm mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
