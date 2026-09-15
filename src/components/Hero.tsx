import { useEffect, useRef, useState } from 'react';
import { MessageCircle, ChevronDown, Sparkles } from 'lucide-react';

const TYPEWRITER_WORDS = ['Weddings', 'Corporate Events', 'Concerts', 'Celebrations', 'Product Launches'];

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

function useAnimatedCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

export default function Hero() {
  const typewriterText = useTypewriter(TYPEWRITER_WORDS);
  const [counterStarted, setCounterStarted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const eventsCount = useAnimatedCounter(500, 2000, counterStarted);
  const satisfactionCount = useAnimatedCounter(98, 2000, counterStarted);

  useEffect(() => {
    const timer = setTimeout(() => setCounterStarted(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917703948857?text=Hi%20Tisha%20LED%20Walls%2C%20I%20want%20to%20book%20an%20LED%20wall.', '_blank');
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#050508' }}
    >
      {/* Background image with cinematic overlay */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dcfouzaii/image/upload/f_auto,q_auto,w_1600/v1763445163/1_rydru9.jpg"
          alt="LED wall lighting up a live event stage"
          className="h-full w-full object-cover opacity-40"
          fetchPriority="high"
          decoding="async"
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(5,5,8,0.6) 0%, rgba(5,5,8,0.3) 40%, rgba(5,5,8,0.7) 80%, rgba(5,5,8,1) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(5,5,8,0.8) 0%, transparent 50%, rgba(5,5,8,0.6) 100%)' }} />
      </div>

      {/* Ambient Orbs */}
      <div
        className="absolute top-[15%] left-[8%] w-80 h-80 rounded-full pointer-events-none animate-orbDrift"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.25) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute bottom-[20%] right-[5%] w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'orbDrift 12s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute top-[50%] right-[30%] w-48 h-48 rounded-full pointer-events-none animate-float"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fadeIn"
          style={{
            background: 'rgba(245,158,11,0.08)',
            border: '1px solid rgba(245,158,11,0.3)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.2em]">Premium LED Solutions · Delhi NCR</span>
        </div>

        {/* Headline */}
        <h1
          className="font-bold text-white leading-none mb-6"
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(2rem, 6vw, 5rem)',
            animation: 'slideUp 0.7s ease-out forwards',
          }}
        >
          <span className="block">Transform Your</span>
          <span
            className="block text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(135deg, #F59E0B, #FCD34D, #F59E0B)',
              backgroundSize: '200% auto',
              animation: 'shimmer 3s linear infinite',
            }}
          >
            Events with LED Screen
          </span>
        </h1>

        {/* Typewriter subtitle */}
        <div
          className="flex items-center justify-center gap-3 mb-4 text-xl md:text-3xl font-medium"
          style={{ animation: 'slideUp 0.7s ease-out 0.2s both', fontFamily: 'Outfit, sans-serif' }}
        >
          <span className="text-gray-400">Perfect for</span>
          <span className="text-white min-w-[200px] text-left">
            {typewriterText}
            <span
              className="inline-block w-0.5 h-[1em] bg-amber-400 ml-1 align-middle"
              style={{ animation: 'cursorBlink 1s step-end infinite' }}
            />
          </span>
        </div>

        {/* Sub description */}
        <p
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ animation: 'slideUp 0.7s ease-out 0.35s both' }}
        >
          State-of-the-art LED wall rentals with 4K clarity, professional setup, and 24/7 support across Gurgaon, Delhi & Noida.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:mb-24"
          style={{ animation: 'slideUp 0.7s ease-out 0.5s both' }}
        >
          <button
            id="hero-book-now-cta"
            onClick={handleWhatsAppClick}
            className="group relative flex items-center gap-3 px-8 py-4 font-bold text-black text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
              boxShadow: '0 0 0 rgba(245,158,11,0)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 50px rgba(245,158,11,0.6), 0 0 100px rgba(245,158,11,0.2)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 0 rgba(245,158,11,0)';
            }}
          >
            {/* Shimmer */}
            <span
              className="absolute inset-0 bg-white/30 -translate-x-full skew-x-[-15deg] group-hover:translate-x-[300%] transition-transform duration-700"
            />
            <MessageCircle className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Book Now on WhatsApp</span>
          </button>

          <a
            href="#gallery"
            id="hero-view-work-link"
            className="flex items-center gap-2 px-8 py-4 font-bold text-amber-300 text-lg rounded-full transition-all duration-300 hover:scale-105"
            style={{
              border: '1.5px solid rgba(245,158,11,0.4)',
              background: 'rgba(245,158,11,0.04)',
              backdropFilter: 'blur(12px)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(245,158,11,0.8)';
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(245,158,11,0.1)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 20px rgba(245,158,11,0.15), inset 0 0 20px rgba(245,158,11,0.05)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(245,158,11,0.4)';
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(245,158,11,0.04)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
            }}
          >
            View Our Work
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto"
          style={{ animation: 'slideUp 0.7s ease-out 0.65s both' }}
        >
          {[
            { value: `${eventsCount}+`, label: 'Events Completed', suffix: '' },
            { value: '24/7', label: 'Support Available', suffix: '' },
            { value: `${satisfactionCount}%`, label: 'Client Satisfaction', suffix: '' },
          ].map((stat, i) => (
            <div
              key={i}
              className="group relative p-4 md:p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 cursor-default"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(245,158,11,0.15)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(245,158,11,0.5)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.4), 0 0 30px rgba(245,158,11,0.1)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(245,158,11,0.15)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
              }}
            >
              {/* Inner glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(245,158,11,0.08) 0%, transparent 70%)' }}
              />
              <div
                className="text-2xl md:text-4xl font-black mb-1 relative z-10"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  backgroundImage: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </div>
              <div className="text-[10px] md:text-sm text-gray-400 font-medium tracking-wide relative z-10">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] text-gray-600 uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="w-4 h-4 text-amber-500/60" />
      </div>
    </section>
  );
}
