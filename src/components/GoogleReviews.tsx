import { useEffect, useRef, useState } from 'react';
import { Star, ExternalLink, Shield } from 'lucide-react';

const googleReviewUrl = 'https://share.google/nrqCa0VtP92OsKW56';

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

const reviewSnippets = [
  {
    text: '"Absolutely stunning service! The LED walls transformed our wedding reception. Professional team and exceptional quality."',
    initials: 'RS',
    name: 'Rahul S.',
    color: 'linear-gradient(135deg, #EC4899, #F43F5E)',
    time: '2 weeks ago',
  },
  {
    text: '"Best investment for our corporate event. Tisha LED Walls delivered beyond expectations with 24/7 support throughout."',
    initials: 'AP',
    name: 'Amit P.',
    color: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
    time: '1 month ago',
  },
  {
    text: '"Reliable, professional, and creative. They made our product launch unforgettable with crystal-clear 4K displays."',
    initials: 'SM',
    name: 'Sneha M.',
    color: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
    time: '3 weeks ago',
  },
];

export default function GoogleReviews() {
  const { ref, inView } = useInView();
  const [starsVisible, setStarsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => setStarsVisible(true), 400);
    }
  }, [inView]);

  return (
    <section
      id="reviews"
      className="relative py-20 overflow-hidden"
      style={{ background: '#050508' }}
    >
      {/* Ambient orb */}
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)', filter: 'blur(100px)' }}
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
            Customer Reviews
          </div>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Trusted by Thousands on{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #4285F4, #34A853)' }}
            >
              Google
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Read verified reviews from our satisfied clients and see why we're the top-rated LED wall rental service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">

          {/* Left: Google rating card */}
          <div
            className="relative rounded-3xl p-8 overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(66,133,244,0.25)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.7s ease-out 0.15s',
            }}
          >
            {/* Top glow — google blue */}
            <div
              className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(66,133,244,0.12) 0%, transparent 70%)' }}
            />

            {/* Google header */}
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4285F4" d="M23.52 12.27c0-.78-.07-1.53-.19-2.27H12v4.3h6.48c-.28 1.43-1.12 2.64-2.39 3.44v2.85h3.87c2.27-2.09 3.56-5.18 3.56-8.32z" />
                  <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.87-2.85c-1.07.72-2.45 1.14-4.08 1.14-3.14 0-5.8-2.12-6.75-4.98H1.26v3.06C3.22 21.3 7.29 24 12 24z" />
                  <path fill="#FBBC05" d="M5.25 14.4c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28V6.78H1.26C.45 8.38 0 10.14 0 12s.45 3.62 1.26 5.22l3.99-2.82z" />
                  <path fill="#EA4335" d="M12 4.7c1.76 0 3.34.6 4.58 1.78l3.42-3.42C17.95 1.21 15.23 0 12 0 7.29 0 3.22 2.7 1.26 6.78l3.99 2.83C6.2 6.82 8.86 4.7 12 4.7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl" style={{ fontFamily: 'Outfit, sans-serif' }}>Google Reviews</h3>
                <p className="text-blue-400 text-sm">Verified Customer Ratings</p>
              </div>
            </div>

            {/* Rating display */}
            <div className="flex items-end gap-4 mb-6 relative z-10">
              <div
                className="text-6xl font-black text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #F59E0B, #FCD34D)', fontFamily: 'Outfit, sans-serif' }}
              >
                4.9
              </div>
              <div className="pb-2">
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400 transition-all duration-300"
                      style={{
                        opacity: starsVisible ? 1 : 0,
                        transform: starsVisible ? 'scale(1)' : 'scale(0)',
                        transition: `all 0.3s ease-out ${i * 0.07}s`,
                      }}
                    />
                  ))}
                </div>
                <p className="text-gray-400 text-sm">out of 5 stars · verified reviews</p>
              </div>
            </div>

            {/* Verified badge */}
            <div
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl mb-8 relative z-10"
              style={{ background: 'rgba(52,168,83,0.1)', border: '1px solid rgba(52,168,83,0.25)' }}
            >
              <Shield className="w-4 h-4 text-green-400" />
              <p className="text-gray-300 text-sm">
                Join hundreds of satisfied clients who've experienced exceptional LED wall service.
              </p>
            </div>

            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-full flex items-center justify-center gap-3 px-6 py-3.5 font-bold text-white rounded-xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #4285F4, #34A853)',
                boxShadow: '0 0 0 rgba(66,133,244,0)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 30px rgba(66,133,244,0.5)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 0 rgba(66,133,244,0)';
              }}
            >
              View All Reviews on Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Review cards */}
          <div className="space-y-4">
            {reviewSnippets.map((review, index) => (
              <div
                key={index}
                className="group relative p-5 rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(16px)',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateX(0)' : 'translateX(30px)',
                  transition: `all 0.6s ease-out ${0.2 + index * 0.12}s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(245,158,11,0.3)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Author row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{ background: review.color }}
                    >
                      {review.initials}
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-bold">{review.name}</h4>
                      <p className="text-gray-600 text-xs">{review.time}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed italic">{review.text}</p>

                {/* Google G */}
                <div className="absolute bottom-4 right-4 opacity-10">
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.52 12.27c0-.78-.07-1.53-.19-2.27H12v4.3h6.48c-.28 1.43-1.12 2.64-2.39 3.44v2.85h3.87c2.27-2.09 3.56-5.18 3.56-8.32z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
